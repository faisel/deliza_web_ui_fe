"use client";

import Image from "next/image";
import styles from "./PartnerBreadcrumbTwo.module.css";

interface PartnerBreadcrumbTwoProps {
    title: string;
    image?: string;
    imageAlt?: string;
}

const DEFAULT_IMAGE = "/assets/images/deliza/banner/404.jpg";

function PartnerBreadcrumbTwo({
    title,
    image = DEFAULT_IMAGE,
    imageAlt,
}: PartnerBreadcrumbTwoProps) {
    return (
        <>
            {/* partners area breadcrumb area wrapper */}
            <div className={`partner-breadcrumb ${styles.wrapper}`}>
                <Image
                    src={image}
                    alt={imageAlt ?? title}
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
                                <h1 className="title">{title}</h1>
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
