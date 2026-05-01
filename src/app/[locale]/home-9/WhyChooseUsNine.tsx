"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);

type WhyChooseUsNineProps ={
  id?: string;
}

function WhyChooseUsNine({ id }: WhyChooseUsNineProps) {
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
            {/* why choose us section start */}
            <div id={id} className="rts-why-choose-us-section-8">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-us-thumbnail">
                                <img src="assets/images/why-choose/10.webp" alt="why" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl--50 pl_sm--10 mt_md--50 mt_sm--50 pb_md--50 pb_sm--40">
                            <div className="why-choose-8-wrapper-content">
                                <div className="title-style-five mb--40">
                                    <span className="pre">Make Your Best Insurance With Us</span>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Expert Solutions for Your <br /> Global Business
                                    </h2>
                                </div>
                                <div className="single-feature-service-wrapper-8">
                                    <div className="icon">
                                        <img
                                            src="assets/images/why-choose/icons/08.svg"
                                            alt="service"
                                        />
                                    </div>
                                    <div className="inner-wrapper">
                                        <h4 className="title">Financing Business</h4>
                                        <p className="disc">
                                            Fusce condimentum mattis placerat odio donec lacus porta
                                            torquent, mauris gravida rutrum
                                        </p>
                                    </div>
                                </div>
                                <div className="single-feature-service-wrapper-8">
                                    <div className="icon">
                                        <img
                                            src="assets/images/why-choose/icons/09.svg"
                                            alt="service"
                                        />
                                    </div>
                                    <div className="inner-wrapper">
                                        <h4 className="title">Business Solution</h4>
                                        <p className="disc">
                                            Fusce condimentum mattis placerat odio donec lacus porta
                                            torquent, mauris gravida rutrum
                                        </p>
                                    </div>
                                </div>
                                <Link href="/contact" className="rts-btn btn-primary mt--50">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us section end */}
        </>

    )
}

export default WhyChooseUsNine