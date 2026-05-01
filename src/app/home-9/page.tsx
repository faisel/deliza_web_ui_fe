import React from 'react'
import BodyClass from '../home-2/BodyClassTwo'
import HeaderOne from '../home-1/HeaderOne'
import BannerNine from './BannerNine'
import ServicesNine from './ServicesNine'
import BrandNine from './BrandNine'
import ServicesBottom from './ServicesBottom'
import WhyChooseUsNine from './WhyChooseUsNine'
import TeamNine from './TeamNine'
import FunFactNine from './FunFactNine'
import TestimonialsNine from './TestimonialsNine'
import AppointmentNine from './AppointmentNine'
import HomeBlogNine from './HomeBlogNine'
import CtaTwo from '../home-2/CtaTwo'
import FooterNine from './FooterNine'

function page() {
  return (
    <>
        {/* Body class assign */}
        <BodyClass className="primary-sky" />
        {/* Page content */}
      <>
        <HeaderOne 
        logoSrc="/assets/images/logo/04.svg"
        className='style-four top-transparent-header' />
      </>
      <BannerNine />
      <ServicesNine />
      <BrandNine />
      <ServicesBottom />
      <WhyChooseUsNine />
      <TeamNine />
      <FunFactNine />
      <TestimonialsNine />
      <AppointmentNine />
      <HomeBlogNine />
      <CtaTwo className='rts-section-gapBottom'/>
      <FooterNine />
    </>
  )
}

export default page