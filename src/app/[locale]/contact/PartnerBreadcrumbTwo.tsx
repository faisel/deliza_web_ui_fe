"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";
import type { NavKey } from "@/i18n/routing";
import styles from "./PartnerBreadcrumbTwo.module.css";

interface PartnerBreadcrumbTwoProps {
    /** Defaults to "contact" — locale routes under kontakt / contact / contatto. */
    nav?: NavKey;
    /** Hero image source. Will eventually be supplied by the API. */
    image?: string;
    imageAlt?: string;
}

const DEFAULT_IMAGE = "/assets/images/deliza/banner/8.jpg";

function PartnerBreadcrumbTwo({
    nav = "contact",
    image = DEFAULT_IMAGE,
    imageAlt,
}: PartnerBreadcrumbTwoProps) {
    const { messages } = useTranslation();
    const page = messages.seo.pages[nav];

    return (
        <>
            {/* partners area breadcrumb area wrapper */}
            <div className={`partner-breadcrumb ${styles.wrapper}`}>
                <Image
                    src={image}
                    alt={imageAlt ?? page.h1}
                    fill
                    priority
                    sizes="100vw"
                    className={styles.image}
                />
                <div className={styles.overlay} aria-hidden="true" />
                <div className={`container ${styles.content}`}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left center">
                                <h1 className="title">{page.h1}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* partners area breadcrumb area end */}
        </>
    );
}

export default PartnerBreadcrumbTwo;
