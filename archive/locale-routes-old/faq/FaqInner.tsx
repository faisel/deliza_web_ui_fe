import React from 'react'

import Image from "next/image";
function FaqInner() {
  return (
    <>
  {/* rts faq area start */}
  <div className="rts-faq-area rts-section-gapBottom">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 pl--50 pr--50"
          data-animation="fadeInUp"
          data-delay="0.1"
        >
          <div className="thumbnail-about-right-4">
            <div className="large-iamge">
              <Image
                  src="/assets/images/about/08.webp"
                  alt="about"
                  width={690}
                  height={797}
              />
            </div>
            <div className="small-image images-r">
              <Image
                  src="/assets/images/about/09.webp"
                  alt="about"
                  width={351}
                  height={390}
              />
            </div>
            <div className="poligon-shape images-r">
              <Image
                  src="/assets/images/about/poligon-shape.svg"
                  alt=""
                  width={234}
                  height={266}
                  aria-hidden="true"
              />
            </div>
            <div className="video-area">
              <Image
                  src="/assets/images/about/video.svg"
                  alt="video"
                  width={120}
                  height={143}
              />
              <div className="vedio-icone">
                <a
                  className="video-play-button play-video popup-video"
                  href="https://www.youtube.com/watch?v=vZE0j_WCRvI"
                >
                  <span />
                </a>
                <div className="video-overlay">
                  <a href="#section1" className="video-overlay-close">
                    ×
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 pl--50 pl_md--0 pl_sm--0 mt_md--50 mt_sm--80"
          data-animation="fadeInUp"
          data-delay="0.3"
        >
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
  {/* rts faq area end */}
</>

  )
}

export default FaqInner