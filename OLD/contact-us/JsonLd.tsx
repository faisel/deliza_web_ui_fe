/**
 * Renders structured data (JSON-LD) inside a <script> tag.
 * Server component - safe for static export.
 */
interface JsonLdProps {
  id?: string;
  data: unknown;
}

export default function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
