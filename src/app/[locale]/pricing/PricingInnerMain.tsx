import React from 'react'

function PricingInnerMain() {
    return (
        <>
            {/* rts pricing area start */}
            <div className="rts-pricing-area-one mt-dec-section-inner with-pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-three-title-area">
                                <div className="title-style-one left"></div>
                                <div className="pricing-tab-button-area">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home"
                                                type="button"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="true"
                                            >
                                                Monthly PLan
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="profile-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                            >
                                                Yearly Plan
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--150 mt_sm--120">
                        <div className="col-12">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row g-5">
                                        {/* single pricing plane */}
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
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    <a className="rts-btn btn-primary" href="#">
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
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    <a className="rts-btn btn-primary" href="#">
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
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    <a className="rts-btn btn-primary" href="#">
                                                        Buy This
                                                    </a>
                                                </div>
                                                {/* pricing body end */}
                                            </div>
                                        </div>
                                        {/* single pricing plane */}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
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
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    <a className="rts-btn btn-primary" href="#">
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
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    <a className="rts-btn btn-primary" href="#">
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
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">Business Solution</span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing available">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Great Customer Support
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing ">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            Market Growth Solution
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    {/* single pricing */}
                                                    <div className="single-pricing">
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <span className="price-details">
                                                            24/7 Consultant Service
                                                        </span>
                                                    </div>
                                                    {/* single pricing End */}
                                                    <a className="rts-btn btn-primary" href="#">
                                                        Buy This
                                                    </a>
                                                </div>
                                                {/* pricing body end */}
                                            </div>
                                        </div>
                                        {/* single pricing plane */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts pricing area end */}
        </>

    )
}

export default PricingInnerMain