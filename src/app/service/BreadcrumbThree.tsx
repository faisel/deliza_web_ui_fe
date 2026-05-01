import React from 'react'

interface BreadcrumbThreeProps {
    preTitle?: string;
    bgTitle?: string;
    title: string;
}


function BreadcrumbThree(
    {
    bgTitle,
    title,
    preTitle,}: BreadcrumbThreeProps
) {
  return (
    <>
  {/* about us area wrapper main */}
  <div className="rts-breadcrumb-area small-h">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-area-left center">
            <span className="pre">{preTitle}</span>
            <span className="bg-title"> {bgTitle}</span>
            <h1 className="title rts-text-anime-style-1"> {title}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-area">
      <img src="assets/images/about/shape/01.png" alt="shape" className="one" />
      <img src="assets/images/about/shape/02.png" alt="shape" className="two" />
      <img
        src="assets/images/about/shape/03.png"
        alt="shape"
        className="three"
      />
    </div>
  </div>
  {/* about us area wrapper main end */}
</>

  )
}

export default BreadcrumbThree