import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import PartnerBreadcrumbTwo from '../project-grid/PartnerBreadcrumbTwo'
import ProjectTwo from '../home-3/ProjectTwo'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import ProjectSix from '../home-6/ProjectSix'
import ProjectGridThree from './ProjectGridThree'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbTwo />
            <ProjectGridThree className='pt--120'/>
            <BrandInner className='rts-section-gapBottom' />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page