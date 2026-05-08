"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

type AboutFourProps = {
  id?: string;
};

function AboutFour({ id }: AboutFourProps) {
  const splitRef = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Video link & ID
  const videoLink = "https://www.youtube.com/watch?v=vZE0j_WCRvI";
  const videoId = videoLink.split("v=")[1]?.split("&")[0];

  /* ---------------- AOS INIT ---------------- */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  /* ---------------- GSAP SplitText ---------------- */
  useEffect(() => {
    if (!splitRef.current) return;

    const element = splitRef.current as any;

    if (element.animation) {
      element.animation.progress(1).kill();
      element.split.revert();
    }

    element.split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });

    gsap.set(element, { perspective: 400 });
    gsap.set(element.split.chars, { opacity: 0, x: 50 });

    element.animation = gsap.to(element.split.chars, {
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

  /* ---------------- GSAP Image Animation ---------------- */
  useEffect(() => {
    gsap.to(".images-r", {
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: 200,
    });
  }, []);

  return (
    <>
      {/* rts about area start */}
      <div id={id} className="rts-about-area about-bg-four bg_image rts-section-gap">
        <div className="container pt--50">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div className="about-content-four-left">
                <div className="title-style-four left">
                  <span className="pre">Easy Business Solution</span>
                  <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                    Innovative Solutions <br />
                    <span>for Modern Businesses</span>
                  </h2>
                </div>

                <p className="disc">
                  Commodo dignissim nibh tristique urna arcu sagittis nec sapien
                  velit, praesent at for it dictumst sollicitudin cursus tellus
                  senectus aliquet
                </p>

                <div className="progress-wrapper-about-4" data-aos="fade-up" data-aos-delay={300}>
                  {["Business Solution", "Empowering Success", "Simplifying Success"].map((title) => (
                    <div className="single-progress" key={title}>
                      <h6 className="title">{title}</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "100%" }}></div>
                        <span className="progress-number">100%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay={250}>
              <div className="thumbnail-about-right-4">
                <div className="large-iamge">
                  <Image
                      src="/assets/images/about/08.webp"
                      alt="about"
                      width={690}
                      height={797}
                  />
                </div>
                <div className="small-image images-r">
                  <Image
                      src="/assets/images/about/09.webp"
                      alt="about"
                      width={351}
                      height={390}
                  />
                </div>
                <div className="poligon-shape images-r">
                  <Image
                      src="/assets/images/about/poligon-shape.svg"
                      alt=""
                      width={234}
                      height={266}
                      aria-hidden="true"
                  />
                </div>

                <div className="video-area">
                  <Image
                      src="/assets/images/about/video.svg"
                      alt="video"
                      width={120}
                      height={143}
                  />
                  <div className="vedio-icone">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="video-play-button play-video popup-video"
                      aria-label="Watch promotional video"
                    >
                      <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts about area end */}

      {/* VIDEO MODAL */}
      {isOpen && videoId && (
        <div className="video-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AboutFour;
