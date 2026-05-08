import React from 'react'
import BannerThree from './BannerThree'
import ServiceThree from './ServiceThree'
import CtaThree from './CtaThree'
import AboutThree from './AboutThree'
import WorkingProcessTwo from './WorkingProcessTwo'
import WhyChooseUsOne from './WhyChooseUsOne'
import ProjectTwo from './ProjectTwo'
import TestimonialsTwo from './TestimonialsTwo'
import PricingTwo from './PricingTwo'
import BrandTwo from './BrandTwo'
import HomeBlogThree from './HomeBlogThree'
import FooterThree from './FooterThree'
import CopyrightOne from '../home-2/CopyrightOne'
import DelizaHeader from "@/app/components/DelizaHeader";
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <DelizaHeader logoSrc="/assets/images/logo/01.svg"/>
            <BannerThree />
            <ServiceThree />
            <CtaThree />
            <AboutThree />
            <WorkingProcessTwo />
            <WhyChooseUsOne />
            <ProjectTwo />
            <TestimonialsTwo />
            <PricingTwo />
            <BrandTwo />
            <HomeBlogThree />
            <FooterThree />
            <CopyrightOne />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page