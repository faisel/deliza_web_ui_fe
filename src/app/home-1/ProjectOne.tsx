"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

type ProjectOneProps = {
  id?: string;
  className?: string;
};

function ProjectOne({ className = "", id="" }: ProjectOneProps) {
    return (
        <>
            {/* start gallery section */}
            <div id={id} className={`rts-gallery-area rts-section-gap bg_image ${className}`}>
                <div className="container pt--40">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between-wrapper-gallery-project">
                                <div className="title-style-two mb--40 left">
                                    <span className="bg-content">Projects</span>
                                    <span className="pre">Popular Projects</span>
                                    <h2 className="title rts-text-anime-style-1">
                                        Projects Our Completed Projects
                                    </h2>
                                </div>
                                <div className="swiper-paginations" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-style-one-wrapper">
                                <Swiper modules={[Pagination]}
                                slidesPerView={2}
                                spaceBetween={30}
                                loop={true}
                                speed={1000}
                                pagination={{ clickable: true, el: ".swiper-paginations" }}
                                breakpoints={{
                                    1500: { slidesPerView: 2 },
                                    1300: { slidesPerView: 2 },
                                    991: { slidesPerView: 1 },
                                    767: { slidesPerView: 1 },
                                    575: { slidesPerView: 1 },
                                    0: { slidesPerView: 1 },
                                }}
                                className="mySwiper-project-1"
                                >
                                        <SwiperSlide>
                                            <div className="project-style-one">
                                                <a href="/project-details" className="thumbnail">
                                                    <img
                                                        loading="lazy"
                                                        src="/assets/images/project/01.webp"
                                                        alt="project"
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="/project-details">
                                                        <h5 className="title">Business Growth</h5>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-style-one">
                                                <a href="/project-details" className="thumbnail">
                                                    <img
                                                        loading="lazy"
                                                        src="/assets/images/project/02.webp"
                                                        alt="project"
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="/project-details">
                                                        <h5 className="title">Startup Solution</h5>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-style-one">
                                                <a href="/project-details" className="thumbnail">
                                                    <img
                                                        loading="lazy"
                                                        src="/assets/images/project/01.webp"
                                                        alt="project"
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="/project-details">
                                                        <h5 className="title">Marketing Growth</h5>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start gallery section */}
        </>

    )
}

export default ProjectOne