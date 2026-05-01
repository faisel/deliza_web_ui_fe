import React from 'react'
import HeaderOne from '../home-1/HeaderOne'
import BannerTen from './BannerTen'
import ServicesTen from './ServicesTen'
import BrandFive from '../home-5/BrandFive'
import AboutTen from './AboutTen'
import ProgressFive from '../home-5/ProgressFive'
import CaseStudiesTen from './CaseStudiesTen'
import PricingTen from './PricingTen'
import TeamTwo from '../home-2/TeamTwo'
import TestimonialsFive from '../home-5/TestimonialsFive'
import HomeBlogThree from '../home-3/HomeBlogThree'
import CtaTen from './CtaTen'

function page() {
    return (
        <>
            <>
                <HeaderOne
                    className='style-four top-transparent-header'
                    logoSrc="/assets/images/logo/01.svg"
                />
                <BannerTen />
                <ServicesTen />
                <BrandFive className='rts-section-gapBottom' />
                <AboutTen />
                <ProgressFive className='rts-section-gapBottom' />
                <CaseStudiesTen />
                <PricingTen />
                <TeamTwo className='rts-section-gapBottom' />
                <TestimonialsFive />
                <HomeBlogThree />
                <CtaTen />
            </>
        </>
    )
}

export default page