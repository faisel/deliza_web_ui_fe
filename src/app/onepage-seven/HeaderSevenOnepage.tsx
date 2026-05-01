'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import OffcanvasMenuOnepage from '../home-1/OffcanvasMenuOnepage';

function HeaderSevenOnepage() {
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
            {/* header trasnparent area start */}
            <header className={`header-transparent header-seven header--sticky ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-transparent-main-wrapper">
                                <Link href="/" className="logo">
                                    <img src="/assets/images/logo/02.svg" alt="index" />
                                </Link>
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
                                <div className="action-area">
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
            </header>
            {/* header trasnparent area end */}
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


export default HeaderSevenOnepage