'use client'
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function TestimonialsNine() {
    return (
        <>
            {/* rts-testimonials area start */}
            <div className="rts-testimonials-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-five center mb--40">
                                <span className="pre">Testimonial</span>
                                <h2 className="title">What Our Customers Say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--10">
                        <div className="col-lg-12">
                            <div className="rts-testimonials-area-main-wrapper">
                                <Swiper
                                    className="mySwiper-testimonails-9"
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    slidesPerGroup={1}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    speed={1000}
                                >
                                    <SwiperSlide>
                                        <div className="single-testimoanils-9">
                                            <div className="brand-logo">
                                                <img
                                                    src="assets/images/testimonials/01.svg"
                                                    alt="brand"
                                                />
                                            </div>
                                            <p className="disc">
                                                I can't recommend The Gourmet Haven enough. It's a place
                                                for special occasions, date nights, or whenever you're in
                                                the mood for a culinary adventure. The combination of
                                                exceptional.
                                            </p>
                                            <div className="author-area">
                                                <h5 className="title">William Henry</h5>
                                                <p className="name">
                                                    Designer at <span>Vertex Agency</span>
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimoanils-9">
                                            <div className="brand-logo">
                                                <img
                                                    src="assets/images/testimonials/01.svg"
                                                    alt="brand"
                                                />
                                            </div>
                                            <p className="disc">
                                                I can't recommend The Gourmet Haven enough. It's a place
                                                for special occasions, date nights, or whenever you're in
                                                the mood for a culinary adventure. The combination of
                                                exceptional.
                                            </p>
                                            <div className="author-area">
                                                <h5 className="title">William Henry</h5>
                                                <p className="name">
                                                    Designer at <span>Vertex Agency</span>
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimoanils-9">
                                            <div className="brand-logo">
                                                <img
                                                    src="assets/images/testimonials/01.svg"
                                                    alt="brand"
                                                />
                                            </div>
                                            <p className="disc">
                                                I can't recommend The Gourmet Haven enough. It's a place
                                                for special occasions, date nights, or whenever you're in
                                                the mood for a culinary adventure. The combination of
                                                exceptional.
                                            </p>
                                            <div className="author-area">
                                                <h5 className="title">William Henry</h5>
                                                <p className="name">
                                                    Designer at <span>Vertex Agency</span>
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimoanils-9">
                                            <div className="brand-logo">
                                                <img
                                                    src="assets/images/testimonials/01.svg"
                                                    alt="brand"
                                                />
                                            </div>
                                            <p className="disc">
                                                I can't recommend The Gourmet Haven enough. It's a place
                                                for special occasions, date nights, or whenever you're in
                                                the mood for a culinary adventure. The combination of
                                                exceptional.
                                            </p>
                                            <div className="author-area">
                                                <h5 className="title">William Henry</h5>
                                                <p className="name">
                                                    Designer at <span>Vertex Agency</span>
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-testimoanils-9">
                                            <div className="brand-logo">
                                                <img
                                                    src="assets/images/testimonials/01.svg"
                                                    alt="brand"
                                                />
                                            </div>
                                            <p className="disc">
                                                I can't recommend The Gourmet Haven enough. It's a place
                                                for special occasions, date nights, or whenever you're in
                                                the mood for a culinary adventure. The combination of
                                                exceptional.
                                            </p>
                                            <div className="author-area">
                                                <h5 className="title">William Henry</h5>
                                                <p className="name">
                                                    Designer at <span>Vertex Agency</span>
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="swiper-pagination" />
                                </Swiper>
                                <div className="swiper-button-next">
                                    <i className="fa-solid fa-arrow-right" />
                                </div>
                                <div className="swiper-button-prev">
                                    <i className="fa-solid fa-arrow-left" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts-testimonials area end */}
        </>

    )
}

export default TestimonialsNine