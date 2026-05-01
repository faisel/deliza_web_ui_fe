import React from 'react'

function FaqInner() {
    return (
        <>
            {/* faq area start */}
            <div className="rts-faq-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-five center">
                                <span className="pre">FAQ</span>
                                <h2 className="title rts-text-anime-style-1">
                                    Frequently Asked Questions
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-full mt--40">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="thumbnail-faq-left">
                                <img src="assets/images/faq/02.webp" alt="faq-iumage area" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="accordion faq-wrapper-inner-page"
                                id="accordionExample"
                            >
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            01. What services/products do you offer?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus
                                            magna lobortis imperdiet vivamus est aliquam euismod nector
                                            quam convallis ornare justo service visionary sources unleash
                                            online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            02. Where i can find my business growth result?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus
                                            magna lobortis imperdiet vivamus est aliquam euismod nector
                                            quam convallis ornare justo service visionary sources unleash
                                            online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            03. Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus
                                            magna lobortis imperdiet vivamus est aliquam euismod nector
                                            quam convallis ornare justo service visionary sources unleash
                                            online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            04. Do you need any business invesment policy?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus
                                            magna lobortis imperdiet vivamus est aliquam euismod nector
                                            quam convallis ornare justo service visionary sources unleash
                                            online
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            04. Do you need any business invesment policy?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Neque partrient sed nascetur facilisis suscipit ridiculus
                                            magna lobortis imperdiet vivamus est aliquam euismod nector
                                            quam convallis ornare justo service visionary sources unleash
                                            online
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq area start */}
        </>

    )
}

export default FaqInner