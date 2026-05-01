import Link from "next/link";
import { defaultLocale } from "@/i18n/config";

const target = `/${defaultLocale}/`;

export const metadata = {
  title: "Deliza",
  description: "Deliza",
  robots: { index: false, follow: false },
  alternates: { canonical: target },
};

/**
 * Static export root entry. Server-side redirects aren't available with
 * `output: "export"`, so we ship a meta refresh + a tiny client redirect
 * and a fallback link for users without JS.
 */
export default function RootRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <link rel="canonical" href={target} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
      <noscript>
        <p>
          <Link href={target}>Deliza</Link>
        </p>
      </noscript>
    </>
  );
}
