"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type AboutSixProps ={
  id?: string;
}


function AboutSix({ id }: AboutSixProps) {

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
    return (
        <>
            {/* rts about area start */}
            <div id={id} className="rts-about-area-start-six rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr--40 pr_sm--10">
                            <div className="thumbnail-about-six">
                                <img src="/assets/images/about/11.webp" alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt_sm--30">
                            <div className="about-right-six-wrapper">
                                <div className="title-style-five">
                                    <span className="pre">ABOUT US</span>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Your Growth Partner And <br /> Built for Success
                                    </h2>
                                </div>
                                <p className="disc">
                                    Our mission is to help businesses like yours connect with the
                                    right audience, amplify your brand’s message, and achieve
                                    measurable results.
                                </p>
                                <div className="about-service-wrapper-main">
                                    <div className="single-about-service">
                                        <div className="icon">
                                            <img src="/assets/images/about/icons/06.svg" alt="service" />
                                        </div>
                                        <h5 className="title">
                                            Management <br />
                                            planning
                                        </h5>
                                    </div>
                                    <div className="single-about-service">
                                        <div className="icon">
                                            <img src="/assets/images/about/icons/07.svg" alt="service" />
                                        </div>
                                        <h5 className="title">
                                            Business <br />
                                            Growth
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about area end */}
        </>

    )
}

export default AboutSix