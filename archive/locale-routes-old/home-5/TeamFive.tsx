"use client";

import Link from "@/i18n/LocalizedLink";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TeamFive() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const teamData = [
    {
      name: "Andreas Menor",
      role: "Sr. Manager",
      image: "/assets/images/team/08.webp",
      delay: 0,
    },
    {
      name: "John Dion",
      role: "Sr. Manager",
      image: "/assets/images/team/09.webp",
      delay: 200,
    },
    {
      name: "Martin Anderson",
      role: "Sr. Manager",
      image: "/assets/images/team/10.webp",
      delay: 400,
    },
    {
      name: "Kupar Tamil",
      role: "Sr. Manager",
      image: "/assets/images/team/11.webp",
      delay: 600,
    },
  ];

  return (
    <>
      {/* rts team area start */}
      <div className="rts-team-area rts-section-gap bg_image bg_team-area-five">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
            >
              <div className="title-style-five center">
                <span className="pre">Team Members</span>
                <h2 className="title">Meet Our Dedicated Team</h2>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--10">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay={member.delay}
              >
                <div className="single-team-style-5">
                  <Link href="/team-details" className="thumbnail">
                    <Image
                        src={member.image}
                        alt={member.name}
                        width={800}
                        height={600}
                    />
                  </Link>
                  <div className="inner">
                    <Link href="/team-details">
                      <h5 className="title">{member.name}</h5>
                    </Link>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* rts team area end */}
    </>
  );
}

export default TeamFive;
