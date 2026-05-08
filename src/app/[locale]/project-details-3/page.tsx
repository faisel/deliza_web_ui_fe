import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbThree from '../project-details/PartnerBreadcrumbThree'
import ProjectDetailsMain from '../project-details/ProjectDetailsMain'
import ProjectOne from '../../home-1/ProjectOne'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
    return (
        <>
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbThree />
            <ProjectDetailsMain />
            <ProjectOne />
            <FooterTen />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page