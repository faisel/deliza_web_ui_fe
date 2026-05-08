'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function WhyChooseUsOne() {
    const splitRef = useRef<HTMLHeadingElement>(null);
    // SplitText animation
    useEffect(() => {
  let ctx = gsap.context(() => {

    const element = splitRef.current;
    if (!element) return;

    // split setup
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
        start: "top bottom", // FIXED SECTION
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
    });

  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}, []);
    return (
        <>
            {/* why choose us area start */}
            <div className="why-choose-us-area rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-us-three-content-left">
                                <div className="title-style-three left">
                                    <span className="pre">Why Choose Us</span>
                                    <div className="bg-title">04</div>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Seamless Solutions for <br /> Your Digital Journey
                                    </h2>
                                </div>
                                <p className="disc">
                                    Aliquet porta est cras proin donec odio curabitur convallis,
                                    penatibus vulputate facilisi montes blandit condimentum quisque
                                    platea, sociosqu ut nec nam cursus magnis leo nullam
                                </p>
                                <div className="why-choose-feature">
                                    <div className="single">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/why-choose/01.svg"
                                                alt=""
                                                width={29}
                                                height={29}
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p>Fast Growing Sells</p>
                                    </div>
                                    <div className="single">
                                        <div className="icon">
                                            <Image
                                                src="/assets/images/why-choose/02.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <p>24/7 Quality Services</p>
                                    </div>
                                </div>
                                <div className="call-area">
                                    <div className="thumb">
                                        <Image
                                            src="/assets/images/why-choose/01.webp"
                                            alt="why"
                                            width={105}
                                            height={105}
                                        />
                                    </div>
                                    <div className="inner">
                                        <span>24/7 Support Team</span>
                                        <a href="#">
                                            <h5 className="title">(+214) 4576. 76589</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-image-inner-why-choose-three">
                                <div className="thumbnail-large">
                                    <Image
                                        src="/assets/images/why-choose/03.webp"
                                        alt="why"
                                        width={732}
                                        height={849}
                                    />
                                </div>
                                <div className="small">
                                    <Image
                                        src="/assets/images/why-choose/02.webp"
                                        alt=""
                                        width={419}
                                        height={495}
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="black-shape"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us area end */}
        </>

    )
}

export default WhyChooseUsOne