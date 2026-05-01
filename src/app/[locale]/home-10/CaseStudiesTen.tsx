"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

gsap.registerPlugin(SplitText, ScrollTrigger);

type CaseStudiesTenProps ={
  id?: string;
}

function CaseStudiesTen({ id }: CaseStudiesTenProps) {
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
            {/* rts projects area start */}
            <div id={id} className="rts-projects-area-start-10 bg_images rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-10">
                                <span className="pre">Recent Case Studies</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>Our Business Cases</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-1680 mt--40">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-studies-wrapper-main-5">
                                <Swiper
                                    className="mySwiper-case-studies-5"
                                    dir="ltr"
                                    modules={[Navigation, Pagination, Autoplay]}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    slidesPerGroup={1}
                                    loop={true}
                                    centeredSlides={false}
                                    speed={1000}
                                    autoplay={{
                                        delay: 2000,
                                    }}
                                    pagination={{
                                        el: ".swiper-pagination-fraction",
                                        type: "fraction",
                                        formatFractionCurrent: (number) => "0" + number,
                                        formatFractionTotal: (number) => "0" + number,
                                    }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
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
                                            <a href="/project-details" className="thumbnail">
                                                <img src="assets/images/project/07.webp" alt="project" />
                                            </a>
                                            <div className="inner">
                                                <a href="/project-details">
                                                    <h3 className="title">Digital Business Solution</h3>
                                                    <span>Business Strategy</span>
                                                </a>
                                            </div>
                                            <div className="eye">
                                                <img src="assets/images/project/eye.svg" alt="project" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-case-studies-four">
                                            <a href="/project-details" className="thumbnail">
                                                <img src="assets/images/project/08.webp" alt="project" />
                                            </a>
                                            <div className="inner">
                                                <a href="/project-details">
                                                    <h3 className="title">Digital Business Solution</h3>
                                                    <span>Business Strategy</span>
                                                </a>
                                            </div>
                                            <div className="eye">
                                                <img src="assets/images/project/eye.svg" alt="project" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-case-studies-four">
                                            <a href="/project-details" className="thumbnail">
                                                <img src="assets/images/project/09.webp" alt="project" />
                                            </a>
                                            <div className="inner">
                                                <a href="/project-details">
                                                    <h3 className="title">Digital Business Solution</h3>
                                                    <span>Business Strategy</span>
                                                </a>
                                            </div>
                                            <div className="eye">
                                                <img src="assets/images/project/eye.svg" alt="project" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-case-studies-four">
                                            <a href="/project-details" className="thumbnail">
                                                <img src="assets/images/project/08.webp" alt="project" />
                                            </a>
                                            <div className="inner">
                                                <a href="/project-details">
                                                    <h3 className="title">Digital Business Solution</h3>
                                                    <span>Business Strategy</span>
                                                </a>
                                            </div>
                                            <div className="eye">
                                                <img src="assets/images/project/eye.svg" alt="project" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="swiper-pagination-fraction" />
                                    <div className="swiper-button-next">
                                        <i className="fa-solid fa-regular fa-arrow-right" />
                                    </div>
                                    <div className="swiper-button-prev">
                                        <i className="fa-solid fa-regular fa-arrow-left" />
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts projects area end */}
        </>

    )
}

export default CaseStudiesTen