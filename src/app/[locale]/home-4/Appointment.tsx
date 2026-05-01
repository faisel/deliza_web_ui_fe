"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

function Appointment() {

    const splitRef = useRef<HTMLHeadingElement>(null);

    // SplitText animation
  useEffect(() => {
    if (!splitRef.current) return;

    const element = splitRef.current;

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
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
    });
  }, []);
    return (
        <>
            {/* rts appoinment area start */}
            <div className="rts-appoinment-area rts-section-gapBottom">
                <div className="container-full">
                    <div className="row g-0">
                        <div className="col-lg-5">
                            <iframe
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-130.0%2C24.0%2C-65.0%2C49.0&layer=mapnik"
                                style={{ width: "100%", height: "778px", border: 0 }}
                                loading="lazy"
                                title="United States Map"
                            />
                        </div>
                        <div className="col-lg-7">
                            <div className="appoinment-area-four-wrapper bg_image">
                                <div className="inner">
                                    <div className="title-style-four left">
                                        <span className="pre">Make An Appointment</span>
                                        <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                            START PROJECT <br />
                                            <span>WITH US!</span>
                                        </h2>
                                    </div>
                                    <form action="#">
                                        <div className="input-group">
                                            <div className="single-input">
                                                <input type="text" placeholder="Your Name" />
                                            </div>
                                            <div className="single-input">
                                                <input type="email" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="single-input">
                                            <input type="text" placeholder="Your Website" />
                                        </div>
                                        <div className="single-input">
                                            <textarea placeholder="Your Comment" defaultValue={""} />
                                        </div>
                                        <button className="rts-btn btn-primary btn-white">
                                            Get in Touch
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts appoinment area end */}
        </>

    )
}

export default Appointment