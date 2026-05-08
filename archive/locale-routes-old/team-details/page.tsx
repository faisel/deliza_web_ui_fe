import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import BreadCrumbOne from '../blog/BreadCrumbOne'
import TeamDetailsInner from './TeamDetailsInner'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <DelizaHeader logoSrc="/assets/images/logo/01.svg"/>
            <BreadCrumbOne
                bgTitle='Our Team'
                title='Team Experts'
                description='With a team of experienced professionals and a passion for innovation, we combine <br> cutting-edge strategies'
            />
            <TeamDetailsInner />
            <BrandInner className='rts-section-gapBottom'/>
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page