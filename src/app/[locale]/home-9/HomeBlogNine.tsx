'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

type HomeBlogNineProps ={
  id?: string;
}

function HomeBlogNine({ id }: HomeBlogNineProps) {

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <>
            <div id={id} className="rts-blog-list-card-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-five center">
                                <span className="pre">Blog Posts</span>
                                <h2 className="title">News &amp; Updates</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 mt--10">

                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1200"
                        >
                            <div className="single-blog-card-6">
                                <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist" className="thumbnail">
                                    <img src="assets/images/blog/10.webp" alt="blog" />
                                </Link>
                                <div className="inner-content">
                                    <p className="top">
                                        Business Solution <span>/ by David Dolean</span>
                                    </p>
                                    <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                                        <h4 className="title">How to Improve Customer Retention in 2024</h4>
                                    </Link>
                                    <p className="disc">
                                        Euismod pulvinar tempus mi cum imperdiet felis blandit veldui libero pharetra enim magna nostra urna erat sagittis venatis
                                    </p>
                                    <Link className="rts-read-more btn-primary" href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                                        <i className="fa fa-arrow-right" /> Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-5">

                                <div
                                    className="col-lg-12"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="1200"
                                >
                                    <div className="single-blog-card-6 list">
                                        <div className="inner-content">
                                            <p className="top">
                                                Business Solution <span>/ by David Dolean</span>
                                            </p>
                                            <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                                                <h4 className="title">The quick settle tips of the new ages exist</h4>
                                            </Link>
                                            <p className="disc">
                                                Euismod pulvinar tempus mi cum imperdiet felis blandit veldui libero pharetra enim magna nostra urna erat sagittis venatis
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-12"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1200"
                                >
                                    <div className="single-blog-card-6 list">
                                        <div className="inner-content">
                                            <p className="top">
                                                Business Solution <span>/ by David Dolean</span>
                                            </p>
                                            <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                                                <h4 className="title">Case studies, product updates, or other styles</h4>
                                            </Link>
                                            <p className="disc">
                                                Euismod pulvinar tempus mi cum imperdiet felis blandit veldui libero pharetra enim magna nostra urna erat sagittis venatis
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-12"
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                    data-aos-duration="1200"
                                >
                                    <div className="single-blog-card-6 list">
                                        <div className="inner-content">
                                            <p className="top">
                                                Business Solution <span>/ by David Dolean</span>
                                            </p>
                                            <Link href="/blog/liliput-settle-tips-of-the-new-ages-exist">
                                                <h4 className="title">The Future of E-commerce: Predictions 2030</h4>
                                            </Link>
                                            <p className="disc">
                                                Euismod pulvinar tempus mi cum imperdiet felis blandit veldui libero pharetra enim magna nostra urna erat sagittis venatis
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBlogNine
