import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import CareerBreadcrumb from './CareerBreadcrumb'
import CareerLargeImage from './CareerLargeImage'
import CareerGallery from './CareerGallery'
import CurrentOpening from './CurrentOpening'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <CareerBreadcrumb />
            <CareerLargeImage />
            <CareerGallery />
            <CurrentOpening />
            <BrandInner className='rts-section-gap'/>
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page