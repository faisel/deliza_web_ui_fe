"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function TestimonialsSix() {
    return (
        <>
            {/* rts testimonials area start */}
            <div className="rts-testimonials-area-wrapper rts-section-gap bg_testimonials-6 bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-five center">
                                <span className="pre">Our testimonial</span>
                                <h2 className="title">2356+ Customer Feedback’s</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-12">
                            <div className="testimonails-main-wraqpper-6">
                                <div className="swiper mySwiper-testimoanils-6" dir="ltr">
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        className="mySwiper-testimoanils-6"
                                        dir="ltr"
                                        slidesPerView={2}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            el: ".swiper-pagination",
                                            clickable: true,
                                        }}
                                        navigation={{
                                            nextEl: ".swiper-button-nexts",
                                            prevEl: ".swiper-button-prevs",
                                        }}
                                        breakpoints={{
                                            1500: { slidesPerView: 2 },
                                            1300: { slidesPerView: 2 },
                                            1199: { slidesPerView: 2 },
                                            767: { slidesPerView: 2 },
                                            575: { slidesPerView: 1 },
                                            0: { slidesPerView: 1 },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <div className="single-testimonials-6">
                                                <div className="top">
                                                    <h5 className="title">Great Business Solution</h5>
                                                    <p className="disc">
                                                        “Dictum egravida praimis rhoncus maecenas qismart curae
                                                        mauris turpis quisque ad dictumst semper tempor aliquam
                                                        senectus commodo”
                                                    </p>
                                                </div>
                                                <div className="botton-content">
                                                    <div className="avatar-area">
                                                        <div className="thumbnail">
                                                            <Image
                                                                src="/assets/images/testimonials/avatar/04.webp"
                                                                alt="avatar"
                                                                width={92}
                                                                height={92}
                                                            />
                                                        </div>
                                                        <div className="inner">
                                                            <h5 className="title">Logan James</h5>
                                                            <p>
                                                                Manager at <span>Catalyst Agency</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-testimonials-6">
                                                <div className="top">
                                                    <h5 className="title">Best Marketing Solution</h5>
                                                    <p className="disc">
                                                        “Dictum egravida praimis rhoncus maecenas qismart curae
                                                        mauris turpis quisque ad dictumst semper tempor aliquam
                                                        senectus commodo”
                                                    </p>
                                                </div>
                                                <div className="botton-content">
                                                    <div className="avatar-area">
                                                        <div className="thumbnail">
                                                            <Image
                                                                src="/assets/images/testimonials/avatar/04.webp"
                                                                alt="avatar"
                                                                width={92}
                                                                height={92}
                                                            />
                                                        </div>
                                                        <div className="inner">
                                                            <h5 className="title">Logan James</h5>
                                                            <p>
                                                                Manager at <span>Catalyst Agency</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-testimonials-6">
                                                <div className="top">
                                                    <h5 className="title">Great Business Solution</h5>
                                                    <p className="disc">
                                                        “Dictum egravida praimis rhoncus maecenas qismart curae
                                                        mauris turpis quisque ad dictumst semper tempor aliquam
                                                        senectus commodo”
                                                    </p>
                                                </div>
                                                <div className="botton-content">
                                                    <div className="avatar-area">
                                                        <div className="thumbnail">
                                                            <Image
                                                                src="/assets/images/testimonials/avatar/04.webp"
                                                                alt="avatar"
                                                                width={92}
                                                                height={92}
                                                            />
                                                        </div>
                                                        <div className="inner">
                                                            <h5 className="title">Logan James</h5>
                                                            <p>
                                                                Manager at <span>Catalyst Agency</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="stars-area">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
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
            {/* rts testimonials area end */}
        </>

    )
}

export default TestimonialsSix