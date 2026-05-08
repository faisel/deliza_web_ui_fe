import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  /**
   * Build-only static export to `out/` for S3/Apache hosting. In dev we leave
   * this unset so unknown URLs (e.g. legacy unlocalized paths) hit the layout's
   * `notFound()` instead of crashing on the strict generateStaticParams check.
   */
  output: isProd ? "export" : undefined,
  /** S3/Apache map cleaner to `.../index.html` per folder. */
  trailingSlash: true,
  /**
   * Static export requires either `unoptimized: true` or a custom loader.
   * We use a custom loader so basePath/assetPrefix is honoured on subpath
   * deployments (the unoptimized loader returns `src` verbatim).
   */
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
