import Link from 'next/link';
import React from 'react'

type FooterTenProps ={
  id?: string;
}

function FooterTen({ id }: FooterTenProps) {
    return (
        <>
            {/* footer area start */}
            <div id={id} className="footer-8-area-bg bg_image pt--65">
                <div className="container pb--65">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-logo-area-left-8">
                                <Link href="/" className="logo">
                                    <img src="/assets/images/logo/03.svg" alt="logo" />
                                </Link>
                                <p className="disc">
                                    Felis consquat magnis fames sagittis ultrices plasodales porttitor
                                    quisque ultrice tempor turpis.
                                </p>
                                <ul className="social-area-wrapper-two">
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-4">
                            <div className="footer-one-single-wized">
                                <div className="wized-title">
                                    <h5 className="title">Quick Links</h5>
                                    <img
                                        src="/assets/images/footer/under-title.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="quick-link-inner">
                                    <ul className="links">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" /> Forum Support
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" /> Help &amp; FAQ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" /> Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" /> Pricing &amp; Plans
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" /> Cookie Policy
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="links margin-left-70">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" /> About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" /> My Account
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" />
                                                Our Company
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-arrow-right" />
                                                Service
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-3">
                            <div className="footer-one-single-wized">
                                <div className="wized-title">
                                    <h5 className="title">Contact Us</h5>
                                    <img
                                        src="/assets/images/footer/under-title.png"
                                        alt="finbiz_footer"
                                    />
                                </div>
                                <div className="quick-link-inner d-block">
                                    <div className="signle-footer-contact-8">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone-alt" />
                                        </div>
                                        <div className="inner-content">
                                            <h5 className="title">Call Us 24/7</h5>
                                            <a href="#">(+256) 2145.2156</a>
                                        </div>
                                    </div>
                                    <div className="signle-footer-contact-8">
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope" />
                                        </div>
                                        <div className="inner-content">
                                            <h5 className="title">Work with us</h5>
                                            <a href="#">info@deliza.com</a>
                                        </div>
                                    </div>
                                    <div className="signle-footer-contact-8">
                                        <div className="icon">
                                            <i className="fa-solid fa-location-dot" />
                                        </div>
                                        <div className="inner-content">
                                            <h5 className="title">Our Location</h5>
                                            <a href="#">
                                                XYZ Hilton Street, 125 Town <br />
                                                United State
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area-main-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-8-wrapper">
                                    <p>Deliza - Copyright . All rights reserved.</p>
                                    <ul>
                                        <li>
                                            <a href="/privacy-policy">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="/terms-of-condition">Terms &amp; Condition</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer area start */}
        </>

    )
}

export default FooterTen