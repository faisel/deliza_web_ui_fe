import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'
import Brands from './Brands'
import CtaInner from './CtaInner'
import Footer from '../../components/Footer'
import RTL from './RTL'
import BackToTop from './BackToTop'
import CaseStudies from './CaseStudies'
import PageIntro from './PageIntro'
import PageFaq from './PageFaq'
import PageSchema from './PageSchema'
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
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
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
