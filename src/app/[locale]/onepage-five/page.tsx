import React from 'react'
import BodyClass from '../home-2/BodyClassTwo'
import OnepageHeaderFive from './OnepageHeaderFive'
import BannerFive from '../home-5/BannerFive'
import ServicesFive from '../home-5/ServicesFive'
import CtaFive from '../home-5/CtaFive'
import ProgressFive from '../home-5/ProgressFive'
import AboutFive from '../home-5/AboutFive'
import TeamFive from '../home-5/TeamFive'
import BusinessGrowth from '../home-5/BusinessGrowth'
import BrandFive from '../home-5/BrandFive'
import ProjectFive from '../home-5/ProjectFive'
import TestimonialsFive from '../home-5/TestimonialsFive'
import HomeBlogThree from '../home-3/HomeBlogThree'
import CtaTwo from '../home-2/CtaTwo'
import FooterTwo from '../home-2/FooterTwo'
import CopyrightOne from '../home-2/CopyrightOne'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'


function page() {
    return (
        <>
            {/* Body class assign */}
              <BodyClass className="onepage" />
            {/* Page content */}
            <>
                <OnepageHeaderFive />
                <BannerFive id='home'/>
                <ServicesFive id='service'/>
                <CtaFive />
                <ProgressFive />
                <AboutFive id='about'/>
                <TeamFive />
                <BusinessGrowth />
                <BrandFive className='rts-section-gapBottom' />
                <ProjectFive id='project'/>
                <TestimonialsFive />
                <HomeBlogThree id='blog'/>
                <CtaTwo className='rts-section-gap' />
                <FooterTwo id='contact'/>
                <CopyrightOne />
                <RTL />
                <BackToTop />
                <OnepageSmoothScroll />
            </>
        </>
    )
}

export default page