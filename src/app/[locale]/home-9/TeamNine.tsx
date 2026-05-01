"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

gsap.registerPlugin(SplitText, ScrollTrigger);

function TeamNine() {

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
            {/* rts team area start */}
            <div className="rts-team-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="title-style-five center mb--40">
                            <span className="pre">Expert Members</span>
                            <h2 className="title rts-text-anime-style-1" ref={splitRef}>Professionals Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                className="mySwiperh1_team pt--10 pb--80"
                                dir="ltr"
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={4}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                centeredSlides={false}
                                speed={1000}
                                pagination={{ clickable: true }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                autoplay={{ delay: 2000 }}
                                breakpoints={{
                                    1500: { slidesPerView: 4 },
                                    1300: { slidesPerView: 4 },
                                    991: { slidesPerView: 3 },
                                    767: { slidesPerView: 3 },
                                    575: { slidesPerView: 2 },
                                    0: { slidesPerView: 1 },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href="/team-details">
                                                <img
                                                    src="assets/images/team/12.webp"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href="/team-details">
                                                <h5 className="title">Archer Graham</h5>
                                            </Link>
                                            <p>Founder</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href="/team-details">
                                                <img
                                                    src="assets/images/team/13.webp"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href="/team-details">
                                                <h5 className="title">Amelia Clover</h5>
                                            </Link>
                                            <p>Co-Founder</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href="/team-details">
                                                <img
                                                    src="assets/images/team/14.webp"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href="/team-details">
                                                <h5 className="title">Beckett Hayden</h5>
                                            </Link>
                                            <p>Deputy Manager</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href="/team-details">
                                                <img
                                                    src="assets/images/team/15.webp"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href="/team-details">
                                                <h5 className="title">Julian Wyat</h5>
                                            </Link>
                                            <p>Finance Manager</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-single-one-start">
                                        <div className="team-image-area">
                                            <Link href="/team-details">
                                                <img
                                                    src="assets/images/team/07.webp"
                                                    alt="Business_Team_single"
                                                />
                                                <div className="team-social">
                                                    <div className="main">
                                                        <i className="fal fa-plus" />
                                                    </div>
                                                    <div className="team-social-one">
                                                        <i className="fab fa-youtube" />
                                                        <i className="fab fa-twitter" />
                                                        <i className="fab fa-instagram" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="single-details">
                                            <Link href="/team-details">
                                                <h5 className="title">Julian Wyat</h5>
                                            </Link>
                                            <p>Finance Manager</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="swiper-pagination" />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts team area end */}
        </>

    )
}

export default TeamNine