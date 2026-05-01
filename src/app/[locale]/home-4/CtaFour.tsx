"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

function CtaFour() {
    const splitRef = useRef<HTMLHeadingElement>(null);

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
            {/* rts call to action area start */}
            <div className="rts-call-to-action-area ptb--30 bg_call-toaction-4 bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-four-wrapper">
                                <div className="left">
                                    <div className="img-area">
                                        <img src="/assets/images/cta/05.webp" alt="cta" />
                                    </div>
                                    <h3 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Need Any Business Consultancy? <br />
                                        <span>Contact With Us</span>
                                    </h3>
                                </div>
                                <div className="right">
                                    <a href="#" className="rts-btn btn-primary">
                                        Request A Call Back
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts call to action area end */}
        </>

    )
}

export default CtaFour