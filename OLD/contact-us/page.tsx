import BodyClass from './BodyClassTwo'
import DelizaHeader from "@/app/components/DelizaHeader";
import PartnerBreadcrumbTwo from './PartnerBreadcrumbTwo'
import GoogleMaps from './GoogleMaps'
import Brands from './Brands'
import CtaInner from './CtaInner'
import Footer from '../../components/Footer'
import BackToTop from './BackToTop'
import ContactMainTwo from './ContactMainTwo'
import PageIntro from './PageIntro'
import PageFaq from './PageFaq'
import PageSchema from './PageSchema'
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
