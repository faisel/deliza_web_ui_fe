'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Link from 'next/link'

type ProjectSevenProps ={
  id?: string;
}

function ProjectSeven({ id }: ProjectSevenProps) {
    return (
        <div id={id} className="rts-project-area rts-section-gap without-bg-image">
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
                            <Swiper
                                modules={[Pagination, Navigation]}
                                className="mySwiper-project-five"
                                dir='ltr'
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                speed={1000}
                                pagination={{
                                    el: ".swiper-pagination-fraction",
                                    type: "fraction",
                                    formatFractionCurrent: (number) => `0${number}`,
                                    formatFractionTotal: (number) => `0${number}`,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                            >
                                <SwiperSlide>
                                    <div className="row g-5">
                                        <div className="col-lg-7">
                                            <div className="thumbnail-project-5">
                                                <img src="/assets/images/project/16.webp" alt="project" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="project-content-left-5">
                                                <div className="icon">
                                                    <img src="/assets/images/project/02.svg" alt="project" />
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
                                                        className="rts-btn btn-primary btn-white"
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row g-5">
                                        <div className="col-lg-7">
                                            <div className="thumbnail-project-5">
                                                <img src="/assets/images/project/16.webp" alt="project" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="project-content-left-5">
                                                <div className="icon">
                                                    <img src="/assets/images/project/02.svg" alt="project" />
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
                                                        className="rts-btn btn-primary btn-white"
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="row g-5">
                                        <div className="col-lg-7">
                                            <div className="thumbnail-project-5">
                                                <img src="/assets/images/project/16.webp" alt="project" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="project-content-left-5">
                                                <div className="icon">
                                                    <img src="/assets/images/project/02.svg" alt="project" />
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
                                                        className="rts-btn btn-primary btn-white"
                                                    >
                                                        View Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="swiper-pagination-fraction" />
                                <div className="swiper-button-next">
                                    <i className="fa-solid fa-regular fa-arrow-right" />
                                </div>
                                <div className="swiper-button-prev">
                                    <i className="fa-solid fa-regular fa-arrow-left" />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectSeven