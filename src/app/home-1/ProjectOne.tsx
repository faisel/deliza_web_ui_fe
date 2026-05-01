"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslation } from '@/i18n/useTranslation';
import { localizePath } from '@/i18n/routing';

type ProjectOneProps = {
  id?: string;
  className?: string;
};

const projectImages = [
    "/assets/images/project/01.webp",
    "/assets/images/project/02.webp",
    "/assets/images/project/01.webp",
];

function ProjectOne({ className = "", id="" }: ProjectOneProps) {
    const { locale, messages } = useTranslation();
    const t = messages.home.projects;
    const detailsHref = localizePath("/project-details", locale);

    return (
        <>
            <div id={id} className={`rts-gallery-area rts-section-gap bg_image ${className}`}>
                <div className="container pt--40">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-between-wrapper-gallery-project">
                                <div className="title-style-two mb--40 left">
                                    <span className="bg-content">{t.chip}</span>
                                    <span className="pre">{t.pre}</span>
                                    <h2 className="title rts-text-anime-style-1">
                                        {t.title}
                                    </h2>
                                </div>
                                <div className="swiper-paginations" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-style-one-wrapper">
                                <Swiper modules={[Pagination]}
                                slidesPerView={2}
                                spaceBetween={30}
                                loop={true}
                                speed={1000}
                                pagination={{ clickable: true, el: ".swiper-paginations" }}
                                breakpoints={{
                                    1500: { slidesPerView: 2 },
                                    1300: { slidesPerView: 2 },
                                    991: { slidesPerView: 1 },
                                    767: { slidesPerView: 1 },
                                    575: { slidesPerView: 1 },
                                    0: { slidesPerView: 1 },
                                }}
                                className="mySwiper-project-1"
                                >
                                    {t.items.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="project-style-one">
                                                <a href={detailsHref} className="thumbnail">
                                                    <img
                                                        loading="lazy"
                                                        src={projectImages[index] ?? projectImages[0]}
                                                        alt="project"
                                                    />
                                                </a>
                                                <div className="inner-content">
                                                    <a href={detailsHref}>
                                                        <h5 className="title">{item.title}</h5>
                                                    </a>
                                                    <span>{item.category}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectOne
