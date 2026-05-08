"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "@/i18n/useTranslation";
import type { SeoNavKey } from "@/i18n/routing";

gsap.registerPlugin(ScrollTrigger);

interface BreadcrumbTwoProps {
    /** Active nav destination — copy is read from messages.seo.pages[nav]. */
    nav: SeoNavKey;
}

function BreadcrumbTwo({ nav }: BreadcrumbTwoProps) {
    const { messages } = useTranslation();
    const page = messages.seo.pages[nav];
    const splitRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        let split: { revert: () => void } | undefined;

        const initSplitText = async () => {
            const SplitText = (await import("gsap/SplitText")).default;
            gsap.registerPlugin(SplitText, ScrollTrigger);

            if (!splitRef.current) return;

            const instance = new SplitText(splitRef.current, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            split = instance;

            gsap.set(instance.chars, {
                opacity: 0,
                x: 50,
            });

            gsap.to(instance.chars, {
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
    }, [nav]);

    return (
        <>
            {/* about us area wrapper main */}
            <div className="rts-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left">
                                {page.eyebrow && (
                                    <span className="pre">{page.eyebrow}</span>
                                )}
                                {page.bgTitle && (
                                    <span className="bg-title">{page.bgTitle}</span>
                                )}
                                <h1
                                    className="title rts-text-anime-style-1"
                                    ref={splitRef}
                                >
                                    {page.h1}
                                </h1>
                                {page.heroDescription && (
                                    <p className="disc">{page.heroDescription}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-area">
                    <Image
                        src="/assets/images/about/shape/01.png"
                        alt=""
                        className="one"
                        width={132}
                        height={132}
                    />
                    <Image
                        src="/assets/images/about/shape/02.png"
                        alt=""
                        className="two"
                        width={90}
                        height={90}
                    />
                    <Image
                        src="/assets/images/about/shape/03.png"
                        alt=""
                        className="three"
                        width={234}
                        height={154}
                    />
                </div>
            </div>
            {/* about us area wrapper main end */}
        </>
    );
}

export default BreadcrumbTwo;
