import React from 'react'

import Image from "next/image";
function ProjectImage() {
    return (
        <>
            {/* rts project details area start */}
            <div className="rts-project-details-area-end rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-details-main-inner">
                                <div className="project-details-thumbnail">
                                    <Image
                                        src="/assets/images/project/18.webp"
                                        alt="project"
                                        width={1935}
                                        height={974}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts project details area end */}
        </>

    )
}

export default ProjectImage