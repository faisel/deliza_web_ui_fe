"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";
import type { SeoNavKey } from "@/i18n/routing";

interface BannerProps {
    /** Defaults to "contact" — main usage. */
    nav?: SeoNavKey;
}

function Banner({ nav = "contact" }: BannerProps) {
    const { messages } = useTranslation();
    const page = messages.seo.pages[nav];

    return (
        <>
            <div className="rts-breadcrumb-area">
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
                <div className="shape-area">
                    <Image
                        src="/assets/images/about/shape/01.png"
                        alt=""
                        className="one"
                        width={132}
                        height={132}
                    />
                    <Image
                        src="/assets/images/about/shape/02.png"
                        alt=""
                        className="two"
                        width={90}
                        height={90}
                    />
                    <Image
                        src="/assets/images/about/shape/03.png"
                        alt=""
                        className="three"
                        width={234}
                        height={154}
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;
