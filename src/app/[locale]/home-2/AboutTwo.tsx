"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type AboutTwoProps ={
  id?: string;
}

export default function AboutTwo({ id }: AboutTwoProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const textRef = useRef<SVGTextElement | null>(null);
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

    // GSAP images animation
  useEffect(() => {
    gsap.to(".images-r", {
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: 50,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return;

      const svg = svgRef.current;
      const rect = svg.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

      // if svg is in viewport
      if (rect.top < windowHeight && rect.bottom >= 0) {
        animateCircle();
        // remove scroll listener after animation so it doesn't run repeatedly
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Also check on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function animateCircle() {
    if (!svgRef.current || !textRef.current) return;

    const circle = svgRef.current.querySelector<SVGCircleElement>("circle.bar--animated");
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const percent = Number(svgRef.current.getAttribute("data-countervalue")) || 0;
    const targetOffset = circumference - (percent / 100) * circumference;

    // set initial values
    circle.style.transition = "stroke-dashoffset 2.8s ease";
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    // trigger animation (in next tick)
    requestAnimationFrame(() => {
      circle.style.strokeDashoffset = `${targetOffset}`;
    });

    // animate number in text
    const textEl = textRef.current;
    const duration = 2800;
    const start = performance.now();
    const startValue = 0;

    function animateNumber(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.ceil(progress * percent);
      textEl.textContent = `${current}%`;

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    }
    requestAnimationFrame(animateNumber);
  }

  return (
    <>
      {/* rts-about area start */}
      <div id={id} className="rts-about-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-content-left-one">
                <div className="title-style-one left">
                  <span className="pre">About Business</span>
                  <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                    Smart and effective <br />
                    business agency.
                  </h2>
                </div>
                <p className="disc">
                  we believe in the power of collaboration and personalized
                  solutions. By understanding our clients' unique needs and goals,
                  we tailor our approach to deliver strategic insights, creative
                  solutions.
                </p>
                <div className="call-and-sign-area">
                  <div className="call-area">
                    <div className="icon">
                      <i className="fa-sharp fa-solid fa-phone-volume" />
                    </div>
                    <div className="information">
                      <span>Call us anytime</span>
                      <a href="#">
                        <h6 className="title">+256 56778.5678</h6>
                      </a>
                    </div>
                  </div>
                  <div className="sign-area">
                    <Image
                        src="/assets/images/about/sign.svg"
                        alt=""
                        width={190}
                        height={57}
                        aria-hidden="true"
                    />
                  </div>
                </div>
                <a href="#" className="rts-btn btn-primary">
                  About Us
                </a>
              </div>
            </div>
            <div className="col-lg-7 pl--70">
              <div className="thumbnail-about-and-progress-1">
                <div className="thumbnail-about-1">
                  <Image
                      src="/assets/images/about/01.webp"
                      alt="about"
                      width={900}
                      height={900}
                  />
                </div>
                <div className="progress-circle-main-wrapper">
                  <div className="progress-area-wrapper images-r">
                    <div className="single-progress-circle">
                      <svg
                        ref={svgRef}
                        className="radial-progress"
                        data-countervalue="80"
                        viewBox="0 0 80 80"
                      >
                        <circle
                          className="bar-static"
                          cx={40}
                          cy={40}
                          r={35}
                        />
                        <circle
                          className="bar--animated"
                          cx={40}
                          cy={40}
                          r={35}
                        />
                        <text
                          ref={textRef}
                          className="countervalue"
                          x="40%"
                          y="52%"
                          textAnchor="middle"
                        >
                          0%
                        </text>
                      </svg>
                    </div>
                    <h5 className="title">Business Progress</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts-about area end */}
    </>
  );
}
