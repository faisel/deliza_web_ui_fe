"use client";

import { useTranslation } from "@/i18n/useTranslation";
import type { NavKey } from "@/i18n/routing";

interface PageFaqProps {
  nav: NavKey;
  className?: string;
  /** Optional id used to scope the bootstrap accordion. */
  id?: string;
}

/**
 * Visible FAQ section for an active page. Reads questions/answers from the
 * locale message bundle keyed by NavKey. Uses a bootstrap-compatible accordion
 * that ships in the existing CSS bundle.
 *
 * The same FAQ data is also emitted as FAQPage JSON-LD via PageSchema, so this
 * component is purely the user-visible companion.
 */
export default function PageFaq({ nav, className = "rts-section-gapBottom", id }: PageFaqProps) {
  const { messages } = useTranslation();
  const faq = messages.seo.pages[nav]?.faq;
  if (!faq || !faq.items?.length) return null;

  const accordionId = id ?? `faq-${nav}`;

  return (
    <section className={`rts-faq-area ${className}`} aria-labelledby={`${accordionId}-heading`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="title-area-left center mb--40">
              <h2 id={`${accordionId}-heading`} className="title">
                {faq.title}
              </h2>
            </div>
            <div className="accordion faq-wrapper-inner-page" id={accordionId}>
              {faq.items.map((item, index) => {
                const itemId = `${accordionId}-item-${index}`;
                const headingId = `${itemId}-h`;
                const collapseId = `${itemId}-c`;
                const isFirst = index === 0;
                return (
                  <div className="accordion-item" key={itemId}>
                    <h3 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button${isFirst ? "" : " collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? "true" : "false"}
                        aria-controls={collapseId}
                      >
                        {item.q}
                      </button>
                    </h3>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse${isFirst ? " show" : ""}`}
                      aria-labelledby={headingId}
                      data-bs-parent={`#${accordionId}`}
                    >
                      <div className="accordion-body">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
