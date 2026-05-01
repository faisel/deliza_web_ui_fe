import React from 'react'

function Breadcrumb() {
    return (
        <>
            {/* about us area wrapper main */}
            <div className="rts-breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left center">
                                <span className="bg-title">Appoinment</span>
                                <h1 className="title rts-text-anime-style-1">Appoinment</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-area">
                    <img src="assets/images/about/shape/01.png" alt="shape" className="one" />
                    <img src="assets/images/about/shape/02.png" alt="shape" className="two" />
                    <img
                        src="assets/images/about/shape/03.png"
                        alt="shape"
                        className="three"
                    />
                </div>
            </div>
            {/* about us area wrapper main end */}
        </>

    )
}

export default Breadcrumb