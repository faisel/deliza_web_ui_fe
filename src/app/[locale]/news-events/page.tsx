import HeaderOne from "@/app/home-1/HeaderOne";
import BreadCrumbOne from "@/app/[locale]/blog/BreadCrumbOne";
import Brands from "@/app/components/Brands";
import CtaInner from "@/app/[locale]/about/CtaInner";
import Footer from "@/app/components/Footer";
import RTL from "@/app/home-1/RTL";
import BackToTop from "@/app/home-1/BackToTop";
import NewsListInner from "./NewsListInner";
import { isValidLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const breadcrumbCopy = {
  en: {
    bgTitle: "News & Events",
    title: "News & Events",
    description:
      "The latest stories, openings, and announcements from across our portfolio.",
  },
  de: {
    bgTitle: "News & Events",
    title: "News & Events",
    description:
      "Aktuelle Geschichten, Eröffnungen und Ankündigungen aus unserem Portfolio.",
  },
  fr: {
    bgTitle: "Actualités & Événements",
    title: "Actualités & Événements",
    description:
      "Les dernières actualités, ouvertures et annonces de notre portefeuille.",
  },
  it: {
    bgTitle: "News & Eventi",
    title: "News & Eventi",
    description:
      "Le ultime storie, aperture e annunci provenienti dal nostro portafoglio.",
  },
} as const;

export default async function NewsEventsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "de";
  // Reading messages here keeps the build aware of the locale; not yet used
  // beyond ensuring the locale exists.
  void getMessages(validLocale);
  const copy = breadcrumbCopy[validLocale];

  return (
    <>
      <HeaderOne logoSrc="/assets/images/logo/01.svg" />
      <BreadCrumbOne
        bgTitle={copy.bgTitle}
        title={copy.title}
        description={copy.description}
      />
      <NewsListInner />
      <Brands className="rts-section-gapBottom" />
      <CtaInner />
      <Footer />
      <RTL />
      <BackToTop />
    </>
  );
}
