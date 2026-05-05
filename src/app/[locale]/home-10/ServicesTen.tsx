"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);

type ServicesTenProps ={
  id?: string;
}


function ServicesTen({ id }: ServicesTenProps) {
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
            {/* service area start */}
            <div id={id} className="our-service-area-start rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-10">
                                <span className="pre">Our Latest Services</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>Service We Provide</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--50">
                        <div className="col-lg-12">
                            <div className="rts-service-main-wrapper-10">
                                <div className="signle-service-style-10">
                                    <div className="content-area-wrapper">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/service/icons/11.svg"
                                                alt="service"
                                                width={52}
                                                height={52}
                                            />
                                        </div>
                                        <h5 className="title">Business Solution</h5>
                                        <p className="disc">
                                            Fusce dignissim erat dis proin ornare class sem nibh
                                        </p>
                                        <Link href="/service-details" className="arrow-right-btn">
                                            Learn More <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="thumbnail">
                                        <Image
                                            src="/assets/images/service/07.webp"
                                            alt="service"
                                            width={323}
                                            height={330}
                                        />
                                    </div>
                                </div>
                                <div className="signle-service-style-10">
                                    <div className="content-area-wrapper">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/service/icons/12.svg"
                                                alt="service"
                                                width={51}
                                                height={51}
                                            />
                                        </div>
                                        <h5 className="title">Marketing Solution</h5>
                                        <p className="disc">
                                            Fusce dignissim erat dis proin ornare class sem nibh
                                        </p>
                                        <Link href="/service-details" className="arrow-right-btn">
                                            Learn More <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="thumbnail">
                                        <Image
                                            src="/assets/images/service/08.webp"
                                            alt="service"
                                            width={322}
                                            height={330}
                                        />
                                    </div>
                                </div>
                                <div className="signle-service-style-10 order-control-sm-device">
                                    <div className="thumbnail">
                                        <Image
                                            src="/assets/images/service/09.webp"
                                            alt="service"
                                            width={323}
                                            height={330}
                                        />
                                    </div>
                                    <div className="content-area-wrapper">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/service/icons/13.svg"
                                                alt="service"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <h5 className="title">Agency Marketing</h5>
                                        <p className="disc">
                                            Fusce dignissim erat dis proin ornare class sem nibh
                                        </p>
                                        <Link href="/service-details" className="arrow-right-btn">
                                            Learn More <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="signle-service-style-10 order-control-sm-device">
                                    <div className="thumbnail">
                                        <Image
                                            src="/assets/images/service/10.webp"
                                            alt="service"
                                            width={323}
                                            height={330}
                                        />
                                    </div>
                                    <div className="content-area-wrapper">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/service/icons/14.svg"
                                                alt="service"
                                                width={52}
                                                height={52}
                                            />
                                        </div>
                                        <h5 className="title">Startup Paskages</h5>
                                        <p className="disc">
                                            Fusce dignissim erat dis proin ornare class sem nibh
                                        </p>
                                        <Link href="/service-details" className="arrow-right-btn">
                                            Learn More <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service area end */}
        </>

    )
}

export default ServicesTen