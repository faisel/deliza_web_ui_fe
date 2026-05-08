import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import BreadCrumbOne from './BreadCrumbOne'
import BlogGridInner from './BlogInner'
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
          bgTitle='Latest Post'
          title='Latest Posts'
          description='With a team of experienced professionals and a passion for innovation, we combine cutting-edge strategies'
        />

        <BlogGridInner />
        <BrandInner className='rts-section-gapBottom'/>
        <CtaInner />
        <FooterTen />
        <RTL />
        <BackToTop />
    </>
  )
}

export default page