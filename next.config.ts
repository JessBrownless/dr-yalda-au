import type { NextConfig } from "next";
import os from "os";
import path from "path";

const nextConfig: NextConfig = {
  distDir: path.join(os.tmpdir(), "dr-yalda-next"),
};

export default nextConfig;
