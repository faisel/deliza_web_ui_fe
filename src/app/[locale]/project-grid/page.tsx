import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import Brands from '../../components/Brands'
import CtaInner from '../about/CtaInner'
import Footer from '../../components/Footer'
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
            <Brands className='rts-section-gap' />
            <CtaInner />
            <Footer />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page