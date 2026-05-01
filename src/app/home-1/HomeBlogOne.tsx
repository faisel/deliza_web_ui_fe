"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "@/i18n/useTranslation";
import { localizePath } from "@/i18n/routing";

const blogImages = [
  "/assets/images/blog/01.webp",
  "/assets/images/blog/02.webp",
  "/assets/images/blog/03.webp",
  "/assets/images/blog/01.webp",
  "/assets/images/blog/02.webp",
  "/assets/images/blog/03.webp",
];

interface HomeBlogOneProps {
  className?: string
  titleClassName?: string
  id?: string
}

function HomeBlogOne({ className = "", titleClassName = "" , id=""}: HomeBlogOneProps) {
  const { locale, messages } = useTranslation();
  const t = messages.home.blog;
  const detailHref = localizePath("/blog/liliput-settle-tips-of-the-new-ages-exist", locale);

  return (
    <div id={id} className={`rts-blog-area ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`center ${titleClassName}`}>
              <span className="bg-content">{t.chip}</span>
              <span className="pre">{t.pre}</span>
              <h2 className="title">{t.title}</h2>
            </div>
          </div>
        </div>

        <div className="row g-5 mt--20">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              speed={1000}
              pagination={{ clickable: true }}
              navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
              breakpoints={{
                1500: { slidesPerView: 3 },
                1300: { slidesPerView: 3 },
                991: { slidesPerView: 3 },
                767: { slidesPerView: 2 },
                575: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              className="mySwiper-blog-one"
            >
              {t.posts.map((blog, index) => (
                <SwiperSlide key={index}>
                  <div className="single-blog-area-one">
                    <p>
                      {blog.category} / <span>{messages.common.by} {blog.author}</span>
                    </p>
                    <a href={detailHref}>
                      <h4 className="title">{blog.title}</h4>
                    </a>
                    <div className="bottom-details">
                      <a href={detailHref} className="thumbnail">
                        <img loading="lazy" src={blogImages[index] ?? blogImages[0]} alt="blog-area" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlogOne;
