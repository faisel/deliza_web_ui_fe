"use client";
import Link from "next/link";
import Image from "next/image";
import { localizePath } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";
import { getNewsSlug, type NewsItem } from "@/app/data/news";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  item: NewsItem;
  locale: Locale;
  /** Set true on the first card so the hero image can be eager-loaded for LCP. */
  priority?: boolean;
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

function NewsCard({ item, locale, priority = false }: NewsCardProps) {
  const t = item.translations[locale];
  const alt = t.alt ?? t.title;

  const isExternal = !!item.externalUrl;
  const href = isExternal
    ? item.externalUrl!
    : localizePath(`/news-events/${getNewsSlug(item, locale)}`, locale);

  const imageEl = (
    <Image
      src={item.image}
      alt={alt}
      fill
      sizes="(max-width: 991px) 100vw, 50vw"
      className={styles.image}
      priority={priority}
    />
  );

  const imageLink = isExternal ? (
    <a
      href={href}
      className={styles.imageLink}
      aria-label={t.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {imageEl}
    </a>
  ) : (
    <Link href={href} className={styles.imageLink} aria-label={t.title}>
      {imageEl}
    </Link>
  );

  const titleLink = isExternal ? (
    <a
      href={href}
      className={styles.titleLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t.title}
    </a>
  ) : (
    <Link href={href} className={styles.titleLink}>
      {t.title}
    </Link>
  );

  return (
    <article className={styles.card}>
      {imageLink}
      <div className={styles.body}>
        <p className={styles.date}>
          <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
        </p>
        <h3 className={styles.title}>{titleLink}</h3>
        <p className={styles.teaser}>{t.teaser}</p>
      </div>
    </article>
  );
}

export default NewsCard;
