import React from 'react'
import Link from 'next/link'

type ServiceEightProps ={
  id?: string;
}

function ServiceEight({ id }: ServiceEightProps) {
    return (
        <>
            {/* rts service area start */}
            <div id={id} className="rts-service-area-start rts-sectiong-gap">
                <div className="container padding-extend-300">
                    <div className="row">
                        <div className="col-lg-6 pr--30 pr_sm--10">
                            <section className="main-wrapper-sticky">
                                <div className="sticky-statement narrow">
                                    <div className="left-side">
                                        <div className="icon">
                                            <img src="/assets/images/service/01.svg" alt="service" />
                                        </div>
                                        <h5 className="title">Business Solution</h5>
                                    </div>
                                    <div className="right">
                                        <Link href="/service-details" className="arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="sticky-statement narrow">
                                    <div className="left-side">
                                        <div className="icon">
                                            <img src="/assets/images/service/02.svg" alt="service" />
                                        </div>
                                        <h5 className="title">Creative Ideas</h5>
                                    </div>
                                    <div className="right">
                                        <Link href="/service-details" className="arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="sticky-statement narrow">
                                    <div className="left-side">
                                        <div className="icon">
                                            <img src="/assets/images/service/03.svg" alt="service" />
                                        </div>
                                        <h5 className="title">Market Research</h5>
                                    </div>
                                    <div className="right">
                                        <Link href="/service-details" className="arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="sticky-statement narrow">
                                    <div className="left-side">
                                        <div className="icon">
                                            <img src="/assets/images/service/01.svg" alt="service" />
                                        </div>
                                        <h5 className="title">Technology Solution</h5>
                                    </div>
                                    <div className="right">
                                        <Link href="/service-details" className="arrow">
                                            <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-lg-6">
                            <div className="title-style-one left mb--0 position-sticky top--120 mt_sm--40">
                                <span className="pre">Our Services</span>
                                <h2 className="title rts-text-anime-style-1 uppercase">
                                    Effective Services
                                </h2>
                                <p className="disc">
                                    we believe in the power of collaboration and personalized
                                    solutions. By understanding our clients' unique needs and goals,
                                    we tailor our approach to deliver strategic insights, creative
                                    solutions.
                                </p>
                                <Link href="/service" className="rts-btn btn-primary">
                                    View All Service
                                </Link>
                            </div>
                            <div className="service-arrow-bottom-main">
                                <img src="/assets/images/banner/shape/08.png" alt="service" />
                            </div>
                        </div>
                    </div>
                    <div className="row rts-section-gap">
                        <div className="col-lg-12">
                            <div className="service-bottom-cta">
                                <h5 className="title">Do You Need Any Kind Of Work?</h5>
                                <div className="right">
                                    <p>
                                        Call Us Anytime! <a href="#">+(125) 2153-2158</a>
                                    </p>
                                </div>
                                <div className="mid-image">
                                    <img src="/assets/images/service/01.png" alt="service_image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service area end */}
        </>

    )
}

export default ServiceEight