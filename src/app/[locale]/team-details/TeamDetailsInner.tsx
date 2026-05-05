import React from 'react'

import Image from "next/image";
function BlogDetailsInner() {
    return (
        <>
            {/* team details area main wrapper */}
            <div className="team-details-top-wrapper-about rts-section-gapBottom mt-dec-section-inner pt--35">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="thumbnail-team-details"
                                data-animation="zoomOut"
                                data-delay="0.2"
                                data-duration="1.2"
                            >
                                <Image
                                    src="/assets/images/team/16.webp"
                                    alt="team"
                                    width={990}
                                    height={840}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 pl--35 pl_sm--15 mt_md--30 mt_sm--50">
                            <div className="team-details-right-inner">
                                <div
                                    className="title-area"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                >
                                    <span className="pre-title">Business Expert</span>
                                    <h3 className="title animated fadeIn">David X. Smith</h3>
                                </div>
                                <p className="disc" data-animation="fadeInUp" data-delay="0.2">
                                    Vehicula duis tempus vel porttitor lacus morbi pharetra neque,
                                    pretium ad enim urna ridiculus nibh, mus class arcu magna ornare
                                    orci mollis. Posuere quam eget non mollis platea habitasse cras
                                    feugiat.
                                </p>
                                <div
                                    className="team-details-support-wrapper"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                >
                                    <i className="fa fa-envelope" />
                                    <div className="support-innner">
                                        <span>Email Address</span>
                                        <a href="#">
                                            <h5 className="title">support@david.com</h5>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="team-details-support-wrapper"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                >
                                    <i className="fa-solid fa-regular fa-phone-volume" />
                                    <div className="support-innner">
                                        <span>Phone Number</span>
                                        <a href="#">
                                            <h5 className="title">+259 2154.21568</h5>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="team-details-support-wrapper"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                >
                                    <i className="fa fa-map-marker-alt" />
                                    <div className="support-innner">
                                        <span>Office Location</span>
                                        <a href="#">
                                            <h5 className="title">24/DA, Hilton Street, United State</h5>
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="rts-btn btn-primary"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                >
                                    {" "}
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* team details area main wrapper end */}
            <div
                className="rts-team-skill-area rts-section-gapBottom"
                data-animation="fadeInUp"
                data-delay="0.2"
            >
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            {/* single skill area */}
                            <div className="single-about-skill-inner">
                                <h5 className="title">Professional Skills</h5>
                                <p className="disc">
                                    Completely evisculate stand alone expertise through revolutionary
                                    strategic are theme areas fashion impactful paradigms for process
                                    centric relationships with whiteboard seamless intellectual capital
                                    with methods.
                                </p>
                                <div className="rts-progress-one-wrapper-td">
                                    <div className="single-progress">
                                        <div className="progress-top">
                                            <p className="progress-title">Product Design</p>
                                            <span className="persectage">70%</span>
                                        </div>
                                        <div className="meter cadetblue">
                                            <span data-progress={70} style={{ width: "69%" }} />
                                        </div>
                                    </div>
                                    <div className="single-progress">
                                        <div className="progress-top">
                                            <p className="progress-title">Growth Analysis</p>
                                            <span className="persectage">93%</span>
                                        </div>
                                        <div className="meter">
                                            <span data-progress={93} style={{ width: "92%" }} />
                                        </div>
                                    </div>
                                    <div className="single-progress">
                                        <div className="progress-top">
                                            <p className="progress-title">Brand Managment</p>
                                            <span className="persectage">85%</span>
                                        </div>
                                        <div className="meter orange">
                                            <span data-progress={85} style={{ width: "84%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single skill area end*/}
                        </div>
                        <div className="col-lg-6">
                            {/* single skill area */}
                            <div className="single-about-skill-inner pl--30 pl_md--0 pl_sm--0">
                                <h5 className="title">Educational Experience</h5>
                                <p className="disc">
                                    Completely evisculate stand alone expertise through revolutionary
                                    strategic are theme areas fashion impactful paradigms for process
                                    centric relationships with whiteboard seamless intellectual capital
                                    with methods.
                                </p>
                                <div className="education-skill-wrapper">
                                    <div className="single-skill">
                                        <div className="number-area">
                                            <p>
                                                1 <span>st</span>
                                            </p>
                                        </div>
                                        <h6 className="experience">Business Expert</h6>
                                        <div className="date">
                                            2016 - Present <span>(Finbiz)</span>
                                        </div>
                                    </div>
                                    <div className="single-skill">
                                        <div className="number-area">
                                            <p>
                                                2 <span>nd</span>
                                            </p>
                                        </div>
                                        <h6 className="experience">Finance Manager</h6>
                                        <div className="date">
                                            2016 - Present <span>(Finbiz)</span>
                                        </div>
                                    </div>
                                    <div className="single-skill">
                                        <div className="number-area">
                                            <p>
                                                3 <span>rd</span>
                                            </p>
                                        </div>
                                        <h6 className="experience">Junior Technician</h6>
                                        <div className="date">
                                            2016 - Present <span>(Finbiz)</span>
                                        </div>
                                    </div>
                                    <div className="single-skill">
                                        <div className="number-area">
                                            <p>
                                                4 <span>th</span>
                                            </p>
                                        </div>
                                        <h6 className="experience">Junior Architect</h6>
                                        <div className="date">
                                            2016 - Present <span>(Finbiz)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* single skill area end*/}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default BlogDetailsInner