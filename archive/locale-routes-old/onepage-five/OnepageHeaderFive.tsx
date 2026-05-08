'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "@/i18n/LocalizedLink";
import OffcanvasMenuOnepage from '../../home-1/OffcanvasMenuOnepage';

function OnepageHeaderFive() {

    const [isSticky, setIsSticky] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`header-five header--sticky ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row header-top-three">
                        <div className="col-lg-6">
                            <p className="top-left">
                                Are you ready to grow up your business?{" "}
                                <Link href="/contact">
                                    Contact Us <i className="fa fa-arrow-right" />
                                </Link>
                            </p>
                        </div>
                        <div className="col-lg-6 right-h-three">
                            <div className="header-top-right">
                                <div className="single-right email">
                                    <i className="fas fa-envelope" />
                                    <a href="#">info@example.com</a>
                                </div>
                                <div className="single-right call">
                                    <i className="fa fa-phone-volume" />
                                    <span>Hotline:</span>
                                    <a href="#">+210-9856988</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row main-header main-header-three">
                        <div className="col-lg-3 col-md-4 col-sm-5 col-5">
                            <Link href="/" className="thumbnail-logo">
                                <Image
                                    src="/assets/images/logo/01.svg"
                                    alt="Logo_three"
                                    width={193}
                                    height={53}
                                />
                            </Link>
                        </div>
                        <div className="col-lg-6 d-none d-xl-block">
                            <div className="text-center d-flex justify-content-center">
                                <div className="nav-area">
                                    <ul>
                                        <li className="main-nav mega-menu project-a-after">
                                            <a href="#home">Home</a>
                                        </li>

                                        <li className="main-nav mega-menu">
                                            <a href="#about">About</a>
                                        </li>
                                        <li className="main-nav mega-menu">
                                            <a href="#service">Service</a>
                                        </li>
                                        <li className="main-nav mega-menu">
                                            <a href="#project">Project</a>
                                        </li>
                                        <li className="main-nav project-a-after">
                                            <a href="#blog">Blog</a>
                                        </li>
                                        <li className="main-nav"><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-9 col-md-8 col-sm-7 col-7">
                            <div className="button-area-wrapper">
                                <Link
                                    href="/contact"
                                    className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                                >
                                    Get Quote
                                </Link>
                                <button id='menu-btn'
                                    className="menu-btn menu ml--20 ml_sm--5"
                                    onClick={() => setIsOffcanvasOpen(true)}
                                >
                                    <Image
                                        className="menu-light"
                                        src="/assets/images/icons/01.svg"
                                        alt="Menu-icon"
                                        width={20}
                                        height={16}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenuOnepage isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />
            <div
                id="anywhere-home"
                className={isOffcanvasOpen || isSearchOpen ? "bgshow" : ""}
                onClick={() => {
                    setIsOffcanvasOpen(false);
                    setIsSearchOpen(false);
                }}
            >

            </div>
        </>
    )
}

export default OnepageHeaderFive
