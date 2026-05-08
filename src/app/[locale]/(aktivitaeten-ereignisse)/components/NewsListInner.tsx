"use client";
import { useTranslation } from "@/i18n/useTranslation";
import news from "@/app/data/news";
import NewsCard from "./NewsCard";
import styles from "./NewsCard.module.css";

function NewsListInner() {
  const { locale } = useTranslation();
  const sorted = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="rts-blog-list-area rts-section-gapBottom">
      <div className="container">
        <div className={styles.grid}>
          {sorted.map((item, index) => (
            <NewsCard
              key={item.id}
              item={item}
              locale={locale}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsListInner;
