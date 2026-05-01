"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);


function CtaSeven() {

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
                                            <Link
                                                href="/contact"
                                                className="rts-btn btn-primary btn-white"
                                            >
                                                Lets Work Together
                                            </Link>
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

export default CtaSeven