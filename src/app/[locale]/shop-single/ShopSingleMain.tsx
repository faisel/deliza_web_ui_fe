'use client'
import React, { useState } from "react";
import { Keyboard, Navigation, Pagination, Parallax, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function ShopSingleMain() {
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQty = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        }
    };
    return (
        <div className="rts-sop-details-area rts-section-gapTop">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-horizental">
                            <div className="swiper swiper-container-h1">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, Keyboard, Parallax]}
                                    direction="horizontal"
                                    effect="slide"
                                    speed={1600}
                                    loop={true}
                                    parallax={true}
                                    keyboard={{
                                        enabled: true,
                                        onlyInViewport: true,
                                    }}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    pagination={{
                                        el: ".swiper-pagination",
                                        clickable: true,
                                    }}
                                    scrollbar={{
                                        el: ".swiper-scrollbar",
                                        draggable: true,
                                        hide: false,
                                    }}
                                    className="swiper-container-h1"
                                >
                                    <SwiperSlide>
                                        <div className="slider-inner">
                                            <img
                                                src="/assets/images/shop/shop-01.jpg"
                                                alt="full_screen-image"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-inner">
                                            <img
                                                src="/assets/images/shop/shop-03.jpg"
                                                alt="full_screen-image"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-inner">
                                            <img
                                                src="/assets/images/shop/shop-02.jpg"
                                                alt="full_screen-image"
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="slider-pagination-area-shop-details">
                                <div className="swiper-pagination swiper-pagination-horizontal">
                                    <span className="swiper-pagination-bullet" />
                                    <span className="swiper-pagination-bullet two" />
                                    <span className="swiper-pagination-bullet three" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--180 mt_sm--180">
                        <div className="ms-single-product__content">
                            <h2 className="ms-single-product_title">Modernize Shovel</h2>
                            <p className="price">
                                <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                        <span className="woocommerce-Price-currencySymbol">$</span>29.00
                                    </bdi>
                                </span>
                            </p>
                            <div className="ms-woocommerce-product-rating woocommerce-product-rating">
                                <div className="ms-rating-icon">
                                    <svg
                                        height="26px"
                                        version="1.2"
                                        viewBox="3 2 22 22"
                                        width="26px"
                                        xmlSpace="preserve"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <g>
                                            <g>
                                                <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="ms-rating-average"> 5.00 </div>
                                <a
                                    href="#reviews"
                                    className="woocommerce-review-link"
                                    rel="nofollow"
                                >
                                    (<span className="count">1</span> customer review)
                                </a>
                            </div>
                            <div className="woocommerce-product-details__short-description">
                                <p>
                                    Progressively incentivize B2C content vis-a-vis reliable
                                    experiences. Phosfluorescently benchmark unique e-services whereas
                                    transparent collaboration and idea-sharing. Enthusiastically
                                    communicate maintainable networks via global metrics. Credibly
                                    negotiate progressive bandwidth for go forward e-commerce.
                                    Rapidiously evolve magnetic initiatives through client-based
                                    portals.
                                </p>
                            </div>
                            <p className="stock in-stock">7 in stock</p>
                            <div className="quantity-area">
                                <div className="cart-edit">
                                    <div className="quantity-edit">
                                        <button
                                            type="button"
                                            className="button"
                                            onClick={decreaseQty}
                                        >
                                            <i className="fa fa-minus minus" />
                                        </button>

                                        <input
                                            type="number"
                                            className="input"
                                            value={quantity}
                                            min={1}
                                            onChange={handleChange}
                                        />

                                        <button
                                            type="button"
                                            className="button plus"
                                            onClick={increaseQty}
                                        >
                                            <i className="fa fa-plus plus" />
                                        </button>
                                    </div>
                                </div>
                                <a href="/cart" className="rts-btn btn-primary">
                                    Add to cart
                                </a>
                            </div>
                            <div className="product_meta">
                                <span className="sku_wrapper">
                                    <strong>SKU:</strong> <span className="sku">161056</span>
                                </span>
                                <span className="posted_in">
                                    <strong>Category:</strong>{" "}
                                    <a href="#0" rel="tag">
                                        For Running
                                    </a>
                                </span>
                                <span className="tagged_as">
                                    <strong>Tags:</strong>{" "}
                                    <a href="#0" rel="tag">
                                        Life
                                    </a>
                                    ,
                                    <a href="#0" rel="tag">
                                        Move
                                    </a>
                                    ,
                                    <a href="#0" rel="tag">
                                        Sport
                                    </a>
                                    ,
                                    <a href="#0" rel="tag">
                                        Trainers
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 tab-area-shop rts-section-gap">
                        {/* Nav tabs */}
                        <ul
                            className="nav nav-tabs pt--100 pt_md--50 pt_sm--50"
                            id="myTab"
                            role="tablist"
                        >
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
                                    Description
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
                                    Additional Information
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="messages-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#messages"
                                    type="button"
                                    role="tab"
                                    aria-controls="messages"
                                    aria-selected="false"
                                >
                                    Review (0)
                                </button>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div
                                className="tab-pane active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                                tabIndex={0}
                            >
                                Credibly e-enable e-business materials with competitive products.
                                Enthusiastically extend unique leadership before timely users.
                                Synergistically scale B2C e-business rather than quality products.
                                Synergistically incubate extensible outsourcing via magnetic
                                sources. Interactively revolutionize intuitive collaboration and
                                idea-sharing through high-quality models. Synergistically incubate
                                extensible outsourcing via magnetic sources. Interactively
                                revolutionize intuitive collaboration and idea-sharing through
                                high-quality models. Interactively revolutionize intuitive
                                collaboration and idea-sharing through high-quality models.
                                <br />
                                <br />
                                Interactively revolutionize intuitive collaboration and idea-sharing
                                through high-quality models. Credibly e-enable e-business materials
                                with competitive products. Enthusiastically extend unique leadership
                                before timely users.
                            </div>
                            <div
                                className="tab-pane"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                                tabIndex={0}
                            >
                                <div className="ms-section-title">
                                    <h3 className="ms-heading-title"> Additional information</h3>
                                    <table className="woocommerce-product-attributes shop_attributes">
                                        <tbody>
                                            <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_size">
                                                <th className="woocommerce-product-attributes-item__label">
                                                    Size
                                                </th>
                                                <td className="woocommerce-product-attributes-item__value">
                                                    <p>39, 40, 41, 42, 43, 44</p>
                                                </td>
                                            </tr>
                                            <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_collection">
                                                <th className="woocommerce-product-attributes-item__label">
                                                    {" "}
                                                    Collection
                                                </th>
                                                <td className="woocommerce-product-attributes-item__value">
                                                    <p>Most Sport Pro</p>
                                                </td>
                                            </tr>
                                            <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_upper-material">
                                                <th className="woocommerce-product-attributes-item__label">
                                                    Upper Material
                                                </th>
                                                <td className="woocommerce-product-attributes-item__value">
                                                    <p>Leather</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div
                                className="tab-pane"
                                id="messages"
                                role="tabpanel"
                                aria-labelledby="messages-tab"
                                tabIndex={0}
                            >
                                <div id="reviews" className="woocommerce-Reviews">
                                    <div className="full-details-inner">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="reveiw-form">
                                                    <h2 className="heading-title"> Be the first to reveiw</h2>
                                                    <div className="reveiw-form-main">
                                                        <form className="contact-form">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-sm-12">
                                                                    <div className="input-box text-input">
                                                                        <textarea
                                                                            name="Message"
                                                                            id="validationDefault01"
                                                                            cols={30}
                                                                            rows={10}
                                                                            placeholder="Your Review*"
                                                                            defaultValue={""}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-sm-12">
                                                                    <div className="col-lg-12">
                                                                        <div className="input-box">
                                                                            <input
                                                                                type="text"
                                                                                id="validationDefault02"
                                                                                placeholder="Name*"
                                                                                required
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="input-box mail-input">
                                                                            <input
                                                                                type="text"
                                                                                id="validationDefault03"
                                                                                placeholder="E-mail*"
                                                                                required
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="rating">
                                                                            <p>Your Rating :</p>
                                                                            <div className="rating-icon">
                                                                                <span className="one">
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        <i className="fa fa-star" />
                                                                                    </a>
                                                                                </span>
                                                                                <span className="two">
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        <i className="fa fa-star" />
                                                                                    </a>
                                                                                </span>
                                                                                <span className="three">
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        <i className="fa fa-star" />
                                                                                    </a>
                                                                                </span>
                                                                                <span className="four">
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        <i className="fa fa-star" />
                                                                                    </a>
                                                                                </span>
                                                                                <span className="five">
                                                                                    <a href="#">
                                                                                        {" "}
                                                                                        <i className="fa fa-star" />
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-cf--bottom col-12">
                                                                        <button
                                                                            className="rts-btn btn-primary"
                                                                            type="submit"
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShopSingleMain