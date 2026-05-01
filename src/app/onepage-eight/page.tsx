import React from 'react'
import OnepageHeaderFour from '../onepage-four/OnepageHeaderFour'
import BannerEight from '../home-8/BannerEight'
import ServiceEight from '../home-8/ServiceEight'
import AboutEight from '../home-8/AboutEight'
import CaseStudies from '../home-4/CaseStudies'
import WhyChooseUsEight from '../home-8/WhyChooseUsEight'
import TestimonialsEight from '../home-8/TestimonialsEight'
import HomeBlogTwo from '../home-2/HomeBlogTwo'
import BrandFive from '../home-5/BrandFive'
import NewsletterEight from '../home-8/NewsletterEight'
import FooterEight from '../home-8/FooterEight'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'
import BodyClass from '../home-2/BodyClassTwo'

function page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="onepage" />
            {/* Page content */}
            <>
                <OnepageHeaderFour />
                <BannerEight id='home' />
                <ServiceEight id='service' />
                <AboutEight id='about' />
                <CaseStudies id='project' />
                <WhyChooseUsEight />
                <TestimonialsEight />
                <HomeBlogTwo id='blog' />
                <BrandFive className='rts-section-gapBottom' />
                <NewsletterEight />
                <FooterEight id='contact' />
                <RTL />
                <BackToTop />
                <OnepageSmoothScroll />
            </>
        </>
    )
}

export default page