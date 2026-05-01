import React from "react";

type FooterOneProps = {
  id?: string;
};

function FooterOne({ id }: FooterOneProps) {
  return (
    <>
      {/* rts footer two area wrapper */}
      <div className="rts-footer-area footer-two mt-dec-footer-map bg-footer-two bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id={id} className="map-area-main-wrapper">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="map-area-main-footer-two">
                      <div style={{ width: "100%", height: "625px" }}>
                        <iframe
                          src="https://www.openstreetmap.org/export/embed.html?bbox=90.413296%2C23.7726795%2C90.433296%2C23.7926795&layer=mapnik&marker=23.7826795%2C90.423296"
                          style={{ border: 0, width: "100%", height: "100%" }}
                          loading="lazy"
                          title="Company Location"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="map-information-2-footer">
                      <h5 className="title-main">Contact Us</h5>
                      <img
                        loading="lazy"
                        src="/assets/images/footer/02.svg"
                        alt="line"
                        className="line"
                      />
                      <div className="contact-information-main-wrapper">
                        <div className="signle-contact-information">
                          <div className="icon">
                            <i className="fa-solid fa-phone" />
                          </div>
                          <div className="information-wrapper">
                            <span>Call Us 24/7</span>
                            <a href="tel:+25621452156">
                              <h6 className="title">(+256) 2145.2156</h6>
                            </a>
                          </div>
                        </div>
                        <div className="signle-contact-information">
                          <div className="icon">
                            <i className="fa-regular fa-envelope" />
                          </div>
                          <div className="information-wrapper">
                            <span>Work with us</span>
                            <a href="mailto:info@deliza.com">
                              <h6 className="title">info@deliza.com</h6>
                            </a>
                          </div>
                        </div>
                        <div className="signle-contact-information">
                          <div className="icon">
                            <i className="fa-sharp fa-solid fa-location-dot" />
                          </div>
                          <div className="information-wrapper">
                            <span>Our Location</span>
                            <a href="#">
                              <h6 className="title">125 Town, United State</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-shape-f1">
          {/* rts footer area */}
          <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized mid-bg">
                <div className="wized-title">
                  <h5 className="title">Opening Hours</h5>
                  <img
                    loading="lazy"
                    src="/assets/images/footer/01.svg"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="opening-time-inner">
                  <div className="single-opening">
                    <p className="day">Week Days</p>
                    <p className="time">09.00 - 24:00</p>
                  </div>
                  <div className="single-opening">
                    <p className="day">Saturday</p>
                    <p className="time">08:00 - 03.00</p>
                  </div>
                  <div className="single-opening mb--30 mb_sm--10">
                    <p className="day">Sunday</p>
                    <p className="time">Day Off</p>
                  </div>
                  <a href="#" className="rts-btn btn-primary btn-white">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pl--50 pl_sm--15">
              <div className="footer-one-single-wized">
                <div className="wized-title">
                  <h5 className="title">Quick Links</h5>
                  <img
                    loading="lazy"
                    src="/assets/images/footer/01.svg"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="quick-link-inner">
                  <ul className="links">
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> Forum Support
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> Help &amp; FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> Pricing &amp; Plans
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> Cookie Policy
                      </a>
                    </li>
                  </ul>
                  <ul className="links margin-left-70">
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> My Account
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> Our Company
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right" /> Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized margin-left-65">
                <div className="wized-title">
                  <h5 className="title">Get Updates</h5>
                  <img
                    loading="lazy"
                    src="/assets/images/footer/01.svg"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="body">
                  <div className="update-wrapper">
                    <p className="disc">
                      Sign up for our latest news &amp; articles. We won’t give you
                      spam mails.
                    </p>
                    <form className="email-footer-area">
                      <input
                        type="email"
                        placeholder="Enter Email Address"
                        required
                      />
                      <button type="submit" title="Subscribe">
                        <i className="fas fa-location-arrow" />
                      </button>
                    </form>
                    <div className="note-area">
                      <p>
                        <span>Note:</span> We do not publish your email
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyright area start */}
        <div className="rts-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <p>Deliza - Copyright . All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* rts footer two area wrapper end */}
    </>
  );
}

export default FooterOne;
