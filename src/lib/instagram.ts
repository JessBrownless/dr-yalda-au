// Instagram feed via the Instagram API with Instagram Login (graph.instagram.com).
// The legacy Instagram Basic Display API was deprecated by Meta in December 2024;
// this is the supported path for a Business/Creator account.
//
// Required env var (see .env.example and docs/instagram-setup.md):
//   IG_ACCESS_TOKEN  — a long-lived Instagram user token (instagram_business_basic
//                      scope). Resolves to her account via the `me` endpoint.
//
// Long-lived tokens last ~60 days and can be refreshed; see
// refreshInstagramToken() and the scheduled Netlify function that calls it.
//
// The fetch is cached for 30 minutes via Next's `revalidate`, so on Netlify
// new posts appear without a redeploy while staying within API rate limits.

export type IgPost = {
  id: string;
  permalink: string;
  imageUrl: string;
  caption: string;
};

const GRAPH_HOST = "https://graph.instagram.com";
const GRAPH_VERSION = "v21.0";
const REVALIDATE_SECONDS = 1800; // 30 minutes

export async function fetchInstagramPosts(limit = 6): Promise<IgPost[]> {
  const token = process.env.IG_ACCESS_TOKEN;

  // No token configured (e.g. local dev without secrets) — the caller falls
  // back to static images so the section still renders.
  if (!token) return [];

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
  const url =
    `${GRAPH_HOST}/${GRAPH_VERSION}/me/media` +
    `?fields=${fields}&limit=${limit}&access_token=${token}`;

  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) {
      console.error(
        `[instagram] API ${res.status}: ${await res.text().catch(() => "")}`
      );
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data?.data)) return [];

    return data.data
      .map(
        (m: {
          id: string;
          permalink: string;
          media_type: string;
          media_url?: string;
          thumbnail_url?: string;
          caption?: string;
        }): IgPost => ({
          id: m.id,
          permalink: m.permalink,
          // Videos/Reels don't return a still in media_url — use the thumbnail.
          imageUrl: m.media_type === "VIDEO" ? m.thumbnail_url ?? "" : m.media_url ?? "",
          caption: (m.caption ?? "").trim(),
        })
      )
      .filter((p: IgPost) => p.imageUrl)
      .slice(0, limit);
  } catch (err) {
    console.error("[instagram] fetch failed:", err);
    return [];
  }
}

// Refreshes a long-lived Instagram token, returning a new token (valid ~60 days)
// or null on failure. Tokens must be at least 24 hours old to refresh. Used by
// the scheduled Netlify function so the feed never goes stale.
export async function refreshInstagramToken(
  token: string
): Promise<{ accessToken: string; expiresIn: number } | null> {
  const url =
    `${GRAPH_HOST}/refresh_access_token` +
    `?grant_type=ig_refresh_token&access_token=${token}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      console.error(
        `[instagram] refresh ${res.status}: ${await res.text().catch(() => "")}`
      );
      return null;
    }
    const data = await res.json();
    if (!data?.access_token) return null;
    return { accessToken: data.access_token, expiresIn: data.expires_in };
  } catch (err) {
    console.error("[instagram] refresh failed:", err);
    return null;
  }
}
