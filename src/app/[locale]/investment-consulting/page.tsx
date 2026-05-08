import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'
import Brands from './Brands'
import CtaInner from './CtaInner'
import Footer from '../../components/Footer'
import BackToTop from './BackToTop'
import PageIntro from './PageIntro'
import PageFaq from './PageFaq'
import PageSchema from './PageSchema'
import { isValidLocale } from '@/i18n/config'
import { makeNavMetadata } from '@/lib/page-metadata'

export const generateMetadata = makeNavMetadata('investment')

interface PageProps {
    params: Promise<{ locale: string }>
}

export default async function InvestmentConsultingPage({ params }: PageProps) {
    const { locale: rawLocale } = await params
    const locale = isValidLocale(rawLocale) ? rawLocale : 'de'

    return (
        <>
            <PageSchema nav="investment" locale={locale} />
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbTwo nav="investment" />
            <PageIntro nav="investment" />
            <PageFaq nav="investment" />
            <Brands />
            <CtaInner />
            <Footer />
            <BackToTop />
        </>
    )
}
