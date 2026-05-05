import React from 'react'

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
                    <img src="/assets/images/about/shape/01.png" alt="shape" className="one" />
                    <img src="/assets/images/about/shape/02.png" alt="shape" className="two" />
                    <img
                        src="/assets/images/about/shape/03.png"
                        alt="shape"
                        className="three"
                    />
                </div>
            </div>
            {/* about us area wrapper main end */}
        </>

    )
}

export default PricingBreadcrumb