'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ServicesNine() {
    useEffect(() => {
        AOS.init({
            once: true, // animations happen only once
            duration: 1200, // default duration
        })
    }, [])

    return (
        <>
            {/* rts service area start */}
            <div className="rts-service-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-five center">
                                <span className="pre">Popular Insurance</span>
                                <h2 className="title">Our Latest Insurance</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
                            <div className="single-service-nine bg_image">
                                <h3 className="title">Home Insurance</h3>
                                <Link href="/service-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="single-service-nine two bg_image">
                                <h3 className="title">Personal Insurance</h3>
                                <Link href="/service-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="single-service-nine three bg_image">
                                <h3 className="title">Financial Insurance</h3>
                                <Link href="/service-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="single-service-nine four bg_image">
                                <h3 className="title">Health Insurance</h3>
                                <Link href="/service-details" className="icon">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service area end */}
        </>
    )
}

export default ServicesNine
