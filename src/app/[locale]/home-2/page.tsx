import BodyClass from './BodyClassTwo'
import HeaderOne from '../../home-1/HeaderOne'
import BannerTwo from './BannerTwo'
import AboutTwo from './AboutTwo'
import ServicesTwo from './ServicesTwo'
import BusinessConsultantOne from './BusinessConsultantOne'
import CounterUpTwo from './CounterUpTwo'
import WorkingProcessOne from './WorkingProcessOne'
import TeamTwo from './TeamTwo'
import BusinessGoalTwo from './BusinessGoalTwo'
import PricingOne from './PricingOne'
import HomeBlogTwo from './HomeBlogTwo'
import CtaTwo from './CtaTwo'
import FooterTwo from './FooterTwo'
import CopyrightOne from './CopyrightOne'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'

export default function HomePage() {
  return (
    <>
      {/* Body class assign */}
      <BodyClass className="overflow-x-visible" />

      {/* Page content */}
      <>
        <HeaderOne logoSrc="/assets/images/logo/01.svg"/>
        <BannerTwo />
        <AboutTwo />
        <ServicesTwo className='rts-section-gapBottom' />
        <BusinessConsultantOne />
        <CounterUpTwo />
        <WorkingProcessOne />
        <TeamTwo className='rts-section-gap'/>
        <BusinessGoalTwo />
        <PricingOne />
        <HomeBlogTwo />
        <CtaTwo className='rts-section-gapBottom'/>
        <FooterTwo />
        <CopyrightOne />
        <RTL />
        <BackToTop />
      </>
    </>
  )
}