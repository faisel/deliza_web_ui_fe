"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(SplitText, ScrollTrigger);

function ExpertiseOne() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const textRef = useRef<SVGTextElement | null>(null);
    const splitRef = useRef<HTMLHeadingElement>(null);

    /* ============================
    GSAP SplitText Animation
    ============================ */
    useEffect(() => {
        let split: any;

        const initSplitText = async () => {
            const SplitText = (await import("gsap/SplitText")).default;
            gsap.registerPlugin(SplitText, ScrollTrigger);

            if (!splitRef.current) return;

            split = new SplitText(splitRef.current, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });

            gsap.set(split.chars, {
                opacity: 0,
                x: 50,
            });

            gsap.to(split.chars, {
                scrollTrigger: {
                    trigger: splitRef.current,
                    start: "top 95%",
                },
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "back.out(1.7)",
                stagger: 0.02,
            });
        };

        initSplitText();

        return () => {
            split?.revert();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

     useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return;

      const svg = svgRef.current;
      const rect = svg.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

      // if svg is in viewport
      if (rect.top < windowHeight && rect.bottom >= 0) {
        animateCircle();
        // remove scroll listener after animation so it doesn't run repeatedly
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Also check on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   function animateCircle() {
    if (!svgRef.current || !textRef.current) return;

    const circle = svgRef.current.querySelector<SVGCircleElement>("circle.bar--animated");
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const percent = Number(svgRef.current.getAttribute("data-countervalue")) || 0;
    const targetOffset = circumference - (percent / 100) * circumference;

    // set initial values
    circle.style.transition = "stroke-dashoffset 2.8s ease";
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    // trigger animation (in next tick)
    requestAnimationFrame(() => {
      circle.style.strokeDashoffset = `${targetOffset}`;
    });

    // animate number in text
    const textEl = textRef.current;
    const duration = 2800;
    const start = performance.now();
    const startValue = 0;

    function animateNumber(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.ceil(progress * percent);
      textEl.textContent = `${current}%`;

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    }
    requestAnimationFrame(animateNumber);
  }
    return (
        <div className="our-experties-area rts-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-style-one eight center mb--30">
                            <span className="pre">What we are expert</span>
                            <h2 className="title rts-text-anime-style-1 uppercase" ref={splitRef}>
                                Expert
                                <span>business</span> <br />
                                management company
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--40 g-5">
                    <div className="col-lg-4">
                        <div className="progress-circle-main-wrapper">
                            <div className="progress-area-wrapper style-8">
                                <div className="single-progress-circle">
                                    <svg
                                        ref={svgRef}
                                        className="radial-progress"
                                        data-countervalue={80}
                                        viewBox="0 0 80 80"
                                    >
                                        <circle className="bar-static" cx={40} cy={40} r={35} />
                                        <circle
                                            className="bar--animated"
                                            cx={40}
                                            cy={40}
                                            r={35}
                                        />
                                        <text
                                            ref={textRef}
                                            className="countervalue start"
                                            x="50%"
                                            y="55%"
                                            transform="matrix(0, 1, -1, 0, 80, 0)"
                                        >
                                            80
                                        </text>
                                    </svg>
                                </div>
                                <div className="inner-content">
                                    <h5 className="title">Strategic Planning</h5>
                                    <p className="disc">
                                        consecte tutempor incididunt business phasellus gravida
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="progress-circle-main-wrapper">
                            <div className="progress-area-wrapper style-8">
                                <div className="single-progress-circle">
                                    <svg
                                        ref={svgRef}
                                        className="radial-progress"
                                        data-countervalue={80}
                                        viewBox="0 0 80 80"
                                    >
                                        <circle className="bar-static" cx={40} cy={40} r={35} />
                                        <circle
                                            className="bar--animated"
                                            cx={40}
                                            cy={40}
                                            r={35}
                                            style={{ strokeDashoffset: "217.8" }}
                                        />
                                        <text
                                            ref={textRef}
                                            className="countervalue start"
                                            x="50%"
                                            y="55%"
                                            transform="matrix(0, 1, -1, 0, 80, 0)"
                                        >
                                            80
                                        </text>
                                    </svg>
                                </div>
                                <div className="inner-content">
                                    <h5 className="title">Business Growth Strategies</h5>
                                    <p className="disc">
                                        consecte tutempor incididunt business phasellus gravida
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="progress-circle-main-wrapper">
                            <div className="progress-area-wrapper style-8">
                                <div className="single-progress-circle">
                                    <svg
                                    ref={svgRef}
                                        className="radial-progress"
                                        data-countervalue={80}
                                        viewBox="0 0 80 80"
                                    >
                                        <circle className="bar-static" cx={40} cy={40} r={35} />
                                        <circle
                                            className="bar--animated"
                                            cx={40}
                                            cy={40}
                                            r={35}
                                            style={{ strokeDashoffset: "217.8" }}
                                        />
                                        <text
                                            ref={textRef}
                                            className="countervalue start"
                                            x="50%"
                                            y="55%"
                                            transform="matrix(0, 1, -1, 0, 80, 0)"
                                        >
                                            80
                                        </text>
                                    </svg>
                                </div>
                                <div className="inner-content">
                                    <h5 className="title">Active Work Strategies</h5>
                                    <p className="disc">
                                        consecte tutempor incididunt business phasellus gravida
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ExpertiseOne