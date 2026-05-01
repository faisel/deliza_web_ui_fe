'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface HomeBlogThreeProps {
  id?: string
}

function HomeBlogThree({ id }: HomeBlogThreeProps) {

  const splitRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    /** Initialize AOS */
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();

    /** GSAP Text Animation */
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
    <div id={id} className="rts-blog-area rts-section-gapTop">
      <div className="container pt--40">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-three center">
              <span className="pre">Blog &amp; Article</span>
              <div className="bg-title">09</div>
              <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                Recent blog post
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-5 mt--20">

          {/* Blog 01 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0">
            <div className="rts-blog-h-2-wrapper">
              <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="thumbnail">
                <img src="/assets/images/blog/04.webp" alt="Business_blog" />
              </Link>
              <div className="body">
                <span>Business Solution / by David Dolean</span>
                <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                  <h4 className="title">
                    Building a Brand That from Market Leaders
                  </h4>
                </Link>
                <Link className="rts-read-more btn-primary" href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                  <i className="fa fa-arrow-right" />
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Blog 02 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="rts-blog-h-2-wrapper">
              <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="thumbnail">
                <img src="/assets/images/blog/05.webp" alt="Business_blog" />
              </Link>
              <div className="body">
                <span>Business Solution / by David Dolean</span>
                <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                  <h4 className="title">Transforming Your Approach to Business</h4>
                </Link>
                <Link className="rts-read-more btn-primary" href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                  <i className="fa fa-arrow-right" />
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Blog 03 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="rts-blog-h-2-wrapper">
              <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="thumbnail">
                <img src="/assets/images/blog/06.webp" alt="Business_blog" />
              </Link>
              <div className="body">
                <span>Business Solution / by David Dolean</span>
                <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                  <h4 className="title">
                    The quick settle tips of the new ages exist
                  </h4>
                </Link>
                <Link className="rts-read-more btn-primary" href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                  <i className="fa fa-arrow-right" />
                  Read More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeBlogThree;
