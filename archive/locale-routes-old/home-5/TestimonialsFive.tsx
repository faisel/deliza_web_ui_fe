'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";

gsap.registerPlugin(SplitText, ScrollTrigger);

function TestimonialsFive() {
    const splitRef = useRef<HTMLHeadingElement>(null);

      // SplitText animation
  useEffect(() => {
    if (!splitRef.current) return;

    const element = splitRef.current;

    // Reset previous animation if exists
    if ((element as any).animation) {
      (element as any).animation.progress(1).kill();
      (element as any).split.revert();
    }

    (element as any).split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });

    gsap.set(element, { perspective: 400 });
    gsap.set((element as any).split.chars, { opacity: 0, x: 50 });

    (element as any).animation = gsap.to((element as any).split.chars, {
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
      },
      x: 0,
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
    });
  }, []);
    return (
        <>
            {/* tectimonisl-area start */}
            <div className="rts-testimonials-area-five rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-between-area" dir="ltr">
                                <div className="title-style-five">
                                    <span className="pre">Our Testimonials</span>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Our Customer Feedbacks
                                    </h2>
                                </div>
                                <div className="pagination-wrapper">
                                    <div className="swiper-button-prevs">
                                        <i className="fa-solid fa-regular fa-arrow-left" />
                                    </div>
                                    <div className="swiper-pagination-fractions" />
                                    <div className="swiper-button-nexts">
                                        <i className="fa-solid fa-regular fa-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
                        <div className="col-lg-12">
                            <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            className="mySwiper-testimonials-5"
                            dir='ltr'
                            slidesPerView={2}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                el: ".swiper-pagination-fractions",
                                type: "fraction",
                                formatFractionCurrent: (number) => `0${number}`,
                                formatFractionTotal: (number) => `0${number}`,
                            }}
                            navigation={{
                                nextEl: ".swiper-button-nexts",
                                prevEl: ".swiper-button-prevs",
                            }}
                            breakpoints={{
                                1500: {
                                slidesPerView: 2,
                                },
                                1300: {
                                slidesPerView: 2,
                                },
                                1199: {
                                slidesPerView: 2,
                                },
                                767: {
                                slidesPerView: 2,
                                },
                                575: {
                                slidesPerView: 1,
                                },
                                0: {
                                slidesPerView: 1,
                                },
                            }}
                            >
                                <SwiperSlide>
                                    <div className="single-testimonials-style-five">
                                        <div className="thumbnail">
                                            <Image
                                                src="/assets/images/testimonials/03.webp"
                                                alt="testimoanils"
                                                width={520}
                                                height={622}
                                            />
                                        </div>
                                        <div className="inner-content">
                                            <div className="name-area">
                                                <h5 className="title">Mr. Mike</h5>
                                                <span>Finance</span>
                                            </div>
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <Image
                                                        src="/assets/images/testimonials/icons/03.webp"
                                                        alt="Client_logo"
                                                        width={123}
                                                        height={31}
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-testimonials-style-five">
                                        <div className="thumbnail">
                                            <Image
                                                src="/assets/images/testimonials/04.webp"
                                                alt="testimoanils"
                                                width={520}
                                                height={622}
                                            />
                                        </div>
                                        <div className="inner-content">
                                            <div className="name-area">
                                                <h5 className="title">Jonathon Doe</h5>
                                                <span>Finance</span>
                                            </div>
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <Image
                                                        src="/assets/images/testimonials/icons/02.webp"
                                                        alt="Client_logo"
                                                        width={122}
                                                        height={33}
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-testimonials-style-five">
                                        <div className="thumbnail">
                                            <Image
                                                src="/assets/images/testimonials/03.webp"
                                                alt="testimoanils"
                                                width={520}
                                                height={622}
                                            />
                                        </div>
                                        <div className="inner-content">
                                            <div className="name-area">
                                                <h5 className="title">Jonathon Doe</h5>
                                                <span>Finance</span>
                                            </div>
                                            <p className="disc">
                                                “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                mattis arcu dictums augue volutpat felis etiam suspendisse
                                                rhoncus mauris dignissim ante”
                                            </p>
                                            <div className="body-end">
                                                <a href="#">
                                                    <Image
                                                        src="/assets/images/testimonials/icons/03.webp"
                                                        alt="Client_logo"
                                                        width={123}
                                                        height={31}
                                                    />
                                                </a>
                                                <div className="star-icon">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* tectimonisl-area end */}
        </>

    )
}

export default TestimonialsFive