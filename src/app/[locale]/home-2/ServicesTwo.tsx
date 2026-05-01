"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

interface ServicesTwoProps {
  className?: string
  id?: string
}

function ServicesTwo({ className = "", id = "" }: ServicesTwoProps) {
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
    return (
        <>
            {/* rts latest service area start */}
            <div id={id} className={`rts-latest-service-area ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-one center">
                                <span className="pre">Our Latest Services</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>Service We Provide</h2>
                            </div>
                        </div>
                        <div className="col-lg-12 mt--50">
                            <section className="main-wrapper-sticky">
                                <div className="sticky-statement">
                                    <div className="left-side">
                                        <div className="icon">
                                            <img src="/assets/images/service/01.svg" alt="service" />
                                        </div>
                                        <h5 className="title">Business Solution</h5>
                                    </div>
                                    <div className="right">
                                        <p className="disc">
                                            comprehensive set of strategies, tools, technologies, and
                                            processes challenges, optimize operations, and drive business
                                            growth.
                                        </p>
                                        <a href="#" className="arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sticky-statement">
                                    <div className="left-side">
                                        <div className="icon">
                                            <img src="/assets/images/service/02.svg" alt="service" />
                                        </div>
                                        <h5 className="title">Creative Ideas</h5>
                                    </div>
                                    <div className="right">
                                        <p className="disc">
                                            comprehensive set of strategies, tools, technologies, and
                                            processes challenges, optimize operations, and drive business
                                            growth.
                                        </p>
                                        <a href="#" className="arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sticky-statement">
                                    <div className="left-side">
                                        <div className="icon">
                                            <img src="/assets/images/service/03.svg" alt="service" />
                                        </div>
                                        <h5 className="title">Market Research</h5>
                                    </div>
                                    <div className="right">
                                        <p className="disc">
                                            comprehensive set of strategies, tools, technologies, and
                                            processes challenges, optimize operations, and drive business
                                            growth.
                                        </p>
                                        <a href="#" className="arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sticky-statement">
                                    <div className="left-side">
                                        <div className="icon">
                                            <img src="/assets/images/service/01.svg" alt="service" />
                                        </div>
                                        <h5 className="title">Technology Solution</h5>
                                    </div>
                                    <div className="right">
                                        <p className="disc">
                                            comprehensive set of strategies, tools, technologies, and
                                            processes challenges, optimize operations, and drive business
                                            growth.
                                        </p>
                                        <a href="#" className="arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts latest service area end */}
        </>

    )
}

export default ServicesTwo