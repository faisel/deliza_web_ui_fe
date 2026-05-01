"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 👇 odometer element type
interface OdometerElement extends HTMLSpanElement {
  od?: any;
}

interface ProgressFiveProps {
    className?: string;
}

function ProgressFive({className = ""} : ProgressFiveProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const odometerRefs = useRef<OdometerElement[]>([]);

  const progressData = [
    {
      value: 76,
      image: "assets/images/fun/01.svg",
      label: "Trusted Clients",
    },
    {
      value: 89,
      image: "assets/images/fun/02.svg",
      label: "Project Completed",
    },
    {
      value: 70,
      image: "assets/images/fun/03.svg",
      label: "Business Awards",
    },
  ];

  /* ===============================
     GSAP Circle Animation
  =============================== */
  useEffect(() => {
    if (!wrapperRef.current) return;

    const svgs =
      wrapperRef.current.querySelectorAll<SVGSVGElement>(".radial-progress");

    svgs.forEach((svg, index) => {
      const circle = svg.querySelector<SVGCircleElement>(".bar--animated");
      if (!circle) return;

      const percent = progressData[index].value;
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      gsap.set(circle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
      });

      ScrollTrigger.create({
        trigger: svg,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(circle, {
            strokeDashoffset:
              circumference - (percent / 100) * circumference,
            duration: 2.8,
            ease: "power2.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  /* ===============================
     ODOMETER ANIMATION (YOUR LOGIC)
  =============================== */
  useEffect(() => {
    import("odometer").then((module) => {
      const Odometer = module.default;

      // Initialize odometer
      odometerRefs.current.forEach((el) => {
        el.od = new Odometer({
          el,
          value: 0,
          format: "d",
          duration: 2000,
        });
      });

      const isInViewport = (el: OdometerElement) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      };

      const triggerOdometer = (el: OdometerElement) => {
        if (!el.classList.contains("odometer-triggered")) {
          el.od.update(el.dataset.count);
          el.classList.add("odometer-triggered");
        }
      };

      const handleScroll = () => {
        odometerRefs.current.forEach((el) => {
          if (isInViewport(el)) triggerOdometer(el);
        });
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });
  }, []);

  return (
    <>
      {/* rts progress area start */}
      <div
        ref={wrapperRef}
        className={`rts-progress-area-main-wrapper ${className}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="progress-circle-main-wrapper">

                {progressData.map((item, index) => (
                  <div className="single-progress-area" key={index}>
                    <div className="single-progress-circle">
                      <svg
                        className="radial-progress"
                        viewBox="0 0 80 80"
                      >
                        <circle
                          className="bar-static"
                          cx="40"
                          cy="40"
                          r="35"
                        />
                        <circle
                          className="bar--animated"
                          cx="40"
                          cy="40"
                          r="35"
                        />
                      </svg>

                      {/* image */}
                      <img src={item.image} alt={item.label} />
                    </div>

                    <div className="right-counter">
                      <h2 className="counter title">
                        <span
                          className="odometer"
                          data-count={item.value}
                          ref={(el) => {
                            if (el) odometerRefs.current[index] = el;
                          }}
                        >
                          0
                        </span>
                        %
                      </h2>
                      <p>{item.label}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts progress area end */}
    </>
  );
}

export default ProgressFive;
