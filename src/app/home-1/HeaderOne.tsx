'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import OffcanvasMenu from './OffcanvasMenu';
import { useTranslation } from '@/i18n/useTranslation';
import { localizePath } from '@/i18n/routing';
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher';

interface HeaderOneProps {
    className?: string;
    logoSrc?: string;
    logoAlt?: string;
}

function HeaderOne({
    className = "",
    logoSrc = "",
    logoAlt = "",
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
                <div className="header-top-area-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-top-one-wrapper">
                                    <div className="left">
                                        <div className="mail">
                                            <a href={`mailto:${t.header.topbar.email}`}>
                                                <i className="fa fa-envelope" />
                                                {t.header.topbar.email}
                                            </a>
                                        </div>
                                        <div className="working-time">
                                            <p>
                                                <i className="fa fa-clock" /> {t.header.topbar.workingHours}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <ul className="top-nav">
                                            <li>
                                                <Link href={localizePath("/blog-list", locale)}>{t.header.topNav.companyNews}</Link>
                                            </li>
                                            <li>
                                                <Link href={localizePath("/faq", locale)}>{t.header.topNav.faq}</Link>
                                            </li>
                                            <li>
                                                <Link href={localizePath("/contact", locale)}>{t.header.topNav.contact}</Link>
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
                                        <Link href={`/${locale}`}>
                                            <img src={logoSrc} alt={logoAlt} />
                                        </Link>
                                    </div>
                                    <div className="main-header">
                                        <div className="nav-area">
                                            <ul className="">
                                                <li className="main-nav has-dropdown mega-menu project-a-after">
                                                    <a href="#">{t.header.nav.home}</a>
                                                    <div className="rts-mega-menu with-home-demos">
                                                        <div className="wrapper">
                                                            <div className="container">
                                                                <div className="row g-0">

                                                                    {megaMenuData.map((group, i) => (
                                                                        <div key={i} className="col-lg-3">
                                                                            <ul className="mega-menu-item with-list parent-nav">

                                                                                <li className="hega-menu-head-wrapper">
                                                                                    <p className="hega-menu-head">
                                                                                        <i className="fa-regular fa-folder-open" />
                                                                                        {group.title}
                                                                                    </p>
                                                                                </li>

                                                                                {group.items.map((item, index) => (
                                                                                    <li key={index}>
                                                                                        <Link href={localizePath(item.href, locale)}>
                                                                                            <i className="fa-sharp fa-solid fa-chevron-right" />
                                                                                            {item.label}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}

                                                                            </ul>
                                                                        </div>
                                                                    ))}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="main-nav has-dropdown mega-menu">
                                                    <a href="#">{t.header.nav.pages}</a>
                                                    <div className="rts-mega-menu">
                                                        <div className="wrapper">
                                                            <div className="container">
                                                                <div className="row g-0">

                                                                    {pagesMenuData.map((col, index) => (
                                                                        <div className="col-lg-3" key={index}>
                                                                            <ul className="mega-menu-item with-list parent-nav">

                                                                                {col.map((item, i) => (
                                                                                    <li key={i}>
                                                                                        <Link href={localizePath(item.link, locale)}>
                                                                                            <i className="fa-sharp fa-solid fa-chevron-right" />
                                                                                            {item.label}
                                                                                            {item.badge && (
                                                                                                <span className="new-badge">{item.badge}</span>
                                                                                            )}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}

                                                                            </ul>
                                                                        </div>
                                                                    ))}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="main-nav has-dropdown mega-menu">
                                                    <a href="#">{t.header.nav.service}</a>
                                                    <div className="rts-mega-menu service-mega-menu-style">
                                                        <div className="wrapper">
                                                            <div className="container">
                                                                <div className="row g-5">

                                                                    {serviceMenuData.map((column, colIndex) => (
                                                                        <div className="col-lg-4" key={colIndex}>
                                                                            <ul className="mega-menu-item parent-nav">
                                                                                {column.items.map((item, i) => (
                                                                                    <li key={i}>
                                                                                        <Link href={localizePath(item.link, locale)} className={item.extraClass || ""}>
                                                                                            <div className="single-service-menu">

                                                                                                {item.icon && (
                                                                                                    <div className="icon">
                                                                                                        <img src={item.icon} alt="service" />
                                                                                                    </div>
                                                                                                )}

                                                                                                <div className="info">
                                                                                                    <h5 className="title">{item.title}</h5>
                                                                                                    <p className="details">{item.details}</p>
                                                                                                </div>

                                                                                            </div>
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}

                                                                    <div className="col-lg-4">
                                                                        <div className="menu-thumb pl--20">
                                                                            <img src={serviceMenuThumb} alt="service banner" />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="main-nav has-dropdown mega-menu">
                                                    <a href="#">{t.header.nav.project}</a>
                                                    <div className="rts-mega-menu">
                                                        <div className="wrapper">
                                                            <div className="container">
                                                                <div className="row g-0">

                                                                    {projectMenuData.map((col, colIndex) => (
                                                                        <div className="col-lg-3" key={colIndex}>
                                                                            <ul className="mega-menu-item with-list parent-nav">

                                                                                <li className="hega-menu-head-wrapper">
                                                                                    <p className="hega-menu-head">
                                                                                        <i className="fa-regular fa-folder-open" />
                                                                                        {col.title}
                                                                                    </p>
                                                                                </li>

                                                                                {col.items.map((item, index) => (
                                                                                    <li key={index}>
                                                                                        <Link href={localizePath(item.link, locale)}>
                                                                                            <i className="fa-sharp fa-solid fa-chevron-right" />
                                                                                            {item.label}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    ))}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="main-nav has-dropdown project-a-after">
                                                    <a href="#">{t.header.nav.blog}</a>
                                                    <ul className="submenu parent-nav">
                                                        {blogMenuData.map((item, index) => (
                                                            <li key={index}>
                                                                <Link href={localizePath(item.link, locale)}>{item.label}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className="main-nav has-dropdown project-a-after">
                                                    <a href="#">{t.header.nav.contact}</a>
                                                    <ul className="submenu parent-nav">
                                                        <li>
                                                            <Link href={localizePath("/contact", locale)}>{t.header.nav.contact}</Link>
                                                        </li>
                                                        <li>
                                                            <Link href={localizePath("/contact-2", locale)}>{t.header.nav.contact} 2</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="button-area">
                                            <LanguageSwitcher className="ml--10" />
                                            <Link
                                                href={localizePath("/contact", locale)}
                                                className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                                            >
                                                {t.common.buttons.getQuote}
                                            </Link>
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


export const megaMenuData = [
    {
        title: "Multi Page",
        items: [
            { href: "/", label: "Business One" },
            { href: "/home-2", label: "Business Two" },
            { href: "/home-3", label: "Business Three" },
            { href: "/home-4", label: "Business Four" },
            { href: "/home-5", label: "Finance Demo" }
        ]
    },

    {
        title: "Multi Page",
        items: [
            { href: "/home-6", label: "Marketing agency" },
            { href: "/home-7", label: "Business agency" },
            { href: "/home-8", label: "Business Management" },
            { href: "/home-9", label: "Insurance Home" },
            { href: "/home-10", label: "Business Website" }
        ]
    },

    {
        title: "One Page",
        items: [
            { href: "/onepage-one", label: "Business One" },
            { href: "/onepage-two", label: "Business Two" },
            { href: "/onepage-three", label: "Business Three" },
            { href: "/onepage-four", label: "Business Four" },
            { href: "/onepage-five", label: "Finance Demo" }
        ]
    },

    {
        title: "One Page",
        items: [
            { href: "/onepage-six", label: "Marketing agency" },
            { href: "/onepage-seven", label: "Business agency" },
            { href: "/onepage-eight", label: "Business Management" },
            { href: "/onepage-nine", label: "Insurance Home" },
            { href: "/onepage-ten", label: "Business Website" }
        ]
    }
];

const pagesMenuData = [
    [
        { label: "About Company", link: "/about" },
        { label: "Service", link: "/service" },
        { label: "Service Details", link: "/service-details" },
        { label: "Service Details 2", link: "/service-details-2" },
        { label: "Project", link: "/project" },
        { label: "Team", link: "/team" },
        { label: "Gallery", link: "/gallery" },
        { label: "Pricing Comparison", link: "/pricing-comparison", badge: "New" },
    ],
    [
        { label: "Team Details", link: "/team-details" },
        { label: "Pricing", link: "/pricing" },
        { label: "Appoinment", link: "/appoinment" },
        { label: "Our History", link: "/history" },
        { label: "Blog", link: "/blog" },
        { label: "Contact", link: "/contact" },
        { label: "404", link: "/404" },
    ],
    [
        { label: "Blog Details", link: "/blog/liliput-settle-tips-of-the-new-ages-exist" },
        { label: "Faq's", link: "/faq" },
        { label: "Career", link: "/career" },
        { label: "Our Mission", link: "/our-mission" },
        { label: "Partners", link: "/partners" },
        { label: "Contact 2", link: "/contact-2" },
    ],
    [
        { label: "Shop", link: "/shop" },
        { label: "Shop Details", link: "/shop-single" },
        { label: "Cart", link: "/cart" },
        { label: "Account", link: "/account" },
        { label: "Coming Soon", link: "/coming-soon" },
    ],
];

const serviceMenuData = [
    {
        items: [
            {
                link: "/service-details",
                icon: "/assets/images/service/04.svg",
                title: "Business Solution",
                details: "Once planning is complete, site preparation begins.",
            },
            {
                link: "/service-details",
                icon: "/assets/images/service/05.svg",
                title: "Creative Ideas",
                details: "Quis nulla blandit vulputate morbi adipiscing sem vestibulum.",
            },
            {
                link: "/service-details",
                icon: "/assets/images/service/06.svg",
                title: "Market Research",
                details: "Elever Architecture is a New-York-based studio on modern...",
            },
        ],
    },
    {
        items: [
            {
                link: "/service-details",
                icon: "/assets/images/service/07.svg",
                title: "Structural Engineering",
                details: "We provide best IT solutions for any type of business.",
            },
            {
                link: "/service-details",
                icon: "/assets/images/service/12.svg",
                title: "Post-Construction",
                details: "We provide best IT solutions for any type of business as.",
            },
            {
                link: "/contact",
                extraClass: "free-consultation",
                title: "Get Free Consultation",
                details:
                    "From preconstruction to virtual design and construction.",
            },
        ],
    },
];

const projectMenuData = [
    {
        title: "Types",
        items: [
            { link: "/project", label: "Project" },
            { link: "/project-slider", label: "Project Slider" },
            { link: "/project-slider-2", label: "Project Slider 2" },
            { link: "/project-card-slider", label: "Project Card Slider" },
            { link: "/project-bg-dark", label: "Project Bg Dark" },
        ],
    },
    {
        title: "Grid Style",
        items: [
            { link: "/project-grid", label: "Project Grid" },
            { link: "/project-grid-col-2", label: "Project Grid Col 2" },
            { link: "/project-slider-grid", label: "Grid Slider" },
            { link: "/project-slider-overflow", label: "Project Overflow" },
            { link: "/project-grid-col-3", label: "Project Grid Col 3" },
        ],
    },
    {
        title: "Hover Type",
        items: [
            { link: "/project-bg-dark", label: "Project Hide Content" },
            { link: "/project-slider-2", label: "Project Hide Content Wide" },
            { link: "/project-grid", label: "Project Card Hover" },
            { link: "/project-slider-2", label: "Project Slider Image Zoom" },
        ],
    },
    {
        title: "Single",
        items: [
            { link: "/project-details", label: "Project Details" },
            { link: "/project-details-2", label: "Project Details Video" },
            { link: "/project-details-3", label: "Project Details Slider" },
            { link: "/project-details-large-image", label: "Large Image" },
            { link: "/project-details-gallery", label: "Project Gallery" },
        ],
    },
];

const blogMenuData = [
    { link: "/blog", label: "Blog" },
    { link: "/blog/liliput-settle-tips-of-the-new-ages-exist", label: "Blog Details" },
];

const serviceMenuThumb = "/assets/images/banner/24.webp";

export default HeaderOne
