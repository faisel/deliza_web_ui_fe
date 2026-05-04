'use client'
import { useEffect, useRef } from "react";
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
                                    <img src="/assets/images/project/03.webp" alt="project" />
                                </Link>
                                <div className="inner-content">
                                    <a href="/project-details">
                                        <h4 className="title">Business Growth</h4>
                                    </a>
                                    <span>Business Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 rts-jump__item">
                            <div className="single-project-style-three">
                                <Link href="/project-details" className="thumbnail">
                                    <img src="/assets/images/project/04.webp" alt="project" />
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
                                    <img src="/assets/images/project/05.webp" alt="project" />
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
                                    <img src="/assets/images/project/06.webp" alt="project" />
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