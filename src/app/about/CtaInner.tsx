import React from 'react'

function CtaInner() {
    return (
        <>
            {/* rts cta area start */}
            <div className="rts-cta-area-inner bg_image ptb--100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-inner-content-inner-page">
                                <div className="left-side-content">
                                    <span>Subscribe Newsletter</span>
                                    <h3 className="title">
                                        Stay Updated with <br /> the Latest News!
                                    </h3>
                                </div>
                                <form action="#">
                                    <input type="text" placeholder="Enter Email Address" />
                                    <button className="rts-btn btn-primary btn-white">
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts cta area end */}
        </>

    )
}

export default CtaInner