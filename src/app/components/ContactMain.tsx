import React from 'react'

function ContactMain() {
    return (
        <>
            {/* contact areas main */}
            <div
                className="rts-contact-area-in-page"
                data-animation="fadeInUp"
                data-delay="0.2"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="contact-info-area-wrapper-p">
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone-flip" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span>Call Us 24/7</span>
                                        <a href="#">(+256) 2145.2156</a>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span>Work with us</span>
                                        <a href="#">info@deliza.com</a>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span>Our Location</span>
                                        <a href="#">125 Town, United State</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="thumbnail-contact-form">
                                <img src="assets/images/contact/01.webp" alt="contact" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="contact-form-p">
                                <form
                                    className="form__content"
                                    method="post"
                                    action="#"
                                    id="contact-form"
                                >
                                    <h4 className="title">Get In Touch</h4>
                                    <input
                                        name="name"
                                        id="name"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Johndoe@gmail.com"
                                    />
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                    <button className="rts-btn btn-primary" type="submit">
                                        Get In Touch
                                    </button>
                                </form>
                                <div id="form-messages" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact areas main end */}
        </>

    )
}

export default ContactMain