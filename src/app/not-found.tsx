import Link from "next/link";
import { defaultLocale } from "@/i18n/config";

export const metadata = {
  title: "404 – Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="rts-coming-soon-area rts-section-gap d-flex align-items-center h-100-vh">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-not-found-main">
              <h1 className="title">404</h1>
              <h3 className="para">Page Not Found</h3>
              <p>
                Sorry, the page you are looking for has been moved, redirected
                or removed.
              </p>
              <Link href={`/${defaultLocale}/`} className="rts-btn btn-primary">
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
