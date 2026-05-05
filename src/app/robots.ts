import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Block built-in template demo paths and unused alias paths from being
 * crawled. Active menu pages, news details, and the legal/privacy pages
 * (linked from the footer) remain crawlable.
 */
const DISALLOWED_TEMPLATE_PATHS = [
  "/*/home-1/",
  "/*/home-2/",
  "/*/home-3/",
  "/*/home-4/",
  "/*/home-5/",
  "/*/home-6/",
  "/*/home-7/",
  "/*/home-8/",
  "/*/home-9/",
  "/*/home-10/",
  "/*/onepage-one/",
  "/*/onepage-two/",
  "/*/onepage-three/",
  "/*/onepage-four/",
  "/*/onepage-five/",
  "/*/onepage-six/",
  "/*/onepage-seven/",
  "/*/onepage-eight/",
  "/*/onepage-nine/",
  "/*/onepage-ten/",
  "/*/project-grid/",
  "/*/project-grid-col-2/",
  "/*/project-grid-col-3/",
  "/*/project-slider/",
  "/*/project-slider-2/",
  "/*/project-slider-grid/",
  "/*/project-slider-overflow/",
  "/*/project-card-slider/",
  "/*/project-bg-dark/",
  "/*/project-details/",
  "/*/project-details-2/",
  "/*/project-details-3/",
  "/*/project-details-large-image/",
  "/*/project-details-gallery/",
  "/*/project/",
  "/*/service/",
  "/*/service-details/",
  "/*/service-details-2/",
  "/*/about-us/",
  "/*/contact-2/",
  "/*/contact-us/",
  "/*/blog/",
  "/*/career/",
  "/*/team/",
  "/*/team-details/",
  "/*/partners/",
  "/*/our-mission/",
  "/*/history/",
  "/*/faq/",
  "/*/gallery/",
  "/*/shop/",
  "/*/shop-single/",
  "/*/cart/",
  "/*/account/",
  "/*/appoinment/",
  "/*/pricing/",
  "/*/pricing-comparison/",
  "/*/coming-soon/",
];

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED_TEMPLATE_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
