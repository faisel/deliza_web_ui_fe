import Link from "@/i18n/LocalizedLink";
import { defaultLocale } from "@/i18n/config";
import { BASE_PATH } from "@/lib/asset";

const target = `/${defaultLocale}/`;
const absoluteTarget = `${BASE_PATH}${target}`;

export const metadata = {
  title: "Deliza",
  description: "Deliza",
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteTarget },
};

/**
 * Static export root entry. Server-side redirects aren't available with
 * `output: "export"`, so we ship a meta refresh + a tiny client redirect
 * and a fallback link for users without JS.
 */
export default function RootRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${absoluteTarget}`} />
      <link rel="canonical" href={absoluteTarget} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(absoluteTarget)});`,
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
