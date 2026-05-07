import HeaderOne from '@/app/home-1/HeaderOne'
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'
import Brands from '@/app/components/Brands'
import CtaInner from '../about/CtaInner'
import Footer from '@/app/components/Footer'
import RTL from '@/app/home-1/RTL'
import BackToTop from '@/app/home-1/BackToTop'
import CaseStudies from '../home-8/CaseStudies'
import PageIntro from '@/app/components/PageIntro'
import PageFaq from '@/app/components/PageFaq'
import PageSchema from '@/app/components/PageSchema'
import { isValidLocale } from '@/i18n/config'
import { makeNavMetadata } from '@/lib/page-metadata'

export const generateMetadata = makeNavMetadata('brands')

interface PageProps {
    params: Promise<{ locale: string }>
}

export default async function BrandsPage({ params }: PageProps) {
    const { locale: rawLocale } = await params
    const locale = isValidLocale(rawLocale) ? rawLocale : 'de'

    return (
        <>
            <PageSchema nav="brands" locale={locale} />
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbTwo nav="brands" />
            <PageIntro nav="brands" />
            <CaseStudies />
            <PageFaq nav="brands" />
            <Brands className='rts-section-gapBottom' />
            <CtaInner />
            <Footer />
            <RTL />
            <BackToTop />
        </>
    )
}
