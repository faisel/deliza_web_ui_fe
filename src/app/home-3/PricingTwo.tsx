'use client'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

function PricingTwo() {
    const splitRef = useRef<HTMLHeadingElement>(null);
    const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

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
            <div className="rts-pricing-plane rts-section-gap bg-pricing-bg-h2 margin-dec-padding-con">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-tab-button-area title-area pricing-h2">
                                <div className="title-style-three center">
                                    <span className="pre">Price Plans</span>
                                    <div className="bg-title">08</div>
                                    <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                        Pricing & Plans
                                    </h2>
                                </div>

                                {/* TAB BUTTONS */}
                                <ul className="nav nav-tabs pricing-2-tab mt--50">
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
                                            onClick={() => setActiveTab("monthly")}
                                        >
                                            Monthly Plan
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === "yearly" ? "active" : ""}`}
                                            onClick={() => setActiveTab("yearly")}
                                        >
                                            Yearly Plan
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* TAB CONTENT */}
                    <div className="row mt--80">
                        <div className="col-12">

                            {activeTab === "monthly" && (
                                <div className="row g-5">
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Basic Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$250</h2>
                                                    <span>/Month</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing ">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <a className="rts-btn btn-primary btn-white" href="#">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two active">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Standard Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$450</h2>
                                                    <span>/Month</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <a className="rts-btn btn-primary active" href="#">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Premium Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$650</h2>
                                                    <span>/Month</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <a className="rts-btn btn-primary btn-white" href="#">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                </div>
                            )}

                            {activeTab === "yearly" && (
                                <div className="row g-5">
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Basic Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$2500</h2>
                                                    <span>/Year</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing ">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <a className="rts-btn btn-primary btn-white" href="#">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two active">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Standard Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$4500</h2>
                                                    <span>/Year</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <a className="rts-btn btn-primary active" href="#">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one home-two">
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <h5 className="title">Premium Plan</h5>
                                                <div className="pric-area">
                                                    <h2 className="title">$6500</h2>
                                                    <span>/Year</span>
                                                </div>
                                                <div className="discription">
                                                    <p className="disc">
                                                        Curabitur nullam dis nibh nisi nascetur vestibulum
                                                        proin mi morbi
                                                    </p>
                                                </div>
                                            </div>
                                            {/* pricing header End */}
                                            {/* pricing body start */}
                                            <div className="pricing-body">
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">Business Solution</span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Great Customer Support
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        Market Growth Solution
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                {/* single pricing */}
                                                <div className="single-pricing available">
                                                    <div className="icon">
                                                        <i className="fa fa-check" />
                                                    </div>
                                                    <span className="price-details">
                                                        24/7 Consultant Service
                                                    </span>
                                                </div>
                                                {/* single pricing End */}
                                                <a className="rts-btn btn-primary btn-white" href="#">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PricingTwo;
