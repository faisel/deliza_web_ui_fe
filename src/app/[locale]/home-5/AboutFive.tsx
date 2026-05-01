"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type AboutFiveProps ={
  id?: string;
}

function AboutFive({ id }: AboutFiveProps) {

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
            {/* rts about area start */}
            <div id={id} className="rts-about-five-area rts-section-gapBottom">
                <div className="container-full">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr--70 pr_md--0 pr_sm--0">
                            <div className="thumbnail-about-five">
                                <img src="/assets/images/about/10.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--30 mt_sm--30">
                            <div className="about-content-inner-five">
                                <div className="title-style-five">
                                    <span className="pre">More About Deliza</span>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Our Consulting For All Kind Of Finance Services
                                    </h2>
                                </div>
                                <div className="inner-about-home-7">
                                    <p className="disc">
                                        Molestie velit imperdiet porttitor at taciti, aptent semper
                                        primis nisl ut. Inceptos velit penatibus tortor in sed curae
                                        urna lobortis ultricies aptent integer bibendum parturient
                                        molestie risus
                                    </p>
                                    {/* ingle about start */}
                                    <div className="about-single-home-7">
                                        <div className="icon">
                                            <img src="/assets/images/about/icons/03.svg" alt="" />
                                        </div>
                                        <div className="discription">
                                            <h6 className="title">Global Insights</h6>
                                            <p className="disc">
                                                Aliquet bibendum duis diam ultricies rutrum vulputate,
                                                platea lacinia tortor mollis nam dis.
                                            </p>
                                        </div>
                                    </div>
                                    {/* ingle about end */}
                                    {/* ingle about start */}
                                    <div className="about-single-home-7">
                                        <div className="icon">
                                            <img src="/assets/images/about/icons/04.svg" alt="" />
                                        </div>
                                        <div className="discription">
                                            <h6 className="title">Business Investment</h6>
                                            <p className="disc">
                                                Aliquet bibendum duis diam ultricies rutrum vulputate,
                                                platea lacinia tortor mollis nam dis.
                                            </p>
                                        </div>
                                    </div>
                                    {/* ingle about end */}
                                    {/* ingle about start */}
                                    <div className="about-single-home-7">
                                        <div className="icon">
                                            <img src="/assets/images/about/icons/05.svg" alt="" />
                                        </div>
                                        <div className="discription">
                                            <h6 className="title">Yearly Calculation</h6>
                                            <p className="disc">
                                                Aliquet bibendum duis diam ultricies rutrum vulputate,
                                                platea lacinia tortor mollis nam dis.
                                            </p>
                                        </div>
                                    </div>
                                    {/* ingle about end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about area end */}
        </>

    )
}

export default AboutFive