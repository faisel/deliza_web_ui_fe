"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "@/i18n/LocalizedLink";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

type HomeBlogFourProps = {
  id?: string;
};

function HomeBlogFour({ id }: HomeBlogFourProps) {

    const splitRef = useRef<HTMLHeadingElement>(null);

    // SplitText animation
  useEffect(() => {
    if (!splitRef.current) return;

    const element = splitRef.current;

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
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.02,
    });
  }, []);

    return (
        <>
            {/* rts blog area start */}
            <div id={id} className="rts-blog-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-four center">
                                <span className="pre">Weekly Updates</span>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    Our Latest <span>Updates</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-blog-area-four">
                                <Link href="blog-details" className="thumbnail">
                                    <img src="/assets/images/blog/07.webp" alt="blog" />
                                </Link>
                                <div className="inner-content">
                                    <div className="tag-area-wrapper">
                                        <div className="single">
                                            <i className="fa-solid fa-clock" />
                                            <p>25 Jan, 2022</p>
                                        </div>
                                        <div className="single">
                                            <i className="fa-solid fa-user" />
                                            <p>25 Jan, 2022</p>
                                        </div>
                                    </div>
                                    <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                                        <h5 className="title">
                                            My Journey with Lessons Of <br /> Learned Along the Way
                                        </h5>
                                    </Link>
                                    <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="read-more">
                                        Read More <i className="fa-solid fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-blog-area-four">
                                <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="thumbnail">
                                    <img src="/assets/images/blog/08.webp" alt="blog" />
                                </Link>
                                <div className="inner-content">
                                    <div className="tag-area-wrapper">
                                        <div className="single">
                                            <i className="fa-solid fa-clock" />
                                            <p>25 Jan, 2022</p>
                                        </div>
                                        <div className="single">
                                            <i className="fa-solid fa-user" />
                                            <p>25 Jan, 2022</p>
                                        </div>
                                    </div>
                                    <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                                        <h5 className="title">
                                            The quick settle tips new ages <br />
                                            exist working solution
                                        </h5>
                                    </Link>
                                    <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="read-more">
                                        Read More <i className="fa-solid fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-blog-area-four">
                                <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="thumbnail">
                                    <img src="/assets/images/blog/09.webp" alt="blog" />
                                </Link>
                                <div className="inner-content">
                                    <div className="tag-area-wrapper">
                                        <div className="single">
                                            <i className="fa-solid fa-clock" />
                                            <p>25 Jan, 2022</p>
                                        </div>
                                        <div className="single">
                                            <i className="fa-solid fa-user" />
                                            <p>25 Jan, 2022</p>
                                        </div>
                                    </div>
                                    <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                                        <h5 className="title">
                                            Unlocking the Secrets to A <br /> Beginner’s Guide
                                        </h5>
                                    </Link>
                                    <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="read-more">
                                        Read More <i className="fa-solid fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts blog area end */}
        </>

    )
}

export default HomeBlogFour