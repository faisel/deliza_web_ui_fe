import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import Breadcrumb from './Breadcrumb'
import CompanyHistory from './CompanyHistory'
import TestimonialsSeven from '../home-7/TestimonialsSeven'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
            <Breadcrumb />
            <CompanyHistory />
            <TestimonialsSeven />
            <BrandInner className='rts-section-gapBottom'/>
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page