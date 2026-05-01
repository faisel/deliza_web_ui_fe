import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import ProjectOne from '../../home-1/ProjectOne'
import PartnerBreadcrumbThree from '../project-details/PartnerBreadcrumbThree'
import ProjectDetailsMainThree from '../project-details-large-image/ProjectDetailsMainThree'

function page() {
    return (
        <>
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbThree />
            <ProjectDetailsMainThree />
            <ProjectOne />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page