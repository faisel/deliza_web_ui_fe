'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "@/i18n/LocalizedLink";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface ServiceThreeProps {
  id?: string
}

function ServiceThree({ id }: ServiceThreeProps) {

    const splitRef = useRef<HTMLHeadingElement>(null);

    // SplitText animation
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-out-cubic",
        });

        if (!splitRef.current) return;

        const element = splitRef.current;

        // Reset previous animation if exists
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
                start: "top 95%",
            },
            x: 0,
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.02,
        });
    }, []);

    return (
        <>
            {/* service area start */}
            <div id={id} className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-three center">
                                <span className="pre">Our Latest Services</span>
                                <div className="bg-title">01</div>

                                <h2 
                                    className="title rts-text-anime-style-1" 
                                    ref={splitRef}
                                >
                                    Service We Pro de
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 mt--10">

                        {/* 1 */}
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="single-service-style-three">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/assets/images/service/icons/04.svg" alt="icon" />
                                    </div>
                                    <Link href="/service-details">
                                        <h4 className="title">Business Solution</h4>
                                    </Link>
                                    <p className="disc">
                                        Fusce dignissim erat dis proin ornare class sem nibh
                                    </p>
                                    <Link className="read-more" href="/service-details">
                                        Learn More <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="single-service-style-three">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/assets/images/service/icons/05.svg" alt="icon" />
                                    </div>
                                    <Link href="/service-details">
                                        <h4 className="title">Creative Ideas</h4>
                                    </Link>
                                    <p className="disc">
                                        Fusce dignissim erat dis proin ornare class sem nibh
                                    </p>
                                    <Link className="read-more" href="/service-details">
                                        Learn More <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <div className="single-service-style-three">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/assets/images/service/icons/06.svg" alt="icon" />
                                    </div>
                                    <Link href="/service-details">
                                        <h4 className="title">Market Research</h4>
                                    </Link>
                                    <p className="disc">
                                        Fusce dignissim erat dis proin ornare class sem nibh
                                    </p>
                                    <Link className="read-more" href="/service-details">
                                        Learn More <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            <div className="single-service-style-three">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/assets/images/service/icons/07.svg" alt="icon" />
                                    </div>
                                    <Link href="/service-details">
                                        <h4 className="title">Business Solution</h4>
                                    </Link>
                                    <p className="disc">
                                        Fusce dignissim erat dis proin ornare class sem nibh
                                    </p>
                                    <Link className="read-more" href="/service-details">
                                        Learn More <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* service area end */}
        </>
    );
}

export default ServiceThree;
