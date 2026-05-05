'use client'
import { useEffect, useRef } from "react";

interface OdometerElement extends HTMLElement {
    od?: any;
}

function FunFactNine() {
    const odometerRefs = useRef<OdometerElement[]>([]);

    // Odometer animation
    useEffect(() => {
        import("odometer").then((module) => {
            const Odometer = module.default;

            // Initialize odometer
            odometerRefs.current.forEach((el) => {
                el.od = new Odometer({
                    el,
                    value: 0,
                    format: "d",
                    duration: 2000,
                });
            });

            const isInViewport = (el: OdometerElement) => {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top < window.innerHeight &&
                    rect.bottom >= 0
                );
            };

            const triggerOdometer = (el: OdometerElement) => {
                if (!el.classList.contains("odometer-triggered")) {
                    el.od.update(el.dataset.count);
                    el.classList.add("odometer-triggered");
                }
            };

            const handleScroll = () => {
                odometerRefs.current.forEach((el) => {
                    if (isInViewport(el)) triggerOdometer(el);
                });
            };

            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        });
    }, []);
    return (
        <>
            {/* rts fun facts area start */}
            <div className="rts-fun-facts-area-8 rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between-9">
                                <div className="title-style-five mb--40">
                                    <span className="pre">Get In Touch</span>
                                    <h2 className="title">
                                        Reach Out for Personalized <br />
                                        Insurance Solutions
                                    </h2>
                                </div>
                                <p className="disc">
                                    we believe in the power of collaboration and personalized
                                    solutions. By understanding our clients' unique needs and goals,
                                    we tailor our approach to deliver strategic insights, creative
                                    solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-4">
                            <div className="easy-contact-left-funfacts-8">
                                <div className="signle-contact">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div className="main-contact">
                                        <span>Call Us 24/7</span>
                                        <a href="#">(+256) 2145.2156</a>
                                    </div>
                                </div>
                                <div className="signle-contact">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="main-contact">
                                        <span>Work with us</span>
                                        <a href="#">info@deliza.com</a>
                                    </div>
                                </div>
                                <div className="signle-contact">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="main-contact">
                                        <span>Our Location</span>
                                        <a href="#">125 Town, United State</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="modern-funfacts-area-wrapper">
                                <div className="thumbnail">
                                    <img src="/assets/images/fun-facts/01.webp" alt="funfacts" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="counter-modern-lfun-facts-wrapper">
                                <div className="single-counter-wrapper-8">
                                    <h2 className="counter title">
                                        <span
                                            className="odometer"
                                            data-count={567}
                                            ref={(el) => {
                                                if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                    odometerRefs.current.push(el as OdometerElement);
                                                }
                                            }}
                                        >
                                            00
                                        </span>
                                        +
                                    </h2>
                                    <p>Insurance Policies</p>
                                </div>
                                <div className="single-counter-wrapper-8">
                                    <h2 className="counter title">
                                        <span
                                            className="odometer"
                                            data-count={28}
                                            ref={(el) => {
                                                if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                                    odometerRefs.current.push(el as OdometerElement);
                                                }
                                            }}
                                        >
                                            00
                                        </span>
                                        +
                                    </h2>
                                    <p>Awards WON</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts fun facts area end */}
        </>

    )
}

export default FunFactNine