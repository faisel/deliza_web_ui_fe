"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import AOS from "aos";
import { useTranslation } from "@/i18n/useTranslation";
import { localizePath } from "@/i18n/routing";

interface BusinessGoalOneProps {
  className?: string;
}

const BusinessGoalOne = ({ className = "" }: BusinessGoalOneProps) => {
  const { locale, messages } = useTranslation();
  const t = messages.home.businessGoal;
  const splitRef = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // YouTube URL
  const videoLink = "https://www.youtube.com/watch?v=vZE0j_WCRvI";
  const videoId = videoLink.split("v=")[1]?.split("&")[0];

  /* ---------------- SplitText Animation ---------------- */
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

  /* ---------------- Image Animation ---------------- */
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

  /* ---------------- AOS ---------------- */
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className={`business-goal-area-2 ${className}`}>
        <div className="container pt--30">
          <div className="row">
            <div className="col-lg-6">
              <div className="consultancy-style-one">
                <div className="title-style-two mb--40 left">
                  <span className="bg-content">{t.chip}</span>
                  <span className="pre">{t.pre}</span>
                  <h2
                    className="title rts-text-anime-style-1"
                    ref={splitRef}
                  >
                    {t.title[0]} <br />
                    {t.title[1]}
                  </h2>
                </div>

                <div
                  className="button-wrapper mt--40"
                  data-aos="fade-up"
                >
                  <a href={localizePath("/contact", locale)} className="rts-btn btn-primary">
                    {messages.common.buttons.contactUs}
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

            <div className="col-lg-6">
              <div className="thumbnail-business-area-right-two">
                <div className="large-thumbnail">
                  <Image
                      src="/assets/images/business-goal/02.webp"
                      alt=""
                      width={660}
                      height={849}
                      aria-hidden="true"
                  />
                </div>
                <div className="small-thumbnail images-r">
                  <Image
                      src="/assets/images/business-goal/01.webp"
                      alt=""
                      width={452}
                      height={639}
                      aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {isOpen && videoId && (
        <div className="video-modal-overlay" onClick={() => setIsOpen(false)}>
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
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessGoalOne;
