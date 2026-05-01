'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import OffcanvasMenuOnepage from '../../home-1/OffcanvasMenuOnepage';

interface OnepageHeaderOneProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
}

function OnepageHeaderOne({
    className = "",
    logoSrc = "",
    logoAlt = "",
}: OnepageHeaderOneProps) {
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
            <header className={`header-one header--sticky ${isSticky ? 'sticky' : ''} ${className}`}>
                <div className="header-top-area-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-top-one-wrapper">
                                    <div className="left">
                                        <div className="mail">
                                            <a href="mailto:webmaster@example.com">
                                                <i className="fa fa-envelope" />
                                                support@deliza.com
                                            </a>
                                        </div>
                                        <div className="working-time">
                                            <p>
                                                <i className="fa fa-clock" /> Working: 8.00am - 5.00pm
                                            </p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <ul className="top-nav">
                                            <li>
                                                <Link href="/blog-list">Company news</Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">Faq</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                        <ul className="social-wrapper-one">
                                            <li>
                                                <a href="#" aria-label="Facebook">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="twitter">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" aria-label="instagram">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="mr--0" href="#" aria-label="linkedin">
                                                    <i className="fab fa-linkedin-in" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-main-one-wrapper">
                                    <div className="thumbnail">
                                        <Link href="/">
                                            <img src={logoSrc} alt={logoAlt} />
                                        </Link>
                                    </div>
                                    <div className="main-header">
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
                                        <div className="button-area">
                                            <button
                                                className="search"
                                                id="search"
                                                aria-label="Search"
                                                onClick={() => setIsSearchOpen(true)}
                                            >
                                                <i className="fa fa-search" />
                                            </button>
                                            <Link href="/contact" className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn">Get
                                                Quote</Link>
                                            <button id='menu-btn'
                                                className="menu-btn menu ml--20 ml_sm--5"
                                                onClick={() => setIsOffcanvasOpen(true)}
                                            >
                                                <img
                                                    className="menu-light"
                                                    src="/assets/images/icons/01.svg"
                                                    alt="Menu-icon"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenuOnepage isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />
            <div className={`search-input-area ${isSearchOpen ? "show" : ""}`}>
                <div className="container">
                    <div className="search-input-inner">
                        <div className="input-div">
                            <input
                                className="search-input autocomplete"
                                type="text"
                                placeholder="Search by keyword or #"
                            />
                            <button>
                                <i className="fa fa-search" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Close Icon */}
                <div
                    id="close"
                    className="search-close-icon"
                    onClick={() => setIsSearchOpen(false)}
                >
                    <i className="fa fa-times" />
                </div>
            </div>
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


export default OnepageHeaderOne