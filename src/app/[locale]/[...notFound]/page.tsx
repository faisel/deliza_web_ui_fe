import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ notFound: ["404"] }];
}

export default function CatchAllNotFound() {
  notFound();
}
