"use client";
import React, { useState } from 'react'
import Image from "next/image";
import PostOne from './PostOne'
import posts from '../../data/data-post.json'

function BlogGridInner() {

    const postsPerPage = 6; 
    const [currentPage, setCurrentPage] = useState(1);

    // Total pages
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Calculate displayed posts
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);
    return (
        <div className="rts-blog-list-area rts-section-gapBottom">
            <div className="container">
                <div className="row g-5">
                    {/* rts blog post area */}
                    <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                        <div className="row g-5">
                            {currentPosts.map((item, index) => (
                                <div
                                    key={index}
                                    className="col-lg-6 col-md-6 col-sm-12"
                                    data-animation="fadeInUp"
                                    data-delay={`0.${index}`}
                                >
                                    <PostOne
                                        Slug={item.slug}
                                        Title={item.title}
                                        Category={item.category}
                                        Img={item.image}
                                        Author={item.author}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className="row mt-4">
                            <div className="col-12 text-center">
                                <div className="pagination">

                                    {/* Previous Button */}
                                    <button
                                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <i className="fa fa-angle-double-left" />
                                    </button>

                                    {/* Page Numbers */}
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={currentPage === i + 1 ? "active" : ""}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </button>
                                    ))}

                                    {/* Next Button */}
                                    <button
                                        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        <i className="fa fa-angle-double-right" />
                                    </button>

                                </div>
                            </div>
                        </div>
                        {/* Pagination End */}
                    </div>
                    {/* rts-blog post end area */}
                    {/*rts blog wized area */}
                    <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
                        {/* single wized start */}
                        <div className="rts-single-wized search1">
                            <div className="wized-header">
                                <h5 className="title">Search Here</h5>
                            </div>
                            <div className="wized-body">
                                <div className="rts-search-wrapper">
                                    <input
                                        className="Search1"
                                        type="text"
                                        placeholder="Enter Keyword"
                                    />
                                    <button>
                                        <i className="fal fa-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* single wized End */}
                        {/* single wized start */}
                        <div className="rts-single-wized Categories">
                            <div className="wized-header">
                                <h5 className="title">Categories</h5>
                            </div>
                            <div className="wized-body">
                                {/* single categoris */}
                                <ul className="single-categories">
                                    <li>
                                        <a href="#">
                                            Business Solution <i className="fa fa-long-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                                {/* single categoris End */}
                                {/* single categoris */}
                                <ul className="single-categories">
                                    <li>
                                        <a href="#">
                                            Solution Model
                                            <i className="fa fa-long-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                                {/* single categoris End */}
                                {/* single categoris */}
                                <ul className="single-categories">
                                    <li>
                                        <a href="#">
                                            More Business <i className="fa fa-long-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                                {/* single categoris End */}
                                {/* single categoris */}
                                <ul className="single-categories">
                                    <li>
                                        <a href="#">
                                            Finbiz Solution <i className="fa fa-long-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                                {/* single categoris End */}
                                {/* single categoris */}
                                <ul className="single-categories">
                                    <li>
                                        <a href="#">
                                            Consulting Busiuness
                                            <i className="fa fa-long-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                                {/* single categoris End */}
                            </div>
                        </div>
                        {/* single wized End */}
                        {/* single wized start */}
                        <div className="rts-single-wized Recent-post">
                            <div className="wized-header">
                                <h5 className="title">Recent Posts</h5>
                            </div>
                            <div className="wized-body">
                                {/* recent-post */}
                                <div className="recent-post-single">
                                    <div className="thumbnail">
                                        <a href="#">
                                            <Image
                                                src="/assets/images/blog/details/recent-post/01.png"
                                                alt="Blog_post"
                                                width={85}
                                                height={85}
                                            />
                                        </a>
                                    </div>
                                    <div className="content-area">
                                        <div className="user">
                                            <i className="fa fa-clock" />
                                            <span>15 Jan, 2023</span>
                                        </div>
                                        <a className="post-title" href="#">
                                            <h6 className="title">
                                                We would love to share a similar experience
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                                {/* recent-post End */}
                                {/* recent-post */}
                                <div className="recent-post-single">
                                    <div className="thumbnail">
                                        <a href="#">
                                            <Image
                                                src="/assets/images/blog/details/recent-post/02.png"
                                                alt="Blog_post"
                                                width={85}
                                                height={85}
                                            />
                                        </a>
                                    </div>
                                    <div className="content-area">
                                        <div className="user">
                                            <i className="fa fa-clock" />
                                            <span>15 Jan, 2023</span>
                                        </div>
                                        <a className="post-title" href="#">
                                            <h6 className="title">
                                                We would love to share a similar experience
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                                {/* recent-post End */}
                                {/* recent-post */}
                                <div className="recent-post-single">
                                    <div className="thumbnail">
                                        <a href="#">
                                            <Image
                                                src="/assets/images/blog/details/recent-post/03.png"
                                                alt="Blog_post"
                                                width={85}
                                                height={85}
                                            />
                                        </a>
                                    </div>
                                    <div className="content-area">
                                        <div className="user">
                                            <i className="fa fa-clock" />
                                            <span>15 Jan, 2023</span>
                                        </div>
                                        <a className="post-title" href="#">
                                            <h6 className="title">
                                                We would love to share a similar experience
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                                {/* recent-post End */}
                            </div>
                        </div>
                        {/* single wized End */}
                        {/* single wized start */}
                        <div className="rts-single-wized tags">
                            <div className="wized-header">
                                <h5 className="title">Popular Tags</h5>
                            </div>
                            <div className="wized-body">
                                <div className="tags-wrapper">
                                    <a href="#">Services</a>
                                    <a href="#">Business</a>
                                    <a href="#">Growth</a>
                                    <a href="#">Finance</a>
                                    <a href="#">UI/UX Design</a>
                                    <a href="#">Solution</a>
                                    <a href="#">Speed</a>
                                    <a href="#">Strategy</a>
                                    <a href="#">Technology</a>
                                </div>
                            </div>
                        </div>
                        {/* single wized End */}
                        {/* single wized start */}
                        <div className="rts-single-wized contact">
                            <div className="wized-header">
                                <a href="#">
                                    <Image
                                        src="/assets/images/logo/logo-2.svg"
                                        alt="Business_logo"
                                        width={201}
                                        height={70}
                                    />
                                </a>
                            </div>
                            <div className="wized-body">
                                <h5 className="title">Need Help? We Are Here To Help You</h5>
                                <a className="rts-btn btn-primary btn-white" href="/contact">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        {/* single wized End */}
                    </div>
                    {/* rts- blog wized end area */}
                </div>
            </div>
        </div>

    )
}

export default BlogGridInner