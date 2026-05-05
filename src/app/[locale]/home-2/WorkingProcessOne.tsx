import Image from "next/image";

function WorkingProcessOne() {


  return (
    <>
      {/* working process areas start */}
      <div className="working-process-one bg-main rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span 
                  className="pre"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Our Latest Services
                </span>

                <h2 
                  className="title rts-text-anime-style-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Easy 3 Steps To Work
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--30 align-items-center">
            
            {/* LEFT SIDE STEPS */}
            <div className="col-lg-6">
              <div className="working-process-main-wrapper">

                {/* STEP 01 */}
                <div
                  className="single-working-process-one"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="left">
                    <div className="icon">
                      <Image
                          src="/assets/images/process/icon/01.svg"
                          alt="process"
                          width={52}
                          height={52}
                      />
                    </div>
                  </div>

                  <div className="inner-content">
                    <div className="number-main">
                      <span className="number">01</span>
                    </div>
                    <h5 className="title">Client Discovery</h5>
                    <p className="disc">
                      The agency begins by understanding the client's needs, goals, and
                    </p>
                  </div>
                </div>

                {/* STEP 02 */}
                <div
                  className="single-working-process-one"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="left">
                    <div className="icon">
                      <Image
                          src="/assets/images/process/icon/02.svg"
                          alt="process"
                          width={52}
                          height={56}
                      />
                    </div>
                  </div>

                  <div className="inner-content">
                    <div className="number-main">
                      <span className="number">02</span>
                    </div>
                    <h5 className="title">Research &amp; Analysis</h5>
                    <p className="disc">
                      The agency begins by understanding the client's needs, goals, and
                    </p>
                  </div>
                </div>

                {/* STEP 03 */}
                <div
                  className="single-working-process-one"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="left">
                    <div className="icon">
                      <Image
                          src="/assets/images/process/icon/03.svg"
                          alt="process"
                          width={52}
                          height={50}
                      />
                    </div>
                  </div>

                  <div className="inner-content">
                    <div className="number-main">
                      <span className="number">03</span>
                    </div>
                    <h5 className="title">Strategy Development</h5>
                    <p className="disc">
                      The agency begins by understanding the client's needs, goals, and
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="col-lg-6">
              <div
                className="thumbnail-working-procss-one"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Image
                    src="/assets/images/process/01.webp"
                    alt="working-process"
                    width={872}
                    height={872}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* working process areas end */}
    </>
  );
}

export default WorkingProcessOne;
