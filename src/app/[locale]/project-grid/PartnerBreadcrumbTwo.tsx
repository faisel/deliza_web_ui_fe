"use client";

import { useTranslation } from "@/i18n/useTranslation";
import type { NavKey } from "@/i18n/routing";

interface PartnerBreadcrumbTwoProps {
    /** Defaults to "products" — used under /[locale]/products-services. */
    nav?: NavKey;
}

function PartnerBreadcrumbTwo({ nav = "products" }: PartnerBreadcrumbTwoProps) {
    const { messages } = useTranslation();
    const page = messages.seo.pages[nav];

    return (
        <>
            {/* partners area breadcrumb area wrapper */}
            <div className="partner-breadcrumb bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left center">
                                {page.eyebrow && (
                                    <span className="pre">{page.eyebrow}</span>
                                )}
                                {page.bgTitle && (
                                    <span className="bg-title">{page.bgTitle}</span>
                                )}
                                <h1 className="title">{page.h1}</h1>
                                {page.heroDescription && (
                                    <p className="disc">{page.heroDescription}</p>
                                )}
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
