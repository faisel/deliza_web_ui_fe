
import Link from 'next/link'


import Image from "next/image";
type ServiceInnerProps ={
  id?: string;
}


function ServiceInner({ id }: ServiceInnerProps) {
 
    return (
        <>
            {/* service area start */}
            <div id={id} className="our-service-area-start rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rts-service-main-wrapper-10">
                                <div className="signle-service-style-10">
                                    <div className="content-area-wrapper">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/service/icons/11.svg"
                                                alt="service"
                                                width={52}
                                                height={52}
                                            />
                                        </div>
                                        <h5 className="title">Business Solution</h5>
                                        <p className="disc">
                                            Fusce dignissim erat dis proin ornare class sem nibh
                                        </p>
                                        <Link href="/service-details" className="arrow-right-btn">
                                            Learn More <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="thumbnail">
                                        <Image
                                            src="/assets/images/service/07.webp"
                                            alt="service"
                                            width={323}
                                            height={330}
                                        />
                                    </div>
                                </div>
                                <div className="signle-service-style-10">
                                    <div className="content-area-wrapper">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/service/icons/12.svg"
                                                alt="service"
                                                width={51}
                                                height={51}
                                            />
                                        </div>
                                        <h5 className="title">Marketing Solution</h5>
                                        <p className="disc">
                                            Fusce dignissim erat dis proin ornare class sem nibh
                                        </p>
                                        <Link href="/service-details" className="arrow-right-btn">
                                            Learn More <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="thumbnail">
                                        <Image
                                            src="/assets/images/service/08.webp"
                                            alt="service"
                                            width={322}
                                            height={330}
                                        />
                                    </div>
                                </div>
                                <div className="signle-service-style-10 order-control-sm-device">
                                    <div className="thumbnail">
                                        <Image
                                            src="/assets/images/service/09.webp"
                                            alt="service"
                                            width={323}
                                            height={330}
                                        />
                                    </div>
                                    <div className="content-area-wrapper">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/service/icons/13.svg"
                                                alt="service"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <h5 className="title">Agency Marketing</h5>
                                        <p className="disc">
                                            Fusce dignissim erat dis proin ornare class sem nibh
                                        </p>
                                        <Link href="/service-details" className="arrow-right-btn">
                                            Learn More <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="signle-service-style-10 order-control-sm-device">
                                    <div className="thumbnail">
                                        <Image
                                            src="/assets/images/service/10.webp"
                                            alt="service"
                                            width={323}
                                            height={330}
                                        />
                                    </div>
                                    <div className="content-area-wrapper">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/service/icons/14.svg"
                                                alt="service"
                                                width={52}
                                                height={52}
                                            />
                                        </div>
                                        <h5 className="title">Startup Paskages</h5>
                                        <p className="disc">
                                            Fusce dignissim erat dis proin ornare class sem nibh
                                        </p>
                                        <Link href="/service-details" className="arrow-right-btn">
                                            Learn More <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service area end */}
        </>

    )
}

export default ServiceInner