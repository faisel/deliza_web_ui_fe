"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

type BannerFourProps = {
  id?: string;
};
function BannerFour({ id }: BannerFourProps) {
    return (
        <>
            {/* banner three area start */}
            <div id={id} className="banner-four-area-main-wrapper">
                <Swiper
                    className="mySwiper-banner-four"
                    dir="ltr"
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={0}
                    slidesPerGroup={1}
                    loop={true}
                    centeredSlides={false}
                    speed={1500}
                    pagination={{
                        el: ".swiper-pagination",  // <-- exact same config
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,  // <-- exact same delay
                    }}
                >
                    <SwiperSlide>
                        <div className="swiper-area-banner-four-wrapper">
                            <div className="banner-four-bg bg_image">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner-content-wrapper-four-banner">
                                                <span className="pre">Make Your Strategy Strong</span>
                                                <h1 className="title">
                                                    Strengthen Your <br />{" "}
                                                    <span className="in">Market</span> Presence
                                                </h1>
                                                <p className="disc">
                                                    Our team of dedicated professionals brings expertise,
                                                    passion, and a customer-first approach to every project,
                                                    ensuring you receive the highest level of service.
                                                </p>
                                                <div className="button-wrapper">
                                                    <a
                                                        href="/contact"
                                                        className="rts-btn btn-primary btn-white"
                                                    >
                                                        Get Started
                                                    </a>
                                                    <a
                                                        href="/contact"
                                                        className="rts-btn btn-primary btn-border"
                                                    >
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-area-banner-four-wrapper">
                            <div className="banner-four-bg bg_image two">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner-content-wrapper-four-banner">
                                                <span className="pre">Make Your Strategy Strong</span>
                                                <h1 className="title">
                                                    Best Sell <br /> <span className="in">Market</span>{" "}
                                                    Presence
                                                </h1>
                                                <p className="disc">
                                                    Our team of dedicated professionals brings expertise,
                                                    passion, and a customer-first approach to every project,
                                                    ensuring you receive the highest level of service.
                                                </p>
                                                <div className="button-wrapper">
                                                    <a href="#" className="rts-btn btn-primary btn-white">
                                                        Get Started
                                                    </a>
                                                    <a href="#" className="rts-btn btn-primary btn-border">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-area-banner-four-wrapper">
                            <div className="banner-four-bg bg_image three">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner-content-wrapper-four-banner">
                                                <span className="pre">Make Your Strategy Strong</span>
                                                <h1 className="title">
                                                    Grow Your <br /> <span className="in">Market</span> Sell
                                                </h1>
                                                <p className="disc">
                                                    Our team of dedicated professionals brings expertise,
                                                    passion, and a customer-first approach to every project,
                                                    ensuring you receive the highest level of service.
                                                </p>
                                                <div className="button-wrapper">
                                                    <a href="#" className="rts-btn btn-primary btn-white">
                                                        Get Started
                                                    </a>
                                                    <a href="#" className="rts-btn btn-primary btn-border">
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination" />
                <div className="banner-shape-left-right">
                    <div className="left">
                        <Image
                            src="/assets/images/banner/shape/left.svg"
                            alt="left"
                            width={235}
                            height={508}
                        />
                    </div>
                    <div className="right">
                        <Image
                            src="/assets/images/banner/shape/right.svg"
                            alt="left"
                            width={370}
                            height={614}
                        />
                    </div>
                </div>
            </div>
            {/* banner three area end */}
        </>

    )
}

export default BannerFour