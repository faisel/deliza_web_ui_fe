"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);

interface OdometerElement extends HTMLElement {
  od?: any;
}

type BannerEightProps ={
  id?: string;
}

function BannerEight({ id }: BannerEightProps) {

    const odometerRefs = useRef<OdometerElement[]>([]);
    const splitRef = useRef<HTMLHeadingElement>(null);

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

    // Odometer animation
      useEffect(() => {
        import("odometer").then((module) => {
          const Odometer = module.default;
    
          // Initialize odometer
          odometerRefs.current.forEach((el) => {
            el.od = new Odometer({
              el,
              value: 0,
              format: "d",
              duration: 2000,
            });
          });
    
          const isInViewport = (el: OdometerElement) => {
            const rect = el.getBoundingClientRect();
            return (
              rect.top < window.innerHeight &&
              rect.bottom >= 0
            );
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
        <>
            {/* rts banner areas start */}
            <div id={id} className="rts-banner-area-eight banner-bg_eight bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-inner-content-eight">
                                <div className="pre-title-area">
                                    <img src="/assets/images/banner/icon/02.svg" alt="banner" />
                                    <p>Business Success Starts Here</p>
                                </div>
                                <h1 className="title rts-text-anime-style-1" ref={splitRef}>
                                    <span>Empowering </span>Leaders Performance
                                </h1>
                                <p className="disc">
                                    These names convey professionalism, expertise, and a focus on
                                    delivering effective management solutions to businesses.
                                </p>
                                <Link href="/service" className="rts-btn btn-primary">
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* counter up area start */}
                <div className="rts-counter-up-area-eight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="counter-up-area-eight-banner-bottom">
                                    <div className="single-counter-area-eight">
                                        <h2 className="counter title">
                                            <span
                                                className="odometer"
                                                data-count={28}
                                                ref={(el) => {
                                                if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                    odometerRefs.current.push(el as OdometerElement);
                                                }
                                                }}
                                            >
                                                00
                                            </span>
                                            K+
                                        </h2>
                                        <span className="business">Business Revenue</span>
                                        <div className="star-icon">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    <div className="single-counter-area-eight">
                                        <h2 className="counter title">
                                            <span
                                                className="odometer"
                                                data-count={2}
                                                ref={(el) => {
                                                if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                    odometerRefs.current.push(el as OdometerElement);
                                                }
                                                }}
                                            >
                                                00
                                            </span>
                                            K+
                                        </h2>
                                        <span className="business">
                                            Corp Employed <br /> <br />
                                            Worldwide
                                        </span>
                                    </div>
                                    <div className="absolute-image">
                                        <img src="/assets/images/banner/11.webp" alt="bottom" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* counter up area end */}
                <div className="banner-shape-area">
                    <div className="shape-area">
                        <img src="/assets/images/banner/shape/shape.svg" alt="shape" />
                    </div>
                </div>
            </div>
            {/* rts banner areas end */}
        </>

    )
}

export default BannerEight