import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import ProjectTwo from '../home-3/ProjectTwo'
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbTwo />
            <ProjectTwo className='pt--120'/>
            <BrandInner className='rts-section-gap' />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page