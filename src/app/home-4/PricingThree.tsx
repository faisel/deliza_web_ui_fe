'use client'
import React, { useState } from "react";

function PricingThree() {
    const [activeTab, setActiveTab] = useState("monthly");

    return (
        <>
            {/* rts pricing area start */}
            <div className="rts-pricing-area-one rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-three-title-area">
                                <div className="title-style-one left">
                                    <span className="pre">Price Table</span>
                                    <h2 className="title rts-text-anime-style-1">
                                        Pricing & Plans
                                    </h2>
                                </div>

                                {/* ==== Tab Buttons ==== */}
                                <div className="pricing-tab-button-area">
                                    <ul className="nav" role="tablist">
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
                    </div>

                    {/* ==== Tab Contents ==== */}
                    <div className="row mt--100">
                        <div className="col-12">
                            {activeTab === "monthly" && (
                                <div className="row g-5">
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                        <div className="pricing-wrapper-one">
                                            <div className="plane-process">
                                                <span>/month</span>
                                                <h3 className="title">$160</h3>
                                            </div>
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <span className="pre-title">Starter Package</span>
                                                <h4 className="title">Basic Plan</h4>
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
                                                <a
                                                    className="rts-btn btn-primary btn-white"
                                                    href="/contact"
                                                >
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_sm--80">
                                        <div className="pricing-wrapper-one">
                                            <div className="plane-process">
                                                <span>/month</span>
                                                <h3 className="title">$180</h3>
                                            </div>
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <span className="pre-title">Starter Package</span>
                                                <h4 className="title">Standard Plan</h4>
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
                                                <a className="rts-btn btn-primary" href="/contact">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt_md--80 mt_sm--80">
                                        <div className="pricing-wrapper-one">
                                            <div className="plane-process">
                                                <span>/month</span>
                                                <h3 className="title">$260</h3>
                                            </div>
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <span className="pre-title">Starter Package</span>
                                                <h4 className="title">Premium Plan</h4>
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
                                                <a
                                                    className="rts-btn btn-primary btn-white"
                                                    href="/contact"
                                                >
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
                                    <div className="col-lg-4">
                                        <div className="pricing-wrapper-one">
                                            <div className="plane-process">
                                                <span>/year</span>
                                                <h3 className="title">$1800</h3>
                                            </div>
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <span className="pre-title">Starter Package</span>
                                                <h4 className="title">Basic Plan</h4>
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
                                                <a className="rts-btn btn-primary" href="/contact">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-lg-4">
                                        <div className="pricing-wrapper-one">
                                            <div className="plane-process">
                                                <span>/year</span>
                                                <h3 className="title">$2000</h3>
                                            </div>
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <span className="pre-title">Standard Plan</span>
                                                <h4 className="title">Standard Plan</h4>
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
                                                <a className="rts-btn btn-primary" href="/contact">
                                                    Buy This
                                                </a>
                                            </div>
                                            {/* pricing body end */}
                                        </div>
                                    </div>
                                    {/* single pricing plane */}
                                    {/* single pricing plane */}
                                    <div className="col-lg-4">
                                        <div className="pricing-wrapper-one">
                                            <div className="plane-process">
                                                <span>/year</span>
                                                <h3 className="title">$2300</h3>
                                            </div>
                                            {/* pricing header */}
                                            <div className="pricing-header-start">
                                                <span className="pre-title">Premium Plan</span>
                                                <h4 className="title">Premium Plan</h4>
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
                                                <a className="rts-btn btn-primary" href="/contact">
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
            {/* rts pricing area end */}
        </>
    );
}

export default PricingThree;
