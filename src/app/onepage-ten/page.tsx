import React from 'react'
import BannerTen from '../home-10/BannerTen'
import ServicesTen from '../home-10/ServicesTen'
import BrandFive from '../home-5/BrandFive'
import AboutTen from '../home-10/AboutTen'
import ProgressFive from '../home-5/ProgressFive'
import CaseStudiesTen from '../home-10/CaseStudiesTen'
import PricingTen from '../home-10/PricingTen'
import TeamTwo from '../home-2/TeamTwo'
import TestimonialsFive from '../home-5/TestimonialsFive'
import HomeBlogThree from '../home-3/HomeBlogThree'
import CtaTen from '../home-10/CtaTen'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'
import OnepageHeaderOne from '../onepage-one/OnepageHeaderOne'
import BodyClass from '../home-2/BodyClassTwo'
import FooterTen from '../home-10/FooterTen'

function page() {
    return (
        <>

            {/* Body class assign */}
            <BodyClass className="onepage" />
            {/* Page content */}
            <>
                <OnepageHeaderOne
                    className='style-four top-transparent-header'
                    logoSrc="/assets/images/logo/01.svg"
                />
                <BannerTen id='home'/>
                <AboutTen id='about'/>
                <BrandFive className='rts-section-gapBottom' />
                <ServicesTen id='service'/>
                <ProgressFive className='rts-section-gapBottom' />
                <CaseStudiesTen id='project'/>
                <PricingTen />
                <TeamTwo className='rts-section-gapBottom' />
                <TestimonialsFive />
                <HomeBlogThree id='home'/>
                <CtaTen />
                <FooterTen id='contact'/>
                <RTL />
                <BackToTop />
                <OnepageSmoothScroll />
            </>
        </>
    )
}

export default page