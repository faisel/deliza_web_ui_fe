import React from 'react'
import HeaderOne from '../home-1/HeaderOne'
import FooterTen from '../home-10/FooterTen'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'
import BreadcrumbThree from './BreadcrumbThree'
import ServiceInner from './ServiceInner'
import WorkingProcess from '../home-7/WorkingProcess'
import FaqInner from './FaqInner'
import BrandInner from './BrandInner'
import CtaInner from '../about/CtaInner'
import TestimonialsInner from './TestimonialsInner'

function page() {
  return (
    <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <BreadcrumbThree 
                preTitle='Our Service'
                bgTitle='Our Service'
                title='Service We Provide'
            />
            <ServiceInner />
            <WorkingProcess />
            <FaqInner />
            <BrandInner />
            <TestimonialsInner />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
  )
}

export default page