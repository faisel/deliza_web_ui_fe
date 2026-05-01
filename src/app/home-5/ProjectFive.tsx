"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

type ProjectFiveProps ={
  id?: string;
}

function ProjectFive({ id }: ProjectFiveProps) {
    return (
        <div id={id} className="rts-project-area rts-section-gap bg_project-5 bg_image">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-style-five center">
                            <span className="pre">Popular Projects</span>
                            <h2 className="title">Our Completed Projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--50">
                    <div className="col-lg-12">
                        <div className="project-swiper-5-area">
                            <div className="swiper mySwiper-project-five" dir="ltr">
                                <Swiper
                                modules={[Navigation, Pagination]}
                                className="mySwiper-project-five"
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                speed={1000}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                pagination={{
                                    el: ".swiper-pagination-fraction",
                                    type: "fraction",
                                    formatFractionCurrent: (number) => `0${number}`,
                                    formatFractionTotal: (number) => `0${number}`,
                                }}
                                >
                                    <SwiperSlide>
                                        <div className="row g-5">
                                            <div className="col-lg-5">
                                                <div className="project-content-left-5">
                                                    <div className="icon">
                                                        <img src="/assets/images/project/01.svg" alt="project" />
                                                    </div>
                                                    <div className="title-area">
                                                        <h6 className="title">Pro Business Solution</h6>
                                                        <span>Case Study, Growth</span>
                                                    </div>
                                                    <div className="inner">
                                                        <p className="disc">
                                                            Ornare etiam laoreet dictumst nisl quisque scelerisque
                                                            cras ut porta interdum purus mattis iaculis litora
                                                            turpis torquent posuere sodales himenaeos
                                                        </p>
                                                        <Link
                                                            href="/project-details"
                                                            className="rts-btn btn-primary"
                                                        >
                                                            View Project
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="thumbnail-project-5">
                                                    <img src="/assets/images/project/11.webp" alt="project" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="row g-5">
                                            <div className="col-lg-5">
                                                <div className="project-content-left-5">
                                                    <div className="icon">
                                                        <img src="/assets/images/project/01.svg" alt="project" />
                                                    </div>
                                                    <div className="title-area">
                                                        <h6 className="title">Best Business Solution</h6>
                                                        <span>Case Study, Growth</span>
                                                    </div>
                                                    <div className="inner">
                                                        <p className="disc">
                                                            Ornare etiam laoreet dictumst nisl quisque scelerisque
                                                            cras ut porta interdum purus mattis iaculis litora
                                                            turpis torquent posuere sodales himenaeos
                                                        </p>
                                                        <Link
                                                            href="/project-details"
                                                            className="rts-btn btn-primary"
                                                        >
                                                            View Project
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="thumbnail-project-5">
                                                    <img src="/assets/images/project/11.webp" alt="project" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="row g-5">
                                            <div className="col-lg-5">
                                                <div className="project-content-left-5">
                                                    <div className="icon">
                                                        <img src="/assets/images/project/01.svg" alt="project" />
                                                    </div>
                                                    <div className="title-area">
                                                        <h6 className="title">Pro Business Solution</h6>
                                                        <span>Case Study, Growth</span>
                                                    </div>
                                                    <div className="inner">
                                                        <p className="disc">
                                                            Ornare etiam laoreet dictumst nisl quisque scelerisque
                                                            cras ut porta interdum purus mattis iaculis litora
                                                            turpis torquent posuere sodales himenaeos
                                                        </p>
                                                        <Link
                                                            href="/project-details"
                                                            className="rts-btn btn-primary"
                                                        >
                                                            View Project
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="thumbnail-project-5">
                                                    <img src="/assets/images/project/11.webp" alt="project" />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-pagination-fraction" />
                                <div className="swiper-button-next">
                                    <i className="fa-solid fa-regular fa-arrow-right" />
                                </div>
                                <div className="swiper-button-prev">
                                    <i className="fa-solid fa-regular fa-arrow-left" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectFive