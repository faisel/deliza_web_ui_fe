"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "@/i18n/useTranslation";

gsap.registerPlugin(SplitText, ScrollTrigger);

const testimonialImages = [
  "/assets/images/deliza/testimonials/1.jpg",
  "/assets/images/deliza/testimonials/2.jpg",
  "/assets/images/deliza/testimonials/3.jpg",
  "/assets/images/deliza/testimonials/4.jpg",
];

function DelizaTestimonials() {
  const { messages } = useTranslation();
  const t = messages.home.delizaTestimonials;
  const splitRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!splitRef.current) return;
    const element = splitRef.current as HTMLHeadingElement & {
      animation?: gsap.core.Tween;
      split?: { revert: () => void; chars: Element[] };
    };

    if (element.animation) {
      element.animation.progress(1).kill();
      element.split?.revert();
    }

    element.split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    }) as unknown as { revert: () => void; chars: Element[] };

    gsap.set(element, { perspective: 400 });
    gsap.set(element.split.chars, { opacity: 0, x: 50 });

    element.animation = gsap.to(element.split.chars, {
      scrollTrigger: { trigger: element, start: "top 95%" },
      x: 0,
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
    });
  }, []);

  return (
    <div className="rts-testimonials-area-five home-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-between-area" dir="ltr">
              <div className="title-style-five">
                <span className="pre">{t.pre}</span>
                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                  {t.title}
                </h2>
              </div>
              <div className="pagination-wrapper">
                <div className="swiper-button-prevs deliza-testimonial-prev">
                  <i className="fa-solid fa-regular fa-arrow-left" />
                </div>
                <div className="swiper-pagination-fractions deliza-testimonial-pagination" />
                <div className="swiper-button-nexts deliza-testimonial-next">
                  <i className="fa-solid fa-regular fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5 home-content-gap">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper-testimonials-5"
              dir="ltr"
              slidesPerView={2}
              spaceBetween={30}
              slidesPerGroup={1}
              loop
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{
                el: ".deliza-testimonial-pagination",
                type: "fraction",
                formatFractionCurrent: (n) => `0${n}`,
                formatFractionTotal: (n) => `0${n}`,
              }}
              navigation={{
                nextEl: ".deliza-testimonial-next",
                prevEl: ".deliza-testimonial-prev",
              }}
              breakpoints={{
                1500: { slidesPerView: 2 },
                1300: { slidesPerView: 2 },
                1199: { slidesPerView: 2 },
                767: { slidesPerView: 2 },
                575: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {t.items.map((item, index) => (
                <SwiperSlide key={`${item.name}-${index}`}>
                  <div className="single-testimonials-style-five">
                    <div className="thumbnail">
                      <Image
                        src={
                          testimonialImages[index % testimonialImages.length]
                        }
                        alt={item.name}
                        width={520}
                        height={622}
                      />
                    </div>
                    <div className="inner-content">
                      <div className="name-area">
                        <h5 className="title">{item.name}</h5>
                        <span>{item.designation}</span>
                      </div>
                      <p className="disc">&ldquo;{item.text}&rdquo;</p>
                      <div className="body-end">
                        <div className="star-icon">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
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

export default DelizaTestimonials;
