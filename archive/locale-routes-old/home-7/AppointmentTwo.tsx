import React from 'react'

function AppointmentTwo() {
    return (
        <>
            {/* appoinment  area start */}
            <div className="appoinment-area-seven bg_image ptb--100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appoinment-main-wrapper-7">
                                <form action="#">
                                    <span>Make an Appointment</span>
                                    <h4 className="title">Request a free quote</h4>
                                    <div className="input-half-wrapper">
                                        <div className="signle-input">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="signle-input">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="signle-input">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="signle-input">
                                        <textarea placeholder="Type Your Message" defaultValue={""} />
                                    </div>
                                    <button className="btn-primary rts-btn ">Submit Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* appoinment  area end */}
        </>

    )
}

export default AppointmentTwo