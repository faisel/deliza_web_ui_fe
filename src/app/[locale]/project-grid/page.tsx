import HeaderOne from '../../home-1/HeaderOne'
import Brands from '../../components/Brands'
import CtaInner from '../about/CtaInner'
import Footer from '../../components/Footer'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import ProjectTwo from '../home-3/ProjectTwo'
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'
import PageIntro from '../../components/PageIntro'
import PageFaq from '../../components/PageFaq'
import PageSchema from '../../components/PageSchema'
import { isValidLocale } from '@/i18n/config'

interface PageProps {
    params: Promise<{ locale: string }>
}

async function page({ params }: PageProps) {
    const { locale: rawLocale } = await params
    const locale = isValidLocale(rawLocale) ? rawLocale : 'de'

    return (
        <>
            <PageSchema nav="products" locale={locale} />
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbTwo nav="products" />
            <PageIntro nav="products" />
            <ProjectTwo className='pt--120' />
            <PageFaq nav="products" />
            <Brands className='rts-section-gap' />
            <CtaInner />
            <Footer />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page
