import BodyClass from './BodyClassTwo'
import HeaderOne from '../../home-1/HeaderOne'
import BannerTwo from './BannerTwo'
import AboutTen from './AboutTen'
import ServicesTwo from './ServicesTwo'
import BusinessConsultantOne from './BusinessConsultantOne'
import CounterUpTwo from './CounterUpTwo'
import BusinessGoalTwo from './BusinessGoalTwo'
import HomeBlogTwo from './HomeBlogTwo'
import CtaTwo from './CtaTwo'
import Brands from '../../components/Brands'
import DelizaBanner from '../../components/DelizaBanner'
import DelizaServices from '../../components/DelizaServices'
import DelizaDigital from '../../components/DelizaDigital'
import DelizaInvestments from '../../components/DelizaInvestments'
import DelizaCta from '../../components/DelizaCta'
import DelizaNews from '../../components/DelizaNews'
import DelizaTestimonials from '../../components/DelizaTestimonials'
import Footer from '../../components/Footer'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import PageIntro from '../../components/PageIntro'
import PageFaq from '../../components/PageFaq'
import PageSchema from '../../components/PageSchema'
import { isValidLocale } from '@/i18n/config'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params
  const locale = isValidLocale(rawLocale) ? rawLocale : 'de'

  return (
    <>
      <PageSchema nav="home" locale={locale} />
      {/* Body class assign */}
      <BodyClass className="overflow-x-visible home-page" />

      {/* Page content */}
      <>

        <HeaderOne logoSrc="/assets/images/logo/01.svg" />

        <DelizaBanner />

        <AboutTen />

        <Brands className="home-section" />

        <DelizaServices />
        <DelizaDigital />
        <DelizaInvestments />

        <DelizaNews />
        <DelizaTestimonials />

        <PageFaq nav="home" className="home-section" />

        <Footer />
        <RTL />
        <BackToTop />
      </>
    </>
  )
}
