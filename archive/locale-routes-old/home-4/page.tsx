import React from 'react'
import BannerFour from './BannerFour'
import AboutFour from './AboutFour'
import BrandFour from './BrandFour'
import WhyChooseUsTwo from './WhyChooseUsTwo'
import CtaFour from './CtaFour'
import BusinessSolution from './BusinessSolution'
import CounterUpTwo from '../home-2/CounterUpTwo'
import CaseStudies from './CaseStudies'
import FaqOne from './FaqOne'
import TeamThree from './TeamThree'
import PricingThree from './PricingThree'
import Appointment from './Appointment'
import HomeBlogFour from './HomeBlogFour'
import Gallery from './Gallerry'
import FooterFour from './FooterFour'
import HeaderFour from './HeaderFour'

function page() {
  return (
    <>
    <HeaderFour />
      <BannerFour />
      <AboutFour />
      <BrandFour />
      <WhyChooseUsTwo />
      <CtaFour />
      <BusinessSolution />
      <CounterUpTwo />
      <CaseStudies className='rts-section-gapBottom'/>
      <FaqOne />
      <TeamThree />
      <PricingThree />
      <Appointment />
      <HomeBlogFour />
      <Gallery />
      <FooterFour />
    </>
  )
}

export default page