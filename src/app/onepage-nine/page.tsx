import React from 'react'
import BodyClass from '../home-2/BodyClassTwo'
import BannerNine from '../home-9/BannerNine'
import ServicesNine from '../home-9/ServicesNine'
import BrandNine from '../home-9/BrandNine'
import ServicesBottom from '../home-9/ServicesBottom'
import WhyChooseUsNine from '../home-9/WhyChooseUsNine'
import TeamNine from '../home-9/TeamNine'
import FunFactNine from '../home-9/FunFactNine'
import TestimonialsNine from '../home-9/TestimonialsNine'
import AppointmentNine from '../home-9/AppointmentNine'
import HomeBlogNine from '../home-9/HomeBlogNine'
import CtaTwo from '../home-2/CtaTwo'
import FooterNine from '../home-9/FooterNine'
import RTL from '../home-1/RTL'
import BackToTop from '../home-1/BackToTop'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'
import OnepageHeaderOne from '../onepage-one/OnepageHeaderOne'
import ProjectTwo from '../home-3/ProjectTwo'

function page() {
    return (
        <>
            {/* Body class assign */}
            <BodyClass className="primary-sky onepage" />
            {/* Page content */}
            <>
                <OnepageHeaderOne 
                    logoSrc="/assets/images/logo/04.svg"
                    className='style-four top-transparent-header' 
                />
                <BannerNine id='home'/>
                <ServicesNine />
                <BrandNine />
                <ServicesBottom id='service'/>
                <ProjectTwo id='project' className='rts-section-gap'/>
                <WhyChooseUsNine id='about'/>
                <TeamNine />
                <FunFactNine />
                <TestimonialsNine />
                <AppointmentNine />
                <HomeBlogNine id='blog'/>
                <CtaTwo className='rts-section-gapBottom' />
                <FooterNine id='contact'/>
                <RTL />
                <BackToTop />
                <OnepageSmoothScroll />
            </>
        </>
    )
}

export default page