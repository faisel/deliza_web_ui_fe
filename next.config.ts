import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /**
   * Build-only static export to `out/` for S3 hosting. In dev we leave this
   * unset so unknown URLs (e.g. legacy unlocalized paths) hit the layout's
   * `notFound()` instead of crashing on the strict generateStaticParams check.
   */
  output: isProd ? "export" : undefined,
  /** S3 website endpoints map cleaner to `.../index.html` per folder. */
  trailingSlash: true,
  /** Required for static export if you use `next/image`; safe default for S3. */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
