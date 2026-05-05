import BodyClass from '../home-2/BodyClassTwo'
import HeaderOne from '../../home-1/HeaderOne'
import Banner from '../../components/Banner'
import GoogleMaps from '../../components/GoogleMaps'
import Brands from '../../components/Brands'
import CtaInner from '../about/CtaInner'
import Footer from '../../components/Footer'
import RTL from '../../home-1/RTL'
import BackToTop from '../../home-1/BackToTop'
import ContactMainTwo from '../../components/ContactMainTwo'
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
            <PageSchema nav="contact" locale={locale} />
            {/* Body class assign */}
            <BodyClass className="contact-page" />
            {/* Page content */}
            <>
                <HeaderOne logoSrc="/assets/images/logo/01.svg" />
                <Banner nav="contact" />
                <PageIntro nav="contact" />
                <ContactMainTwo />
                <GoogleMaps />
                <PageFaq nav="contact" />
                <Brands className='rts-section-gap' />
                <CtaInner />
                <Footer />
                <RTL />
                <BackToTop />
            </>
        </>
    )
}

export default page
