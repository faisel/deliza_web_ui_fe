import React from 'react'
import HeaderOne from '../home-1/HeaderOne'
import Breadcrumb from './Breadcrumb'
import ProgressArea from './ProgressArea'
import AppoinmentContactForm from './AppoinmentContactForm'
import TestimonialsOne from '../home-1/TestimonialsOne'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <Breadcrumb />
            <ProgressArea />
            <AppoinmentContactForm />
            <TestimonialsOne />
            <BrandInner className='rts-section-gapBottom'/>
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page