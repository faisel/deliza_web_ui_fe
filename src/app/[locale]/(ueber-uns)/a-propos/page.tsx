import React from 'react'
import DelizaHeader from "@/app/components/DelizaHeader";
import BackToTop from '../components/BackToTop'
import PartnerBreadcrumbTwo from '../components/PartnerBreadcrumbTwo'
import LargeImage from '../components/LargeImage'
import Brands from '../components/Brands'
import CtaInner from '../components/CtaInner'
import Footer from '../../../components/Footer'
import PageIntro from '../components/PageIntro'
import PageFaq from '../components/PageFaq'
import PageSchema from '../components/PageSchema'
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
            <Footer />
            <BackToTop />
        </>
    )
}

export default page
