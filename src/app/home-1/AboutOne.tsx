"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "@/i18n/useTranslation";

gsap.registerPlugin(SplitText, ScrollTrigger);

// Extend HTMLElement to include od property
interface OdometerElement extends HTMLElement {
  od?: any;
}

type AboutOneProps = {
  id?: string;
};

function AboutOne({ id }: AboutOneProps) {
  const { messages } = useTranslation();
  const t = messages.home.about;
  const odometerRefs = useRef<OdometerElement[]>([]);
  const splitRef = useRef<HTMLHeadingElement>(null);

  // SplitText animation
  useEffect(() => {
    if (!splitRef.current) return;

    const element = splitRef.current;

    // Reset previous animation if exists
    if ((element as any).animation) {
      (element as any).animation.progress(1).kill();
      (element as any).split.revert();
    }

    (element as any).split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });

    gsap.set(element, { perspective: 400 });
    gsap.set((element as any).split.chars, { opacity: 0, x: 50 });

    (element as any).animation = gsap.to((element as any).split.chars, {
      scrollTrigger: {
        trigger: element,
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
  }, []);

  // Odometer animation
  useEffect(() => {
    import("odometer").then((module) => {
      const Odometer = module.default;

      // Initialize odometer
      odometerRefs.current.forEach((el) => {
        el.od = new Odometer({ el, value: 0, format: "d", duration: 2000 });
      });

      const isInViewport = (el: OdometerElement) => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      };

      const triggerOdometer = (el: OdometerElement) => {
        if (!el.classList.contains("odometer-triggered")) {
          el.od.update(el.dataset.count);
          el.classList.add("odometer-triggered");
        }
      };

      const handleScroll = () => {
        odometerRefs.current.forEach((el) => {
          if (isInViewport(el)) triggerOdometer(el);
        });
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  }, []);

  return (
    <div id={id} className="rts-about-area-two rts-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="left-thumbnail-about-area-two">
              <img loading="lazy" src="/assets/images/about/04.webp" alt="about" />
              <div className="small-image">
                <img loading="lazy" src="/assets/images/about/05.webp" alt="small" />
              </div>
              <div className="counter-about-area">
                <h2 className="counter title">
                  <span
                    className="odometer"
                    data-count={25}
                    ref={(el) => {
                      if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                        odometerRefs.current.push(el as OdometerElement);
                      }
                    }}
                  >
                    0
                  </span>
                  +
                </h2>
                <span>{t.yearsExperience}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt_sm--80 mt_md--80">
            <div className="about-inner-content-two">
              <div className="title-style-two left">
                <span className="bg-content">{t.chip}</span>
                <span className="pre">{t.pre}</span>
                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                  {t.title[0]} <br /> {t.title[1]}
                </h2>
              </div>
              <div className="about-between-wrapper">
                <p className="disc">{t.description}</p>
                <div className="check-wrapper-area">
                  {t.checks.map((check, i) => (
                    <div className="single-check" key={i}>
                      <i className="fa-solid fa-circle-check" />
                      <p>{check}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="call-and-sign-area two">
                <div className="call-area">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-phone-volume" />
                  </div>
                  <div className="information">
                    <span>{t.callUsAnytime}</span>
                    <a href={`tel:${t.phone.replace(/\s+/g, "")}`}>
                      <h6 className="title">{t.phone}</h6>
                    </a>
                  </div>
                </div>
                <div className="sign-area">
                  <img loading="lazy" src="/assets/images/about/sign.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-area">
        <img loading="lazy" src="/assets/images/about/shape/01.svg" alt="shape" className="one" />
        <img loading="lazy" src="/assets/images/about/shape/02.svg" alt="shape" className="two" />
      </div>
    </div>
  );
}

export default AboutOne;
