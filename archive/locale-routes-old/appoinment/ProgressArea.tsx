import React from 'react'

import Image from "next/image";
function ProgressArea() {
    return (
        <>
            {/* rts progress area start */}
            <div className="rts-progress-area-main-wrapper rts-section-gapBottom mt-dec-section-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="progress-circle-main-wrapper">
                                <div
                                    className="single-progress-area ininner"
                                    data-animation="fadeInUp"
                                    data-delay="0.2"
                                >
                                    <div className="single-progress-circle">
                                        <svg
                                            className="radial-progress"
                                            data-countervalue={76}
                                            viewBox="0 0 80 80"
                                        >
                                            <circle className="bar-static" cx={40} cy={40} r={35} />
                                            <circle
                                                className="bar--animated"
                                                cx={40}
                                                cy={40}
                                                r={35}
                                                style={{ strokeDashoffset: "217.8" }}
                                            />
                                            <text
                                                className="countervalue start"
                                                x="50%"
                                                y="50%"
                                                transform="matrix(0, 1, -1, 0, 80, 0)"
                                            />
                                        </svg>
                                        <Image
                                            src="/assets/images/fun/04.svg"
                                            alt="fun"
                                            width={98}
                                            height={98}
                                        />
                                    </div>
                                    <div className="right-counter">
                                        <h2 className="counter title">
                                            <span className="odometer" data-count={76}>
                                                00
                                            </span>
                                            %
                                        </h2>
                                        <p>Trusted Clients</p>
                                    </div>
                                </div>
                                <div
                                    className="single-progress-area ininner"
                                    data-animation="fadeInUp"
                                    data-delay="0.3"
                                >
                                    <div className="single-progress-circle">
                                        <svg
                                            className="radial-progress"
                                            data-countervalue={89}
                                            viewBox="0 0 80 80"
                                        >
                                            <circle className="bar-static" cx={40} cy={40} r={35} />
                                            <circle
                                                className="bar--animated"
                                                cx={40}
                                                cy={40}
                                                r={35}
                                                style={{ strokeDashoffset: "217.8" }}
                                            />
                                            <text
                                                className="countervalue start"
                                                x="50%"
                                                y="50%"
                                                transform="matrix(0, 1, -1, 0, 80, 0)"
                                            />
                                        </svg>
                                        <Image
                                            src="/assets/images/fun/05.svg"
                                            alt="fun"
                                            width={98}
                                            height={98}
                                        />
                                    </div>
                                    <div className="right-counter">
                                        <h2 className="counter title">
                                            <span className="odometer" data-count={89}>
                                                00
                                            </span>
                                            %
                                        </h2>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                                <div
                                    className="single-progress-area ininner"
                                    data-animation="fadeInUp"
                                    data-delay="0.4"
                                >
                                    <div className="single-progress-circle">
                                        <svg
                                            className="radial-progress"
                                            data-countervalue={70}
                                            viewBox="0 0 80 80"
                                        >
                                            <circle className="bar-static" cx={40} cy={40} r={35} />
                                            <circle
                                                className="bar--animated"
                                                cx={40}
                                                cy={40}
                                                r={35}
                                                style={{ strokeDashoffset: "217.8" }}
                                            />
                                            <text
                                                className="countervalue start"
                                                x="50%"
                                                y="50%"
                                                transform="matrix(0, 1, -1, 0, 80, 0)"
                                            />
                                        </svg>
                                        <Image
                                            src="/assets/images/fun/06.svg"
                                            alt="fun"
                                            width={98}
                                            height={98}
                                        />
                                    </div>
                                    <div className="right-counter">
                                        <h2 className="counter title">
                                            <span className="odometer" data-count={70}>
                                                00
                                            </span>
                                            %
                                        </h2>
                                        <p>Business Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts progress area end */}
        </>

    )
}

export default ProgressArea