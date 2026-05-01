import React from 'react'

function NewsletterEight() {
    return (
        <>
            {/* rts ubscribe area start */}
            <div className="rts-subscribe-area-8 rts-section-gap bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-one center">
                                <span className="pre">Subscribe Newsletter</span>
                                <h2 className="title">
                                    Your Connection to All Things <br /> New{" "}
                                    <span>Subscribe Now</span>
                                </h2>
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
            {/* rts ubscribe area end */}
        </>

    )
}

export default NewsletterEight