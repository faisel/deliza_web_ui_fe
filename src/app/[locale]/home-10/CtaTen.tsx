import React from 'react'

function CtaTen() {
    return (
        <>
            {/* rts cta area start */}
            <div className="rts-cts-area-start bg_cts-10 bg_iamge ptb--95">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-style-10-wrapper">
                                <div className="left-side">
                                    <span>Subscribe Newsletter</span>
                                    <h3 className="title">
                                        Stay Updated with <br /> the Latest News!
                                    </h3>
                                </div>
                                <div className="right-side">
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
            </div>
            {/* rts cta area end */}
        </>

    )
}

export default CtaTen