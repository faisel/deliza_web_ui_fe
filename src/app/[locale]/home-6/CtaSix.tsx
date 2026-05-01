import React from 'react'
import Link from 'next/link'

function CtaSix() {
    return (
        <>
            {/* rts cta area stat */}
            <div className="rts-cta-area-six ptb--100 bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-main-wrapper-six">
                                <h3 className="title">
                                    Need Any Marketing Solution? Contact With Us
                                </h3>
                                <Link href="/contact" className="rts-btn btn-primary">
                                    Lets Work Together
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts cta area end */}
        </>

    )
}

export default CtaSix