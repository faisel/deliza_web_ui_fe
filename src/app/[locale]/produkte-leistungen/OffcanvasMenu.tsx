"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { navHref } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";
import { mainNavKeys } from "./HeaderOne";

interface OffcanvasMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const CONTACT_PHONE = "081 661 23 45";
const CONTACT_PHONE_HREF = "tel:+41816612345";
const CONTACT_EMAIL = "info@giessenpark.com";
const CONTACT_WEBSITE = "www.deliza.ch";
const CONTACT_WEBSITE_HREF = "https://www.deliza.ch";
const CONTACT_ADDRESS = "Flurweg 4, 7310 Bad Ragaz";

const sidebarCopy: Record<Locale, { description: string; getInTouch: string }> = {
    de: {
        description:
            "Wir verbinden Gastronomie, Innovation und Hospitality, um bedeutungsvolle Erlebnisse zu schaffen. Von Kulinarik und Produkten bis hin zur Beratung verwandeln wir Ideen mit Leidenschaft und Expertise in Realität.",
        getInTouch: "Kontakt aufnehmen",
    },
    en: {
        description:
            "We bring together gastronomy, innovation, and hospitality to create meaningful experiences. From dining and products to consulting, we turn ideas into reality with passion and expertise.",
        getInTouch: "Get In Touch",
    },
    fr: {
        description:
            "Nous réunissons gastronomie, innovation et hospitalité pour créer des expériences uniques. De la restauration et des produits au conseil, nous transformons les idées en réalité avec passion et expertise.",
        getInTouch: "Nous contacter",
    },
    it: {
        description:
            "Uniamo gastronomia, innovazione e ospitalità per creare esperienze significative. Dalla ristorazione e dai prodotti alla consulenza, trasformiamo le idee in realtà con passione ed esperienza.",
        getInTouch: "Contattaci",
    },
};

function OffcanvasMenu({ isOpen, onClose }: OffcanvasMenuProps) {
    const { locale, messages } = useTranslation();
    const copy = sidebarCopy[locale];

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
                    <Link className="logo-1" href={navHref("home", locale)}>
                        <Image
                            className="logo deliza-logo"
                            src="/assets/images/logo/deliza_web_b.png"
                            alt="Deliza"
                            width={300}
                            height={89}
                            sizes="200px"
                        />
                    </Link>
                    <div className="body d-none d-xl-block">
                        <p className="disc">{copy.description}</p>
                        <div className="get-in-touch">
                            <div className="h6 title">{copy.getInTouch}</div>
                            <div className="wrapper">
                                <div className="single"><i className="fas fa-phone-alt" /><a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a></div>
                                <div className="single"><i className="fas fa-envelope" /><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
                                <div className="single"><i className="fas fa-globe" /><a href={CONTACT_WEBSITE_HREF}>{CONTACT_WEBSITE}</a></div>
                                <div className="single"><i className="fas fa-map-marker-alt" /><a href="#">{CONTACT_ADDRESS}</a></div>
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
                            {mainNavKeys.map((key) => (
                                <li key={key}>
                                    <Link href={navHref(key, locale)} className="main">
                                        {messages.header.nav[key]}
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
