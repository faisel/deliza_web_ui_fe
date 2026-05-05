import React from 'react'

import Image from "next/image";
function LargeImage() {
    return (
        <div className="about-deliza-large-image">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="large-image-bottm-breadcrumb">
                            <Image
                                src="/assets/images/about/16.webp"
                                alt="about"
                                width={1290}
                                height={628}
                            />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default LargeImage