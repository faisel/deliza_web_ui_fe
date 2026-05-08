import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import AccountBreadcrumb from './AccountBreadcrumb'
import BodyClass from '../home-2/BodyClassTwo'
import AccountInner from './AccountInner'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="account-page-body" />

            {/* Header with different logo */}
            <>
                <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
                <AccountBreadcrumb />
                <AccountInner />
                <BrandInner className='rts-section-gap'/>
                <CtaInner />
                <FooterTen />
                <RTL />
                <BackToTop />
            </>
        </>
    )
}

export default page