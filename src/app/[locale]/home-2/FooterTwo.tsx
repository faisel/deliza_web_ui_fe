import React from 'react'
interface FooterTwoProps {
  id?: string
}
function FooterTwo({ id }: FooterTwoProps) {
    return (
        <div id={id} className="rts-footer-area pt--100 pb--100 pt_sm--50 pb_sm--40  footer-two footer-bg-two">
            <div className="container">
                <div className="row">
                    {/* single wized */}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="footer-two-single-wized left">
                            <h3 className="title animated fadeIn">
                                <span>Ready To</span> <br />
                                Work With Us?
                            </h3>
                            <p className="disc">
                                Felis consequat magnis est fames sagittis ultrices placerat sodales
                                porttitor quisque.
                            </p>
                            <a className="rts-btn btn-primary" href="#">
                                Get a Quote
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
                        <div className="footer-two-single-wized two">
                            <div className="wized-title-area">
                                <h5 className="wized-title">Our Services</h5>
                                <img src="/assets/images/footer/01.png" alt="Deliza_Footer" />
                            </div>
                            <div className="wized-2-body">
                                <ul>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-solid fa-angles-right" />
                                            Business planning
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-solid fa-angles-right" />
                                            Tax strategy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-solid fa-angles-right" />
                                            Financial advices
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-solid fa-angles-right" />
                                            Insurance strategy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-solid fa-angles-right" />
                                            Manage investment
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* single wized */}
                    <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--30 mt_md--30">
                        <div className="footer-two-single-wized">
                            <div className="wized-title-area">
                                <h5 className="wized-title">Contact Us</h5>
                                <img src="/assets/images/footer/01.png" alt="Deliza_Footer" />
                            </div>
                            <div className="wized-2-body">
                                <div className="contact-info-1">
                                    <div className="icon">
                                        <i className="fas fa-phone-alt" />
                                    </div>
                                    <div className="disc">
                                        <span>Call Us 24/7</span>
                                        <a href="#">(+256) 2145.2156</a>
                                    </div>
                                </div>
                                <div className="contact-info-1">
                                    <div className="icon">
                                        <i className="fas fa-envelope" />
                                    </div>
                                    <div className="disc">
                                        <span>Work with us</span>
                                        <a href="#">info@deliza.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single wized */}
                    {/* single wized */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="footer-two-single-wized right">
                            <div className="wized-2-body">
                                <div className="contact-info-1">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div className="disc">
                                        <span>Our Location</span>
                                        <a href="#">
                                            XYZ Hilton Street, 125 Town <br />
                                            United State
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single wized */}
                </div>
            </div>
        </div>

    )
}

export default FooterTwo