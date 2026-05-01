"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const teamMembers = [
  {
    img: "/assets/images/team/04.webp",
    name: "Archer Graham",
    role: "Founder",
  },
  {
    img: "/assets/images/team/05.webp",
    name: "Amelia Clover",
    role: "Co-Founder",
  },
  {
    img: "/assets/images/team/06.webp",
    name: "Beckett Hayden",
    role: "Deputy Manager",
  },
  {
    img: "/assets/images/team/07.webp",
    name: "Julian Wyat",
    role: "Finance Manager",
  },
  {
    img: "/assets/images/team/07.webp",
    name: "Julian Wyat",
    role: "Finance Manager",
  },
];

interface TeamOneProps {
  className?: string
}

function TeamOne({className}: TeamOneProps) {
  return (
    <div className={`rts-team-area rts-section-gapBottom pt--40 ${className}`}>
      <div className="container">
        <div className="row">
          <div className="title-style-two center">
            <span className="bg-content">Members</span>
            <span className="pre">Expert Members</span>
            <h2 className="title rts-text-anime-style-1">Professionals Team</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              speed={1000}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                1500: { slidesPerView: 4 },
                1300: { slidesPerView: 4 },
                991: { slidesPerView: 3 },
                767: { slidesPerView: 3 },
                575: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              className="mySwiperh1_team pt--50 pb--80"
              dir="ltr"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="/team-details">
                        <img loading="lazy" src={member.img} alt={member.name} />
                        <div className="team-social">
                          <div className="main">
                            <i className="fa fa-plus" />
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube" />
                            <i className="fab fa-twitter" />
                            <i className="fab fa-instagram" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="/team-details">
                        <h5 className="title">{member.name}</h5>
                      </a>
                      <p>{member.role}</p>
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

export default TeamOne;
