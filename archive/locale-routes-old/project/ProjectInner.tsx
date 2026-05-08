import React from 'react'

import Image from "next/image";
function ProjectInner() {
    return (
        <>
            {/* case studies area start */}
            <div className="rts-case-studies-area rts-section-gapBottom project-inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul
                                className="nav nav-tabs nav-project-tab"
                                id="myTab"
                                role="tablist"
                            >
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
                                        All Projects
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
                                        Business
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="contact-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact"
                                        aria-selected="false"
                                    >
                                        Solution
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="contactone-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#contactone"
                                        type="button"
                                        role="tab"
                                        aria-controls="contactone"
                                        aria-selected="false"
                                    >
                                        Marketing
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row g-5 mt--10">
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/03.webp"
                                                        alt="project"
                                                        width={1260}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Business Growth</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/04.webp"
                                                        alt="project"
                                                        width={1260}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Startup Solution</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/05.webp"
                                                        alt="project"
                                                        width={1262}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Growth Manage</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/06.webp"
                                                        alt="project"
                                                        width={1266}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Company Skills</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
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
                                    <div className="row g-5 mt--10">
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/03.webp"
                                                        alt="project"
                                                        width={1260}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Business Growth</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/04.webp"
                                                        alt="project"
                                                        width={1260}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Startup Solution</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/05.webp"
                                                        alt="project"
                                                        width={1262}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Growth Manage</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/06.webp"
                                                        alt="project"
                                                        width={1266}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Company Skills</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <div className="row g-5 mt--10">
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/03.webp"
                                                        alt="project"
                                                        width={1260}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Business Growth</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/04.webp"
                                                        alt="project"
                                                        width={1260}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Startup Solution</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/05.webp"
                                                        alt="project"
                                                        width={1262}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Growth Manage</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/06.webp"
                                                        alt="project"
                                                        width={1266}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Company Skills</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="contactone"
                                    role="tabpanel"
                                    aria-labelledby="contactone-tab"
                                >
                                    <div className="row g-5 mt--10">
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/03.webp"
                                                        alt="project"
                                                        width={1260}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Business Growth</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/04.webp"
                                                        alt="project"
                                                        width={1260}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Startup Solution</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/05.webp"
                                                        alt="project"
                                                        width={1262}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Growth Manage</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-project-style-three">
                                                <a href="#" className="thumbnail">
                                                    <Image
                                                        src="/assets/images/project/06.webp"
                                                        alt="project"
                                                        width={1266}
                                                        height={806}
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href="#">
                                                        <h4 className="title">Company Skills</h4>
                                                    </a>
                                                    <span>Business Strategy</span>
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
            {/* case studies area end */}
        </>

    )
}

export default ProjectInner