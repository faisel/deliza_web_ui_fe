"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { navHref } from "@/i18n/routing";

export default function NotFoundInner() {
  const { messages, locale } = useTranslation();
  const copy = messages.notFound;

  return (
    <div className="rts-coming-soon-area rts-section-gap d-flex align-items-center h-100-vh">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-not-found-main">
              <h1 className="title">{copy.code}</h1>
              <h3 className="para">{copy.heading}</h3>
              <p>{copy.description}</p>
              <Link href={navHref("home", locale)} className="rts-btn btn-primary">
                {copy.backHome}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
