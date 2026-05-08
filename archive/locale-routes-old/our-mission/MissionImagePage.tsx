import React from 'react'

import Image from "next/image";
function MissionImagePage() {
    return (
        <>
            {/* rts mission area srtaet */}
            <div className="rts-mission-image-page rts-section-gapBottom">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="thumbnail-mission"
                                data-animation="fadeInUp"
                                data-delay="0.1"
                            >
                                <Image
                                    src="/assets/images/mission/01.webp"
                                    alt="mission"
                                    width={615}
                                    height={720}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="thumbnail-mission"
                                data-animation="fadeInUp"
                                data-delay="0.2"
                            >
                                <Image
                                    src="/assets/images/mission/02.webp"
                                    alt="mission"
                                    width={615}
                                    height={720}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="thumbnail-mission"
                                data-animation="fadeInUp"
                                data-delay="0.3"
                            >
                                <Image
                                    src="/assets/images/mission/03.webp"
                                    alt="mission"
                                    width={615}
                                    height={720}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts mission area end */}
        </>

    )
}

export default MissionImagePage