import React from 'react'

function AccountInner() {
    return (
        <div className="rts-contact-page-form-area rts-section-gapTop account">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="mian-wrapper-form">
                            <div
                                className="title-mid-wrapper-home-two sal-animate"
                                data-sal="slide-up"
                                data-sal-delay={150}
                                data-sal-duration={800}
                            >
                                <h2 className="title">Login</h2>
                            </div>
                            <form id="contact-form-contact" action="" method="post">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address or Username"
                                    required
                                />
                                <input type="text" name="name" placeholder="Password" required />
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        defaultValue="lsRememberMe"
                                        id="rememberMe"
                                    />{" "}
                                    <label htmlFor="rememberMe">Remember me</label>
                                </div>
                                <button type="submit" className="rts-btn btn-primary">
                                    Log In
                                </button>
                                <div className="forgot-password">
                                    <a href="#0">Forgot Your Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mian-wrapper-form">
                            <div
                                className="title-mid-wrapper-home-two sal-animate"
                                data-sal="slide-up"
                                data-sal-delay={150}
                                data-sal-duration={800}
                            >
                                <h2 className="title">Registration</h2>
                            </div>
                            <form id="contact-form-contact" action="" method="post">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="New Password"
                                    required
                                />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Confirm Password"
                                    required
                                />
                                <button type="submit" className="rts-btn btn-primary">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccountInner