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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248778.1226535137!2d-86.69566092360928!3d37.327475452900615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842734c8b1953c9%3A0x771f6f4ec5ccdffc!2sKentucky%2C%20USA!5e0!3m2!1sen!2sbd!4v1741757435755!5m2!1sen!2sbd"
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