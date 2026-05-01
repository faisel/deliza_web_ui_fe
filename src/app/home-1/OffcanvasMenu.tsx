"use client";
import Link from "next/link";
import { useState } from "react";

interface OffcanvasMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function OffcanvasMenu({ isOpen, onClose }: OffcanvasMenuProps) {
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
                        <img className="logo deliza-logo" src="/assets/images/logo/deliza_web_b.png" alt="Deliza" />
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

                            {/* Demos */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleMenu(0)} className="main" aria-expanded={activeMenu === 0}>
                                    Demos
                                </button>
                                <ul className="submenu" style={{ height: activeMenu === 0 ? "auto" : "0", overflow: "hidden" }}>
                                    <li><Link href="/">Business One</Link></li>
                                    <li><Link href="/home-2">Business Two</Link></li>
                                    <li><Link href="/home-3">Business Three</Link></li>
                                    <li><Link href="/home-4">Business Four</Link></li>
                                    <li><Link href="/home-5">Finance Demo</Link></li>
                                    <li><Link href="/home-6">Marketing agency</Link></li>
                                    <li><Link href="/home-7">Business agency</Link></li>
                                    <li><Link href="/home-8">Business Management</Link></li>
                                    <li><Link href="/home-9">Insurance Home</Link></li>
                                    <li><Link href="/home-10">Business Website</Link></li>
                                </ul>
                            </li>

                            {/* Onepage */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleMenu(1)} className="main" aria-expanded={activeMenu === 1}>
                                    Onepage
                                </button>
                                <ul className="submenu" style={{ height: activeMenu === 1 ? "auto" : "0", overflow: "hidden" }}>
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <li key={i}><Link href={`/onepage-${i + 1}`}>Onepage {i + 1}</Link></li>
                                    ))}
                                </ul>
                            </li>

                            {/* Pages */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleMenu(2)} className="main" aria-expanded={activeMenu === 2}>
                                    Pages
                                </button>
                                <ul className="submenu" style={{ height: activeMenu === 2 ? "auto" : "0", overflow: "hidden" }}>
                                    <li><Link href="/about">About Company</Link></li>
                                    <li><Link href="/service">Service</Link></li>
                                    <li><Link href="/service-details">Service Details</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/history">Our History</Link></li>
                                    <li><Link href="/blog-list">Blog List</Link></li>
                                    <li><Link href="/faq">FAQ's</Link></li>
                                    <li><Link href="/career">Career</Link></li>
                                </ul>
                            </li>

                            {/* Services */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleMenu(3)} className="main" aria-expanded={activeMenu === 3}>
                                    Services
                                </button>
                                <ul className="submenu" style={{ height: activeMenu === 3 ? "auto" : "0", overflow: "hidden" }}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <li key={i}><Link href={`/service-details-${i + 1}`}>Service Details {i + 1}</Link></li>
                                    ))}
                                </ul>
                            </li>

                            {/* Projects */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleMenu(4)} className="main" aria-expanded={activeMenu === 4}>
                                    Projects
                                </button>
                                <ul className="submenu" style={{ height: activeMenu === 4 ? "auto" : "0", overflow: "hidden" }}>
                                    <li><Link href="/project">Project</Link></li>
                                    <li><Link href="/project-slider">Project Slider</Link></li>
                                    <li><Link href="/project-grid">Project Grid</Link></li>
                                    <li><Link href="/project-card-slider">Project Card Slider</Link></li>
                                </ul>
                            </li>

                            {/* Shop */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleMenu(5)} className="main" aria-expanded={activeMenu === 5}>
                                    Shop Pages
                                </button>
                                <ul className="submenu" style={{ height: activeMenu === 5 ? "auto" : "0", overflow: "hidden" }}>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/shop-single">Shop Details</Link></li>
                                    <li><Link href="/account">Account</Link></li>
                                </ul>
                            </li>

                            {/* Blog */}
                            <li className="has-droupdown">
                                <button onClick={() => toggleMenu(6)} className="main" aria-expanded={activeMenu === 6}>
                                    Blog
                                </button>
                                <ul className="submenu" style={{ height: activeMenu === 6 ? "auto" : "0", overflow: "hidden" }}>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">Blog Details</Link></li>
                                </ul>
                            </li>

                            {/* Contact */}
                            <li>
                                <Link href="/contact" className="main">Contact Us</Link>
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

export default OffcanvasMenu;
