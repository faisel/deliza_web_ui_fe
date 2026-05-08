import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumb from '../project-slider/PartnerBreadcrumb'
import ProjectFive from '../home-5/ProjectFive'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumb />
            <ProjectFive />
            <BrandInner className='rts-section-gap' />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page