import React from 'react'
import HeaderOne from '../home-1/HeaderOne'
import BreadcrumbTwo from '../components/BreadcrumbTwo'
import FaqInner from './FaqInner'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <BreadcrumbTwo />
            <FaqInner />
            <BrandInner className='rts-section-gap' />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page