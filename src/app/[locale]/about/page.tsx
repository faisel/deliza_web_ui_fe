import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import FooterOne from '../../home-1/FooterOne'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import BreadcrumbTwo from './BreadcrumbTwo'
import LargeImage from './LargeImage'
import AboutOne from '../../home-1/AboutOne'
import TeamOne from '../../home-1/TeamOne'
import BusinessGoalOne from '../../home-1/BusinessGoalOne'
import TestimonialsOne from '../../home-1/TestimonialsOne'
import BrandOne from '../../home-1/BrandOne'
import CtaInner from './CtaInner'
import FooterTen from '../home-10/FooterTen'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <BreadcrumbTwo 
                preTitle='About Deliza'
                bgTitle='About Us'
                title='Smart and effective <br/> business agency.'
            />
            <LargeImage />
            <AboutOne />
            <TeamOne />
            <BusinessGoalOne className='rts-section-gapBottom'/>
            <TestimonialsOne />
            <BrandOne />
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page