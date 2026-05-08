"use client";

import { useTranslation } from "@/i18n/useTranslation";
import type { NavKey } from "@/i18n/routing";

interface BreadcrumbServiceProps {
    /** Defaults to "investment" — main use case under /[locale]/investment-consulting. */
    nav?: NavKey;
}

function BreadcrumbService({ nav = "investment" }: BreadcrumbServiceProps) {
    const { messages } = useTranslation();
    const page = messages.seo.pages[nav];

    return (
        <div className="breadcrumb-service-detals-one">
            <div className="container-1754">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-inner-service-details-1 bg_image">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="title-area-left">
                                            {page.eyebrow && (
                                                <span className="pre">{page.eyebrow}</span>
                                            )}
                                            {page.bgTitle && (
                                                <span className="bg-title">{page.bgTitle}</span>
                                            )}
                                            <h1 className="title rts-text-anime-style-1">
                                                {page.h1}
                                            </h1>
                                            {page.heroDescription && (
                                                <p className="disc">{page.heroDescription}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadcrumbService;
