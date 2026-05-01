"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

function BusinessConsultantOne() {
  const splitRef = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Video link & ID
  const videoLink = "https://www.youtube.com/watch?v=vZE0j_WCRvI";
  const videoId = videoLink.split("v=")[1]?.split("&")[0];

  /* ---------------- AOS INIT ---------------- */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
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
    gsap.set(element.split.chars, { opacity: 0, x: 150 });

    element.animation = gsap.to(element.split.chars, {
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
      },
      opacity: 1,
      x: 0,
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
      x: 150,
    });
  }, []);

  return (
    <>
      {/* MAIN SECTION */}
      <div className="just-a-consultancy-area rts-section-gapBottom">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT IMAGES */}
            <div className="col-lg-6">
              <div
                className="consultancy-thumbnail-area"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="large-image">
                  <img
                    src="/assets/images/about/02.webp"
                    alt="Consultancy discussion"
                  />
                </div>

                <div className="small-iamge images-r">
                  <img
                    src="/assets/images/about/03.webp"
                    alt="Consultancy planning"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6 pl--50 pl_sm--15 mt_md--100 mt_sm--100">
              <div className="consultancy-style-one">
                <div
                  className="title-style-one left mb--30"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="pre">Business Consultancy</span>

                  <h2
                    className="title rts-text-anime-style-1"
                    ref={splitRef}
                  >
                    We know how to manage <br />
                    business globally
                  </h2>
                </div>

                {/* CARD 1 */}
                <div
                  className="signle-consultancy mb--30"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <img src="/assets/images/about/icons/01.svg" alt="" />
                  </div>
                  <div className="information">
                    <h4 className="title">Best Business Consulting</h4>
                    <p className="disc">
                      Fusce condimentum mattis placerat odio donec lacus porta
                      torquent, mauris gravida rutrum
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div
                  className="signle-consultancy"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <img src="/assets/images/about/icons/02.svg" alt="" />
                  </div>
                  <div className="information">
                    <h4 className="title">24/7 Customer Support</h4>
                    <p className="disc">
                      Fusce condimentum mattis placerat odio donec lacus porta
                      torquent, mauris gravida rutrum
                    </p>
                  </div>
                </div>

                {/* BUTTON & VIDEO */}
                <div
                  className="button-wrapper mt--40"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <a href="/contact" className="rts-btn btn-primary">
                    Contact Us
                  </a>

                  <div className="vedio-icone">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="video-play-button play-video"
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

      {/* VIDEO MODAL */}
      {isOpen && videoId && (
        <div
          className="video-modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
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

export default BusinessConsultantOne;
