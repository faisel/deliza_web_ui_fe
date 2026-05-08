"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "@/i18n/useTranslation";

interface OdometerElement extends HTMLElement {
  od?: any;
}

const counterIcons = [
  "/assets/images/counterup/icon/01.svg",
  "/assets/images/counterup/icon/02.svg",
  "/assets/images/counterup/icon/03.svg",
  "/assets/images/counterup/icon/04.svg",
];

const counterLayoutClasses = [
  "single-counter",
  "single-counter pl--10 justify-content-center two pl--30",
  "single-counter pl--10 justify-content-center three pl--50 pl_md--10 pl_sm--0",
  "single-counter pl--10 four",
];

function CounterUpOne() {
  const { messages } = useTranslation();
  const odometerRefs = useRef<OdometerElement[]>([]);

  useEffect(() => {
    import("odometer").then((module) => {
      const Odometer = module.default;

      odometerRefs.current.forEach((el) => {
        el.od = new Odometer({ el, value: 0, format: "d", duration: 2000 });
      });

      const isInViewport = (el: OdometerElement) => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
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

  const items = messages.home.counter.items;

  return (
    <>
      <div className="rts-counter-up-area rts-section-gap counter-bg">
        <div className="container">
          <div className="row g-5">
            {items.map((item, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className={counterLayoutClasses[index] ?? counterLayoutClasses[0]}>
                  <div className="icon">
                    <Image
                        loading="lazy"
                        src={counterIcons[index] ?? counterIcons[0]}
                        alt="Business_counter"
                        width={800}
                        height={600}
                    />
                  </div>
                  <div className="counter-details">
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
                      +
                    </h2>
                    <p className="disc">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterUpOne;
