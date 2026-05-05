import React from 'react'

import Image from "next/image";
type ServicesBottomProps ={
  id?: string;
}
function ServicesBottom({ id }: ServicesBottomProps) {
    return (
        <>
            {/* rts service bottom area start */}
            <div id={id} className="rts-service-bottom-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-bottom-cta">
                                <h5 className="title">Do You Need Any Kind Of Work?</h5>
                                <div className="right">
                                    <p>
                                        Call Us Anytime! <a href="#">+(125) 2153-2158</a>
                                    </p>
                                </div>
                                <div className="mid-image">
                                    <Image
                                        src="/assets/images/service/01.png"
                                        alt="service_image"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service bottom area end */}
        </>

    )
}

export default ServicesBottom