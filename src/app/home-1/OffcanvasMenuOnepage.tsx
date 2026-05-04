"use client";
import Link from "@/i18n/LocalizedLink";
import { useState } from "react";

interface OffcanvasMenuOnepageProps {
    isOpen: boolean;
    onClose: () => void;
}

function OffcanvasMenuOnepage({ isOpen, onClose }: OffcanvasMenuOnepageProps) {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const toggleMenu = (index: number) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    return (
        <>
            <div
                id="side-bar"
                className={`side-bar header-two ${isOpen ? "show" : ""}`}
                style={{ visibility: isOpen ? "visible" : "hidden" }}
            >
                {/* Close Button */}
                <button className="close-icon-menu" title="Close menu" onClick={onClose}>
                    <i className="fa fa-times" />
                </button>

                {/* Desktop Sidebar */}
                <div className="rts-sidebar-menu-desktop">
                    <Link className="logo-1" href="/">
                        <img className="logo" src="/assets/images/logo/01.svg" alt="finbiz_logo" />
                    </Link>
                    <div className="body d-none d-xl-block">
                        <p className="disc">
                            We must explain to you how all seds this mistakens idea denouncing
                            pleasures and praising account. All seds this mistakens idea denouncing
                            pleasures.
                        </p>
                        <div className="get-in-touch">
                            <div className="h6 title">Get In Touch</div>
                            <div className="wrapper">
                                <div className="single"><i className="fas fa-phone-alt" /><a href="#">+8801234566789</a></div>
                                <div className="single"><i className="fas fa-envelope" /><a href="#">example@gmail.com</a></div>
                                <div className="single"><i className="fas fa-globe" /><a href="#">www.webexample.com</a></div>
                                <div className="single"><i className="fas fa-map-marker-alt" /><a href="#">13/A, New Pro State, NYC</a></div>
                            </div>
                            <div className="social-wrapper-two menu">
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fab fa-instagram" /></a>
                                <a href="#"><i className="fab fa-linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="mobile-menu d-block d-xl-none">
                    <nav className="nav-main mainmenu-nav mt--30">
                        <ul className="mainmenu" id="mobile-menu-active">

                            {/* Home */}
                            <li>
                                <a href="#home" className="main" onClick={onClose}>Home</a>
                            </li>
                            {/* About */}
                            <li>
                                <a href="#about" className="main" onClick={onClose}>About</a>
                            </li>
                            {/* Services */}
                            <li>
                                <a href="#service" className="main" onClick={onClose}>Services</a>
                            </li>
                            {/* Project */}
                            <li>
                                <a href="#project" className="main" onClick={onClose}>Project</a>
                            </li>
                            {/* Contact */}
                            <li>
                                <a href="#contact" className="main" onClick={onClose}>Contact</a>
                            </li>

                        </ul>
                    </nav>

                    {/* Social Icons */}
                    <div className="social-wrapper-one">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube" /></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OffcanvasMenuOnepage;
