import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'
import Brands from '@/app/components/Brands'
import CtaInner from '../about/CtaInner'
import Footer from '@/app/components/Footer'
import RTL from '@/app/home-1/RTL'
import BackToTop from '@/app/home-1/BackToTop'
import PageIntro from '@/app/components/PageIntro'
import PageFaq from '@/app/components/PageFaq'
import PageSchema from '@/app/components/PageSchema'
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
            <RTL />
            <BackToTop />
        </>
    )
}
