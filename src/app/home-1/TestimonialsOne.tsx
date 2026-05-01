"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "@/i18n/useTranslation";

const testimonialImages = [
  "/assets/images/testimonials/01.webp",
  "/assets/images/testimonials/01.webp",
  "/assets/images/testimonials/01.webp",
];

function TestimonialsOne() {
  const { messages } = useTranslation();
  const t = messages.home.testimonials;

  return (
    <div className="rts-client-review-area rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between-wrapper">
              <div className="title-style-two mb--40 left">
                <span className="bg-content">{t.chip}</span>
                <span className="pre">{t.pre}</span>
                <h2 className="title">{t.title}</h2>
              </div>
              <div className="pagination-wrapper">
                <div className="swiper-pagination-fraction" />
                <div className="swiper-button-next">
                  <i className="fa-sharp fa-solid fa-arrow-right" />
                </div>
                <div className="swiper-button-prev">
                  <i className="fa-sharp fa-solid fa-arrow-left" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              speed={1000}
              pagination={{
                el: ".swiper-pagination-fraction",
                type: "fraction",
                formatFractionCurrent: (number) => "0" + number,
                formatFractionTotal: (number) => "0" + number,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="mySwiper-testimonials-dmeo-2"
              dir="ltr"
            >
              {t.items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonials-main-wrapper-two">
                    <div className="left-thumbnail">
                      <img loading="lazy" src={testimonialImages[index] ?? testimonialImages[0]} alt="testimonials" />
                    </div>
                    <div className="right-content-testimonials">
                      <p className="disc">{item.text}</p>
                      <div className="name-desig">
                        <h6 className="title">{item.name}</h6>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsOne;
