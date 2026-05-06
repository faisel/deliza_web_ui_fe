"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "@/i18n/useTranslation";

gsap.registerPlugin(SplitText, ScrollTrigger);

function DelizaInvestments() {
  const { messages } = useTranslation();
  const t = messages.home.delizaInvestments;
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
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
    });
  }, []);

  return (
    <div className="boost-your-business-today mt--70">
      <div className="container-2">
        <div className="col-lg-12">
          <div className="business-boost-wrapper-main rts-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="business-marklting-area-thumb">
                    <Image
                      src="/assets/images/business/01.webp"
                      alt="Deliza investments and consulting"
                      width={1308}
                      height={732}
                    />
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className="boosting-business-right-area">
                    <div className="title-style-one left">
                      <span className="pre">{t.pre}</span>
                      <h2
                        className="title rts-text-anime-style-1"
                        ref={splitRef}
                      >
                        {t.title}
                      </h2>
                    </div>
                    <p className="disc">{t.description}</p>
                    <div className="feature-one-wrapper mt--40 pl_sm--0">
                      {t.checks.map((check, index) => (
                        <div
                          key={check}
                          className={`single-feature-one${index === 0 ? " active" : ""}`}
                        >
                          <i className="fa fa-check" />
                          <p>{check}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DelizaInvestments;
