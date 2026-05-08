"use client";
import { useTranslation } from "@/i18n/useTranslation";

import Image from "next/image";
const clients = [
  "/assets/images/client/1.webp",
  "/assets/images/client/2.webp",
  "/assets/images/client/3.webp",
  "/assets/images/client/4.webp",
  "/assets/images/client/5.webp",
  "/assets/images/client/6.webp",
];

function BrandOne() {
  const { messages } = useTranslation();

  return (
    <div className="rts-trusted-client rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area-client-client text-center">
              <p className="client-title">{messages.home.brands.title}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="client-wrapper-one d-flex flex-wrap justify-content-between">
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
                    alt={`business_deliza ${index + 1}`}
                    width={800}
                    height={600}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandOne;
