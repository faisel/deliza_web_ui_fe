import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import PartnerBreadcrumbThree from './PartnerBreadcrumbThree'
import ProjectDetailsMain from './ProjectDetailsMain'
import ProjectOne from '../../home-1/ProjectOne'
import Footer from '../../components/Footer'


function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbThree />
            <ProjectDetailsMain />

            <Footer />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page