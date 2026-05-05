"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
// Extend HTMLElement to include od property
interface OdometerElement extends HTMLElement {
  od?: any;
}

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./CounterUpTwo.module.css";

const BRAND_IMAGES = [
  "/assets/images/deliza/brands/1.png",
  "/assets/images/deliza/brands/2.png",
  "/assets/images/deliza/brands/3.png",
] as const;

const COUNT_ITEMS = [
  { count: 1200, suffix: "+" as const, label: "Business Solution", aosDelay: 200 },
  { count: 2, suffix: "k" as const, label: "Solution Experts", aosDelay: 400 },
  { count: 196, suffix: "k" as const, label: "Worldwide Partner", aosDelay: 600 },
] as const;

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

        <div className="row">
          <div className="col-12">
            <div className="title-area-client-client text-center">
              <p className="client-title">Our Brands</p>
            </div>
          </div>
        </div>

          <div className="row g-5">
            {COUNT_ITEMS.map((item, index) => (
              <div
                key={item.label}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
              >
                <div className="signle-fun-facts-one">
                  <div className={styles.brandThumb}>
                    <Image
                      src={BRAND_IMAGES[index]}
                      alt={`Deliza brand partner ${index + 1}`}
                      width={500}
                      height={300}
                      className={styles.image}
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                    />
                  </div>

                  <h2 className="counter title">
                    <span
                      className="odometer"
                      data-count={item.count}
                      ref={(el) => {
                        if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                          odometerRefs.current.push(el as OdometerElement);
                        }
                      }}
                    >
                      00
                    </span>
                    {item.suffix}
                  </h2>

                  <span className="bototm">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* rts fun facts area end */}
    </>
  );
}

export default CounterUpTwo;
