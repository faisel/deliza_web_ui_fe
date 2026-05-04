import news from "@/app/data/news";
import NewsDetailsClient from "./NewsDetailsClient";

export function generateStaticParams() {
  // Only internal news items get a detail page; external links are skipped.
  return news
    .filter((item) => !item.externalUrl)
    .map((item) => ({ slug: item.slug }));
}

export default function NewsDetailsPage() {
  return <NewsDetailsClient />;
}
