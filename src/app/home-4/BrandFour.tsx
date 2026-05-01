"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function BrandFour() {
    return (
        <>
            {/* rts brand area start */}
            <div className="rts-brand-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-style-two-wrapper">
                                <Swiper
                                    className="mySwiper-brand-2"
                                    modules={[Autoplay, Navigation, Pagination]}
                                    slidesPerView={5}
                                    spaceBetween={54}
                                    slidesPerGroup={1}
                                    loop={true}
                                    centeredSlides={false}
                                    speed={1000}
                                    autoplay={{
                                        delay: 2000,
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
                                        1500: { slidesPerView: 5 },
                                        1300: { slidesPerView: 4 },
                                        991: { slidesPerView: 3 },
                                        767: { slidesPerView: 3 },
                                        575: { slidesPerView: 2 },
                                        0: { slidesPerView: 2 },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="single-brand">
                                            <img src="/assets/images/brand/01.webp" alt="brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-brand">
                                            <img src="/assets/images/brand/02.webp" alt="brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-brand">
                                            <img src="/assets/images/brand/03.webp" alt="brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-brand">
                                            <img src="/assets/images/brand/04.webp" alt="brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-brand">
                                            <img src="/assets/images/brand/05.webp" alt="brand" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-brand">
                                            <img src="/assets/images/brand/03.webp" alt="brand" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts brand area end */}
        </>

    )
}

export default BrandFour