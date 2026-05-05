'use client'
import { useState, useEffect } from 'react';
import Link from "@/i18n/LocalizedLink";

function HeaderSix() {
    const [isSticky, setIsSticky] = useState(false);
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
                                    <ul className="">
                                        <li className="main-nav has-dropdown mega-menu project-a-after">
                                            <a href="#">Home</a>
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
                                                                    <Link href={item.href}>
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
                                            <a href="#">Pages</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="container">
                                                        <div className="row g-0">
                                                            {pagesMenuData.map((col, index) => (
                                                                <div className="col-lg-3" key={index}>
                                                                    <ul className="mega-menu-item with-list parent-nav">

                                                                    {col.map((item, i) => (
                                                                        <li key={i}>
                                                                        <Link href={item.link}>
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
                                            <a href="#">Service</a>
                                            <div className="rts-mega-menu service-mega-menu-style">
                                                <div className="wrapper">
                                                    <div className="container">
                                                        <div className="row g-5">
                                                            {/* LEFT 2 COLUMNS */}
                                                            {serviceMenuData.map((column, colIndex) => (
                                                            <div className="col-lg-4" key={colIndex}>
                                                                <ul className="mega-menu-item parent-nav">
                                                                {column.items.map((item, i) => (
                                                                    <li key={i}>
                                                                    <Link href={item.link} className={item.extraClass || ""}>
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

                                                            {/* RIGHT SIDE IMAGE */}
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
                                            <a href="#">Project</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="container">
                                                        <div className="row g-0">
                                                            {projectMenuData.map((col, colIndex) => (
                                                            <div className="col-lg-3" key={colIndex}>
                                                                <ul className="mega-menu-item with-list parent-nav">

                                                                {/* Column Title */}
                                                                <li className="hega-menu-head-wrapper">
                                                                    <p className="hega-menu-head">
                                                                    <i className="fa-regular fa-folder-open" />
                                                                    {col.title}
                                                                    </p>
                                                                </li>

                                                                {/* Column Links */}
                                                                {col.items.map((item, index) => (
                                                                    <li key={index}>
                                                                    <Link href={item.link}>
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
                                            <a href="#">Blog</a>
                                            <ul className="submenu parent-nav">
                                                {blogMenuData.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.link}>{item.label}</Link>
                                                </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="main-nav has-dropdown project-a-after">
                                            <a href="#">Contact</a>
                                            <ul className="submenu parent-nav">
                                                    <li>
                                                        <Link href="/contact">Contact</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact-2">Contact 2</Link>
                                                    </li>
                                                </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="action-area">
                                    <a href="#" className="rts-btn btn-primary btn-white">
                                        Book a Meeting
                                    </a>
                                    <button id="menu-btn" className="menu menu-btn ml--20 ml_sm--5">
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
  // Column 1
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

  // Column 2
  [
    { label: "Team Details", link: "/team-details" },
    { label: "Pricing", link: "/pricing" },
    { label: "Appoinment", link: "/appoinment" },
    { label: "Our History", link: "/history" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
    { label: "404", link: "/404" },
  ],

  // Column 3
  [
    { label: "Blog Details", link: "/blog/liliput-settle-tips-of-the-new-ages-exist" },
    { label: "Faq's", link: "/faq" },
    { label: "Career", link: "/career" },
    { label: "Our Mission", link: "/our-mission" },
    { label: "Partners", link: "/partners" },
    { label: "Contact 2", link: "/contact-2" },
  ],

  // Column 4
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
        link: "/service-details-5",
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

// Right-side banner image
const serviceMenuThumb = "/assets/images/banner/24.webp";

export default HeaderSix