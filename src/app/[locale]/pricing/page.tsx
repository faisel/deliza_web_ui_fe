import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import PricingBreadcrumb from './PricingBreadcrumb'
import PricingInnerMain from './PricingInnerMain'
import FaqInner from '../service/FaqInner'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
            <PricingBreadcrumb />
            <PricingInnerMain />
            <FaqInner />
            <BrandInner className='rts-section-gapBottom'/>
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page