"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { navSlugs } from "@/i18n/routing";
import news from "@/app/data/news";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface DelizaNewsProps {
  id?: string;
  limit?: number;
}

function DelizaNews({ id, limit = 3 }: DelizaNewsProps) {
  const { messages, locale } = useTranslation();
  const t = messages.home.delizaNews;
  const readMore = messages.common.buttons.readMore;
  const splitRef = useRef<HTMLHeadingElement>(null);

  const newsBaseSlug = navSlugs.news[locale];
  const sortedNews = [...news]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
    AOS.refresh();

    if (!splitRef.current) return;
    const element = splitRef.current as HTMLHeadingElement & {
      animation?: gsap.core.Tween;
      split?: { revert: () => void; chars: Element[] };
    };

    if (element.animation) {
      element.animation.progress(1).kill();
      element.split?.revert();
    }

    element.split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    }) as unknown as { revert: () => void; chars: Element[] };

    gsap.set(element, { perspective: 400 });
    gsap.set(element.split.chars, { opacity: 0, x: 50 });

    element.animation = gsap.to(element.split.chars, {
      scrollTrigger: { trigger: element, start: "top 95%" },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
    });
  }, []);

  const renderLink = (
    item: (typeof news)[number],
    children: React.ReactNode,
    className?: string
  ) => {
    if (item.externalUrl) {
      return (
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={`/${newsBaseSlug}/${item.slug}`} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <div id={id} className="rts-blog-area rts-section-gapTop">
      <div className="container pt--40">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-three center">
              <span className="pre">{t.pre}</span>
              <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                {t.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-5 mt--20">
          {sortedNews.map((item, index) => {
            const tr = item.translations[locale];
            return (
              <div
                key={item.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="rts-blog-h-2-wrapper">
                  {renderLink(
                    item,
                    <Image
                      src={item.image}
                      alt={tr.title}
                      width={678}
                      height={474}
                    />,
                    "thumbnail"
                  )}
                  <div className="body">
                    {renderLink(item, <h4 className="title">{tr.title}</h4>)}
                    <p className="disc">{tr.teaser}</p>
                    {renderLink(
                      item,
                      <>
                        <i className="fa fa-arrow-right" />
                        {readMore}
                      </>,
                      "rts-read-more btn-primary"
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DelizaNews;
