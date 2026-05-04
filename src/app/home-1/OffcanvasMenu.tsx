"use client";
import Link from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { localizePath } from "@/i18n/routing";
import { mainNavItems } from "./HeaderOne";

interface OffcanvasMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function OffcanvasMenu({ isOpen, onClose }: OffcanvasMenuProps) {
    const { locale, messages } = useTranslation();
    const lp = (path: string) => localizePath(path, locale);

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
                    <Link className="logo-1" href={lp("/")}>
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
                            {mainNavItems.map((item) => (
                                <li key={item.key}>
                                    <Link href={lp(item.href)} className="main">
                                        {messages.header.nav[item.key]}
                                    </Link>
                                </li>
                            ))}
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
