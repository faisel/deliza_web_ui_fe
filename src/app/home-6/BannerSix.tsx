"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(SplitText, ScrollTrigger); 
// 👇 odometer element type
interface OdometerElement extends HTMLSpanElement {
  od?: any;
}

type BannerSixProps ={
  id?: string;
}

function BannerSix({ id }: BannerSixProps) {
  const splitRef = useRef<HTMLHeadingElement>(null);
  const odometerRefs = useRef<OdometerElement[]>([]);

  /* ============================
      GSAP SplitText Animation
  ============================ */
  useEffect(() => {
    let split: any;

    const initSplitText = async () => {
      const SplitText = (await import("gsap/SplitText")).default;
      gsap.registerPlugin(SplitText, ScrollTrigger);

      if (!splitRef.current) return;

      split = new SplitText(splitRef.current, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      gsap.set(split.chars, {
        opacity: 0,
        x: 50,
      });

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: splitRef.current,
          start: "top 95%",
        },
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
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  /* ============================
        Odometer Animation
  ============================ */
  useEffect(() => {
    let handleScroll: () => void;

    const initOdometer = async () => {
      const Odometer = (await import("odometer")).default;

      // Initialize odometers
      odometerRefs.current.forEach((el) => {
        el.od = new Odometer({
          el,
          value: 0,
          format: "d",
          duration: 2000,
        });
      });

      const isInViewport = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      };

      const triggerOdometer = (el: OdometerElement) => {
        if (!el.classList.contains("odometer-triggered")) {
          el.od.update(Number(el.dataset.count));
          el.classList.add("odometer-triggered");
        }
      };

      handleScroll = () => {
        odometerRefs.current.forEach((el) => {
          if (isInViewport(el)) triggerOdometer(el);
        });
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
    };

    initOdometer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* banner area start */}
      <div id={id} className="rts-banner-area-six rts-section-gapTop pb--90 bg_banner-five bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content-six">
                <div className="left-side">
                  <h1
                    className="title rts-text-anime-style-1"
                    ref={splitRef}
                  >
                    Drive Growth Build
                    Elevate Your Brand
                  </h1>

                  <p className="disc">
                    Porttitor ornare fertum aliquam pharetra facilisis gravida
                    risus suscipit Dui feugiat fusce conubia ridiculus tristique
                    parturient
                  </p>
                </div>

                <div className="right-stars-area">
                  <h2 className="counter title">
                    <span
                      className="odometer"
                      data-count="28"
                      ref={(el) => {
                        if (
                          el &&
                          !odometerRefs.current.includes(
                            el as OdometerElement
                          )
                        ) {
                          odometerRefs.current.push(
                            el as OdometerElement
                          );
                        }
                      }}
                    >
                      00
                    </span>
                    K+
                  </h2>

                  <p>Business Revenue</p>

                  <div className="stars-wrapper">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>

                  <div className="button-wrapper">
                    <Link href="/contact" className="rts-btn btn-primary">
                      Get In Touch
                    </Link>
                    <Link href="/about" className="rts-btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner area end */}
    </>
  );
}

export default BannerSix;
