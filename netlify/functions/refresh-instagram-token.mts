// Scheduled function: keeps the Instagram access token alive.
//
// Instagram long-lived tokens expire after ~60 days but can be refreshed any
// time after they're 24h old, each refresh extending them another 60 days.
// This runs weekly, refreshes the current token, and stores the fresh one in
// Netlify Blobs. The site's read path (src/lib/instagram.ts -> getActiveToken)
// prefers that Blobs value, so the feed never goes stale and no one has to
// manually regenerate a token.
//
// Refreshing needs only the token itself — no app secret.

import type { Config } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

const GRAPH_HOST = "https://graph.instagram.com";
const STORE = "instagram";
const KEY = "access_token";

export default async function handler() {
  const store = getStore(STORE);

  // Use the most recently refreshed token if we have one, else the seed env var.
  const current =
    (await store.get(KEY, { type: "text" })) || process.env.IG_ACCESS_TOKEN;
  if (!current) {
    console.error("[ig-refresh] No token available (Blobs empty, IG_ACCESS_TOKEN unset).");
    return new Response("no token", { status: 500 });
  }

  const url =
    `${GRAPH_HOST}/refresh_access_token` +
    `?grant_type=ig_refresh_token&access_token=${current}`;

  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error(`[ig-refresh] Refresh failed ${res.status}: ${body}`);
    return new Response("refresh failed", { status: 502 });
  }

  const data = await res.json();
  if (!data?.access_token) {
    console.error("[ig-refresh] No access_token in refresh response.");
    return new Response("no token in response", { status: 502 });
  }

  await store.set(KEY, data.access_token, {
    metadata: {
      refreshedAt: new Date().toISOString(),
      expiresIn: data.expires_in,
    },
  });

  const days = Math.round((data.expires_in ?? 0) / 86400);
  console.log(`[ig-refresh] Token refreshed; valid ~${days} days.`);
  return new Response("ok");
}

// Run every Monday at 03:00 UTC — comfortably within the 60-day window.
export const config: Config = {
  schedule: "0 3 * * 1",
};
