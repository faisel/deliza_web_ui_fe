import React from 'react'
import BodyClass from '../home-2/BodyClassTwo'
import HeaderOne from '../../home-1/HeaderOne'
import Banner from '../../components/Banner'
import GoogleMaps from '../../components/GoogleMaps'
import Brands from '../../components/Brands'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import ContactMainTwo from '../../components/ContactMainTwo'

function page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="contact-page" />
            {/* Page content */}
            <>
                <HeaderOne logoSrc="/assets/images/logo/01.svg" />
                <Banner />
                <ContactMainTwo />
                <GoogleMaps />
                <Brands className='rts-section-gap' />
                <CtaInner />
                <FooterTen />
                <RTL />
                <BackToTop />
            </>
        </>
    )
}

export default page