"use client";
import { useTranslation } from "@/i18n/useTranslation";
import { localizePath } from "@/i18n/routing";

type FooterOneProps = {
  id?: string;
};

function FooterOne({ id }: FooterOneProps) {
  const { locale, messages } = useTranslation();
  const f = messages.footer;
  const contactHref = localizePath("/contact", locale);

  return (
    <>
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
                      <h5 className="title-main">{f.contact.title}</h5>
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
                            <span>{f.contact.callUs}</span>
                            <a href={`tel:${f.contact.phone.replace(/\s+/g, "")}`}>
                              <h6 className="title">{f.contact.phone}</h6>
                            </a>
                          </div>
                        </div>
                        <div className="signle-contact-information">
                          <div className="icon">
                            <i className="fa-regular fa-envelope" />
                          </div>
                          <div className="information-wrapper">
                            <span>{f.contact.workWithUs}</span>
                            <a href={`mailto:${f.contact.email}`}>
                              <h6 className="title">{f.contact.email}</h6>
                            </a>
                          </div>
                        </div>
                        <div className="signle-contact-information">
                          <div className="icon">
                            <i className="fa-sharp fa-solid fa-location-dot" />
                          </div>
                          <div className="information-wrapper">
                            <span>{f.contact.ourLocation}</span>
                            <a href="#">
                              <h6 className="title">{f.contact.location}</h6>
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
          <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized mid-bg">
                <div className="wized-title">
                  <h5 className="title">{f.hours.title}</h5>
                  <img
                    loading="lazy"
                    src="/assets/images/footer/01.svg"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="opening-time-inner">
                  <div className="single-opening">
                    <p className="day">{f.hours.weekdays}</p>
                    <p className="time">{f.hours.weekdaysTime}</p>
                  </div>
                  <div className="single-opening">
                    <p className="day">{f.hours.saturday}</p>
                    <p className="time">{f.hours.saturdayTime}</p>
                  </div>
                  <div className="single-opening mb--30 mb_sm--10">
                    <p className="day">{f.hours.sunday}</p>
                    <p className="time">{f.hours.dayOff}</p>
                  </div>
                  <a href={contactHref} className="rts-btn btn-primary btn-white">
                    {messages.common.buttons.contactUs}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pl--50 pl_sm--15">
              <div className="footer-one-single-wized">
                <div className="wized-title">
                  <h5 className="title">{f.quickLinks.title}</h5>
                  <img
                    loading="lazy"
                    src="/assets/images/footer/01.svg"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="quick-link-inner">
                  <ul className="links">
                    {f.quickLinks.items.slice(0, 5).map((label, i) => (
                      <li key={i}>
                        <a href="#">
                          <i className="fa fa-arrow-right" /> {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="links margin-left-70">
                    {f.quickLinks.items.slice(5).map((label, i) => (
                      <li key={i}>
                        <a href="#">
                          <i className="fa fa-arrow-right" /> {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="footer-one-single-wized margin-left-65">
                <div className="wized-title">
                  <h5 className="title">{f.updates.title}</h5>
                  <img
                    loading="lazy"
                    src="/assets/images/footer/01.svg"
                    alt="finbiz_footer"
                  />
                </div>
                <div className="body">
                  <div className="update-wrapper">
                    <p className="disc">{f.updates.description}</p>
                    <form className="email-footer-area">
                      <input
                        type="email"
                        placeholder={f.updates.placeholder}
                        required
                      />
                      <button type="submit" title={messages.common.buttons.subscribe}>
                        <i className="fas fa-location-arrow" />
                      </button>
                    </form>
                    <div className="note-area">
                      <p>
                        <span>{f.updates.noteLabel}</span> {f.updates.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rts-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <p>{f.copyright}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterOne;
