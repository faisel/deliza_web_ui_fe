import React from 'react'
import BodyClass from '../home-2/BodyClassTwo'
import BannerSeven from '../home-7/BannerSeven'
import AboutSeven from '../home-7/AboutSeven'
import CtaSeven from '../home-7/CtaSeven'
import ServicesTwo from '../home-2/ServicesTwo'
import WorkingProcess from '../home-7/WorkingProcess'
import ProjectSeven from '../home-7/ProjectSeven'
import BrandFive from '../home-5/BrandFive'
import PricingOne from '../home-2/PricingOne'
import TestimonialsSeven from '../home-7/TestimonialsSeven'
import AppointmentTwo from '../home-7/AppointmentTwo'
import HomeBlogOne from '../home-1/HomeBlogOne'
import CtaTwo from '../home-2/CtaTwo'
import FooterTwo from '../home-2/FooterTwo'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'
import HeaderSevenOnepage from './HeaderSevenOnepage'

function page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="overflow-x-visible onepage" />
            {/* Page content */}
            <>
                <div className='page-wrapper radious-none-button'>
                    <HeaderSevenOnepage />
                    <BannerSeven id='home'/>
                    <AboutSeven id='about'/>
                    <CtaSeven />
                    <ServicesTwo id='service' className='rts-section-gap' />
                    <WorkingProcess />
                    <ProjectSeven id='project'/>
                    <BrandFive />
                    <PricingOne />
                    <TestimonialsSeven />
                    <AppointmentTwo />
                    <HomeBlogOne id='blog' className='rts-section-gap' />
                    <CtaTwo className='rts-section-gapBottom' />
                    <FooterTwo id='contact'/>
                    <RTL />
                    <BackToTop />
                    <OnepageSmoothScroll />
                </div>
            </>
        </>
    )
}

export default page