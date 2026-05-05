"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "@/i18n/useTranslation";

import styles from "./BannerTwo.module.css";

gsap.registerPlugin(ScrollTrigger);

type BannerTwoProps = {
  id?: string;
};

function BannerTwo({ id }: BannerTwoProps) {
  const { messages } = useTranslation();
  const home = messages.seo.pages.home;
  const splitRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let split: { revert: () => void; chars: Element[] } | undefined;

    const initSplitText = async () => {
      const SplitText = (await import("gsap/SplitText")).default;
      gsap.registerPlugin(SplitText, ScrollTrigger);

      if (!splitRef.current) return;

      const instance = new SplitText(splitRef.current, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      split = instance;

      gsap.set(splitRef.current, { perspective: 400 });
      gsap.set(instance.chars, { opacity: 0, x: 50 });

      gsap.to(instance.chars, {
        scrollTrigger: {
          trigger: splitRef.current,
          start: "top 95%",
        },
        x: 0,
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
      });
    };

    initSplitText();

    return () => {
      split?.revert();
    };
  }, [home.h1]);

  return (
    <>
      {/* rts banner area start */}
      <div
        id={id}
        className={`${styles.delizaBanner} rts-banner-area banner-style-one`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-one-inner text-start">
                {home.eyebrow && (
                  <span className="pre">{home.eyebrow}</span>
                )}
                <h1
                  className="title rts-text-anime-style-1"
                  ref={splitRef}
                >
                  {home.h1}
                </h1>
                {home.heroDescription && (
                  <p className="disc banner-para">{home.heroDescription}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="shape-iamge-area">
          <Image
            src="/assets/images/banner/shape/04.png"
            alt=""
            className="one"
            width={353}
            height={341}
            aria-hidden="true"
          />
          <Image
            src="/assets/images/banner/shape/circle.svg"
            alt=""
            className="two"
            width={161}
            height={161}
            aria-hidden="true"
          />
        </div>
      </div>
      {/* rts banner area end */}
    </>
  );
}

export default BannerTwo;
