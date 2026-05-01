"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

type ServicesOneProps = {
  id?: string;
};

function ServicesOne({ id }: ServicesOneProps) {
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
            {/* rts service area start */}
            <div id={id} className="rts-service-area pt--40 pb--60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-two center">
                                <span className="bg-content">Services</span>
                                <span className="pre">our Service</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    High Quality Services
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-2 mt--30">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-bg-style-one-wrapper">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="service-style-swiper-wrapper-two">
                                            <Swiper
                                                modules={[Pagination]}
                                                slidesPerView={3}
                                                spaceBetween={30}
                                                loop={true}
                                                centeredSlides={true}
                                                speed={1000}
                                                pagination={{
                                                    el: ".swiper-pagination",
                                                    clickable: true,
                                                }}
                                                breakpoints={{
                                                    1500: { slidesPerView: 3 },
                                                    1300: { slidesPerView: 3 },
                                                    991: { slidesPerView: 2, centeredSlides: false },
                                                    767: { slidesPerView: 2, centeredSlides: false },
                                                    575: { slidesPerView: 1 },
                                                    0: { slidesPerView: 1 },
                                                }}
                                                className="mySwiper-service-1"
                                                >
                                                <SwiperSlide>
                                                    <div className="single-service-signle-wrapper">
                                                        <div className="icons">
                                                            <img
                                                                loading="lazy"
                                                                src="/assets/images/service/icons/01.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="information">
                                                            <h5 className="title">Business Planning</h5>
                                                            <p className="disc">
                                                                Sagitis himos pulvinar morb socis laoreet posuere
                                                                enim non auctor etiam pretium libero
                                                            </p>
                                                            <a
                                                                href="/service-details"
                                                                className="arrow-right"
                                                            >
                                                                <i className="fa-sharp fa-solid fa-arrow-right" />
                                                                <span>Read More</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-service-signle-wrapper">
                                                        <div className="icons">
                                                            <img
                                                                loading="lazy"
                                                                src="/assets/images/service/icons/02.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="information">
                                                            <h5 className="title">Process Development</h5>
                                                            <p className="disc">
                                                                Sagitis himos pulvinar morb socis laoreet posuere
                                                                enim non auctor etiam pretium libero
                                                            </p>
                                                            <a
                                                                href="/service-details"
                                                                className="arrow-right"
                                                            >
                                                                <i className="fa-sharp fa-solid fa-arrow-right" />
                                                                <span>Read More</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-service-signle-wrapper">
                                                        <div className="icons">
                                                            <img
                                                                loading="lazy"
                                                                src="/assets/images/service/icons/03.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="information">
                                                            <h5 className="title">Strategy &amp; Planning</h5>
                                                            <p className="disc">
                                                                Sagitis himos pulvinar morb socis laoreet posuere
                                                                enim non auctor etiam pretium libero
                                                            </p>
                                                            <a
                                                                href="/service-details"
                                                                className="arrow-right"
                                                            >
                                                                <i className="fa-sharp fa-solid fa-arrow-right" />
                                                                <span>Read More</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-service-signle-wrapper">
                                                        <div className="icons">
                                                            <img
                                                                loading="lazy"
                                                                src="/assets/images/service/icons/01.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="information">
                                                            <h5 className="title">Business Goal</h5>
                                                            <p className="disc">
                                                                Sagitis himos pulvinar morb socis laoreet posuere
                                                                enim non auctor etiam pretium libero
                                                            </p>
                                                            <a href="#" className="arrow-right">
                                                                <i className="fa-sharp fa-solid fa-arrow-right" />
                                                                <span>Read More</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-service-signle-wrapper">
                                                        <div className="icons">
                                                            <img
                                                                loading="lazy"
                                                                src="/assets/images/service/icons/01.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="information">
                                                            <h5 className="title">Business Goal</h5>
                                                            <p className="disc">
                                                                Sagitis himos pulvinar morb socis laoreet posuere
                                                                enim non auctor etiam pretium libero
                                                            </p>
                                                            <a href="#" className="arrow-right">
                                                                <i className="fa-sharp fa-solid fa-arrow-right" />
                                                                <span>Read More</span>
                                                            </a>
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
            {/* rts service area end */}
        </>

    )
}

export default ServicesOne