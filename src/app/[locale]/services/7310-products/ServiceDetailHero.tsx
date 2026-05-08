import React from "react";
import type { ServiceContent } from "./content";

interface Props {
  content: ServiceContent;
}

function ServiceDetailHero({ content }: Props) {
  return (
    <div className="partner-breadcrumb bg_image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-left center">
              <span className="bg-title">{content.heroBgTitle}</span>
              <h1 className="title">{content.heroTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailHero;
