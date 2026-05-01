"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

function CtaOne() {
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
    {/* rts call to action area start */}
    <div className="rts-call-to-action-area-two bg_image">
        <div className="container-full">
        <div className="row">
            <div className="col-lg-12">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="cta-style-two-area">
                    <h3 className="title rts-text-anime-style-1" ref={splitRef}>
                        Let’s discuss about how we can help <br />
                        make your business better
                    </h3>
                    <a
                        href="/contact"
                        className="rts-btn btn-primary btn-white"
                    >
                        Lets Work Together
                    </a>
                    </div>
                </div>
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

export default CtaOne