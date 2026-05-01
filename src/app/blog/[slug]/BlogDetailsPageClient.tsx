"use client";
import { useParams } from "next/navigation";
import HeaderOne from "@/app/home-1/HeaderOne";
import posts from "../../data/data-post.json";
import React from "react";
import BrandInner from "@/app/service/BrandInner";
import CtaInner from "@/app/about/CtaInner";
import FooterTen from "@/app/home-10/FooterTen";
import RTL from "@/app/home-1/RTL";
import BackToTop from "@/app/home-1/BackToTop";

export default function BlogDetailsPageClient() {
  const { slug } = useParams();

  const blogPost = posts.find((post) => post.slug === slug);

  if (!blogPost) {
    return <div>Post not found!</div>;
  }
  return (
    <>
      <HeaderOne logoSrc="/assets/images/logo/01.svg" />
      <>
        <div className="blog-details-banner-large-image"></div>
        <div className="blog-details-area-main-wrapper pt--80">
          <div className="container-blog-details">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-details-area-inner-content">
                  <div className="image-area mb--30">
                    <img src={blogPost.blogImage} style={{ width: "100%" }} alt="" />
                  </div>
                  <div className="blog-details-top-wrapper">
                    <div className="single">
                      <i className="fa-solid fa-circle-user" />
                      <span>by {blogPost.author}</span>
                    </div>
                    <div className="single">
                      <i className="fa-solid fa-clock" />
                      <span>15 Jan, 2023</span>
                    </div>
                    <div className="single">
                      <i className="fa-solid fa-tags" />
                      <span>{blogPost.category}</span>
                    </div>
                  </div>
                  <h2 className="title">{blogPost.title}</h2>
                  <p className="disc">
                    Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally
                    initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth
                    strategies with just in time web readiness communicate timely meta services.
                  </p>
                  <p className="disc">
                    Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos
                    euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus
                    sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu
                    convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in
                    venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur
                    ullamcorper varius
                  </p>
                  <div className="rts-quote-area text-center">
                    <h5 className="title">
                      “Placerat pretium tristique mattis tellus accuan metus dictumst vivamus odio nulla fusce
                      auctor into suscipit habitasse class congue potenti iaculis”
                    </h5>
                    <a href="#" className="name">
                      Daniel X. Horrar
                    </a>
                    <span>Author</span>
                  </div>
                  <p className="disc">
                    Ultrices iaculis commodo parturient euismod pulvinar donec cum eget a, accumsan viverra cras
                    praesent cubilia dignissim ad rhoncus. Gravida maecenas lobortis suscipit mus sociosqu
                    convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in
                    venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur
                    ullamcorper varius, nostra ante risus egestas suscipit. Quisque interdum nec parturient
                    facilisis nunc ac quam, ad est cubilia mauris himenaeos nascetur vestibulum potenti, hac purus
                    magna.
                  </p>
                  <div className="thumbnail-large">
                    <img src="/assets/images/blog/19.webp" alt="blog" />
                  </div>
                  <h5 className="title mt--50">Ultimate Business Strategy Solution</h5>
                  <p className="disc">
                    Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus
                    sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere
                    per mauris, eros porta blandit curabitur ullamcorper varius nostra ante risus egestas.
                  </p>
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="thumbnail details mb_sm--15">
                        <img src="/assets/images/blog/details/03.jpg" alt="finbiz_buseness" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="check-area-details">
                        <div className="single-check">
                          <i className="far fa-check-circle" />
                          <span>How will activities traditional manufacturing</span>
                        </div>
                        <div className="single-check">
                          <i className="far fa-check-circle" />
                          <span>All these digital and projects aim to enhance</span>
                        </div>
                        <div className="single-check">
                          <i className="far fa-check-circle" />
                          <span>I monitor my software that takes screenshots</span>
                        </div>
                        <div className="single-check">
                          <i className="far fa-check-circle" />
                          <span>Laoreet dolore niacin sodium glutimate</span>
                        </div>
                        <div className="single-check">
                          <i className="far fa-check-circle" />
                          <span>Minim veniam sodium glutimate nostrud</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="disc mt--50 mb--50">
                    Cubilia hendrerit luctus sem aptent curae gravida maecenas eleifend nunc nec vitae morbi sodales
                    fusce tristique aenean habitasse mattis sociis feugiat conubia mus auctor praesent urna
                    tincidunt taciti dui lobortis nullam. Mattis placerat feugiat ridiculus sed a per curae
                    fermentum aenean facilisi, vitae urna imperdiet ac mauris non inceptos luctus hac odio.
                  </p>
                  <div className="row  align-items-center">
                    <div className="col-lg-6 col-md-12">
                      <div className="details-tag">
                        <h6>Tags:</h6>
                        <button>Services</button>
                        <button>Business</button>
                        <button>Growth</button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="details-share">
                        <h6>Share:</h6>
                        <button>
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button>
                          <i className="fab fa-twitter" />
                        </button>
                        <button>
                          <i className="fab fa-instagram" />
                        </button>
                        <button>
                          <i className="fab fa-linkedin-in" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="author-area-blog">
                    <div className="thumbnail details mb_sm--15">
                      <img src="/assets/images/blog/details/author.jpg" alt="finbiz_buseness" />
                    </div>
                    <div className="author-details team">
                      <span>Brand Designer</span>
                      <h5>Angelina H. Dekato</h5>
                      <p className="disc">
                        Nullam varius luctus pharetra ultrices volpat facilisis donec tortor, nibhkisys habitant
                        curabitur at nunc nisl magna ac rhoncus vehicula sociis tortor nist hendrerit molestie
                        integer.
                      </p>
                    </div>
                  </div>
                  <div className="replay-area-details">
                    <h4 className="title">Leave a Reply</h4>
                    <form action="#">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="col-12">
                          <input type="text" placeholder="Select Topic" />
                          <textarea defaultValue={""} />
                        </div>
                      </div>
                      <button className="btn-primary rts-btn mt--50">Submit Message</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <BrandInner className="rts-section-gap" />
      <CtaInner />
      <FooterTen />
      <RTL />
      <BackToTop />
    </>
  );
}
