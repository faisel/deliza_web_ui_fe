import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import MissionBreadcrumb from './MissionBreadcrumb'
import MissionImagePage from './MissionImagePage'
import CounterUpTwo from '../home-2/CounterUpTwo'
import BusinessGoalOne from '../../home-1/BusinessGoalOne'
import TeamOne from '../../home-1/TeamOne'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
            <MissionBreadcrumb />
            <MissionImagePage />
            <CounterUpTwo />
            <BusinessGoalOne />
            <TeamOne className='pt--120'/>
            <BrandInner className='rts-section-gapBottom'/>
            <CtaInner />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page