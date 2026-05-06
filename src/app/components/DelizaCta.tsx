"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { navHref } from "@/i18n/routing";

gsap.registerPlugin(SplitText, ScrollTrigger);

function DelizaCta() {
  const { messages, locale } = useTranslation();
  const t = messages.home.delizaCta;
  const contactHref = navHref("contact", locale);
  const splitRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
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

  return (
    <div className="rts-call-to-action-area ptb--30 bg_call-toaction-4 bg_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-four-wrapper">
              <div className="left">
                <div className="img-area">
                  <Image
                    src="/assets/images/cta/05.webp"
                    alt="Contact Deliza"
                    width={194}
                    height={194}
                  />
                </div>
                <h3 className="title rts-text-anime-style-1" ref={splitRef}>
                  {t.title} <br />
                  <span>{t.subtitle}</span>
                </h3>
              </div>
              <div className="right">
                <Link href={contactHref} className="rts-btn btn-primary">
                  {t.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelizaCta;
