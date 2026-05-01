"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(SplitText, ScrollTrigger);

type BannerFiveProps ={
  id?: string;
}

function BannerFive({ id }: BannerFiveProps) {
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
            {/* rts banner area five */}
            <div id={id} className="rts-banner-five-wrapper rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-five-content">
                                <div className="title-area">
                                    <p className="pre">
                                        <span>Welcome!</span> Start Growing Your Business Today
                                    </p>
                                    <h1 className="title rts-text-anime-style-1" ref={splitRef}>
                                        We Help to Grow <br />
                                        Your <span>Business</span>
                                    </h1>
                                </div>
                                <div className="description-area">
                                    <p className="disc">
                                        Porttitor ornare fermentum aliquam pharetra facilisis gravida
                                        risus Dui feugiat fusce conubia ridiculus tristique parturient
                                    </p>
                                    <Link href="/service" className="rts-btn btn-primary">
                                        Our Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt--65">
                        <div className="col-lg-9">
                            <div className="banner-image-primary-five">
                                <img
                                    className="grow"
                                    src="/assets/images/banner/05.webp"
                                    alt="banner"
                                />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="banner-contact-form-five">
                                <form action="#">
                                    <h5 className="title">Let's Get Started</h5>
                                    <div className="input-single">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div className="input-single">
                                        <input type="text" placeholder="Email" required />
                                    </div>
                                    <div className="input-single">
                                        <textarea
                                            placeholder="Type your Message"
                                            required
                                            defaultValue={""}
                                        />
                                    </div>
                                    <button className="rts-btn btn-primary btn-white">
                                        Submit Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-area">
                    <img
                        src="/assets/images/banner/shape/05.png"
                        alt="shape"
                        className="one"
                    />
                    <img
                        src="/assets/images/banner/shape/06.png"
                        alt="shape"
                        className="two"
                    />
                    <img
                        src="/assets/images/banner/shape/07.png"
                        alt="shape"
                        className="three"
                    />
                </div>
            </div>
            {/* rts banner area five end */}
        </>
    )
}

export default BannerFive