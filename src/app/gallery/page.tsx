import React from 'react'
import HeaderOne from '../home-1/HeaderOne'
import GalleryBreadcrumb from './GalleryBreadcrumb'
import GalleryInner from './GalleryInner'
import CtaInner from '../about/CtaInner'
import RTL from '../home-1/RTL'
import FooterTen from '../home-10/FooterTen'
import BackToTop from '../home-1/BackToTop'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <GalleryBreadcrumb />
            <GalleryInner />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page