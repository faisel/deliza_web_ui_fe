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
                                <img src="/assets/images/brand/01.webp" alt="Business_client" />
                            </div>
                            <div className="single">
                                <img src="/assets/images/brand/02.webp" alt="Business_client" />
                            </div>
                            <div className="single">
                                <img src="/assets/images/brand/03.webp" alt="Business_client" />
                            </div>
                            <div className="single">
                                <img src="/assets/images/brand/04.webp" alt="Business_client" />
                            </div>
                            <div className="single">
                                <img src="/assets/images/brand/05.webp" alt="Business_client" />
                            </div>
                            <div className="single">
                                <img src="/assets/images/brand/06.webp" alt="Business_client" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BrandFive