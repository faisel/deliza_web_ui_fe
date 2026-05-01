
import React from 'react'

interface CtaTwoProps {
  className?: string
}

function CtaTwo({ className = "" }: CtaTwoProps) {
  return (
    <>
      {/* rts cta area start */}
      <div className={`rts-cta-area-one ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-main-area-wrapper-one bg_image">
                <div className="left-areas">
                  <span className="pre">Latest Business Ideas</span>
                  <h3 className="title">Sign Up Newsletter</h3>
                </div>
                <div className="right-area">
                  <div className="inpur-area-main">
                    <input type="text" placeholder="Enter Email Address" />
                    <button className="rts-btn btn-primary">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts cta area end */}
    </>
  )
}

export default CtaTwo
