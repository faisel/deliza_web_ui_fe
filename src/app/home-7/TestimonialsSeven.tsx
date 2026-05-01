'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

function TestimonialsSeven() {
    return (
        <>
            {/* rts testimonials area start */}
            <div className="rts-testimonails-area-main rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-five center">
                                <span className="pre">Testimonial</span>
                                <h2 className="title">
                                    What They Say About <br /> Our Company
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--45">
                        <div className="col-lg-12">
                            <Swiper
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper-testimoanils-7"
                                dir='ltr'
                                slidesPerView={1}
                                spaceBetween={0}
                                slidesPerGroup={1}
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
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                                }}
                                breakpoints={{
                                1500: {
                                    slidesPerView: 1,
                                },
                                1300: {
                                    slidesPerView: 1,
                                },
                                1199: {
                                    slidesPerView: 1,
                                },
                                767: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
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
                                    <div className="testimonails-area-seven">
                                        <div className="thumbnail-testimoanis">
                                            <img
                                                src="/assets/images/testimonials/06.webp"
                                                alt="testimonials"
                                            />
                                        </div>
                                        <div className="right-content-area-main-wrapper">
                                            <img
                                                src="/assets/images/testimonials/icons/03.webp"
                                                alt="testimonials"
                                            />
                                            <p className="disc">
                                                I can't recommend The Gourmet Haven enough. It's a place
                                                for special occasions, date nights, or whenever you're in
                                                the mood for a culinary adventure. The combination of
                                                exceptional.
                                            </p>
                                            <div className="botton-user">
                                                <h6 className="title">William Henry</h6>
                                                <p className="desig">
                                                    Designer at <span>Vertex Agency</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonails-area-seven">
                                        <div className="thumbnail-testimoanis">
                                            <img
                                                src="/assets/images/testimonials/06.webp"
                                                alt="testimonials"
                                            />
                                        </div>
                                        <div className="right-content-area-main-wrapper">
                                            <img
                                                src="/assets/images/testimonials/icons/03.webp"
                                                alt="testimonials"
                                            />
                                            <p className="disc">
                                                I can't recommend The Gourmet Haven enough. It's a place
                                                for special occasions, date nights, or whenever you're in
                                                the mood for a culinary adventure. The combination of
                                                exceptional.
                                            </p>
                                            <div className="botton-user">
                                                <h6 className="title">William Henry</h6>
                                                <p className="desig">
                                                    Designer at <span>Vertex Agency</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonails-area-seven">
                                        <div className="thumbnail-testimoanis">
                                            <img
                                                src="/assets/images/testimonials/06.webp"
                                                alt="testimonials"
                                            />
                                        </div>
                                        <div className="right-content-area-main-wrapper">
                                            <img
                                                src="/assets/images/testimonials/icons/03.webp"
                                                alt="testimonials"
                                            />
                                            <p className="disc">
                                                I can't recommend The Gourmet Haven enough. It's a place
                                                for special occasions, date nights, or whenever you're in
                                                the mood for a culinary adventure. The combination of
                                                exceptional.
                                            </p>
                                            <div className="botton-user">
                                                <h6 className="title">William Henry</h6>
                                                <p className="desig">
                                                    Designer at <span>Vertex Agency</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            <div className="swiper-button-next">
                                <i className="fa-solid fa-arrow-right" />
                            </div>
                            <div className="swiper-button-prev">
                                <i className="fa-solid fa-arrow-left" />
                            </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts testimonials area end */}
        </>

    )
}

export default TestimonialsSeven