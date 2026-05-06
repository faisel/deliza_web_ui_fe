"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { navHref } from "@/i18n/routing";

gsap.registerPlugin(ScrollTrigger);

interface DelizaDigitalProps {
  id?: string;
}

function DelizaDigital({ id }: DelizaDigitalProps) {
  const { messages, locale } = useTranslation();
  const t = messages.home.delizaDigital;
  const contactHref = navHref("contact", locale);
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
    <div id={id} className="rts-why-choose-us-section-8 rts-section-gap">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="why-choose-us-thumbnail">
              <Image
                src="/assets/images/why-choose/10.webp"
                alt="Deliza Digital Innovation"
                width={1349}
                height={1059}
              />
            </div>
          </div>
          <div className="col-lg-6 pl--50 pl_sm--10 mt_md--50 mt_sm--50 pb_md--50 pb_sm--40">
            <div className="why-choose-8-wrapper-content">
              <div className="title-style-five mb--40">
                <span className="pre">{t.pre}</span>
                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                  {t.title}
                </h2>
              </div>
              <p className="disc mb--30">{t.description}</p>
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
              <Link href={contactHref} className="rts-btn btn-primary mt--50">
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
