import posts from "../../data/data-post.json";
import BlogDetailsPageClient from "./BlogDetailsPageClient";

type PostRow = { slug: string };

/** Pre-render every blog slug for `output: 'export'` (S3 static hosting). */
export function generateStaticParams() {
  const seen = new Set<string>();
  const params: { slug: string }[] = [];
  for (const post of posts as PostRow[]) {
    if (seen.has(post.slug)) continue;
    seen.add(post.slug);
    params.push({ slug: post.slug });
  }
  return params;
}

export default function BlogPostPage() {
  return <BlogDetailsPageClient />;
}
