"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BannerNineProps ={
  id?: string;
}

function BannerNine({ id }: BannerNineProps) {
    const splitRef = useRef<HTMLHeadingElement>(null);
    const circleTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (!splitRef.current) return;
    const text = splitRef.current.innerHTML;

    // Split into single characters but preserve <br> tags
    const chars = text.split(/(<br\s*\/?>)/g);

    splitRef.current.innerHTML = chars
        .map((char) => {
            if (char.match(/<br\s*\/?>/)) return char; // keep <br> as is
            if (char === " ") return `<span style="display:inline-block;width:0.5em"></span>`; // preserve spaces
            return `<span style="display:inline-block;transform:translateX(50px);opacity:0">${char}</span>`;
        })
        .join("");

    gsap.to(splitRef.current.querySelectorAll("span"), {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
        scrollTrigger: {
            trigger: splitRef.current,
            start: "top 95%",
        },
    });
}, []);


    /* ============================
    CIRCULAR TEXT ROTATION
    ============================ */
    useEffect(() => {
        const container = circleTextRef.current;
        if (!container) return;

        const text = " WATCH NOW * WATCH NOW * WATCH NOW * ";
        container.innerHTML = ""; // reset

        text.split("").forEach((letter, i) => {
            const span = document.createElement("span");
            span.innerText = letter;
            span.style.position = "absolute";
            span.style.left = "50%";
            span.style.top = "50%";
            span.style.transformOrigin = "0 85px"; // radius
            span.style.transform = `rotate(${i * (360 / text.length)}deg)`;
            container.appendChild(span);
        });
    }, []);

    return (
        <>
            {/* rts banner area nine */}
            <div id={id} className="rts-banner-area-9 rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="insurance-banner-inner">
                                <span className="pre">
                                    Start Growing Your Business Today
                                </span>

                                <h1 className="title rts-text-anime-style-1" ref={splitRef}>
                                    Your Best Trusted <br /> Insurance Solutions
                                </h1>

                                <p className="disc">
                                    Porttitor ornare fermentum aliquam pharetra facilisis gravida
                                    risus suscipit Dui feugiat fusce conubia ridiculus tristique
                                    parturient
                                </p>
                                <a href="/service" className="rts-btn btn-primary">
                                    Discover More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="image-right-absolute">
                    <Image
                        src="/assets/images/banner/12.webp"
                        alt="banner"
                        width={917}
                        height={850}
                    />
                </div>

                {/* =======================
                    CIRCLE TEXT AREA
                ======================= */}
                <div className="circle-text-main">
                    <div className="circle">
                        <div className="logo">
                            <Image
                                src="/assets/images/banner/icon/video.svg"
                                alt=""
                                width={43}
                                height={52}
                                aria-hidden="true"
                            />
                        </div>
                        <div className="text" ref={circleTextRef}></div>
                    </div>

                    <div className="vedio-icone">
                        <a
                            className="video-play-button play-video popup-video"
                            href="https://www.youtube.com/watch?v=vZE0j_WCRvI"
                        >
                            <span />
                        </a>
                        <div className="video-overlay">
                            <a href="#section1" className="video-overlay-close">×</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts banner area nine end */}
        </>
    );
}

export default BannerNine;
