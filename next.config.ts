import type { NextConfig } from "next";

// Dev and build use SEPARATE build dirs so that running `next build` can't
// overwrite a live `next dev` server's chunks/manifests mid-flight — that
// collision made the running page 404 its CSS/JS. `next start` runs with
// NODE_ENV=production, so it reads `.next`, the same dir `next build` writes.
// Both dirs are gitignored.
//
// NOTE: Next.js resolves `distDir` relative to the project root and ignores a
// leading slash, so an absolute path (e.g. os.tmpdir()) does NOT move output
// outside the project — it just nests it under the repo. Keep these relative.
const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
