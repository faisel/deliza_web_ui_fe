function BusinessGrowth() {
  const progressData = [
    { title: "Business Solution", value: "100%", delay: 0 },
    { title: "Empowering Success", value: "100%", delay: 200 },
    { title: "Simplifying Success", value: "100%", delay: 400 },
  ];

  return (
    <>
      {/* rts business growth area start */}
      <div className="rts-business-groth-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            
            {/* LEFT CONTENT */}
            <div
              className="col-lg-6"
              data-aos="fade-right"
            >
              <div className="business-groth-inner-wrapper-5">
                <div className="title-style-five">
                  <span className="pre">Business Growth</span>
                  <h2 className="title rts-text-anime-style-1">
                    Contributing To Important <br /> Global Initiatives
                  </h2>
                </div>

                <div className="progress-wrapper-about-4 mt--50 mb--50">
                  {progressData.map((item, index) => (
                    <div
                      className="single-progress"
                      key={index}
                      data-aos="fade-left"
                      data-aos-delay={item.delay}
                    >
                      <h6 className="title">{item.title}</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: item.value }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                        <span className="progress-number">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="rts-btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="business-groth-5-thumbnail">
                <img
                  src="/assets/images/business/02.webp"
                  alt="business"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* rts business growth area ends */}
    </>
  );
}

export default BusinessGrowth;
