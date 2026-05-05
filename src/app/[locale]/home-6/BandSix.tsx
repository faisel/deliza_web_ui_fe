import React from 'react'

import Image from "next/image";
function BandSix() {
    return (
        <div className="rts-brand-area rts-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand-list-area-wrapper">
                            <div className="left-paragraph">
                                <p>Our Trusted Clients</p>
                            </div>
                            <div className="right-brand-area-wrapper">
                                <div className="single-image">
                                    <Image
                                        src="/assets/images/brand/01.webp"
                                        alt="brand"
                                        width={262}
                                        height={74}
                                    />
                                </div>
                                <div className="single-image">
                                    <Image
                                        src="/assets/images/brand/02.webp"
                                        alt="brand"
                                        width={263}
                                        height={64}
                                    />
                                </div>
                                <div className="single-image">
                                    <Image
                                        src="/assets/images/brand/03.webp"
                                        alt="brand"
                                        width={258}
                                        height={54}
                                    />
                                </div>
                                <div className="single-image">
                                    <Image
                                        src="/assets/images/brand/04.webp"
                                        alt="brand"
                                        width={254}
                                        height={62}
                                    />
                                </div>
                                <div className="single-image">
                                    <Image
                                        src="/assets/images/brand/05.webp"
                                        alt="brand"
                                        width={250}
                                        height={66}
                                    />
                                </div>
                                <div className="single-image">
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
        </div>
    )
}

export default BandSix