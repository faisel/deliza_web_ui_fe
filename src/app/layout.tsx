import type { Metadata } from "next";
import "./globals.css";
import "../../public/assets/css/bootstrap.min.css";
// import "../../public/assets/css/swiper.css";
import "../../public/assets/css/odometer.css";
import "../../public/assets/css/aos.css";
import "../../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Script from "next/script";
import { defaultLocale, locales } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";

const setLangFromUrl = `(function(){try{var s=location.pathname.split('/').filter(Boolean)[0];if([${locales
  .map((l) => `'${l}'`)
  .join(",")}].indexOf(s)>-1){document.documentElement.lang=s;}}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Deliza – Business Consulting",
  description: "Deliza – Business Consulting",
  icons: {
    icon: [
      {
        url: "/assets/images/fav.png",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setLangFromUrl }} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <I18nProvider locale={defaultLocale}>{children}</I18nProvider>
        <Script src="/assets/js/smooth-scroll.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
