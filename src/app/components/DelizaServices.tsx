"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { navHref } from "@/i18n/routing";
import styles from "./DelizaServices.module.css";

const cardImages = [
  "/assets/images/news/Chutnee_restaurant_1.jpg",
  "/assets/images/news/Indisches_Buffet_6-761x507x0x19x761x469x1720170783.jpg",
  "/assets/images/news/events_7310.jpg",
];

function DelizaServices() {
  const { messages, locale } = useTranslation();
  const t = messages.home.delizaServices;
  const productsHref = navHref("products", locale);

  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  return (
    <div className="rts-service-area home-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-five center mb--30">
              <span className="pre">{t.pre}</span>
              <h2 className="title">{t.title}</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 g-lg-5 home-content-gap">
          {t.items.map((item, index) => (
            <div
              key={item.title}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <article
                className={styles.card}
                style={{
                  backgroundImage: `url(${cardImages[index % cardImages.length]})`,
                }}
              >
                <div className={styles.titleRow}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <Link
                    href={productsHref}
                    className={styles.icon}
                    aria-label={item.title}
                  >
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DelizaServices;
