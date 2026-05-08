"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from 'next/link'

interface OdometerElement extends HTMLElement {
    od?: any;
}

type AboutTenProps ={
  id?: string;
}

function AboutTen({ id }: AboutTenProps) {

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
            {/* rts about area stat */}
            <div id={id} className="rts-about-area-start rts-section-gapBottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="thumbnail-about-10-wrapper">
                                <Image
                                    src="/assets/images/about/15.webp"
                                    alt="abotu"
                                    width={731}
                                    height={915}
                                />
                                <div className="top-counter-area">
                                    <div className="icon">
                                        <Image
                                            src="/assets/images/about/icons/08.svg"
                                            alt="about"
                                            width={46}
                                            height={46}
                                        />
                                    </div>
                                    <h2 className="counter title">
                                        <span
                                            className="odometer"
                                            data-count={25}
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
                                    <p>Business Solution</p>
                                </div>
                                <div className="top-counter-area bottom">
                                    <div className="icon">
                                        <Image
                                            src="/assets/images/about/icons/09.svg"
                                            alt="about"
                                            width={45}
                                            height={50}
                                        />
                                    </div>
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
                                    <p>Skilled Experts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--50 mt_sm--50">
                            <div className="about-area-wrapper-content-10">
                                <div className="title-style-10 left">
                                    <span className="pre">Easy Business Solution</span>
                                    <h2 className="title rts-text-anime-style-1">
                                        Your Partner Better <br /> Business Deals
                                    </h2>
                                </div>
                                <p className="disc">
                                    We are the leading agency dedicated to enhancing your deals,
                                    driving growth, and delivering exceptional results. Trust us to
                                    maximize your potential and take your business to the next level
                                </p>
                                <div className="progress-wrapper-about-4">
                                    <div className="single-progress">
                                        <h6 className="title">Business Solution</h6>
                                        <div className="progress">
                                            <div
                                                className="progress-bar wow fadeInLeft"
                                                data-wow-duration="0.5s"
                                                data-wow-delay=".3s"
                                                role="progressbar"
                                                style={{ width: "88%" }}
                                                aria-valuenow={88}
                                                aria-valuemin={0}
                                                aria-valuemax={88}
                                            ></div>
                                            <span className="progress-number">88%</span>
                                        </div>
                                    </div>
                                    <div className="single-progress">
                                        <h6 className="title">Financial Support</h6>
                                        <div className="progress">
                                            <div
                                                className="progress-bar wow fadeInLeft"
                                                data-wow-duration="0.5s"
                                                data-wow-delay=".3s"
                                                role="progressbar"
                                                style={{ width: "77%" }}
                                                aria-valuenow={77}
                                                aria-valuemin={0}
                                                aria-valuemax={77}
                                            ></div>
                                            <span className="progress-number">77%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about area end */}
        </>

    )
}

export default AboutTen