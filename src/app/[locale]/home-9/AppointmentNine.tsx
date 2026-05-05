import React from 'react'

import Image from "next/image";
function AppointmentNine() {
    return (
        <>
            {/* rts appoinment area start */}
            <div className="rts-appoinment-area-9 bg_image rts-section-gap">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="thumbnail-appoinment-9">
                                <Image
                                    src="/assets/images/appoinment/05.webp"
                                    alt="appoinment"
                                    width={1182}
                                    height={1422}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="#" className="appoinment-area-9">
                                <div className="inner">
                                    <div className="title-style-five mb--40">
                                        <span className="pre">Get In Touch</span>
                                        <h2 className="title">
                                            Let’s Discuss Of Your <br /> Insurance Needs
                                        </h2>
                                    </div>
                                    <div className="half-input-wrapper">
                                        <div className="single-input">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="single-input">
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="half-input-wrapper">
                                        <div className="single-input">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="single-input">
                                            <input type="email" placeholder="Contact Number" />
                                        </div>
                                    </div>
                                    <textarea placeholder="Type Your Message" defaultValue={""} />
                                    <a href="#" className="rts-btn btn-primary">
                                        Submit Message
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts appoinment area end */}
        </>

    )
}

export default AppointmentNine