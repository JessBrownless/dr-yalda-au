# Instagram feed setup (Meta Graph API)

The website's Instagram section pulls Dr Yalda's real posts live via the Meta
Graph API. This doc is the one-time setup to get the two secrets the site needs:

- `IG_USER_ID` — her Instagram Business Account ID (a long number)
- `IG_ACCESS_TOKEN` — a long-lived access token

> **Why not the old easy way?** Meta deprecated the Instagram Basic Display API
> in December 2024. The Graph API (Instagram account linked to a Facebook Page)
> is the supported path now.

If these two vars are absent or the token expires, the section automatically
falls back to a set of static images — it never breaks.

---

## Prerequisites (check these first)

1. Dr Yalda's Instagram is a **Business** or **Creator** account
   (Instagram app → Settings → Account type). A personal account will not work.
2. That Instagram account is **linked to her Facebook Page**
   (Facebook Page → Settings → Linked accounts → Instagram). You said you have
   access to her business Facebook, so this is where that access is used.

---

## Step 1 — Create a Meta app

1. Go to https://developers.facebook.com/apps → **Create app**.
2. Choose use case **"Other"** → app type **Business**.
3. Name it something like `dr-yalda-website`. Leave it in **Development** mode
   (you do **not** need App Review — see note at the bottom).
4. In the app dashboard, note the **App ID** and **App Secret**
   (Settings → Basic).

## Step 2 — Get a short-lived user token

1. Open the **Graph API Explorer**:
   https://developers.facebook.com/tools/explorer
2. Top-right: select your app (`dr-yalda-website`).
3. Click **Generate Access Token** / **Add permissions** and grant:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`
4. Authorise with the Facebook account that manages her Page.
5. Copy the token shown — this is a short-lived (~1 hour) **user token**.

## Step 3 — Find the Instagram Business Account ID (`IG_USER_ID`)

In the Graph API Explorer, run these GET requests (paste in the path, hit Submit):

1. List the Pages you manage and grab the Page's `id`:
   ```
   me/accounts
   ```
2. Get the linked Instagram account ID from that Page (replace `{PAGE_ID}`):
   ```
   {PAGE_ID}?fields=instagram_business_account
   ```
   The returned `instagram_business_account.id` is your **`IG_USER_ID`**.

## Step 4 — Get a long-lived, non-expiring token (`IG_ACCESS_TOKEN`)

Short-lived tokens die in an hour. Do this to get a durable one. Run in a
terminal (or paste the URL in a browser), filling in your values:

1. Exchange the short-lived user token for a **long-lived user token** (~60 days):
   ```
   https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id={APP_ID}&client_secret={APP_SECRET}&fb_exchange_token={SHORT_LIVED_USER_TOKEN}
   ```
   Copy the `access_token` from the response.

2. Use that long-lived user token to fetch a **Page access token**, which does
   **not expire** as long as permissions aren't revoked:
   ```
   https://graph.facebook.com/v21.0/me/accounts?access_token={LONG_LIVED_USER_TOKEN}
   ```
   Copy the `access_token` for her Page from the response. **This is your
   `IG_ACCESS_TOKEN`** — prefer it over the user token because it doesn't expire.

### Verify it works

```
https://graph.facebook.com/v21.0/{IG_USER_ID}/media?fields=id,caption,media_url,permalink&access_token={IG_ACCESS_TOKEN}
```
You should see a JSON list of her recent posts. If you do, you're done.

---

## Step 5 — Add the secrets

**Local development** — create `.env.local` (already git-ignored):
```
IG_USER_ID=17841400000000000
IG_ACCESS_TOKEN=EAAG...your-page-token
```

**Production (Netlify)** — Site settings → Environment variables → add the same
two keys. Redeploy (or trigger a deploy) so they take effect.

The feed is cached for 30 minutes (`revalidate` in `src/lib/instagram.ts`), so
new posts appear within half an hour without a redeploy.

---

## Notes

- **No App Review needed.** Because the app stays in Development mode and only
  reads the app owner's own Instagram account, you do not need to submit for App
  Review. (Keep the Facebook user who generated the token as an Admin/Developer
  of the app.)
- **If you used a user token instead of a Page token**, it expires every ~60
  days and the section will fall back to static images until refreshed. The Page
  token in Step 4.2 avoids this — strongly recommended.
- Adjust the number of posts shown via the `limit` arg in
  `src/components/InstagramFeed.tsx` (`fetchInstagramPosts(6)`).
