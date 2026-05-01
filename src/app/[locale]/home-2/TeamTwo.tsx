"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TeamTwoProps {
  className?: string
}
function TeamTwo({ className = "" }: TeamTwoProps) {

  useEffect(() => {
    AOS.init({
      once: true, // animation will run only once
      duration: 1000,
    });
  }, []);

  const splitRef = useRef<HTMLHeadingElement>(null);
    // SplitText animation
  useEffect(() => {
    if (!splitRef.current) return;

    const element = splitRef.current;

    // Reset previous animation if exists
    if ((element as any).animation) {
      (element as any).animation.progress(1).kill();
      (element as any).split.revert();
    }

    (element as any).split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });

    gsap.set(element, { perspective: 400 });
    gsap.set((element as any).split.chars, { opacity: 0, x: 50 });

    (element as any).animation = gsap.to((element as any).split.chars, {
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
      },
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
    <>
      {/* rts team area start */}
      <div className={`rts-team-area ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">Our Experts</span>
                <h2 className="title rts-text-anime-style-1" ref={splitRef}>Our Team Mates</h2>
              </div>
            </div>
          </div>

          <div className="row mt--30 g-5 g-sm-30 mt_sm--0">

            {/* Team Member 1 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt_sm--50"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-team-area-one-start">
                <Link href="/team-details" className="thumbnail">
                  <img src="/assets/images/team/01.webp" alt="team" />
                </Link>
                <div className="inner-content">
                  <div className="text-top">
                    <Link href="/team-details">
                      <h5 className="title">Kevin Martin</h5>
                    </Link>
                    <span>Consultant</span>
                  </div>
                  <div className="social-one-wrapper">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt_sm--120"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-team-area-one-start">
                <Link href="/team-details" className="thumbnail">
                  <img src="/assets/images/team/02.webp" alt="team" />
                </Link>
                <div className="inner-content">
                  <div className="text-top">
                    <Link href="/team-details">
                      <h5 className="title">Martin Chopra</h5>
                    </Link>
                    <span>Consultant</span>
                  </div>
                  <div className="social-one-wrapper">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 mt_sm--120 mt_md--80"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <div className="single-team-area-one-start">
                <a href="/team-details" className="thumbnail">
                  <img src="/assets/images/team/03.webp" alt="team" />
                </a>
                <div className="inner-content">
                  <div className="text-top">
                    <Link href="/team-details">
                      <h5 className="title">John Dion</h5>
                    </Link>
                    <span>Consultant</span>
                  </div>
                  <div className="social-one-wrapper">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* rts team area ends */}
    </>
  );
}

export default TeamTwo;
