import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import Brands from '../../components/Brands'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import BreadcrumbService from '../service-details/BreadcrumbService'
import ServiceDetailsInner from '../service-details/ServiceDetailsInner'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <BreadcrumbService />
            <ServiceDetailsInner />
            <Brands />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page