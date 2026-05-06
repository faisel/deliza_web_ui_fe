"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { navHref } from "@/i18n/routing";

function DelizaServices() {
  const { messages, locale } = useTranslation();
  const t = messages.home.delizaServices;
  const productsHref = navHref("products", locale);

  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  return (
    <div className="rts-service-area rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-five center">
              <span className="pre">{t.pre}</span>
              <h2 className="title">{t.title}</h2>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--10">
          {t.items.map((item, index) => (
            <div
              key={item.title}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div
                className={`single-service-nine bg_image deliza-service-card${
                  index % 4 === 1
                    ? " two"
                    : index % 4 === 2
                    ? " three"
                    : index % 4 === 3
                    ? " four"
                    : ""
                }`}
              >
                <h3 className="title">{item.title}</h3>
                <p className="disc">{item.description}</p>
                <Link href={productsHref} className="icon">
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DelizaServices;
