"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";
import styles from "./AboutTen.module.css";

type AboutTenProps = {
  id?: string;
};

function AboutTen({ id }: AboutTenProps) {
  const { messages } = useTranslation();
  const t = messages.home.aboutIntro;

  return (
    <div
      id={id}
      className="rts-about-area-start rts-section-gapBottom rts-section-gap"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="thumbnail-about-10-wrapper">
              <Image
                src="/assets/images/deliza/about.jpg"
                alt="Deliza GmbH hospitality and innovation"
                width={731}
                height={915}
                priority
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="col-lg-6 mt_md--50 mt_sm--50">
            <div className="about-area-wrapper-content-10">
              <div className="title-style-10 left">
                <span className="pre">{t.pre}</span>
                <h2 className={`title rts-text-anime-style-1 ${styles.title}`}>
                  {t.title[0]} <br /> {t.title[1]}
                </h2>
              </div>
              <p className="disc">{t.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTen;
