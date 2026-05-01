import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import MissionBreadcrumb from '../our-mission/MissionBreadcrumb'
import PartnerBreadcrumb from '../project-slider/PartnerBreadcrumb'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import PartnerMain from './PartnerMain'
import TestimonialsEight from '../home-8/TestimonialsEight'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumb />
            <PartnerMain />
            <TestimonialsEight className='pt--120'/>
            <BrandInner className='rts-section-gapBottom' />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page