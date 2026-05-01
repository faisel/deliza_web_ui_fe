'use client'
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

function TeamThree() {

    const splitRef = useRef<HTMLHeadingElement>(null);

    // SplitText animation
  useEffect(() => {
    if (!splitRef.current) return;

    const element = splitRef.current;

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
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
    });
  }, []);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <>
            {/* rts team area start */}
            <div className="rts-team-area-start-four rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-four center">
                                <span className="pre">Our Experts</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    Our Team <span>Mates</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row mt--30 g-sm-30 g-5">
                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="single-team-area-one-start wide-space">
                                <Link href="/team-details" className="thumbnail">
                                    <img src="/assets/images/team/01.webp" alt="team" />
                                </Link>
                                <div className="inner-content">
                                    <div className="inner">
                                        <div className="text-top">
                                            <h5 className="title">Kevin Martin</h5>
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

                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="single-team-area-one-start wide-space">
                                <Link href="/team-details" className="thumbnail">
                                    <img src="/assets/images/team/02.webp" alt="team" />
                                </Link>
                                <div className="inner-content">
                                    <div className="inner">
                                        <div className="text-top">
                                            <h5 className="title">John Dion</h5>
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

                        <div
                            className="col-lg-4 col-md-6 col-sm-12"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <div className="single-team-area-one-start wide-space">
                                <Link href="/team-details" className="thumbnail">
                                    <img src="/assets/images/team/03.webp" alt="team" />
                                </Link>
                                <div className="inner-content">
                                    <div className="inner">
                                        <div className="text-top">
                                            <h5 className="title">Kavin Tina</h5>
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
            </div>
            {/* rts team area end */}
        </>
    )
}

export default TeamThree;
