import React from 'react'
import HeaderOne from '../../home-1/HeaderOne'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'
import LargeImage from './LargeImage'
import Brands from '../../components/Brands'
import CtaInner from './CtaInner'
import Footer from '../../components/Footer'
import PageIntro from '../../components/PageIntro'
import PageFaq from '../../components/PageFaq'
import PageSchema from '../../components/PageSchema'
import { isValidLocale } from '@/i18n/config'
import { makeNavMetadata } from '@/lib/page-metadata'

export const generateMetadata = makeNavMetadata('about')

interface PageProps {
    params: Promise<{ locale: string }>
}

async function page({ params }: PageProps) {
    const { locale: rawLocale } = await params
    const locale = isValidLocale(rawLocale) ? rawLocale : 'de'

    return (
        <>
            <PageSchema nav="about" locale={locale} />
            <HeaderOne logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbTwo nav="about" />
            <LargeImage />
            <PageIntro nav="about" />
            <Brands />
            <PageFaq nav="about" />
            <CtaInner />
            <Footer />
            <RTL />
            <BackToTop />
        </>
    )
}

export default page
