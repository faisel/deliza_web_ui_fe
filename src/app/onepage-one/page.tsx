import React from 'react'
import OnepageHeaderOne from './OnepageHeaderOne'
import BannerOne from '../home-1/Banner'
import AboutOne from '../home-1/AboutOne'
import ServicesOne from '../home-1/ServicesOne'
import CtaOne from '../home-1/CtaOne'
import BusinessGoalOne from '../home-1/BusinessGoalOne'
import CounterUpOne from '../home-1/CounterUpOne'
import ProjectOne from '../home-1/ProjectOne'
import BrandOne from '../home-1/BrandOne'
import TeamOne from '../home-1/TeamOne'
import TestimonialsOne from '../home-1/TestimonialsOne'
import AppointmentOne from '../home-1/AppointmentOne'
import HomeBlogOne from '../home-1/HomeBlogOne'
import FooterOne from '../home-1/FooterOne'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'
import OnepageSmoothScroll from './OnepageSmoothScroll'
import BodyClass from '../home-2/BodyClassTwo'

function page() {
  return (
    <>
        {/* Body class assign */}
          <BodyClass className="onepage" />
        {/* Page content */}
        <>
            <OnepageHeaderOne logoSrc="/assets/images/logo/01.svg"/>
            <BannerOne id='home' />
            <AboutOne id='about' />
            <ServicesOne id='service'/>
            <CtaOne />
            <BusinessGoalOne />
            <CounterUpOne />
            <ProjectOne id='project'/>
            <BrandOne />
            <TeamOne />
            <TestimonialsOne />
            <AppointmentOne />
            <HomeBlogOne className='rts-section-gapBottom pt--40 mb--310' id='blog' />
            <FooterOne  id='contact'/>
            <RTL />
            <BackToTop />
            <OnepageSmoothScroll />
        </>
    </>
  )
}

export default page
