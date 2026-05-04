"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "@/i18n/LocalizedLink";

gsap.registerPlugin(SplitText, ScrollTrigger);

function CaseStudies() {
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
            {/* rts business case area start */}
            <div className="rts-business-case-area rts-section-gap" dir="ltr">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tite-between-area-8 position-relative">
                                <div className="title-style-one eight left mb--30">
                                    <span className="pre">RECENT CASE STUDIES </span>
                                    <h2 className="title rts-text-anime-style-1 uppercase" ref={splitRef}>
                                        Our Business <span>Cases</span>
                                    </h2>
                                </div>
                                <div className="next-prev-area">
                                    <div className="swiper-button-next">
                                        <i className="fa-solid fa-regular fa-arrow-right" />
                                    </div>
                                    <div className="swiper-button-prev">
                                        <i className="fa-solid fa-regular fa-arrow-left" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt--40">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="flowating-right">
                                <div className="case-studies-wrapper-main-5">
                                    <Swiper
                                        className="mySwiper-case-studies-5 pb--0"
                                        modules={[Navigation, Pagination, Autoplay]}
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        loop={true}
                                        centeredSlides={false}
                                        speed={1000}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        pagination={{
                                            el: ".swiper-pagination-fraction",
                                            type: "fraction",
                                            formatFractionCurrent: (num) => `0${num}`,
                                            formatFractionTotal: (num) => `0${num}`,
                                        }}
                                        autoplay={{
                                            delay: 2000,
                                        }}
                                        breakpoints={{
                                            1500: { slidesPerView: 3 },
                                            1300: { slidesPerView: 3 },
                                            991: { slidesPerView: 2 },
                                            767: { slidesPerView: 2 },
                                            575: { slidesPerView: 1 },
                                            0: { slidesPerView: 1 },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <div className="single-case-studies-four">
                                                <Link href="/project-details" className="thumbnail">
                                                    <img
                                                        src="/assets/images/project/07.webp"
                                                        alt="project"
                                                    />
                                                </Link>
                                                <div className="inner">
                                                    <Link href="/project-details">
                                                        <h3 className="title">Digital Business Solution</h3>
                                                        <span>Business Strategy</span>
                                                    </Link>
                                                </div>
                                                <div className="eye">
                                                    <img
                                                        src="/assets/images/project/eye.svg"
                                                        alt="project"
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-case-studies-four">
                                                <Link href="/project-details" className="thumbnail">
                                                    <img
                                                        src="/assets/images/project/08.webp"
                                                        alt="project"
                                                    />
                                                </Link>
                                                <div className="inner">
                                                    <Link href="/project-details">
                                                        <h3 className="title">Marketing Business Solution</h3>
                                                        <span>Business Strategy</span>
                                                    </Link>
                                                </div>
                                                <div className="eye">
                                                    <img
                                                        src="/assets/images/project/eye.svg"
                                                        alt="project"
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-case-studies-four">
                                                <Link href="/project-details" className="thumbnail">
                                                    <img
                                                        src="/assets/images/project/09.webp"
                                                        alt="project"
                                                    />
                                                </Link>
                                                <div className="inner">
                                                    <Link href="/project-details">
                                                        <h3 className="title">Best Business Solution</h3>
                                                        <span>Business Strategy</span>
                                                    </Link>
                                                </div>
                                                <div className="eye">
                                                    <img
                                                        src="/assets/images/project/eye.svg"
                                                        alt="project"
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-case-studies-four">
                                                <Link href="/project-details" className="thumbnail">
                                                    <img
                                                        src="/assets/images/project/08.webp"
                                                        alt="project"
                                                    />
                                                </Link>
                                                <div className="inner">
                                                    <Link href="/project-details">
                                                        <h3 className="title">Website Business Solution</h3>
                                                        <span>Business Strategy</span>
                                                    </Link>
                                                </div>
                                                <div className="eye">
                                                    <img
                                                        src="/assets/images/project/eye.svg"
                                                        alt="project"
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts business case area end */}
        </>

    )
}

export default CaseStudies