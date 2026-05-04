'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "@/i18n/LocalizedLink";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AboutThreeProps {
  id?: string
}

function AboutThree({ id }: AboutThreeProps) {
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
            {/* rts about area start */}
            <div id={id} className="rts-about-area rts-section-gap">
                <div className="container pt--40">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="main-thumnal-inner-about-three">
                                <div className="about-thumbnail-style-three">
                                    <div className="thumbnail">
                                        <img src="/assets/images/about/06.webp" alt="about" />
                                    </div>
                                </div>
                                <div className="shape">
                                    <img src="/assets/images/about/shape/04.svg" alt="about" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 pl--100 pl_md--0 mt_md--80 pl_sm--0 mt_sm--80">
                            <div className="about-content-right-three">
                                <div className="title-style-three left">
                                    <span className="pre">About Our Company</span>
                                    <div className="bg-title">02</div>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Delivering Excellence, Every <br /> Step of the Way
                                    </h2>
                                </div>
                                <p className="disc">
                                    We are licensed and insured with over 14 years of experience in
                                    providing United States with top-rated USA business services
                                </p>
                                <div className="about-feature">
                                    <div className="single-feature-wrap">
                                        <div className="single">01. The Great Mission</div>
                                        <div className="single">04. Start Mission</div>
                                    </div>
                                    <div className="single-feature-wrap">
                                        <div className="single">02. Working with you</div>
                                        <div className="single">05. Great Partners</div>
                                    </div>
                                    <div className="single-feature-wrap">
                                        <div className="single">03. Best solution</div>
                                    </div>
                                </div>
                                <Link href="/contact" className="rts-btn btn-primary">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about area end */}
        </>

    )
}

export default AboutThree