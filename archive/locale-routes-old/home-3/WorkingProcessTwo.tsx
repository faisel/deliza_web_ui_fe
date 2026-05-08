'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function WorkingProcessTwo() {
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
        <div className="working-process-area-three rts-section-gap working-process-bg">
            <div className="container">
                <div className="row mt--40">
                    <div className="title-style-three center">
                        <span className="pre">Working Steps</span>
                        <div className="bg-title">03</div>
                        <h2 className="title rts-text-anime-style-1" ref={splitRef}>Our Basic Work Process</h2>
                    </div>
                </div>
                <div className="row g-5 mt--20 align-items-center rts_jump_animation-wrapper">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 rts-jump__item">
                        {/* single wirking process */}
                        <div className="rts-working-process-1 text-center">
                            <div className="inner">
                                <div className="icon">
                                    <Image
                                        src="/assets/images/wokring-process/icon/01.svg"
                                        alt="Working_process"
                                        width={43}
                                        height={50}
                                    />
                                </div>
                            </div>
                            <div className="content">
                                <h6 className="title">Make a Plan</h6>
                                <p className="disc">
                                    Nostra proin fusce hendrerit <br /> viverra nisl torquent.
                                </p>
                            </div>
                        </div>
                        {/* single wirking process End */}
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 rts-jump__item">
                        {/* single wirking process */}
                        <div className="rts-working-process-1 process-lg text-center">
                            <div className="inner two">
                                <div className="icon">
                                    <Image
                                        src="/assets/images/wokring-process/icon/02.svg"
                                        alt="Working_process"
                                        width={65}
                                        height={66}
                                    />
                                </div>
                            </div>
                            <div className="content">
                                <h6 className="title">Cost Calculating</h6>
                                <p className="disc">
                                    Nostra proin fusce hendrerit <br /> viverra nisl torquent.
                                </p>
                            </div>
                        </div>
                        {/* single wirking process End */}
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 rts-jump__item">
                        {/* single wirking process */}
                        <div className="rts-working-process-1 text-center">
                            <div className="inner three">
                                <div className="icon">
                                    <Image
                                        src="/assets/images/wokring-process/icon/03.svg"
                                        alt="Working_process"
                                        width={52}
                                        height={45}
                                    />
                                </div>
                            </div>
                            <div className="content">
                                <h6 className="title">Business Growth</h6>
                                <p className="disc">
                                    Nostra proin fusce hendrerit <br /> viverra nisl torquent.
                                </p>
                            </div>
                        </div>
                        {/* single wirking process End */}
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 rts-jump__item">
                        {/* single wirking process */}
                        <div className="rts-working-process-1 process-lg text-center">
                            <div className="inner four">
                                <div className="icon">
                                    <Image
                                        src="/assets/images/wokring-process/icon/04.svg"
                                        alt="Working_process"
                                        width={48}
                                        height={65}
                                    />
                                </div>
                            </div>
                            <div className="content">
                                <h6 className="title">Success Mission</h6>
                                <p className="disc">
                                    Nostra proin fusce hendrerit <br /> viverra nisl torquent.
                                </p>
                            </div>
                        </div>
                        {/* single wirking process End */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WorkingProcessTwo