import BackToTop from '../home-1/BackToTop'
import RTL from '../home-1/RTL'
import AboutTwo from '../home-2/AboutTwo'
import BannerTwo from '../home-2/BannerTwo'
import BodyClass from '../home-2/BodyClassTwo'
import BusinessConsultantOne from '../home-2/BusinessConsultantOne'
import BusinessGoalTwo from '../home-2/BusinessGoalTwo'
import CopyrightOne from '../home-2/CopyrightOne'
import CounterUpTwo from '../home-2/CounterUpTwo'
import CtaTwo from '../home-2/CtaTwo'
import FooterTwo from '../home-2/FooterTwo'
import HomeBlogTwo from '../home-2/HomeBlogTwo'
import PricingOne from '../home-2/PricingOne'
import ServicesTwo from '../home-2/ServicesTwo'
import TeamTwo from '../home-2/TeamTwo'
import WorkingProcessOne from '../home-2/WorkingProcessOne'
import ProjectTwo from '../home-3/ProjectTwo'
import OnepageHeaderOne from '../onepage-one/OnepageHeaderOne'
import OnepageSmoothScroll from '../onepage-one/OnepageSmoothScroll'

export default function OnepageTwo() {
  return (
    <>
      {/* Body class assign */}
      <BodyClass className="overflow-x-visible onepage" />

      {/* Page content */}
      <>
        <OnepageHeaderOne logoSrc="/assets/images/logo/01.svg"/>
        <BannerTwo id='home'/>
        <AboutTwo id='about'/>
        <ServicesTwo id='service' className='rts-section-gapBottom' />
        <BusinessConsultantOne />
        <CounterUpTwo />
        <WorkingProcessOne />
        <ProjectTwo id='project' className='rts-section-gap'/>
        <TeamTwo className='rts-section-gapBottom'/>
        <BusinessGoalTwo />
        <PricingOne />
        <HomeBlogTwo id='blog'/>
        <CtaTwo className='rts-section-gapBottom'/>
        <FooterTwo id='contact'/>
        <CopyrightOne />
        <RTL />
        <BackToTop />
        <OnepageSmoothScroll />
      </>
    </>
  )
}