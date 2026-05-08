"use client";

import Link from "@/i18n/LocalizedLink";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type ServicesFiveProps ={
  id?: string;
}

function ServicesFive({ id }: ServicesFiveProps) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            {/* rts service area start */}
            <div id={id} className="rts-service-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12"
                            data-aos="fade-up"
                        >
                            <div className="title-style-five center">
                                <span className="pre">Our Services</span>
                                <h2 className="title">Effective Services</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 mt--10">
                        {/* Service 1 */}
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            <div className="service-single-main-wrapper-five">
                                <div className="icon">
                                    <Image
                                        src="/assets/images/service/icons/08.svg"
                                        alt="service"
                                        width={45}
                                        height={45}
                                    />
                                </div>
                                <div className="inner-content">
                                    <Link href="/service-details">
                                        <h5 className="title">Management planning</h5>
                                    </Link>
                                    <p className="disc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                    <Link
                                        href="/service-details"
                                        className="rts-btn btn-primary btn-white"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="service-single-main-wrapper-five">
                                <div className="icon">
                                    <Image
                                        src="/assets/images/service/icons/09.svg"
                                        alt="service"
                                        width={40}
                                        height={35}
                                    />
                                </div>
                                <div className="inner-content">
                                    <Link href="/service-details">
                                        <h5 className="title">Business Growth</h5>
                                    </Link>
                                    <p className="disc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                    <Link
                                        href="/service-details"
                                        className="rts-btn btn-primary btn-white"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="service-single-main-wrapper-five">
                                <div className="icon">
                                    <Image
                                        src="/assets/images/service/icons/10.svg"
                                        alt="service"
                                        width={44}
                                        height={45}
                                    />
                                </div>
                                <div className="inner-content">
                                    <Link href="/service-details">
                                        <h5 className="title">Social planning</h5>
                                    </Link>
                                    <p className="disc">
                                        Purus dui eget sollicitudin curae leo proin platea cras, morbi
                                        torquent massa
                                    </p>
                                    <Link
                                        href="/service-details"
                                        className="rts-btn btn-primary btn-white"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service area end */}
        </>
    );
}

export default ServicesFive;
