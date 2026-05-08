'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import OffcanvasMenu from '@/app/home-1/OffcanvasMenu';
import { useTranslation } from '@/i18n/useTranslation';
import { navHref, type NavKey } from '@/i18n/routing';
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher';

export const mainNavKeys: NavKey[] = [
    "home",
    "brands",
    "products",
    "investment",
    "about",
    "news",
    "contact",
];

interface DelizaHeaderProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
}

const DELIZA_LOGO_SRC = "/assets/images/logo/deliza_web_b.png";
const DELIZA_LOGO_ALT = "Deliza";

function DelizaHeader({
    className = "",
}: DelizaHeaderProps) {
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
                                        <Link href={navHref("home", locale)}>
                                            <Image
                                                className="deliza-logo"
                                                src={DELIZA_LOGO_SRC}
                                                alt={DELIZA_LOGO_ALT}
                                                width={300}
                                                height={89}
                                                priority
                                                sizes="200px"
                                            />
                                        </Link>
                                    </div>
                                    <div className="main-header">
                                        <div className="nav-area">
                                            <ul className="">
                                                {mainNavKeys.map((key) => (
                                                    <li key={key} className="main-nav">
                                                        <Link href={navHref(key, locale)}>
                                                            {t.header.nav[key]}
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
                                                <Image
                                                    className="menu-light"
                                                    src="/assets/images/icons/01.svg"
                                                    alt=""
                                                    width={20}
                                                    height={16}
                                                    aria-hidden="true"
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


export default DelizaHeader
