import React from 'react'
import BannerSix from './BannerSix'
import BodyClass from '../home-2/BodyClassTwo'
import DelizaHeader from "@/app/components/DelizaHeader";
import AboutSix from './AboutSix'
import CtaSix from './CtaSix'
import BusinessGoalThree from './BusinessGoalThree'
import BandSix from './BandSix'
import ProjectSix from './ProjectSix'
import CounterUpSix from './CounterUpSix'
import TestimonialsSix from './TestimonialsSix'
import HomeBlogSix from './HomeBlogeSix'
import GalleryTwo from './GalleryTwo'
import FooterSix from './FooterSix'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
  return (
    <>
      {/* Body class assign */}
      <BodyClass className="primary-blue" />

      {/* Header with different logo */}
      <DelizaHeader
        className="header-four"
        logoSrc="/assets/images/logo/05.svg"
      />

      <BannerSix />
      <AboutSix />
      <CtaSix />
      <BusinessGoalThree />
      <BandSix />
      <ProjectSix />
      <CounterUpSix />
      <TestimonialsSix />
      <HomeBlogSix />
      <GalleryTwo />
      <FooterSix />
      <RTL />
      <BackToTop />
    </>
  )
}

export default page