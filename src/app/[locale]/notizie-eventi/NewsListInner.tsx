"use client";
import { useTranslation } from "@/i18n/useTranslation";
import news from "@/app/data/news";
import NewsCard from "./NewsCard";

function NewsListInner() {
  const { locale, messages } = useTranslation();
  const sorted = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="rts-blog-list-area rts-section-gapBottom">
      <div className="container">
        <div className="row g-5">
          <div className="col-12">
            <div className="row g-5">
              {sorted.map((item, index) => (
                <div
                  key={item.id}
                  className="col-lg-6 col-md-6 col-sm-12"
                  data-animation="fadeInUp"
                  data-delay={`0.${index}`}
                >
                  <NewsCard
                    item={item}
                    locale={locale}
                    readMoreLabel={messages.common.buttons.readMore}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsListInner;
