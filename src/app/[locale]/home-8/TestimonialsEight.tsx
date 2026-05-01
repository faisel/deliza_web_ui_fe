"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
gsap.registerPlugin(SplitText, ScrollTrigger);

interface TestimonialsEightProps {
  className?: string
}

function TestimonialsEight({ className}: TestimonialsEightProps) {
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
            {/* rts testimoanisl area start */}
            <div className={`rts-testimonials-area rts-section-gapBottom ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-one eight center mb--30">
                                <span className="pre">Testimonial</span>
                                <h2 className="title rts-text-anime-style-1 uppercase" ref={splitRef}>
                                    What They Say About <br />
                                    <span>Our Company</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--40">
                        <div className="col-lg-12">
                            <div className="testimonails-8-mian-wrapper">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="circle-text">
                                            <img src="/assets/images/testimonials/07.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="testimoanials-8-swiper">
                                            <Swiper
                                                modules={[Autoplay, Pagination]}
                                                slidesPerView={1}
                                                spaceBetween={0}
                                                slidesPerGroup={1}
                                                loop={true}
                                                speed={1000}
                                                className="mySwiper-testimonisl-8"
                                                dir="ltr"
                                            >
                                                <SwiperSlide>
                                                    <div className="testimonails-inner-content">
                                                        <p className="disc">
                                                            I can't recommend The Gourmet Haven enough. It's a
                                                            place for special occasions, date nights, or
                                                            whenever you're in the mood for a culinary
                                                            adventure. The combination of exceptional.
                                                        </p>
                                                        <div className="author-area">
                                                            <div className="avatar">
                                                                <img
                                                                    src="/assets/images/testimonials/avatar/03.webp"
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="title">William Henry</h5>
                                                                <p>
                                                                    Designer at <span>Vertex Agency</span>{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonails-inner-content" dir="rtl">
                                                        <p className="disc">
                                                            I can't recommend The Gourmet Haven enough. It's a
                                                            place for special occasions, date nights, or
                                                            whenever you're in the mood for a culinary
                                                            adventure. The combination of exceptional.
                                                        </p>
                                                        <div className="author-area">
                                                            <div className="avatar">
                                                                <img
                                                                    src="/assets/images/testimonials/avatar/03.webp"
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="title">William Henry</h5>
                                                                <p>
                                                                    Designer at <span>Vertex Agency</span>{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="testimonails-inner-content" dir="rtl">
                                                        <p className="disc">
                                                            I can't recommend The Gourmet Haven enough. It's a
                                                            place for special occasions, date nights, or
                                                            whenever you're in the mood for a culinary
                                                            adventure. The combination of exceptional.
                                                        </p>
                                                        <div className="author-area">
                                                            <div className="avatar">
                                                                <img
                                                                    src="/assets/images/testimonials/avatar/03.webp"
                                                                    alt="avatar"
                                                                />
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="title">William Henry</h5>
                                                                <p>
                                                                    Designer at <span>Vertex Agency</span>{" "}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <div className="swiper-pagination" />
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts testimoanisl area end */}
        </>

    )
}

export default TestimonialsEight