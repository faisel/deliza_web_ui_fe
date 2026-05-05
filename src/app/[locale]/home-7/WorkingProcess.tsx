"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function WorkingProcess() {

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
            {/* working process areas start */}
            <div className="working-process-one bg-main rts-section-gap without-clip-radious">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="title-style-one">
                                <span className="pre">How we works</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    Easy 3 Steps To Work
                                </h2>
                            </div>
                            <div className="working-process-main-wrapper mt--60">
                                <div
                                    className="single-working-process-one"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                    data-duration="1.2"
                                >
                                    <div className="left">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/process/icon/01.svg"
                                                alt="process"
                                                width={52}
                                                height={52}
                                            />
                                        </div>
                                    </div>
                                    <div className="inner-content">
                                        <div className="number-main">
                                            <span className="number">01</span>
                                        </div>
                                        <h5 className="title">Client Discovery</h5>
                                        <p className="disc">
                                            The agency begins by understanding the client's needs, goals,
                                            and
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="single-working-process-one"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                    data-duration="1.2"
                                >
                                    <div className="left">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/process/icon/02.svg"
                                                alt="process"
                                                width={52}
                                                height={56}
                                            />
                                        </div>
                                    </div>
                                    <div className="inner-content">
                                        <div className="number-main">
                                            <span className="number">02</span>
                                        </div>
                                        <h5 className="title">Research &amp; Analysis</h5>
                                        <p className="disc">
                                            The agency begins by understanding the client's needs, goals,
                                            and
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="single-working-process-one"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                    data-duration="1.2"
                                >
                                    <div className="left">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/process/icon/03.svg"
                                                alt="process"
                                                width={52}
                                                height={50}
                                            />
                                        </div>
                                    </div>
                                    <div className="inner-content">
                                        <div className="number-main">
                                            <span className="number">03</span>
                                        </div>
                                        <h5 className="title">Strategy Development</h5>
                                        <p className="disc">
                                            The agency begins by understanding the client's needs, goals,
                                            and
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="thumbnail-working-procss-one"
                                data-animation="zoomOut"
                                data-delay="0.2"
                                data-duration="1.2"
                            >
                                <Image
                                    src="/assets/images/process/02.webp"
                                    alt="working-process"
                                    width={872}
                                    height={1112}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* working process areas end */}
        </>

    )
}

export default WorkingProcess