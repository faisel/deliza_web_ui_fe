'use client'
import { useState, useEffect } from 'react';
import Link from "@/i18n/LocalizedLink";
import OffcanvasMenu from './OffcanvasMenu';
import { useTranslation } from '@/i18n/useTranslation';
import { localizePath } from '@/i18n/routing';
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher';

type NavKey = "home" | "brands" | "products" | "investment" | "about" | "news" | "contact";

export const mainNavItems: { key: NavKey; href: string }[] = [
    { key: "home", href: "/" },
    { key: "brands", href: "/brands" },
    { key: "products", href: "/products-services" },
    { key: "investment", href: "/investment-consulting" },
    { key: "about", href: "/about-us" },
    { key: "news", href: "/news-events" },
    { key: "contact", href: "/contact-us" },
];

interface HeaderOneProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
}

const DELIZA_LOGO_SRC = "/assets/images/logo/deliza_web_b.png";
const DELIZA_LOGO_ALT = "Deliza";

function HeaderOne({
    className = "",
}: HeaderOneProps) {
    const { locale, messages } = useTranslation();
    const [isSticky, setIsSticky] = useState(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const t = messages;

    return (
        <>
            <header className={`header-one header--sticky ${isSticky ? 'sticky' : ''} ${className}`}>
                <div className="header-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-main-one-wrapper">
                                    <div className="thumbnail">
                                        <Link href={`/${locale}`}>
                                            <img className="deliza-logo" src={DELIZA_LOGO_SRC} alt={DELIZA_LOGO_ALT} />
                                        </Link>
                                    </div>
                                    <div className="main-header">
                                        <div className="nav-area">
                                            <ul className="">
                                                {mainNavItems.map((item) => (
                                                    <li key={item.key} className="main-nav">
                                                        <Link href={localizePath(item.href, locale)}>
                                                            {t.header.nav[item.key]}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="button-area">
                                            <LanguageSwitcher className="ml--10" />
                                            <button id='menu-btn'
                                                className="menu-btn menu ml--20 ml_sm--5"
                                                onClick={() => setIsOffcanvasOpen(true)}
                                                aria-label="Open menu"
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
            <OffcanvasMenu isOpen={isOffcanvasOpen} onClose={() => setIsOffcanvasOpen(false)} />
            <div
                id="anywhere-home"
                className={isOffcanvasOpen ? "bgshow" : ""}
                onClick={() => {
                    setIsOffcanvasOpen(false);
                }}
            >
            </div>
        </>
    )
}


export default HeaderOne
