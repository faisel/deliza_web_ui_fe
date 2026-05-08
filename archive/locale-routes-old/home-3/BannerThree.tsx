'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
interface BannerThreeProps {
  id?: string
}
function BannerThree({ id }: BannerThreeProps) {

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
  useEffect(() => {
    const revealContainers = document.querySelectorAll(".rts-reveal-one");


    revealContainers.forEach((container) => {
    let image = container.querySelector(".rts-reveal-image-one");
    let rts = gsap.timeline({
    scrollTrigger: {
    trigger: container,
    toggleActions: "play none none none",
    start: "top 100%",
    end: "top 0%",
    once: true,
    },
    });


    rts.set(container, {
    autoAlpha: 1,
    });


    rts.from(container, {
    xPercent: 100,
    duration: 1.5,
    ease: "power2.out",
    });


    rts.from(
    image,
    {
    xPercent: -100,
    scale: 1.3,
    duration: 1.5,
    ease: "power2.out",
    },
    "<"
    );
    });
    }, []);
    return (
        <div id={id} className="banner-three-box-clip-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-inner-conten">
                            <span className="pre">20+ Years In Business</span>
                            <h1 className="title rts-text-anime-style-1" ref={splitRef}>
                                Empowering Your <span>Success</span> at a Time
                            </h1>
                            <a href="/appoinment" className="rts-btn btn-primary">
                                View Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-thumbnail rts-reveal-one">
                <Image
                    className="rts-reveal-image-one"
                    src="/assets/images/banner/04.webp"
                    alt="banner-area"
                    width={1065}
                    height={1275}
                />
            </div>
            <div className="all-shape">
                <Image
                    src="/assets/images/banner/shape/01.png"
                    alt="banner"
                    className="one"
                    width={223}
                    height={208}
                />
                <Image
                    src="/assets/images/banner/shape/02.png"
                    alt="banner"
                    className="two"
                    width={79}
                    height={82}
                />
                <Image
                    src="/assets/images/banner/shape/03.png"
                    alt="banner"
                    className="three"
                    width={223}
                    height={208}
                />
            </div>
        </div>

    )
}

export default BannerThree