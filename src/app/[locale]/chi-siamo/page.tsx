import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import BackToTop from './BackToTop'
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'
import LargeImage from './LargeImage'
import Brands from './Brands'
import CtaInner from './CtaInner'
import Footer from '../../components/Footer'
import PageIntro from './PageIntro'
import PageFaq from './PageFaq'
import PageSchema from './PageSchema'
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
            <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
            <PartnerBreadcrumbTwo nav="about" />
            <LargeImage />
            <PageIntro nav="about" />
            <Brands />
            <PageFaq nav="about" />
            <CtaInner />
            <Footer />
            <BackToTop />
        </>
    )
}

export default page
