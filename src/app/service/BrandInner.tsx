import React from 'react'

interface BrandInnerProps {
    className?: string;
}
function BrandInner({ className = "" }: BrandInnerProps) {
    return (
        <>
            {/* brand area start */}
            <div className={`rts-brand-area ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-list-area-wrapper">
                                <div className="left-paragraph">
                                    <p>Our Trusted Clients</p>
                                </div>
                                <div className="right-brand-area-wrapper">
                                    <div className="single-image">
                                        <img src="/assets/images/brand/01.webp" alt="brand" />
                                    </div>
                                    <div className="single-image">
                                        <img src="/assets/images/brand/02.webp" alt="brand" />
                                    </div>
                                    <div className="single-image">
                                        <img src="/assets/images/brand/03.webp" alt="brand" />
                                    </div>
                                    <div className="single-image">
                                        <img src="/assets/images/brand/04.webp" alt="brand" />
                                    </div>
                                    <div className="single-image">
                                        <img src="/assets/images/brand/05.webp" alt="brand" />
                                    </div>
                                    <div className="single-image">
                                        <img src="/assets/images/brand/06.webp" alt="brand" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* brand area end */}
        </>

    )
}

export default BrandInner