import React from 'react'
import BannerFive from './BannerFive'
import BodyClass from '../home-2/BodyClassTwo'
import ServicesFive from './ServicesFive'
import CtaFive from './CtaFive'
import ProgressFive from './ProgressFive'
import AboutFive from './AboutFive'
import TeamFive from './TeamFive'
import BusinessGrowth from './BusinessGrowth'
import BrandFive from './BrandFive'
import ProjectFive from './ProjectFive'
import TestimonialsFive from './TestimonialsFive'
import HomeBlogThree from '../home-3/HomeBlogThree'
import CtaTwo from '../home-2/CtaTwo'
import FooterTwo from '../home-2/FooterTwo'
import CopyrightOne from '../home-2/CopyrightOne'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'
import HeaderFive from './HeaderFive'

function page() {
    return (
        <>
            {/* Body class assign */}
              <BodyClass className="index-five" />
            {/* Page content */}
            <>
                <HeaderFive />
                <BannerFive />
                <ServicesFive />
                <CtaFive />
                <ProgressFive className='rts-section-gap' />
                <AboutFive />
                <TeamFive />
                <BusinessGrowth />
                <BrandFive className='rts-section-gapBottom' />
                <ProjectFive />
                <TestimonialsFive />
                <HomeBlogThree />
                <CtaTwo className='rts-section-gap' />
                <FooterTwo />
                <CopyrightOne />
                <RTL />
                <BackToTop />
            </>
        </>
    )
}

export default page