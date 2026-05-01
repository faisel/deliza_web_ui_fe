import React from 'react'
import BannerSeven from './BannerSeven'
import AboutSeven from './AboutSeven'
import CtaSeven from './CtaSeven'
import ServicesTwo from '../home-2/ServicesTwo'
import BodyClass from '../home-2/BodyClassTwo'
import WorkingProcess from './WorkingProcess'
import HeaderSix from './HeaderSix'
import ProjectSeven from './ProjectSeven'
import BrandFive from '../home-5/BrandFive'
import PricingOne from '../home-2/PricingOne'
import TestimonialsSeven from './TestimonialsSeven'
import AppointmentTwo from './AppointmentTwo'
import HomeBlogOne from '../home-1/HomeBlogOne'
import CtaTwo from '../home-2/CtaTwo'
import FooterTwo from '../home-2/FooterTwo'

export default function Page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="overflow-x-visible" />

            {/* Page content */}
            <>
                <HeaderSix />
                <div className='page-wrapper radious-none-button'>
                    <BannerSeven />
                    <AboutSeven />
                    <CtaSeven />
                    <ServicesTwo className='rts-section-gap' />
                    <WorkingProcess />
                    <ProjectSeven />
                    <BrandFive />
                    <PricingOne />
                    <TestimonialsSeven />
                    <AppointmentTwo />
                    <HomeBlogOne className='rts-section-gap'/>
                    <CtaTwo className='rts-section-gapBottom'/>
                    <FooterTwo />
                </div>
            </>
        </>
    )
}
