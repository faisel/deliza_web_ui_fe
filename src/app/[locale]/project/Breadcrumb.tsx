import React from 'react'

import Image from "next/image";
function Breadcrumb() {
    return (
        <>
            {/* about us area wrapper main */}
            <div className="rts-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left center project-breadcrumb">
                                <span className="bg-title">Our Project</span>
                                <h1 className="title rts-text-anime-style-1">
                                    Business Growth Check
                                </h1>
                                <p className="disc">
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

export default Breadcrumb