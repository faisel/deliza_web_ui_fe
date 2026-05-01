import React from 'react'
import BannerEight from './BannerEight'
import ServiceEight from './ServiceEight'
import HeaderFour from '../home-4/HeaderFour'
import AboutEight from './AboutEight'
import CaseStudies from './CaseStudies'
import WhyChooseUsEight from './WhyChooseUsEight'
import TestimonialsEight from './TestimonialsEight'
import HomeBlogTwo from '../home-2/HomeBlogTwo'
import BrandFive from '../home-5/BrandFive'
import NewsletterEight from './NewsletterEight'
import FooterEight from './FooterEight'

function page() {
    return (
        <>
            <HeaderFour />
            <BannerEight />
            <ServiceEight />
            <AboutEight />
            <CaseStudies />
            <WhyChooseUsEight />
            <TestimonialsEight />
            <HomeBlogTwo />
            <BrandFive className='rts-section-gapBottom' />
            <NewsletterEight />
            <FooterEight />
        </>
    )
}

export default page