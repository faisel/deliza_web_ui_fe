'use client'
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function TestimonialsTwo() {
    const splitRef = useRef<HTMLHeadingElement>(null);
    // SplitText animation
    useEffect(() => {
    let ctx = gsap.context(() => {

        const element = splitRef.current;
        if (!element) return;

        // split setup
        if ((element as any).animation) {
        (element as any).animation.progress(1).kill();
        (element as any).split.revert();
        }

        (element as any).split = new SplitText(element, {
        type: "lines,words,chars",
        linesClass: "split-line",
        });

        gsap.set(element, { perspective: 400 });
        gsap.set((element as any).split.chars, { opacity: 0, x: 50 });

        (element as any).animation = gsap.to((element as any).split.chars, {
        scrollTrigger: {
            trigger: element,
            start: "top bottom", // FIXED SECTION
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
        });

    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
    }, []);

    return (
        <>
            {/* start client review area start */}
            <div className="rts-client-review-two bg-black-content rts-section-gapTop bg-client-r-h2">
                <div className="container">
                    <div className="row mt--30">
                        <div className="title-style-three-between">
                            <div className="title-style-three left">
                                <span className="pre">Our Testimonial</span>
                                <div className="bg-title">04</div>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>Our Client Reviews</h2>
                            </div>
                            <div className="button-area">
                                <a href="#" className="rts-btn btn-primary btn-white">
                                    See All Reviews
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-12">
                            <div className="swiper mySwiperh2_clients" dir="ltr">
                                <Swiper 
                                    modules={[Navigation, Pagination, Autoplay]}
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    slidesPerGroup={1}
                                    loop={true}
                                    autoplay={{ delay: 3000 }}
                                    breakpoints={{
                                        1500: { slidesPerView: 3 },
                                        1300: { slidesPerView: 3 },
                                        1199: { slidesPerView: 2 },
                                        767:  { slidesPerView: 2 },
                                        575:  { slidesPerView: 1 },
                                        0:    { slidesPerView: 1 },
                                    }}
                                    pagination={{
                                        el: ".swiper-pagination",
                                        clickable: true,
                                    }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    className="swiper mySwiperh2_clients"
                                    dir="ltr"
                                >

                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="/assets/images/testimonials/avatar/01.webp"
                                                        alt="testimonials_area"
                                                    />
                                                </a>
                                                <div className="discription">
                                                    <a href="#">
                                                        <h6 className="title">David Smith</h6>
                                                    </a>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/images/testimonials/icons/01.webp"
                                                            alt="Client_logo"
                                                        />
                                                    </a>
                                                    <div className="star-icon">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="/assets/images/testimonials/avatar/02.webp"
                                                        alt="testimonials_area"
                                                    />
                                                </a>
                                                <div className="discription">
                                                    <a href="#">
                                                        <h6 className="title">Mark Jone</h6>
                                                    </a>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/images/testimonials/icons/02.webp"
                                                            alt="Client_logo"
                                                        />
                                                    </a>
                                                    <div className="star-icon">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="/assets/images/testimonials/avatar/03.webp"
                                                        alt="testimonials_area"
                                                    />
                                                </a>
                                                <div className="discription">
                                                    <a href="#">
                                                        <h6 className="title">Lord Korn</h6>
                                                    </a>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/images/testimonials/icons/03.webp"
                                                            alt="Client_logo"
                                                        />
                                                    </a>
                                                    <div className="star-icon">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="/assets/images/testimonials/avatar/01.webp"
                                                        alt="testimonials_area"
                                                    />
                                                </a>
                                                <div className="discription">
                                                    <a href="#">
                                                        <h6 className="title">David Smith</h6>
                                                    </a>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/images/testimonials/icons/01.webp"
                                                            alt="Client_logo"
                                                        />
                                                    </a>
                                                    <div className="star-icon">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="/assets/images/testimonials/avatar/02.webp"
                                                        alt="testimonials_area"
                                                    />
                                                </a>
                                                <div className="discription">
                                                    <a href="#">
                                                        <h6 className="title">Mark Jone</h6>
                                                    </a>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/images/testimonials/icons/02.webp"
                                                            alt="Client_logo"
                                                        />
                                                    </a>
                                                    <div className="star-icon">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* single client reviews */}
                                        <div className="rts-client-reviews-h2">
                                            <div className="review-header">
                                                <a href="#" className="thumbnail">
                                                    <img
                                                        src="/assets/images/testimonials/avatar/03.webp"
                                                        alt="testimonials_area"
                                                    />
                                                </a>
                                                <div className="discription">
                                                    <a href="#">
                                                        <h6 className="title">Lord Korn</h6>
                                                    </a>
                                                    <span>Finance</span>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p className="disc">
                                                    “Dabus nisl aliquet congue tellus nascetur lectus sagpien
                                                    mattis arcu dictums augue volutpat felis etiam suspendisse
                                                    rhoncus mauris dignissim ante”
                                                </p>
                                                <div className="body-end">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/images/testimonials/icons/03.webp"
                                                            alt="Client_logo"
                                                        />
                                                    </a>
                                                    <div className="star-icon">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* single client reviews End */}
                                    </SwiperSlide>
                                    <div className="swiper-pagination" />
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start client review area end */}
        </>

    )
}

export default TestimonialsTwo