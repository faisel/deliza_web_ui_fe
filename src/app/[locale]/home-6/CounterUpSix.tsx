"use client";

import { useEffect, useRef } from "react";

// Extend HTMLElement to include od property
interface OdometerElement extends HTMLElement {
    od?: any;
}

import AOS from "aos";
import "aos/dist/aos.css";

function CounterUpSix() {
    const odometerRefs = useRef<OdometerElement[]>([]);

    // AOS initialization
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

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
            {/* rts counter up area start */}
            <div className="rts-counterup-area-wrapper rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="counter-main-wrapper-area-start-6">
                                <div className="single-counter-area-main">
                                    <h2 className="counter title">
                                        <span
                                            className="odometer"
                                            data-count={858}
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
                                    <span className="bottom">Successful Projects</span>
                                </div>
                                <div className="single-counter-area-main">
                                    <h2 className="counter title">
                                        <span
                                            className="odometer"
                                            data-count={650}
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
                                    <span className="bottom">Successful Projects</span>
                                </div>
                                <div className="single-counter-area-main">
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
                                    <span className="bottom">Successful Projects</span>
                                </div>
                                <div className="single-counter-area-main">
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
                                        
                                        k+
                                    </h2>
                                    <span className="bottom">Successful Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts counter up area end */}
        </>

    )
}

export default CounterUpSix