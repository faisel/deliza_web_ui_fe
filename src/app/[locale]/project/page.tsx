import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import Breadcrumb from './Breadcrumb'
import ProjectImage from './ProjectImage'
import ProjectInner from './ProjectInner'
import BrandInner from '../service/BrandInner'
import CtaInner from '../about/CtaInner'
import FooterTen from '../home-10/FooterTen'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

function page() {
  return (
    <>
      <HeaderOne logoSrc="/assets/images/logo/01.svg" />
      <Breadcrumb />
      <ProjectImage />
      <ProjectInner />
      <BrandInner className='rts-section-gapBottom'/>
      <CtaInner />
      <FooterTen />
      <RTL />
      <BackToTop />
    </>
  )
}

export default page