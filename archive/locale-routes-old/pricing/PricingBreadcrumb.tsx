import React from 'react'

import Image from "next/image";
function PricingBreadcrumb() {
    return (
        <>
            {/* about us area wrapper main */}
            <div className="rts-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left">
                                <span className="bg-title">Pricing</span>
                                <h1 className="title rts-text-anime-style-1">Price Plans</h1>
                                <p className="disc" style={{ maxWidth: "45%" }}>
                                    With a team of experienced professionals and a passion for
                                    innovation, we combine cutting-edge strategies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-area">
                    <Image
                        src="/assets/images/about/shape/01.png"
                        alt="shape"
                        className="one"
                        width={132}
                        height={132}
                    />
                    <Image
                        src="/assets/images/about/shape/02.png"
                        alt="shape"
                        className="two"
                        width={90}
                        height={90}
                    />
                    <Image
                        src="/assets/images/about/shape/03.png"
                        alt="shape"
                        className="three"
                        width={234}
                        height={154}
                    />
                </div>
            </div>
            {/* about us area wrapper main end */}
        </>

    )
}

export default PricingBreadcrumb