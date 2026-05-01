"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PricingOne() {
  const [activeTab, setActiveTab] = useState("monthly");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      {/* rts pricing area start */}
      <div className="rts-pricing-area-one rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pricing-three-title-area">
                <div className="title-style-one left" data-aos="fade-up">
                  <span className="pre">Price Table</span>
                  <h2 className="title rts-text-anime-style-1">
                    Pricing & Plans
                  </h2>
                </div>

                {/* TAB BUTTONS */}
                <div className="pricing-tab-button-area" data-aos="fade-up">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
                        onClick={() => setActiveTab("monthly")}
                      >
                        Monthly Plan
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTab === "yearly" ? "active" : ""}`}
                        onClick={() => setActiveTab("yearly")}
                      >
                        Yearly Plan
                      </button>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="row mt--100">
            <div className="col-12">

              {/* TAB CONTENT */}
              <div className="tab-content">

                {/* ---------------- MONTHLY TAB ---------------- */}
                {activeTab === "monthly" && (
                  <div className="tab-pane fade show active">
                    <div className="row g-5">
                      {/* Pricing Card 1 */}
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="pricing-wrapper-one">
                          <div className="plane-process">
                            <span>/month</span>
                            <h3 className="title">$160</h3>
                          </div>

                          <div className="pricing-header-start">
                            <span className="pre-title">Starter Package</span>
                            <h4 className="title">Basic Plan</h4>
                          </div>

                          <div className="pricing-body">
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Business Solution</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Great Customer Support</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Market Growth Solution</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>

                            <a className="rts-btn btn-primary" href="#">Buy This</a>
                          </div>
                        </div>
                      </div>

                      {/* Pricing Card 2 */}
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_sm--80" data-aos="fade-up" data-aos-delay="200">
                        <div className="pricing-wrapper-one">
                          <div className="plane-process">
                            <span>/month</span>
                            <h3 className="title">$180</h3>
                          </div>

                          <div className="pricing-header-start">
                            <span className="pre-title">Starter Package</span>
                            <h4 className="title">Standard Plan</h4>
                          </div>

                          <div className="pricing-body">
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Business Solution</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Great Customer Support</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Market Growth Solution</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>

                            <a className="rts-btn btn-primary" href="#">Buy This</a>
                          </div>
                        </div>
                      </div>

                      {/* Pricing Card 3 */}
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_md--80 mt_sm--80" data-aos="fade-up" data-aos-delay="300">
                        <div className="pricing-wrapper-one">
                          <div className="plane-process">
                            <span>/month</span>
                            <h3 className="title">$260</h3>
                          </div>

                          <div className="pricing-header-start">
                            <span className="pre-title">Starter Package</span>
                            <h4 className="title">Premium Plan</h4>
                          </div>

                          <div className="pricing-body">
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Business Solution</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Great Customer Support</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Market Growth Solution</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>

                            <a className="rts-btn btn-primary" href="#">Buy This</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ---------------- YEARLY TAB ---------------- */}
                {activeTab === "yearly" && (
                  <div className="tab-pane fade show active">
                    <div className="row g-5">
                      {/* Example yearly card */}
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="pricing-wrapper-one">
                          <div className="plane-process">
                            <span>/year</span>
                            <h3 className="title">$1800</h3>
                          </div>

                          <div className="pricing-header-start">
                            <span className="pre-title">Starter Package</span>
                            <h4 className="title">Basic Plan</h4>
                          </div>

                          <div className="pricing-body">
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Business Solution</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Great Customer Support</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Market Growth Solution</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>

                            <a className="rts-btn btn-primary" href="#">Buy This</a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="pricing-wrapper-one">
                          <div className="plane-process">
                            <span>/year</span>
                            <h3 className="title">$2000</h3>
                          </div>

                          <div className="pricing-header-start">
                            <span className="pre-title">Starter Plan</span>
                            <h4 className="title">Standard Plan</h4>
                          </div>

                          <div className="pricing-body">
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Business Solution</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Great Customer Support</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Market Growth Solution</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>

                            <a className="rts-btn btn-primary" href="#">Buy This</a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="pricing-wrapper-one">
                          <div className="plane-process">
                            <span>/year</span>
                            <h3 className="title">$2300</h3>
                          </div>

                          <div className="pricing-header-start">
                            <span className="pre-title">Premium Plan</span>
                            <h4 className="title">Premium Plan</h4>
                          </div>

                          <div className="pricing-body">
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Business Solution</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>
                            <div className="single-pricing available">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Great Customer Support</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">Market Growth Solution</span>
                            </div>
                            <div className="single-pricing">
                              <div className="icon"><i className="fa fa-check" /></div>
                              <span className="price-details">24/7 Consultant Service</span>
                            </div>

                            <a className="rts-btn btn-primary" href="#">Buy This</a>
                          </div>
                        </div>
                      </div>

                      {/* Repeat other 2 yearly cards similarly */}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
      {/* rts pricing area end */}
    </>
  );
}

export default PricingOne;
