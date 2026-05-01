'use client'

import { useEffect, useRef } from "react";
interface OdometerElement extends HTMLElement {
    od?: any;
}
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
type BannerSevenProps ={
  id?: string;
}


function BannerSeven({ id }: BannerSevenProps) {
    const odometerRefs = useRef<OdometerElement[]>([]);

    // Odometer animation
        useEffect(() => {
            import("odometer").then((module) => {
                const Odometer = module.default;
    
                // Initialize odometer
                odometerRefs.current.forEach((el) => {
                    el.od = new Odometer({
                        el,
                        value: 0,
                        format: "d",
                        duration: 2000,
                    });
                });
    
                const isInViewport = (el: OdometerElement) => {
                    const rect = el.getBoundingClientRect();
                    return (
                        rect.top < window.innerHeight &&
                        rect.bottom >= 0
                    );
                };
    
                const triggerOdometer = (el: OdometerElement) => {
                    if (!el.classList.contains("odometer-triggered")) {
                        el.od.update(el.dataset.count);
                        el.classList.add("odometer-triggered");
                    }
                };
    
                const handleScroll = () => {
                    odometerRefs.current.forEach((el) => {
                        if (isInViewport(el)) triggerOdometer(el);
                    });
                };
    
                handleScroll();
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
            });
        }, []);
    
    return (
        <div id={id} className="banner-seven-swiper-wrapper">
            {/* Swiper */}
            <div className="swiper mySwiper-banner-seven" dir="ltr">
                <Swiper
                modules={[Pagination, Autoplay]}
                className="mySwiper-banner-seven"
                dir='ltr'
                slidesPerView={1}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                    return `<span class="${className}">0${index + 1}</span>`;
                    },
                }}
                >
                    <SwiperSlide>
                        {/* index seven area start */}
                        <div className="index-seven-area rts-section-gap bg_banner-seven bg_image">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-seven-inner-content">
                                            <span className="pre-title">
                                                <img src="/assets/images/banner/icon/01.svg" alt="banner" />
                                                Business Success Starts Here
                                            </span>
                                            <h1 className="title">
                                                Business <br />
                                                <span>Growth</span>
                                            </h1>
                                            <p className="disc">
                                                Maecenas quis integer aenean nisl, viverra morbi magna amet,
                                                viverra. Sollicitudin posuere scelerisque urna, urna. At
                                                vestibulum fringilla.
                                            </p>
                                            <Link
                                                href="/service"
                                                className="rts-btn btn-primary btn-white"
                                            >
                                                View Services
                                            </Link>
                                            <div className="counter-area-banner-7">
                                                <h2 className="counter title-counter">
                                                    <span
                                                        className="odometer"
                                                        data-count={28}
                                                        ref={(el) => {
                                                        if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                            odometerRefs.current.push(el as OdometerElement);
                                                        }
                                                        }}
                                                    >
                                                        00
                                                    </span>
                                                    K+
                                                </h2>
                                                <p>Business Revenue</p>
                                                <div className="stars-area-main">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-regular fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* index seven area end */}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* index seven area start */}
                        <div className="index-seven-area rts-section-gap bg_banner-seven two bg_image">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-seven-inner-content">
                                            <span className="pre-title">
                                                <img src="/assets/images/banner/icon/01.svg" alt="banner" />
                                                Business Success Starts Here
                                            </span>
                                            <h1 className="title">
                                                Business <br />
                                                <span>Growth</span>
                                            </h1>
                                            <p className="disc">
                                                Maecenas quis integer aenean nisl, viverra morbi magna amet,
                                                viverra. Sollicitudin posuere scelerisque urna, urna. At
                                                vestibulum fringilla.
                                            </p>
                                            <Link
                                                href="/service"
                                                className="rts-btn btn-primary btn-white"
                                            >
                                                View Services
                                            </Link>
                                            <div className="counter-area-banner-7">
                                                <h2 className="counter title-counter">
                                                    <span
                                                        className="odometer"
                                                        data-count={28}
                                                        ref={(el) => {
                                                        if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                            odometerRefs.current.push(el as OdometerElement);
                                                        }
                                                        }}
                                                    >
                                                        00
                                                    </span>
                                                    K+
                                                </h2>
                                                <p>Business Revenue</p>
                                                <div className="stars-area-main">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-regular fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* index seven area end */}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* index seven area start */}
                        <div className="index-seven-area rts-section-gap bg_banner-seven three bg_image">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-seven-inner-content">
                                            <span className="pre-title">
                                                <img src="/assets/images/banner/icon/01.svg" alt="banner" />
                                                Business Success Starts Here
                                            </span>
                                            <h1 className="title">
                                                Business <br />
                                                <span>Growth</span>
                                            </h1>
                                            <p className="disc">
                                                Maecenas quis integer aenean nisl, viverra morbi magna amet,
                                                viverra. Sollicitudin posuere scelerisque urna, urna. At
                                                vestibulum fringilla.
                                            </p>
                                            <Link
                                                href="/service"
                                                className="rts-btn btn-primary btn-white"
                                            >
                                                View Services
                                            </Link>
                                            <div className="counter-area-banner-7">
                                                <h2 className="counter title-counter">
                                                    <span
                                                        className="odometer"
                                                        data-count={28}
                                                        ref={(el) => {
                                                        if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                            odometerRefs.current.push(el as OdometerElement);
                                                        }
                                                        }}
                                                    >
                                                        00
                                                    </span>
                                                    K+
                                                </h2>
                                                <p>Business Revenue</p>
                                                <div className="stars-area-main">
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-regular fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* index seven area end */}
                    </SwiperSlide>
                    <div className="swiper-pagination" />
                </Swiper>
            </div>
            <div className="email-area-left">
                <i className="fa-regular fa-envelope" />
                <a href="#">info@invema.com</a>
            </div>
            <div className="language-area">
                <span>en.</span>
                <span>fr.</span>
                <span>ge.</span>
            </div>
            <a href="#" className="to-bottom-area">
                <i className="fa-light fa-arrow-up" />
                Scroll
            </a>
        </div>

    )
}

export default BannerSeven