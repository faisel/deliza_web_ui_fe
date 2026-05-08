import React from 'react'

function GoogleMaps() {
    return (
        <>
            {/* map area start */}
            <div className="google-map-area rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="google-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.986146486497!2d9.505352112137121!3d47.0043679292497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4784cb8f659d35fb%3A0x64461dd27f9ea5f7!2sFlurweg%204%2C%207310%20Bad%20Ragaz!5e1!3m2!1sen!2sch!4v1778262756645!5m2!1sen!2sch"
                                    width={600}
                                    height={600}
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* map area end */}
        </>

    )
}

export default GoogleMaps