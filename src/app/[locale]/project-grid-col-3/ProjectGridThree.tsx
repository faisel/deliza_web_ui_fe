"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import Link from "@/i18n/LocalizedLink";

gsap.registerPlugin(ScrollTrigger);


type ProjectGridThreeProps ={
  id?: string;
  className?: string;
}

function ProjectGridThree({ className='', id='' }: ProjectGridThreeProps) {
  const splitRef = useRef<HTMLHeadingElement>(null);

  /* ============================
      AOS INIT
  ============================ */
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  /* ============================
      GSAP SplitText Animation
  ============================ */
  useEffect(() => {
    let split: any;

    const initSplitText = async () => {
      const SplitText = (await import("gsap/SplitText")).default;

      if (!splitRef.current) return;

      split = new SplitText(splitRef.current, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      gsap.set(split.chars, {
        opacity: 0,
        x: 50,
      });

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: splitRef.current,
          start: "top 95%",
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
      });
    };

    initSplitText();

    return () => {
      split?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* rts project area start */}
      <div id={id} className={`rts-project-area-main-wrapper rts-section-gapBottom ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-between-area">
                <div className="title-style-five">
                  <span className="pre">Case Studies</span>
                  <h2
                    className="title rts-text-anime-style-1"
                    ref={splitRef}
                  >
                    Specialist Business Cases
                  </h2>
                </div>
                <Link href="/project" className="rts-btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-75 mt--0">

            {/* ITEM 1 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="single-project-area-main-wrapper-6">
                <Link href="/project-details" className="thumbnail">
                  <img src="/assets/images/project/12.webp" alt="project" />
                </Link>
                <div className="inner">
                  <h4 className="title">Business Growth</h4>
                  <p className="disc">
                    Growth isn’t just about getting bigger—it’s about getting
                    better.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-project-area-main-wrapper-6">
                <Link href="/project-details" className="thumbnail">
                  <img src="/assets/images/project/13.webp" alt="project" />
                </Link>
                <div className="inner">
                  <h4 className="title">Startup Solution</h4>
                  <p className="disc">
                    Empowering businesses to grow strategically.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 3 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-project-area-main-wrapper-6">
                <Link href="/project-details" className="thumbnail">
                  <img src="/assets/images/project/14.webp" alt="project" />
                </Link>
                <div className="inner">
                  <h4 className="title">Growth Manage</h4>
                  <p className="disc">
                    Sustainable growth through smart planning.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 4 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="single-project-area-main-wrapper-6">
                <Link href="/project-details" className="thumbnail">
                  <img src="/assets/images/project/15.webp" alt="project" />
                </Link>
                <div className="inner">
                  <h4 className="title">Company Skills</h4>
                  <p className="disc">
                    Strengthening teams and leadership.
                  </p>
                </div>
              </div>
            </div>
             {/* ITEM 1 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="single-project-area-main-wrapper-6">
                <Link href="/project-details" className="thumbnail">
                  <img src="/assets/images/project/12.webp" alt="project" />
                </Link>
                <div className="inner">
                  <h4 className="title">Business Growth</h4>
                  <p className="disc">
                    Growth isn’t just about getting bigger—it’s about getting
                    better.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-project-area-main-wrapper-6">
                <Link href="/project-details" className="thumbnail">
                  <img src="/assets/images/project/13.webp" alt="project" />
                </Link>
                <div className="inner">
                  <h4 className="title">Startup Solution</h4>
                  <p className="disc">
                    Empowering businesses to grow strategically.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* rts project area end */}
    </>
  );
}

export default ProjectGridThree;
