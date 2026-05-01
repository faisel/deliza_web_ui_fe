import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /** Static HTML/CSS/JS in `out/` for S3 static website hosting (no Node server). */
  output: "export",
  /** S3 website endpoints map cleaner to `.../index.html` per folder. */
  trailingSlash: true,
  /** Required for static export if you use `next/image`; safe default for S3. */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
