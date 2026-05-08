import type { Locale } from "@/i18n/config";
import type { NavKey } from "@/i18n/routing";
import { buildPageGraph } from "@/lib/jsonld";
import JsonLd from "./JsonLd";

interface PageSchemaProps {
  nav: NavKey;
  locale: Locale;
}

/**
 * Server component that emits the full schema.org @graph for an active page.
 * Pre-rendered at build time for static export.
 */
export default function PageSchema({ nav, locale }: PageSchemaProps) {
  return <JsonLd id={`schema-${nav}-${locale}`} data={buildPageGraph(nav, locale)} />;
}
