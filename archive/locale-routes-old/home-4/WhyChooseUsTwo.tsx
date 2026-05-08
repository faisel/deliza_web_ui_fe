"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

function WhyChooseUsTwo() {
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
    useEffect(() => {
        // Run only on browser
        if (typeof window === "undefined") return;
        
        const device_width = window.innerWidth;

        if (device_width > 991) {
        gsap.set(".rts_jump_animation-wrapper .rts-jump__item", {
            opacity: 0,
            scale: 1.15,
            rotation: 0,
        });

        gsap.to(".rts_jump_animation-wrapper .rts-jump__item", {
            scrollTrigger: {
            trigger: ".rts_jump_animation-wrapper",
            start: "top 95%",
            },
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.3,
            rotation: 0,
        });
        }
    }, []);
    return (
        <>
            {/* why choose us area start */}
            <div className="why-choose-us-area rts-section-gapBottom rts_jump_animation-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-four center">
                                <span className="pre">Easy Business Solution</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    What We <span>Do</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
                        <div className="col-lg-4 col-md-6 col-sm-12 rts-jump__item">
                            <div className="single-why-choose-four">
                                <a href="#" className="thumbnail">
                                    <Image
                                        src="/assets/images/why-choose/04.webp"
                                        alt="choose"
                                        width={615}
                                        height={630}
                                    />
                                </a>
                                <div className="inner-content">
                                    <div className="icon">
                                        <Image
                                            src="/assets/images/why-choose/icons/01.svg"
                                            alt="why-choose"
                                            width={89}
                                            height={87}
                                        />
                                    </div>
                                    <a href="#">
                                        <h5 className="title">Business Consultancy</h5>
                                    </a>
                                    <p className="disc">
                                        Creativity, and a commitment to quality to deliver solutions
                                        meet your unique needs.
                                    </p>
                                    <a href="#" className="read-more">
                                        Read More <i className="fa-sharp fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 rts-jump__item">
                            <div className="single-why-choose-four">
                                <a href="#" className="thumbnail">
                                    <Image
                                        src="/assets/images/why-choose/05.webp"
                                        alt="choose"
                                        width={615}
                                        height={630}
                                    />
                                </a>
                                <div className="inner-content">
                                    <div className="icon">
                                        <Image
                                            src="/assets/images/why-choose/icons/02.svg"
                                            alt="why-choose"
                                            width={89}
                                            height={87}
                                        />
                                    </div>
                                    <a href="#">
                                        <h5 className="title">Target Marketing</h5>
                                    </a>
                                    <p className="disc">
                                        Creativity, and a commitment to quality to deliver solutions
                                        meet your unique needs.
                                    </p>
                                    <a href="#" className="read-more">
                                        Read More <i className="fa-sharp fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 rts-jump__item">
                            <div className="single-why-choose-four">
                                <a href="#" className="thumbnail">
                                    <Image
                                        src="/assets/images/why-choose/06.webp"
                                        alt="choose"
                                        width={615}
                                        height={630}
                                    />
                                </a>
                                <div className="inner-content">
                                    <div className="icon">
                                        <Image
                                            src="/assets/images/why-choose/icons/03.svg"
                                            alt="why-choose"
                                            width={89}
                                            height={87}
                                        />
                                    </div>
                                    <a href="#">
                                        <h5 className="title">Investment Analysis</h5>
                                    </a>
                                    <p className="disc">
                                        Creativity, and a commitment to quality to deliver solutions
                                        meet your unique needs.
                                    </p>
                                    <a href="#" className="read-more">
                                        Read More <i className="fa-sharp fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us area end */}
        </>

    )
}

export default WhyChooseUsTwo