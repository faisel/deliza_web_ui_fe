"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
// Extend HTMLElement to include od property
interface OdometerElement extends HTMLElement {
  od?: any;
}

import AOS from "aos";
import "aos/dist/aos.css";

function CounterUpTwo() {
  const odometerRefs = useRef<OdometerElement[]>([]);

  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Odometer animation
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
        return (
          rect.top < window.innerHeight &&
          rect.bottom >= 0
        );
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
      return () => window.removeEventListener("scroll", handleScroll);
    });
  }, []);

  return (
    <>
      {/* rts fun facts area start */}
      <div className="rts-fun-facts-area rts-section-gapBottom mt--30">
        <div className="container">
          <div className="row g-5">

            {/* ITEM 1 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="signle-fun-facts-one">
                <div className="icon">
                  <Image
                      src="/assets/images/fun-facts/01.svg"
                      alt="fun-facts"
                      width={46}
                      height={46}
                  />
                </div>

                <h2 className="counter title">
                  <span
                    className="odometer"
                    data-count={1200}
                    ref={(el) => {
                      if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                        odometerRefs.current.push(el as OdometerElement);
                      }
                    }}
                  >
                    00
                  </span>
                  +
                </h2>

                <span className="bototm">Business Solution</span>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="signle-fun-facts-one">
                <div className="icon">
                  <Image
                      src="/assets/images/fun-facts/02.svg"
                      alt="fun-facts"
                      width={45}
                      height={50}
                  />
                </div>

                <h2 className="counter title">
                  <span
                    className="odometer"
                    data-count={2}
                    ref={(el) => {
                      if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                        odometerRefs.current.push(el as OdometerElement);
                      }
                    }}
                  >
                    00
                  </span>
                  k
                </h2>

                <span className="bototm">Solution Experts</span>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
              <div className="signle-fun-facts-one">
                <div className="icon">
                  <Image
                      src="/assets/images/fun-facts/03.svg"
                      alt="fun-facts"
                      width={47}
                      height={50}
                  />
                </div>

                <h2 className="counter title">
                  <span
                    className="odometer"
                    data-count={196}
                    ref={(el) => {
                      if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                        odometerRefs.current.push(el as OdometerElement);
                      }
                    }}
                  >
                    00
                  </span>
                  k
                </h2>

                <span className="bototm">Worldwide Partner</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* rts fun facts area end */}
    </>
  );
}

export default CounterUpTwo;
