"use client";

import { useTranslation } from "@/i18n/useTranslation";

/**
 * Locale-aware breadcrumb hero for the news index page.
 * Uses messages.seo.pages.news for copy.
 */
export default function NewsBreadcrumb() {
  const { messages } = useTranslation();
  const page = messages.seo.pages.news;

  return (
    <div className="rts-breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-left center">
              {page.eyebrow && <span className="pre">{page.eyebrow}</span>}
              {page.bgTitle && <span className="bg-title">{page.bgTitle}</span>}
              <h1 className="title rts-text-anime-style-1">{page.h1}</h1>
              {page.heroDescription && (
                <p className="disc">{page.heroDescription}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img src="/assets/images/about/shape/01.png" alt="" className="one" />
        <img src="/assets/images/about/shape/02.png" alt="" className="two" />
        <img src="/assets/images/about/shape/03.png" alt="" className="three" />
      </div>
    </div>
  );
}
