"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);

type BannerTenProps ={
  id?: string;
}


function BannerTen({ id }: BannerTenProps) {
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
            {/* rts banner ten area start */}
            <div id={id} className="rts-banner-ten-area banner-bg_12 bg_image rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-inner-content-12">
                                <p className="pre">
                                    <Image
                                        src="/assets/images/banner/icon/01.svg"
                                        alt=""
                                        width={22}
                                        height={18}
                                        aria-hidden="true"
                                    />
                                    Business Success Starts Here
                                </p>
                                <h1 className="title rts-text-anime-style-1" ref={splitRef}>
                                    Innovative Solutions <br />
                                    Exceptional Results
                                </h1>
                                <p className="disc">
                                    Porttitor ornare fertum aliquam pharetra facilisis gravida risus
                                    suscipit Dui feugiat fusce conubia ridiculus tristique parturient
                                </p>
                                <div className="button-wrapper">
                                    <Link href="/contact" className="rts-btn btn-primary btn-white">
                                        Get In Touch
                                    </Link>
                                    <Link href="/about" className="rts-btn btn-primary btn-border">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chart-image">
                    <Image
                        src="/assets/images/banner/small-img/01.webp"
                        alt=""
                        className="one"
                        width={166}
                        height={156}
                        aria-hidden="true"
                    />
                    <Image
                        src="/assets/images/banner/small-img/02.webp"
                        alt=""
                        className="two"
                        width={215}
                        height={213}
                        aria-hidden="true"
                    />
                </div>
            </div>
            {/* rts banner ten area end */}
        </>

    )
}

export default BannerTen