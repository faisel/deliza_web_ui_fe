"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);

function WhyChooseUsEight() {
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
            {/* rts-why-choose-us-area */}
            <div className="rts-why-choose-area rts-section-gapBottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="thumbnail-why-choose-8">
                                <img src="/assets/images/why-choose/09.webp" alt="why-choose" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl--60">
                            <div className="why-choose-area-right-content-8">
                                <div className="title-style-one eight left mb--30">
                                    <span className="pre">wHY CHOOSE uS</span>
                                    <h2 className="title rts-text-anime-style-1 uppercase" ref={splitRef}>
                                        Why We're the <br /> <span>Perfect Fit for You</span>
                                    </h2>
                                </div>
                                <div className="signle-consultancy mb--30">
                                    <div className="icon">
                                        <img src="/assets/images/about/icons/01.svg" alt="" />
                                    </div>
                                    <div className="information">
                                        <h4 className="title">Best Business Consulting</h4>
                                        <p className="disc">
                                            Fusce condimentum mattis placerat odio donec lacus porta
                                            torquent, mauris gravida rutrum
                                        </p>
                                    </div>
                                </div>
                                <div className="signle-consultancy">
                                    <div className="icon">
                                        <img src="/assets/images/about/icons/02.svg" alt="" />
                                    </div>
                                    <div className="information">
                                        <h4 className="title">24/7 Customer Support</h4>
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
            {/* rts-why-choose-us-area end */}
        </>

    )
}

export default WhyChooseUsEight