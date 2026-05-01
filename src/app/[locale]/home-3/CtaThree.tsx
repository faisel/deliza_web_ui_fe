'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function CtaThree() {
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
            {/* rs call to action area three */}
            <div className="rts-call-to-action-area-three bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-main-wrapper-inner">
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    Contact Our Agent For Any kind off <br /> Business Help
                                    <span>(24/7 Available)</span>
                                </h2>
                                <div className="call-area">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone-flip" />
                                    </div>
                                    <a href="#">+215 2153.2159</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rs call to action area three end */}
        </>

    )
}

export default CtaThree