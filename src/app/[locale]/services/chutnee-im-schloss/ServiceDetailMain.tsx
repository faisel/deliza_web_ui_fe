import React from "react";
import Image from "next/image";
import type { ServiceContent, ServiceId, ServiceImageSet } from "./content";

interface Props {
  serviceId: ServiceId;
  content: ServiceContent;
  images: ServiceImageSet;
}

const STAT_ICONS = [
  { src: "/assets/images/portfolio/icons/05.svg", width: 46, height: 45 },
  { src: "/assets/images/portfolio/icons/06.svg", width: 45, height: 45 },
  { src: "/assets/images/portfolio/icons/07.svg", width: 45, height: 45 },
  { src: "/assets/images/portfolio/icons/08.svg", width: 53, height: 45 },
];

function ServiceDetailMain({ serviceId, content, images }: Props) {
  const accordionId = `serviceDetailAccordion-${serviceId}`;
  return (
    <div className="project-details-wrapper-image-top rts-section-gapTop">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-8">
            <div className="thumbnail">
              <Image
                src={images.gallery[0].src}
                alt={images.gallery[0].alt}
                width={images.gallery[0].width}
                height={images.gallery[0].height}
              />
            </div>
          </div>
          <div className="col-lg-4 pl--20 pl_md--0 pl_sm--0">
            <div className="thumbnail mb--10 mt_md--10 mt_sm--15">
              <Image
                src={images.gallery[1].src}
                alt={images.gallery[1].alt}
                width={images.gallery[1].width}
                height={images.gallery[1].height}
              />
            </div>
            <div className="thumbnail">
              <Image
                src={images.gallery[2].src}
                alt={images.gallery[2].alt}
                width={images.gallery[2].width}
                height={images.gallery[2].height}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt--30">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div className="single-project-info-wrapper-inner">
              <h4 className="title">{content.introHeadline}</h4>
              <p className="disc">{content.intro}</p>
              <div className="row g-4">
                {content.infoCards.map((card) => (
                  <div className="col-lg-2 col-md-4 col-sm-6" key={card.label}>
                    <div className="single-project-info">
                      <span>{card.label}:</span>
                      <p>{card.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-content-bottom">
              <p className="disc">{content.paragraphs[0]}</p>
              <p className="disc">{content.paragraphs[1]}</p>
              <p className="bold">{content.quote}</p>
              <p className="disc">{content.paragraphsAfter[0]}</p>
              <p className="disc">{content.paragraphsAfter[1]}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="counterup-area-project-details">
              {content.stats.map((stat, index) => {
                const icon = STAT_ICONS[index];
                const isLast = index === content.stats.length - 1;
                const className = `single-counter-up-area${
                  index === 0 ? "" : " with-pl"
                }${isLast ? " b-n" : ""}`;
                return (
                  <div className={className} key={stat.label}>
                    <div className="icon">
                      <Image
                        src={icon.src}
                        alt="icon"
                        width={icon.width}
                        height={icon.height}
                      />
                    </div>
                    <h2 className="counter title">
                      <span className="odometer" data-count={stat.count}>
                        00
                      </span>
                      +
                    </h2>
                    <p className="disc">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-12 mt--50">
            <div className="faq-inner-wrapper-one project-detils">
              <div className="accordion" id={accordionId}>
                {content.faq.map((entry, index) => {
                  const itemId = `${accordionId}-collapse-${index}`;
                  const headingId = `${accordionId}-heading-${index}`;
                  const isFirst = index === 0;
                  return (
                    <div className="accordion-item" key={itemId}>
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className={`accordion-button${
                            isFirst ? "" : " collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${itemId}`}
                          aria-expanded={isFirst ? "true" : "false"}
                          aria-controls={itemId}
                        >
                          {entry.q}
                        </button>
                      </h2>
                      <div
                        id={itemId}
                        className={`accordion-collapse collapse${
                          isFirst ? " show" : ""
                        }`}
                        aria-labelledby={headingId}
                        data-bs-parent={`#${accordionId}`}
                      >
                        <div className="accordion-body">
                          <div className="left">
                            <Image
                              src={images.faq.src}
                              alt={images.faq.alt}
                              width={images.faq.width}
                              height={images.faq.height}
                            />
                          </div>
                          <div className="right-area">
                            <h4 className="title">{entry.q}</h4>
                            <p className="disc mb--20">{entry.a}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailMain;
