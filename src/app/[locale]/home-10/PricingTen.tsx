"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);

function PricingTen() {
        const splitRef = useRef<HTMLHeadingElement>(null);

    /* ============================
    GSAP SplitText Animation
    ============================ */
    useEffect(() => {
        let split: any;

        const initSplitText = async () => {
            const SplitText = (await import("gsap/SplitText")).default;
            gsap.registerPlugin(SplitText, ScrollTrigger);

            if (!splitRef.current) return;

            split = new SplitText(splitRef.current, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });

            gsap.set(split.chars, {
                opacity: 0,
                x: 50,
            });

            gsap.to(split.chars, {
                scrollTrigger: {
                    trigger: splitRef.current,
                    start: "top 95%",
                },
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "back.out(1.7)",
                stagger: 0.02,
            });
        };

        initSplitText();

        return () => {
            split?.revert();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);
    return (
        <>
            <div className="rts-pricing-area-one rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-three-title-area">
                                <div className="title-style-one left">
                                    <span className="pre">Price Table</span>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Pricing &amp; Plans
                                    </h2>
                                </div>
                                <div className="pricing-tab-button-area">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home"
                                                type="button"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="true"
                                            >
                                                Monthly PLan
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="profile-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                            >
                                                Yearly Plan
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--60">
                        <div className="col-12">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row g-5">
                                        <div className="col-lg-12">
                                            <div className="pricing-list-style-wrapper">
                                                <div
                                                    className="single-list-pricing-area"
                                                    data-animation="fadeInUp"
                                                    data-delay={0.0}
                                                    data-duration=".4"
                                                >
                                                    {/* pricing area */}
                                                    <div className="pricing-area">
                                                        <div className="head">
                                                            <span>Starter Package</span>
                                                            <h3 className="title">Basic Plan</h3>
                                                        </div>
                                                        <div className="pricing">
                                                            <h3 className="pricing">
                                                                $260
                                                                <span>/month</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* pricing area */}
                                                    <div className="feature-button-wrapper">
                                                        <div className="feature-area-wrapper">
                                                            <div className="feature-row-wrapper">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Business Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Great Customer Support</p>
                                                                </div>
                                                            </div>
                                                            <div className="feature-row-wrapper light">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Market Growth Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            href="/contact"
                                                            className="rts-btn btn-primary btn-white"
                                                        >
                                                            Buy This
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div
                                                    className="single-list-pricing-area"
                                                    data-animation="fadeInUp"
                                                    data-delay={0.0}
                                                    data-duration=".4"
                                                >
                                                    {/* pricing area */}
                                                    <div className="pricing-area">
                                                        <div className="head">
                                                            <span>Starter Package</span>
                                                            <h3 className="title">Strandard Plan</h3>
                                                        </div>
                                                        <div className="pricing">
                                                            <h3 className="pricing">
                                                                $260
                                                                <span>/month</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* pricing area */}
                                                    <div className="feature-button-wrapper">
                                                        <div className="feature-area-wrapper">
                                                            <div className="feature-row-wrapper">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Business Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Great Customer Support</p>
                                                                </div>
                                                            </div>
                                                            <div className="feature-row-wrapper light">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Market Growth Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            href="/contact"
                                                            className="rts-btn btn-primary btn-white"
                                                        >
                                                            Buy This
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div
                                                    className="single-list-pricing-area"
                                                    data-animation="fadeInUp"
                                                    data-delay={0.0}
                                                    data-duration=".4"
                                                >
                                                    {/* pricing area */}
                                                    <div className="pricing-area">
                                                        <div className="head">
                                                            <span>Starter Package</span>
                                                            <h3 className="title">Premium Plan</h3>
                                                        </div>
                                                        <div className="pricing">
                                                            <h3 className="pricing">
                                                                $340
                                                                <span>/month</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* pricing area */}
                                                    <div className="feature-button-wrapper">
                                                        <div className="feature-area-wrapper">
                                                            <div className="feature-row-wrapper">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Business Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Great Customer Support</p>
                                                                </div>
                                                            </div>
                                                            <div className="feature-row-wrapper light">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Market Growth Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            href="/contact"
                                                            className="rts-btn btn-primary btn-white"
                                                        >
                                                            Buy This
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    <div className="row g-5">
                                        <div className="col-lg-12">
                                            <div className="pricing-list-style-wrapper">
                                                <div
                                                    className="single-list-pricing-area"
                                                    data-animation="fadeInUp"
                                                    data-delay={0.0}
                                                    data-duration=".4"
                                                >
                                                    {/* pricing area */}
                                                    <div className="pricing-area">
                                                        <div className="head">
                                                            <span>Starter Package</span>
                                                            <h3 className="title">Basic Plan</h3>
                                                        </div>
                                                        <div className="pricing">
                                                            <h3 className="pricing">
                                                                $260
                                                                <span>/month</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* pricing area */}
                                                    <div className="feature-button-wrapper">
                                                        <div className="feature-area-wrapper">
                                                            <div className="feature-row-wrapper">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Business Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Great Customer Support</p>
                                                                </div>
                                                            </div>
                                                            <div className="feature-row-wrapper light">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Market Growth Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="rts-btn btn-primary btn-white">
                                                            Buy This
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="single-list-pricing-area"
                                                    data-animation="fadeInUp"
                                                    data-delay={0.0}
                                                    data-duration=".4"
                                                >
                                                    {/* pricing area */}
                                                    <div className="pricing-area">
                                                        <div className="head">
                                                            <span>Starter Package</span>
                                                            <h3 className="title">Strandard Plan</h3>
                                                        </div>
                                                        <div className="pricing">
                                                            <h3 className="pricing">
                                                                $260
                                                                <span>/month</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* pricing area */}
                                                    <div className="feature-button-wrapper">
                                                        <div className="feature-area-wrapper">
                                                            <div className="feature-row-wrapper">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Business Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Great Customer Support</p>
                                                                </div>
                                                            </div>
                                                            <div className="feature-row-wrapper light">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Market Growth Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="rts-btn btn-primary btn-white">
                                                            Buy This
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="single-list-pricing-area"
                                                    data-animation="fadeInUp"
                                                    data-delay={0.0}
                                                    data-duration=".4"
                                                >
                                                    {/* pricing area */}
                                                    <div className="pricing-area">
                                                        <div className="head">
                                                            <span>Starter Package</span>
                                                            <h3 className="title">Premium Plan</h3>
                                                        </div>
                                                        <div className="pricing">
                                                            <h3 className="pricing">
                                                                $340
                                                                <span>/month</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    {/* pricing area */}
                                                    <div className="feature-button-wrapper">
                                                        <div className="feature-area-wrapper">
                                                            <div className="feature-row-wrapper">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Business Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Great Customer Support</p>
                                                                </div>
                                                            </div>
                                                            <div className="feature-row-wrapper light">
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>Market Growth Solution</p>
                                                                </div>
                                                                <div className="signle">
                                                                    <i className="fa-solid fa-light fa-circle-check" />
                                                                    <p>24/7 Consultant Service</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="rts-btn btn-primary btn-white">
                                                            Buy This
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts pricing area end */}
        </>

    )
}

export default PricingTen