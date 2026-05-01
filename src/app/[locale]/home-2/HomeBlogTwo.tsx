"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface HomeBlogTwoProps {
  id?: string
}

function HomeBlogTwo({ id }: HomeBlogTwoProps) {
    return (
        <>
            {/* rts blog area start */}
            <div id={id} className="rts-blog-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-one center">
                                <span className="pre">Blog &amp; News</span>
                                <h2 className="title rts-text-anime-style-1">Recent blog post</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-lg-12">
                            <div className="blog-swiper-style-one">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    slidesPerGroup={1}
                                    loop={true}
                                    centeredSlides={false}
                                    speed={1000}
                                    pagination={{
                                    el: ".swiper-pagination", // your custom class
                                    clickable: true,
                                    }}
                                    navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                    }}
                                    breakpoints={{
                                    1500: { slidesPerView: 3 },
                                    1300: { slidesPerView: 3 },
                                    991: { slidesPerView: 3 },
                                    767: { slidesPerView: 2 },
                                    575: { slidesPerView: 2 },
                                    0: { slidesPerView: 1 },
                                    }}
                                    className="mySwiper-blog-one"
                                >
                                    <SwiperSlide>
                                            <div className="single-blog-area-one">
                                                <p>
                                                    Business Solution / <span>by David Dolean</span>
                                                </p>
                                                <a href="solution-of-settle-tips-of-the-new-ages-exist">
                                                    <h4 className="title">
                                                        Building a Brand That from Market Leaders
                                                    </h4>
                                                </a>
                                                <div className="bottom-details">
                                                    <a href="solution-of-settle-tips-of-the-new-ages-exist" className="thumbnail">
                                                        <img src="/assets/images/blog/01.webp" alt="blog-area" />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-blog-area-one">
                                                <p>
                                                    Business Solution / <span>by David Dolean</span>
                                                </p>
                                                <a href="best-solution-tips-of-the-new-ages-exist">
                                                    <h4 className="title">
                                                        Transforming Your Best Of Approach to Business
                                                    </h4>
                                                </a>
                                                <div className="bottom-details">
                                                    <a href="best-solution-tips-of-the-new-ages-exist" className="thumbnail">
                                                        <img src="/assets/images/blog/02.webp" alt="blog-area" />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-blog-area-one">
                                                <p>
                                                    Business Solution / <span>by David Dolean</span>
                                                </p>
                                                <a href="the-quick-settle-tips-of-the-new-ages-exist">
                                                    <h4 className="title">
                                                        The quick settle tips of the new ages exist
                                                    </h4>
                                                </a>
                                                <div className="bottom-details">
                                                    <a href="the-quick-settle-tips-of-the-new-ages-exist" className="thumbnail">
                                                        <img src="/assets/images/blog/03.webp" alt="blog-area" />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-blog-area-one">
                                                <p>
                                                    Business Solution / <span>by David Dolean</span>
                                                </p>
                                                <a href="solution-of-settle-tips-of-the-new-ages-exist">
                                                    <h4 className="title">
                                                        Building a Brand That from Market Leaders
                                                    </h4>
                                                </a>
                                                <div className="bottom-details">
                                                    <a href="solution-of-settle-tips-of-the-new-ages-exist" className="thumbnail">
                                                        <img src="/assets/images/blog/01.webp" alt="blog-area" />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-blog-area-one">
                                                <p>
                                                    Business Solution / <span>by David Dolean</span>
                                                </p>
                                                <a href="best-solution-tips-of-the-new-ages-exist">
                                                    <h4 className="title">
                                                        Transforming Your Best Of Approach to Business
                                                    </h4>
                                                </a>
                                                <div className="bottom-details">
                                                    <a href="best-solution-tips-of-the-new-ages-exist" className="thumbnail">
                                                        <img src="/assets/images/blog/02.webp" alt="blog-area" />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-blog-area-one">
                                                <p>
                                                    Business Solution / <span>by David Dolean</span>
                                                </p>
                                                <a href="the-quick-settle-tips-of-the-new-ages-exist">
                                                    <h4 className="title">
                                                        The quick settle tips of the new ages exist
                                                    </h4>
                                                </a>
                                                <div className="bottom-details">
                                                    <a href="the-quick-settle-tips-of-the-new-ages-exist" className="thumbnail">
                                                        <img src="/assets/images/blog/03.webp" alt="blog-area" />
                                                    </a>
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
            {/* rts blog area end */}
        </>

    )
}

export default HomeBlogTwo