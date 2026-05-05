import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import PartnerBreadcrumb from '../project-slider/PartnerBreadcrumb'
import Brands from '../../components/Brands'
import CtaInner from '../about/CtaInner'
import Footer from '../../components/Footer'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import CaseStudies from '../home-8/CaseStudies'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumb />
            <CaseStudies />
            <Brands className='rts-section-gapBottom' />
            <CtaInner />
            <Footer />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page