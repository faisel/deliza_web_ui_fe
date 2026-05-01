import React from 'react'
import BodyClass from '../home-2/BodyClassTwo'
import OnepageHeaderOne from '../onepage-one/OnepageHeaderOne'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'
import BannerSix from '../home-6/BannerSix'
import AboutSix from '../home-6/AboutSix'
import CtaSix from '../home-6/CtaSix'
import BusinessGoalThree from '../home-6/BusinessGoalThree'
import BandSix from '../home-6/BandSix'
import CounterUpSix from '../home-6/CounterUpSix'
import TestimonialsSix from '../home-6/TestimonialsSix'
import HomeBlogSix from '../home-6/HomeBlogeSix'
import GalleryTwo from '../home-6/GalleryTwo'
import FooterFour from '../home-4/FooterFour'
import ProjectSix from '../home-6/ProjectSix'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'

function page() {
  return (
    <>
      {/* Body class assign */}
      <BodyClass className="primary-blue onepage" />

      {/* Header with different logo */}
      <OnepageHeaderOne
        className="header-four"
        logoSrc="/assets/images/logo/05.svg"
      />

      <BannerSix id='home'/>
      <AboutSix id='about'/>
      <CtaSix />
      <BusinessGoalThree id='service'/>
      <BandSix />
      <ProjectSix id='project'/>
      <CounterUpSix />
      <TestimonialsSix />
      <HomeBlogSix id='blog'/>
      <GalleryTwo />
      <FooterFour id='contact'/>
      <RTL />
      <BackToTop />
      <OnepageSmoothScroll />
    </>
  )
}

export default page