import React from 'react'

import Image from "next/image";
function PartnerMain() {
    return (
        <>
            {/* our partner area start */}
            <div className="our-partner-area-content-bottom rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="our-partner-bottom-wrapper">
                                <h2 className="title">
                                    Stronger Together Building the Future, One Partnership
                                </h2>
                                <p className="disc">
                                    That’s why we’re committed to forming strong, strategic that drive
                                    innovation, growth, and mutual benefit. Whether looking to expand
                                    your reach opportunities, or create.
                                </p>
                            </div>
                            <div className="brand-area-main-wrapper--box pt--80">
                                <div className="single-brand">
                                    <Image
                                        src="/assets/images/brand/01.webp"
                                        alt="brand"
                                        width={262}
                                        height={74}
                                    />
                                </div>
                                <div className="single-brand">
                                    <Image
                                        src="/assets/images/brand/02.webp"
                                        alt="brand"
                                        width={263}
                                        height={64}
                                    />
                                </div>
                                <div className="single-brand border-last">
                                    <Image
                                        src="/assets/images/brand/03.webp"
                                        alt="brand"
                                        width={258}
                                        height={54}
                                    />
                                </div>
                                <div className="single-brand border-bottom">
                                    <Image
                                        src="/assets/images/brand/04.webp"
                                        alt="brand"
                                        width={254}
                                        height={62}
                                    />
                                </div>
                                <div className="single-brand border-bottom">
                                    <Image
                                        src="/assets/images/brand/05.webp"
                                        alt="brand"
                                        width={250}
                                        height={66}
                                    />
                                </div>
                                <div className="single-brand border-bottom">
                                    <Image
                                        src="/assets/images/brand/06.webp"
                                        alt="brand"
                                        width={262}
                                        height={74}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our partner area end */}
        </>

    )
}

export default PartnerMain