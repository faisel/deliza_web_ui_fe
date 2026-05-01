"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from '@/i18n/useTranslation';
import { localizePath } from '@/i18n/routing';

type BannerOneProps = {
  id?: string;
};

const slideBgVariants = ["", "two", "three"];

function BannerOne({ id }: BannerOneProps) {
    const { locale, messages } = useTranslation();
    const { eyebrow, slides } = messages.home.banner;
    const ctaHref = localizePath("/contact", locale);

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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`rts-banner-area-two ${slideBgVariants[index] ?? ""} rts-section-gap bg_image`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-inner-two-content">
                                            <p className="pre-title">
                                                <span>{eyebrow.prefix}</span> {eyebrow.text}
                                            </p>
                                            <h1 className="title">
                                                {slide.title[0]} <br /> {slide.title[1]}
                                            </h1>
                                            <p className="disc">{slide.description}</p>
                                            <a href={ctaHref} className="rts-btn btn-primary btn-white">
                                                {messages.common.buttons.getConsultant}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shape-area-start">
                                <div className="shape shape-one">
                                    <img loading="lazy" src="/assets/images/banner/shape/01.webp" alt="shape-area" />
                                </div>
                                <div className="shape shape-two">
                                    <img loading="lazy" src="/assets/images/banner/shape/02.webp" alt="shape-area" />
                                </div>
                                <div className="shape shape-three">
                                    <img loading="lazy" src="/assets/images/banner/shape/03.webp" alt="shape-area" />
                                </div>
                                <div className="shape shape-four">
                                    <img loading="lazy" src="/assets/images/banner/shape/04.webp" alt="shape-area" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
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
