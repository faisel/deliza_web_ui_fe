
import React from 'react'
import HeaderOne from '../home-1/HeaderOne'
import BodyClass from '../home-2/BodyClassTwo'
import Banner from '../components/Banner'
import ContactMain from '../components/ContactMain'
import GoogleMaps from '../components/GoogleMaps'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'

function page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="contact-page" />
            {/* Page content */}
            <>
                <HeaderOne logoSrc="/assets/images/logo/01.svg" />
                <Banner />
                <ContactMain />
                <GoogleMaps />
                <BrandInner  className='rts-section-gap'/>
                <CtaInner />
                <FooterTen />
                <RTL />
                <BackToTop />
            </>
        </>
    )
}

export default page