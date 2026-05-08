import Link from 'next/link'
import Image from "next/image";
import React from 'react'

type FooterNineProps ={
  id?: string;
}

function FooterNine({ id }: FooterNineProps) {
    return (
        <div id={id} className="rts-footer-area in-green-demo footer-three rts-section-gapTop footer-bg-2">
            <div className="container pb--100 pb_sm--40">
                <div className="row g-5">
                    <div className="col-xl-5 col-lg-6">
                        <div className="footer-three-single-wized left">
                            <Link href="/" className="logo_footer">
                                <Image
                                    src="/assets/images/logo/04.svg"
                                    alt="Logo-image"
                                    width={193}
                                    height={53}
                                />
                            </Link>
                            <p className="disc">
                                Felis consquat magnis fames sagittis ultrices plasodales porttitor
                                quisque ultrice tempor turpis.
                            </p>
                            <ul className="social-three-wrapper">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-skype" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* footer three mid area */}
                    <div className="col-xl-7 col-lg-6">
                        <div className="row">
                            {/* footer mid area left */}
                            <div className="col-lg-7">
                                <div className="footer-three-single-wized footer-two-single-wized mid-left">
                                    <div className="wized-title-area mb--15">
                                        <h5 className="wized-title">Office Inforamtion</h5>
                                        <Image
                                            src="/assets/images/footer/01.png"
                                            alt="Deliza_Footer"
                                            width={60}
                                            height={3}
                                        />
                                    </div>
                                    <div className="body">
                                        <div className="info-wrapper">
                                            <div className="single">
                                                <ul className="icon">
                                                    <li>
                                                        <i className="fas fa-phone-alt" />
                                                    </li>
                                                </ul>
                                                <div className="info">
                                                    <span>Call Us 24/7</span>
                                                    <a href="#">(+256) 2145.2156</a>
                                                </div>
                                            </div>
                                            <div className="single">
                                                <ul className="icon">
                                                    <li>
                                                        <i className="far fa-envelope" />
                                                    </li>
                                                </ul>
                                                <div className="info">
                                                    <span>Work with us</span>
                                                    <a href="#">info@finbiz.com</a>
                                                </div>
                                            </div>
                                            <div className="single">
                                                <ul className="icon">
                                                    <li>
                                                        <i className="fas fa-map-marker-alt" />
                                                    </li>
                                                </ul>
                                                <div className="info">
                                                    <span>Our Location</span>
                                                    <a href="#">
                                                        XYZ Hilton Street, 125 <br />
                                                        Town United State
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* footer mid area left end */}
                            {/* footer mid area right */}
                            <div className="col-lg-5 d-flex flex-end-footer">
                                <div className="footer-two-single-wized two">
                                    <div className="wized-title-area">
                                        <h5 className="wized-title">Our Services</h5>
                                        <Image
                                            src="/assets/images/footer/01.png"
                                            alt="Deliza_Footer"
                                            width={60}
                                            height={3}
                                        />
                                    </div>
                                    <div className="wized-2-body">
                                        <ul>
                                            <li>
                                                <Link href="/service-details">
                                                    <i className="fal fa-chevron-double-right" />
                                                    Business planning
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-details">
                                                    <i className="fal fa-chevron-double-right" />
                                                    Tax strategy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-details">
                                                    <i className="fal fa-chevron-double-right" />
                                                    Financial advices
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-details">
                                                    <i className="fal fa-chevron-double-right" />
                                                    Insurance strategy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-details">
                                                    <i className="fal fa-chevron-double-right" />
                                                    Manage investment
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* footer mid area right end */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area ptb--20">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="disc text-center">
                                DELIZA - Copyright . All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FooterNine