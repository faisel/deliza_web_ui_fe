"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import styles from "./DelizaDigital.module.css";

const DIGITAL_7310_HREF = "https://www.7310.ch/";

gsap.registerPlugin(ScrollTrigger);

interface DelizaDigitalProps {
  id?: string;
}

function DelizaDigital({ id }: DelizaDigitalProps) {
  const { messages } = useTranslation();
  const t = messages.home.delizaDigital;
  const splitRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let split: { revert: () => void } | undefined;

    const initSplitText = async () => {
      const SplitText = (await import("gsap/SplitText")).default;
      gsap.registerPlugin(SplitText, ScrollTrigger);

      if (!splitRef.current) return;

      split = new SplitText(splitRef.current, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      gsap.set((split as unknown as { chars: Element[] }).chars, {
        opacity: 0,
        x: 50,
      });

      gsap.to((split as unknown as { chars: Element[] }).chars, {
        scrollTrigger: { trigger: splitRef.current, start: "top 95%" },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
      });
    };

    initSplitText();

    return () => {
      split?.revert();
      ScrollTrigger.getAll().forEach((tr) => tr.kill());
    };
  }, []);

  return (
    <div id={id} className="rts-why-choose-us-section-8 home-section">
      <div className="container-fluid">
        <div className={styles.layout}>
          <div className={`${styles.mediaCol} why-choose-us-thumbnail`}>
            <div className={styles.imageWrap}>
              <Image
                src="/assets/images/deliza/badragaz.jpg"
                alt="Bad Ragaz"
                width={1920}
                height={1080}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={styles.image}
              />
            </div>
          </div>
          <div className={`pl--50 pl_sm--10 mt_md--50 mt_sm--50 pb_md--50 pb_sm--40 ${styles.contentCol}`}>
            <div className="why-choose-8-wrapper-content">
              <div className="title-style-five">
                <span className="pre">{t.pre}</span>
                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                  {t.title}
                </h2>
              </div>
              <p className="disc">{t.description}</p>
              {t.features.map((feature, index) => (
                <div key={feature.title} className="single-feature-service-wrapper-8">
                  <div className="icon">
                    <Image
                      src={`/assets/images/why-choose/icons/${index === 0 ? "08" : "09"}.svg`}
                      alt="feature"
                      width={31}
                      height={31}
                    />
                  </div>
                  <div className="inner-wrapper">
                    <h4 className="title">{feature.title}</h4>
                    <p className="disc">{feature.description}</p>
                  </div>
                </div>
              ))}
              <Link
                href={DIGITAL_7310_HREF}
                className="rts-btn btn-primary mt--50"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelizaDigital;
