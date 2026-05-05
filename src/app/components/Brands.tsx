"use client";
import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";

import styles from "./Brands.module.css";

const clients = [
  "/assets/images/deliza/brands/1.png",
  "/assets/images/deliza/brands/2.png",
  "/assets/images/deliza/brands/3.png",
];

interface BrandsProps {
  className?: string;
}

function Brands({ className = "rts-section-gapBottom" }: BrandsProps) {
  const { messages } = useTranslation();

  return (
    <div className={`rts-trusted-client ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area-client-client text-center">
              <p className="client-title">{messages.home.brands.title}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`client-wrapper-one d-flex flex-wrap ${styles.logosRow}`}>
            {clients.map((src, index) => (
              <a
                key={index}
                href="#"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1200"
              >
                <Image
                  src={src}
                  alt={`Deliza brand partner ${index + 1}`}
                  width={240}
                  height={120}
                  sizes="(max-width: 768px) 50vw, 240px"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
