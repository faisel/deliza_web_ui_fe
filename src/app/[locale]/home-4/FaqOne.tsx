"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

const FaqOne: React.FC = () => {

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

    // AOS Init
      useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 50,
          easing: "ease-in-out",
          once: true,
        });
      }, []);
    return (
        <div className="rts-faq-area rts-section-gap faq-bg-one bg_image">
            <div className="container">
                <div className="row align-items-center">

                    {/* FAQ Left */}
                    <div className="col-lg-6">
                        <div className="faq-main-wrapper-content-inner-four">
                            <div className="title-style-four left">
                                <span className="pre">faq</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    We Are Experienced <br />
                                    <span>Business Solution</span>
                                </h2>
                            </div>

                            <div className="accordion mt--40" id="accordionExample">

                                {/* item 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            01. What should I include my personal details?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Neque partrient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions
                                        </div>
                                    </div>
                                </div>

                                {/* item 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            02. Where can I find my business growth result?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Neque partrient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions
                                        </div>
                                    </div>
                                </div>

                                {/* item 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            03. Did you get any business consultant?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Neque partrient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-6">
                        <div
                            className="faq-one-thumbnail-wrapper-right"
                            data-aos="zoomOut"
                            data-aos-delay="200"
                        >
                            <div className="thumbnail">
                                <img src="/assets/images/faq/01.webp" alt="faq" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqOne;
