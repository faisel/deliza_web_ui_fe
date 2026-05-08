import DelizaHeader from "@/app/components/DelizaHeader";
import Brands from '../../components/Brands'
import CtaInner from '../about/CtaInner'
import Footer from '../../components/Footer'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import BreadcrumbService from '../service-details/BreadcrumbService'
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
            <PageSchema nav="investment" locale={locale} />
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
            <BreadcrumbService nav="investment" />
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

export default page
