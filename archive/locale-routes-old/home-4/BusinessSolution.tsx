"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

// Extend HTMLElement to include od property
interface OdometerElement extends HTMLElement {
  od?: any;
}
type BusinessSolutionProps = {
  id?: string;
};
function BusinessSolution({ id }: BusinessSolutionProps) {
    const splitRef = useRef<HTMLHeadingElement>(null);
    const odometerRefs = useRef<OdometerElement[]>([]);
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

      // SplitText animation
        useEffect(() => {
            if (!splitRef.current) return;

            const element = splitRef.current;

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
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.02,
            });
        }, []);
    return (
        <>
            {/* business solution area start */}
            <div id={id} className="business-solution-area rts-section-gap">
                <div className="container">
                    <div className="row  align-items-center">
                        <div className="col-lg-6">
                            <div className="business-solution-area-left-thumbnail">
                                <div className="iamge-large">
                                    <Image
                                        src="/assets/images/why-choose/07.webp"
                                        alt="choose"
                                        width={615}
                                        height={630}
                                    />
                                </div>
                                <div className="small-mobile">
                                    <Image
                                        src="/assets/images/why-choose/08.webp"
                                        alt="choose"
                                        width={235}
                                        height={268}
                                    />
                                </div>
                                <div className="success-rate-area">
                                    <div className="inner">
                                        <h2 className="counter title">
                                            <span className="odometer" data-count={85}
                                                ref={(el) => {
                                                if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                    odometerRefs.current.push(el as OdometerElement);
                                                }
                                            }}>
                                                00
                                            </span>
                                            %
                                        </h2>
                                        <span>Success Rate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--80 mt_sm--100">
                            <div className="business-solution-area-right-content">
                                <div className="title-style-four left">
                                    <span className="pre">Leading Business SOlution</span>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Building Better <br />
                                        <span>Driving Success </span>
                                    </h2>
                                </div>
                                <p className="disc">
                                    Nisi aenean mu suscipit ni phasellus gravida primis massa, rutrum
                                    duis semper posuere pharetra magnis porta diam, bibendum molestie
                                    d cursus ante mattis habitasse. Egestas sagittis curabitur quam
                                    business solution
                                </p>
                                <div className="featuremain-wrapper">
                                    <div className="single-feature-wrapper">
                                        <Image
                                            src="/assets/images/why-choose/icons/06.svg"
                                            alt="icon"
                                            width={84}
                                            height={84}
                                        />
                                        <h5 className="title">Strategic Vision Work</h5>
                                        <p className="disc">
                                            Dorem ipsum dolor sit amet, consectetu mod tempor incididunt
                                            business phasellus gravida
                                        </p>
                                    </div>
                                    <div className="single-feature-wrapper">
                                        <Image
                                            src="/assets/images/why-choose/icons/07.svg"
                                            alt="icon"
                                            width={84}
                                            height={84}
                                        />
                                        <h5 className="title">Ultimate Business Goal</h5>
                                        <p className="disc">
                                            Dorem ipsum dolor sit amet, consectetu mod tempor incididunt
                                            business phasellus gravida
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* business solution area end */}
        </>

    )
}

export default BusinessSolution