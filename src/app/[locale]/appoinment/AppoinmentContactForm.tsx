import React from 'react'

import Image from "next/image";
function AppoinmentContactForm() {
    return (
        <>
            {/* appoinment areas tart */}
            <div className="appoinment-area-start rts-section-gapBottom">
                <div className="container">
                    <div
                        className="row align-items-center"
                        data-animation="fadeInUp"
                        data-delay="0.2"
                    >
                        <div className="col-lg-7">
                            <div className="appoinment-wrapper-one-start">
                                <div className="title-style-two mb--40 left">
                                    <span className="bg-content">Hello</span>
                                    <span className="pre">Make An Appointment</span>
                                    <h2 className="title">Request a free quote</h2>
                                </div>
                                <form action="#">
                                    <div className="single-input-wrapper">
                                        <div className="single-input">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="single-input">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="single-input">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="single-input mb--30">
                                        <textarea placeholder="Type Your Message" defaultValue={""} />
                                    </div>
                                    <button className="rts-btn btn-primary">Submit Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="appoinment-thumbnail">
                                <Image
                                    src="/assets/images/appoinment/01.webp"
                                    alt="appoinment"
                                    width={1040}
                                    height={1032}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* appoinment areas end */}
        </>

    )
}

export default AppoinmentContactForm