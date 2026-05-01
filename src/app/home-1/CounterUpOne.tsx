"use client";
import { useEffect, useRef } from "react";

// Extend HTMLElement to include od property
interface OdometerElement extends HTMLElement {
  od?: any;
}

function CounterUpOne() {
    const odometerRefs = useRef<OdometerElement[]>([]);
     // Odometer animation
      useEffect(() => {
        import("odometer").then((module) => {
          const Odometer = module.default;
    
          // Initialize odometer
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
    return (
        <>
            {/* rts counter up area start */}
            <div className="rts-counter-up-area rts-section-gap counter-bg">
                <div className="container">
                    <div className="row g-5">
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter">
                                <div className="icon">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/counterup/icon/01.svg"
                                        alt="Business_counter"
                                    />
                                </div>
                                <div className="counter-details">
                                    <h2 className="counter title">
                                        <span className="odometer" data-count={199} ref={(el) => {
                                        if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                            odometerRefs.current.push(el as OdometerElement);
                                        }
                                        }}>
                                            00
                                        </span>
                                        +
                                    </h2>
                                    <p className="disc">Successful Projects</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter pl--10 justify-content-center two pl--30">
                                <div className="icon">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/counterup/icon/02.svg"
                                        alt="Business_counter"
                                    />
                                </div>
                                <div className="counter-details">
                                    <h2 className="counter title">
                                        <span className="odometer" data-count={300}
                                        ref={(el) => {
                                        if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                            odometerRefs.current.push(el as OdometerElement);
                                        }
                                        }}>
                                            00
                                        </span>
                                        +
                                    </h2>
                                    <p className="disc">Media Activities</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter pl--10 justify-content-center three pl--50 pl_md--10 pl_sm--0">
                                <div className="icon">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/counterup/icon/03.svg"
                                        alt="Business_counter"
                                    />
                                </div>
                                <div className="counter-details">
                                    <h2 className="counter title">
                                        <span className="odometer" data-count={699}
                                        ref={(el) => {
                                        if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                            odometerRefs.current.push(el as OdometerElement);
                                        }
                                        }}>
                                            00
                                        </span>
                                        +
                                    </h2>
                                    <p className="disc">Skilled Experts</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                        {/* counter up area */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter pl--10 four">
                                <div className="icon">
                                    <img
                                        loading="lazy"
                                        src="/assets/images/counterup/icon/04.svg"
                                        alt="Business_counter"
                                    />
                                </div>
                                <div className="counter-details">
                                    <h2 className="counter title">
                                        <span className="odometer" data-count={120}
                                        ref={(el) => {
                                        if (el && !odometerRefs.current.includes(el as OdometerElement)) {
                                            odometerRefs.current.push(el as OdometerElement);
                                        }
                                        }}>
                                            00
                                        </span>
                                        +
                                    </h2>
                                    <p className="disc">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        {/* counter up area */}
                    </div>
                </div>
            </div>
            {/* rts counter up area end */}
        </>

    )
}

export default CounterUpOne