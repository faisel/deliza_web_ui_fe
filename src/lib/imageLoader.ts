const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return src.startsWith("/") ? `${BASE_PATH}${src}` : src;
}
