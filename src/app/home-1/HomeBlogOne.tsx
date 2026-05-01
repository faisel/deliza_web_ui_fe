"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const blogs = [
  {
    img: "/assets/images/blog/01.webp",
    category: "Business Solution",
    author: "David Dolean",
    title: "Building a Brand That from Market Leaders",
    link: "blog-details",
  },
  {
    img: "/assets/images/blog/02.webp",
    category: "Business Solution",
    author: "David Dolean",
    title: "Transforming Your Best Of Approach to Business",
    link: "blog-details",
  },
  {
    img: "/assets/images/blog/03.webp",
    category: "Business Solution",
    author: "David Dolean",
    title: "The quick settle tips of the new ages exist",
    link: "blog-details",
  },
  {
    img: "/assets/images/blog/01.webp",
    category: "Business Solution",
    author: "David Dolean",
    title: "Building a Brand That from Market Leaders",
    link: "blog-details",
  },
  {
    img: "/assets/images/blog/02.webp",
    category: "Business Solution",
    author: "David Dolean",
    title: "Transforming Your Best Of Approach to Business",
    link: "blog-details",
  },
  {
    img: "/assets/images/blog/03.webp",
    category: "Business Solution",
    author: "David Dolean",
    title: "The quick settle tips of the new ages exist",
    link: "blog-details",
  },
];

interface HomeBlogOneProps {
  className?: string
  titleClassName?: string
  id?: string
}

function HomeBlogOne({ className = "", titleClassName = "" , id=""}: HomeBlogOneProps) {
  return (
    <div id={id} className={`rts-blog-area ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`center ${titleClassName}`}>
              <span className="bg-content">Blog</span>
              <span className="pre">Blog &amp; News</span>
              <h2 className="title">Recent blog post</h2>
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
              {blogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <div className="single-blog-area-one">
                    <p>
                      {blog.category} / <span>by {blog.author}</span>
                    </p>
                    <a href={blog.link}>
                      <h4 className="title">{blog.title}</h4>
                    </a>
                    <div className="bottom-details">
                      <a href={blog.link} className="thumbnail">
                        <img loading="lazy" src={blog.img} alt="blog-area" />
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
