"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(SplitText, ScrollTrigger);

interface BreadcrumbTwoProps {
    preTitle?: string;
    bgTitle?: string;
    title: string;
    description?: string;
}

function BreadcrumbTwo({
    preTitle,
    bgTitle,
    title,
    description, }: BreadcrumbTwoProps) {

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
            {/* about us area wrapper main */}
            <div className="rts-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left">
                                {preTitle && <span className="pre">{preTitle}</span>}
                                {bgTitle && <span className="bg-title">{bgTitle}</span>}
                                <h1
                                    className="title rts-text-anime-style-1"
                                    ref={splitRef}
                                    dangerouslySetInnerHTML={{ __html: title }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-area">
                    <img src="/assets/images/about/shape/01.png" alt="shape" className="one" />
                    <img src="/assets/images/about/shape/02.png" alt="shape" className="two" />
                    <img
                        src="/assets/images/about/shape/03.png"
                        alt="shape"
                        className="three"
                    />
                </div>
            </div>
            {/* about us area wrapper main end */}
        </>

    )
}

export default BreadcrumbTwo