import BodyClass from '../components/BodyClassTwo'
import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbTwo from '../components/PartnerBreadcrumbTwo'
import GoogleMaps from '../components/GoogleMaps'
import Brands from '../components/Brands'
import CtaInner from '../components/CtaInner'
import Footer from '../../../components/Footer'
import BackToTop from '../components/BackToTop'
import ContactMainTwo from '../components/ContactMainTwo'
import PageIntro from '../components/PageIntro'
import PageFaq from '../components/PageFaq'
import PageSchema from '../components/PageSchema'
import { isValidLocale } from '@/i18n/config'
import { makeNavMetadata } from '@/lib/page-metadata'

export const generateMetadata = makeNavMetadata('contact')

interface PageProps {
    params: Promise<{ locale: string }>
}

export default async function ContactUsPage({ params }: PageProps) {
    const { locale: rawLocale } = await params
    const locale = isValidLocale(rawLocale) ? rawLocale : 'de'

    return (
        <>
            <PageSchema nav="contact" locale={locale} />
            {/* Body class assign */}
            <BodyClass className="contact-page" />
            {/* Page content */}
            <>
                <DelizaHeader logoSrc="/assets/images/logo/01.svg" />
                <PartnerBreadcrumbTwo nav="contact" />
                <PageIntro nav="contact" />
                <ContactMainTwo />
                <GoogleMaps />
                <PageFaq nav="contact" />
                <Brands className='rts-section-gap' />
                <CtaInner />
                <Footer />
                <BackToTop />
            </>
        </>
    )
}
