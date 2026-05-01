import React from 'react'
import BodyClass from '../home-2/BodyClassTwo'
import CopyrightOne from '../home-2/CopyrightOne'
import HeaderOne from '../../home-1/HeaderOne'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import BannerThree from '../home-3/BannerThree'
import ServiceThree from '../home-3/ServiceThree'
import CtaThree from '../home-3/CtaThree'
import AboutThree from '../home-3/AboutThree'
import WorkingProcessTwo from '../home-3/WorkingProcessTwo'
import WhyChooseUsOne from '../home-3/WhyChooseUsOne'
import ProjectTwo from '../home-3/ProjectTwo'
import TestimonialsTwo from '../home-3/TestimonialsTwo'
import PricingTwo from '../home-3/PricingTwo'
import BrandTwo from '../home-3/BrandTwo'
import HomeBlogThree from '../home-3/HomeBlogThree'
import FooterThree from '../home-3/FooterThree'
import OnepageHeaderOne from '../onepage-one/OnepageHeaderOne'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'

function page() {
    return (
        <>
            {/* Body class assign */}
              <BodyClass className="onepage" />
              {/* Page content */}
            <>
                <OnepageHeaderOne logoSrc="/assets/images/logo/01.svg"/>
                <BannerThree id='home'/>
                <AboutThree id='about'/>
                <CtaThree />
                <ServiceThree id='service'/>
                <WorkingProcessTwo />
                <WhyChooseUsOne />
                <ProjectTwo id='project'/>
                <TestimonialsTwo />
                <PricingTwo />
                <BrandTwo />
                <HomeBlogThree id='blog'/>
                <FooterThree id='contact'/>
                <CopyrightOne />
                <RTL />
                <BackToTop />
                <OnepageSmoothScroll />
            </>
        </>
    )
}

export default page