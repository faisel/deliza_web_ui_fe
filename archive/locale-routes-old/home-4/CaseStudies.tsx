"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "@/i18n/LocalizedLink";

type CaseStudiesProps = {
  id?: string;
  className?: string;
};
function CaseStudies({ className='', id='' }: CaseStudiesProps) {
    return (
        <>
            {/* rts business case area start */}
            <div id={id} className={`rts-business-case-area ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-four center">
                                <span className="pre">RECENT CASE STUDIES</span>
                                <h2 className="title rts-text-anime-style-1">
                                    Our Business <span> Cases</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-1680 mt--40">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-studies-wrapper-main-5">
                                <Swiper modules={[Navigation, Pagination, Autoplay]}
                                    className="mySwiper-case-studies-5"
                                    dir="ltr"
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    slidesPerGroup={1}
                                    loop={true}
                                    centeredSlides={false}
                                    speed={1000}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev"
                                    }}
                                    pagination={{
                                        el: ".swiper-pagination-fraction",
                                        type: "fraction",
                                        formatFractionCurrent: (number) => "0" + number,
                                        formatFractionTotal: (number) => "0" + number
                                    }}
                                    autoplay={{
                                        delay: 2000
                                    }}
                                    breakpoints={{
                                        1500: { slidesPerView: 3 },
                                        1300: { slidesPerView: 3 },
                                        991: { slidesPerView: 2 },
                                        767: { slidesPerView: 2 },
                                        575: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 }
                                    }}
                                >

                                    <SwiperSlide>
                                        <div className="single-case-studies-four">
                                            <Link href="/project-details" className="thumbnail">
                                                <Image
                                                    src="/assets/images/project/07.webp"
                                                    alt="project"
                                                    width={810}
                                                    height={852}
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href="/project-details">
                                                    <h3 className="title">Digital Business Solution</h3>
                                                    <span>Business Strategy</span>
                                                </Link>
                                            </div>
                                            <div className="eye">
                                                <Image
                                                    src="/assets/images/project/eye.svg"
                                                    alt="project"
                                                    width={55}
                                                    height={55}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-case-studies-four">
                                            <Link href="/project-details" className="thumbnail">
                                                <Image
                                                    src="/assets/images/project/08.webp"
                                                    alt="project"
                                                    width={810}
                                                    height={852}
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href="/project-details">
                                                    <h3 className="title">Smart Business Solution</h3>
                                                    <span>Business Smart</span>
                                                </Link>
                                            </div>
                                            <div className="eye">
                                                <Image
                                                    src="/assets/images/project/eye.svg"
                                                    alt="project"
                                                    width={55}
                                                    height={55}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-case-studies-four">
                                            <Link href="/project-details" className="thumbnail">
                                                <Image
                                                    src="/assets/images/project/09.webp"
                                                    alt="project"
                                                    width={810}
                                                    height={852}
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href="/project-details">
                                                    <h3 className="title">Business Marketing</h3>
                                                    <span>Business Marketing</span>
                                                </Link>
                                            </div>
                                            <div className="eye">
                                                <Image
                                                    src="/assets/images/project/eye.svg"
                                                    alt="project"
                                                    width={55}
                                                    height={55}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-case-studies-four">
                                            <Link href="/project-details" className="thumbnail">
                                                <Image
                                                    src="/assets/images/project/08.webp"
                                                    alt="project"
                                                    width={810}
                                                    height={852}
                                                />
                                            </Link>
                                            <div className="inner">
                                                <Link href="/project-details">
                                                    <h3 className="title">Business Top Goal</h3>
                                                    <span>Business Goal</span>
                                                </Link>
                                            </div>
                                            <div className="eye">
                                                <Image
                                                    src="/assets/images/project/eye.svg"
                                                    alt="project"
                                                    width={55}
                                                    height={55}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="swiper-pagination-fraction" />
                                    <div className="swiper-button-next">
                                        <i className="fa-sharp fa-solid fa-arrow-right" />
                                    </div>
                                    <div className="swiper-button-prev">
                                        <i className="fa-sharp fa-solid fa-arrow-left" />
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts business case area end */}
        </>

    )
}

export default CaseStudies