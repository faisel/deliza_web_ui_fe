'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "@/i18n/LocalizedLink";

gsap.registerPlugin(SplitText, ScrollTrigger);

type ProjectTwoProps = {
    className?: string
    id?: string;
};

function ProjectTwo({ className = "", id = "" }: ProjectTwoProps) {

    const splitRef = useRef<HTMLHeadingElement>(null);
    // SplitText animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const raw = splitRef.current;
            if (!raw) return;

            const element = raw as HTMLHeadingElement & {
                animation?: gsap.core.Tween;
                split?: { revert: () => void; chars: Element[] };
            };

            if (element.animation) {
                element.animation.progress(1).kill();
                element.split?.revert();
            }

            element.split = new SplitText(element, {
                type: "lines,words,chars",
                linesClass: "split-line",
            }) as unknown as { revert: () => void; chars: Element[] };

            gsap.set(element, { perspective: 400 });
            gsap.set(element.split.chars, { opacity: 0, x: 50 });

            element.animation = gsap.to(element.split.chars, {
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
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
            {/* case studies area start */}
            <div id={id} className={`rts-case-studies-area rts-section-gapBottom ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-three center">
                                <span className="pre">Case Studies</span>
                                <div className="bg-title">05</div>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    Specialist Business Cases
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10 rts_jump_animation-wrapper">
                        <div className="col-lg-6 rts-jump__item">
                            <div className="single-project-style-three">
                                <Link href="/project-details" className="thumbnail">
                                    <Image
                                        src="/assets/images/project/03.webp"
                                        alt="project"
                                        width={1260}
                                        height={806}
                                    />
                                </Link>
                                <div className="inner-content">
                                    <Link href="/project-details">
                                        <h4 className="title">Business Growth</h4>
                                    </Link>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 rts-jump__item">
                            <div className="single-project-style-three">
                                <Link href="/project-details" className="thumbnail">
                                    <Image
                                        src="/assets/images/project/04.webp"
                                        alt="project"
                                        width={1260}
                                        height={806}
                                    />
                                </Link>
                                <div className="inner-content">
                                    <Link href="/project-details">
                                        <h4 className="title">Startup Solution</h4>
                                    </Link>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 rts-jump__item">
                            <div className="single-project-style-three">
                                <Link href="/project-details" className="thumbnail">
                                    <Image
                                        src="/assets/images/project/05.webp"
                                        alt="project"
                                        width={1262}
                                        height={806}
                                    />
                                </Link>
                                <div className="inner-content">
                                    <Link href="/project-details">
                                        <h4 className="title">Growth Manage</h4>
                                    </Link>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 rts-jump__item">
                            <div className="single-project-style-three">
                                <Link href="/project-details" className="thumbnail">
                                    <Image
                                        src="/assets/images/project/06.webp"
                                        alt="project"
                                        width={1266}
                                        height={806}
                                    />
                                </Link>
                                <div className="inner-content">
                                    <Link href="/project-details">
                                        <h4 className="title">Company Skills</h4>
                                    </Link>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* case studies area end */}
        </>

    )
}

export default ProjectTwo
