'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

function BusinessGoalTwo() {

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
    return (
        <>
            {/* business boost area start */}
            <div className="boost-your-business-today mt--70">
                <div className="container-2">
                    <div className="col-lg-12">
                        <div className="business-boost-wrapper-main rts-section-gap">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="business-marklting-area-thumb">
                                            <Image
                                                src="/assets/images/business/01.webp"
                                                alt="business_area"
                                                width={1308}
                                                height={732}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 offset-lg-1">
                                        <div className="boosting-business-right-area">
                                            <div className="title-style-one left">
                                                <span className="pre">Boost Your Business Today</span>
                                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                                    Most Reliable Efficient <br />
                                                    Consulting Agency
                                                </h2>
                                            </div>
                                            <p className="disc">
                                                Porttitor ornare fermentum aliquam pharetra ut facilisis
                                                gravida risus suscipit feugiat fusce conubia ridiculus
                                                tristique solving parturient natoque vulputate risu hasellus
                                                quam tincidunt posuere aliquam accumsan
                                            </p>
                                            <div className="feature-one-wrapper mt--40 pl_sm--0">
                                                <div className="single-feature-one active">
                                                    <i className="fa fa-check" />
                                                    <p>Fast Growing Sells</p>
                                                </div>
                                                <div className="single-feature-one">
                                                    <i className="fa fa-check" />
                                                    <p>24/7 Quality Services</p>
                                                </div>
                                                <div className="single-feature-one">
                                                    <i className="fa fa-check" />
                                                    <p>Expert Members</p>
                                                </div>
                                                <div className="single-feature-one">
                                                    <i className="fa fa-check" />
                                                    <p>Best Quality Services</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* business boost area end */}
        </>

    )
}

export default BusinessGoalTwo