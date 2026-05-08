"use client";
import Link from "@/i18n/LocalizedLink";
import Image from "next/image";
import { localizePath } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";
import type { NewsItem } from "@/app/data/news";

interface NewsCardProps {
  item: NewsItem;
  locale: Locale;
  readMoreLabel: string;
}

const localeTags: Record<Locale, string> = {
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  it: "it-IT",
};

function formatDate(date: string, locale: Locale): string {
  try {
    return new Date(date).toLocaleDateString(localeTags[locale], {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

function NewsCard({ item, locale, readMoreLabel }: NewsCardProps) {
  const t = item.translations[locale];

  const renderLink = (
    children: React.ReactNode,
    extraClassName?: string
  ) => {
    if (item.externalUrl) {
      return (
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={extraClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={localizePath(`/news-events/${item.slug}`, locale)}
        className={extraClassName}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="single-blog-area-one column-reverse">
      <p>
        <span>{formatDate(item.date, locale)}</span>
      </p>

      {renderLink(<h4 className="title">{t.title}</h4>)}

      <p className="disc">{t.teaser}</p>

      <div className="bottom-details">
        {renderLink(
          <Image
              src={item.image}
              alt={t.title}
              width={800}
              height={600}
          />,
          "thumbnail"
        )}
      </div>

      <div className="mt--20">
        {renderLink(readMoreLabel, "rts-btn btn-primary")}
      </div>
    </div>
  );
}

export default NewsCard;
