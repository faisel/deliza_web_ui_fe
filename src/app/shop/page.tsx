import React from 'react'
import HeaderOne from '../home-1/HeaderOne'
import ShopBreadcrumb from './ShopBreadcrumb'
import ShopMain from './ShopMain'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <ShopBreadcrumb />
            <ShopMain />
            <BrandInner className='rts-section-gap'/>
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page