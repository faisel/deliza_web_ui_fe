"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);

interface OdometerElement extends HTMLElement {
    od?: any;
}

type AboutEightProps ={
  id?: string;
}

function AboutEight({ id }: AboutEightProps) {


    const odometerRefs = useRef<OdometerElement[]>([]);
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
    return (
        <>
            {/* rts about us area start */}
            <div id={id} className="rts-about-us-area-8 bg_primary rts-section-gapTop pb--100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="title-style-one left mb--30">
                                <span className="pre">About US</span>
                                <h2 className="title rts-text-anime-style-1 uppercase" ref={splitRef}>
                                    Businesses Through <br />
                                    <span> Management</span>
                                </h2>
                                <p className="disc">
                                    we specialize in providing comprehensive business management
                                    solutions tailored to meet the unique needs of our clients. With
                                    years of experience and a team of dedicated professionals, we help
                                    businesses of all sizes streamline.
                                </p>
                                <div className="counter-up-main-wrapper-8">
                                    <div className="single-counter-up">
                                        <h2 className="counter title">
                                            <span
                                                className="odometer"
                                                data-count={858}
                                                ref={(el) => {
                                                    if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                        odometerRefs.current.push(el as OdometerElement);
                                                    }
                                                }}
                                            >
                                                00
                                            </span>
                                            +
                                        </h2>
                                        <p className="bottom">Successful Projects</p>
                                    </div>
                                    <div className="single-counter-up">
                                        <h2 className="counter title">
                                            <span
                                                className="odometer"
                                                data-count={567}
                                                ref={(el) => {
                                                    if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                        odometerRefs.current.push(el as OdometerElement);
                                                    }
                                                }}
                                            >
                                                00
                                            </span>
                                            +
                                        </h2>
                                        <p className="bottom">Skilled Experts</p>
                                    </div>
                                    <div className="single-counter-up">
                                        <h2 className="counter title">
                                            <span
                                                className="odometer"
                                                data-count={28}
                                                ref={(el) => {
                                                    if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                        odometerRefs.current.push(el as OdometerElement);
                                                    }
                                                }}
                                            >
                                                00
                                            </span>
                                            K+
                                        </h2>
                                        <p className="bottom">Happy Clients</p>
                                    </div>
                                </div>
                                <div className="sign-and-contact-area-8">
                                    <div className="singn">
                                        <img src="/assets/images/about/sign-white.svg" alt="sign" />
                                    </div>
                                    <div className="number-area-start">
                                        <span>Call Us Anytime!</span>
                                        <a href="#">
                                            <h5 className="number">+(125) 2153-2158</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-stock-area">
                                <h4 className="border-text">
                                    About <br />
                                    comp <br /> any
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-content-image">
                    <img
                        src="/assets/images/about/14.webp"
                        alt="about"
                        className="large-image"
                    />
                </div>
            </div>
            {/* rts about us area end */}
        </>

    )
}

export default AboutEight