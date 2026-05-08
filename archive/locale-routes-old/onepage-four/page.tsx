import React from 'react'
import BodyClass from '../home-2/BodyClassTwo'
import BannerFour from '../home-4/BannerFour'
import AboutFour from '../home-4/AboutFour'
import BrandFour from '../home-4/BrandFour'
import WhyChooseUsTwo from '../home-4/WhyChooseUsTwo'
import CtaFour from '../home-4/CtaFour'
import BusinessSolution from '../home-4/BusinessSolution'
import CounterUpTwo from '../home-2/CounterUpTwo'
import CaseStudies from '../home-4/CaseStudies'
import FaqOne from '../home-4/FaqOne'
import TeamThree from '../home-4/TeamThree'
import PricingThree from '../home-4/PricingThree'
import Appointment from '../home-4/Appointment'
import HomeBlogFour from '../home-4/HomeBlogFour'
import Gallery from '../home-4/Gallerry'
import FooterFour from '../home-4/FooterFour'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import OnepageHeaderFour from './OnepageHeaderFour'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'

function OnepageFour() {
  return (
    <>
        {/* Body class assign */}
            <BodyClass className="onepage" />
        {/* Page content */}
        <>
         <OnepageHeaderFour />
            <BannerFour id='home'/>
            <AboutFour id='about'/>
            <BrandFour />
            <WhyChooseUsTwo />
            <CtaFour />
            <BusinessSolution id='service'/>
            <CounterUpTwo />
            <CaseStudies id='project'/>
            <FaqOne />
            <TeamThree />
            <PricingThree />
            <Appointment />
            <HomeBlogFour id='blog'/>
            <Gallery />
            <FooterFour id='contact'/>
            <RTL />
            <BackToTop />
            <OnepageSmoothScroll />
        </>
    </>
  )
}

export default OnepageFour