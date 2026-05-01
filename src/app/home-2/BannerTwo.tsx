"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type BannerTwoProps = {
  id?: string;
};

function BannerTwo({ id }: BannerTwoProps) {
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
            {/* rts banner area start */}
            <div id={id} className="rts-banner-area banner-style-one bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-one-inner text-start">
                                <p className="pre-title">
                                    <span>Welcome!</span> Start Growing Your Business Today
                                </p>
                                <h1 className="title rts-text-anime-style-1" ref={splitRef}>
                                    Innovative <span>Solutions,</span> Tailored for Your Success
                                </h1>
                                <p className="disc banner-para">
                                    Porttitor ornare fermentum aliquam pharetra facilisis gravida
                                    risus suscipit <br /> Dui feugiat fusce conubia ridiculus
                                    tristique parturient
                                </p>
                                <a href="#" className="rts-btn btn-primary color-h-black">
                                    Get Consultant
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-iamge-area">
                    <img src="/assets/images/banner/shape/04.png" alt="" className="one" />
                    <img src="/assets/images/banner/shape/circle.svg" alt="" className="two" />
                </div>
            </div>
            {/* rts banner area end */}
        </>

    )
}

export default BannerTwo