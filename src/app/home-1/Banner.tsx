"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

type BannerOneProps = {
  id?: string;
};

function BannerOne({ id }: BannerOneProps) {
    
    return (
        <div id={id} className="banner-swiper-two">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={1}
                slidesPerView={1}
                effect="fade"
                loop={true}
                speed={0}
                autoplay={{
                    delay: 2500,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="mySwiper-banner-two"
            >
                <SwiperSlide>
                    {/* rts banner area start */}
                    <div className="rts-banner-area-two rts-section-gap bg_image">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-inner-two-content">
                                        <p className="pre-title">
                                            <span>Welcome!</span> Start Growing Your Business Today
                                        </p>
                                        <h1 className="title">
                                            Innovative Solutions <br /> Tailored for Your Success
                                        </h1>
                                        <p className="disc">
                                            Porttitor ornare fermentum aliquam pharetra facilisis
                                            gravida risus suscipit Dui feugiat fusce conubia ridiculus
                                            tristique parturient
                                        </p>
                                        <a href="/" className="rts-btn btn-primary btn-white">
                                            Get Consultant
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-area-start">
                            <div className="shape shape-one">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/01.webp"
                                    alt="shape-area"
                                />
                            </div>
                            <div className="shape shape-two">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/02.webp"
                                    alt="shape-area"
                                />
                            </div>
                            <div className="shape shape-three">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/03.webp"
                                    alt="shape-area"
                                />
                            </div>
                            <div className="shape shape-four">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/04.webp"
                                    alt="shape-area"
                                />
                            </div>
                        </div>
                    </div>
                    {/* rts banner area end */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* rts banner area start */}
                    <div className="rts-banner-area-two two rts-section-gap bg_image">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-inner-two-content">
                                        <p className="pre-title">
                                            <span>Welcome!</span> Start Growing Your Business Today
                                        </p>
                                        <h1 className="title">
                                            Impressive Solutions <br /> Crafted for Your Goal
                                        </h1>
                                        <p className="disc">
                                            Porttitor ornare fermentum aliquam pharetra facilisis
                                            gravida risus suscipit Dui feugiat fusce conubia ridiculus
                                            tristique parturient
                                        </p>
                                        <a href="/" className="rts-btn btn-primary btn-white">
                                            Get Consultant
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-area-start">
                            <div className="shape shape-one">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/01.webp"
                                    alt=""
                                />
                            </div>
                            <div className="shape shape-two">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/02.webp"
                                    alt=""
                                />
                            </div>
                            <div className="shape shape-three">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/03.webp"
                                    alt=""
                                />
                            </div>
                            <div className="shape shape-four">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/04.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* rts banner area end */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* rts banner area start */}
                    <div className="rts-banner-area-two three rts-section-gap bg_image">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-inner-two-content">
                                        <p className="pre-title">
                                            <span>Welcome!</span> Start Growing Your Business Today
                                        </p>
                                        <h1 className="title">
                                            Best Solutions <br /> Intro for Your Business
                                        </h1>
                                        <p className="disc">
                                            Porttitor ornare fermentum aliquam pharetra facilisis
                                            gravida risus suscipit Dui feugiat fusce conubia ridiculus
                                            tristique parturient
                                        </p>
                                        <a href="/" className="rts-btn btn-primary btn-white">
                                            Get Consultant
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-area-start">
                            <div className="shape shape-one">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/01.webp"
                                    alt=""
                                />
                            </div>
                            <div className="shape shape-two">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/02.webp"
                                    alt=""
                                />
                            </div>
                            <div className="shape shape-three">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/03.webp"
                                    alt=""
                                />
                            </div>
                            <div className="shape shape-four">
                                <img
                                    loading="lazy"
                                    src="/assets/images/banner/shape/04.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* rts banner area end */}
                </SwiperSlide>
                <div className="swiper-button-next">
                <i className="fa-solid fa-chevron-right"></i>
                </div>

                <div className="swiper-button-prev">
                <i className="fa-solid fa-chevron-left"></i>
                </div>

            </Swiper>
        </div>
    )
}

export default BannerOne