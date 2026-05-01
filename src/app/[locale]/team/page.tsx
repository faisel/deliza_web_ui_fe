import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import BreadCrumbOne from '../blog/BreadCrumbOne'
import TeamInner from './TeamInner'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <BreadCrumbOne
                bgTitle='Our Team'
                title='Team Experts'
                description='With a team of experienced professionals and a passion for innovation, we combine <br> cutting-edge strategies'
            />
            <TeamInner />
            <BrandInner className='rts-section-gapBottom'/>
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page