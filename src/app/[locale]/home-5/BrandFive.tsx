import Image from "next/image";
interface BrandFiveProps {
  className?: string
}

function BrandFive({ className = "" }: BrandFiveProps){
    return (
        <div className={`rts-trusted-client ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title-area-client-client text-center">
                            <p className="client-title">Our Trusted Clients</p>
                        </div>
                    </div>
                </div>
                <div className="row mt--65">
                    <div className="col-lg-12">
                        <div className="client-three-wrapper">
                            <div className="single">
                                <Image
                                    src="/assets/images/brand/01.webp"
                                    alt="Business_client"
                                    width={262}
                                    height={74}
                                />
                            </div>
                            <div className="single">
                                <Image
                                    src="/assets/images/brand/02.webp"
                                    alt="Business_client"
                                    width={263}
                                    height={64}
                                />
                            </div>
                            <div className="single">
                                <Image
                                    src="/assets/images/brand/03.webp"
                                    alt="Business_client"
                                    width={258}
                                    height={54}
                                />
                            </div>
                            <div className="single">
                                <Image
                                    src="/assets/images/brand/04.webp"
                                    alt="Business_client"
                                    width={254}
                                    height={62}
                                />
                            </div>
                            <div className="single">
                                <Image
                                    src="/assets/images/brand/05.webp"
                                    alt="Business_client"
                                    width={250}
                                    height={66}
                                />
                            </div>
                            <div className="single">
                                <Image
                                    src="/assets/images/brand/06.webp"
                                    alt="Business_client"
                                    width={262}
                                    height={74}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BrandFive