import type { Metadata } from "next";
import { Manrope, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import "../../public/assets/css/bootstrap.min.css";
// import "../../public/assets/css/swiper.css";
import "../../public/assets/css/odometer.css";
import "../../public/assets/css/aos.css";
import "../../public/assets/css/style.css";
import "./font-overrides.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Script from "next/script";
import { defaultLocale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300"],
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "Deliza – Business Consulting",
  description: "Deliza – Business Consulting",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico", sizes: "any" },
      {
        url: "/assets/favicon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/assets/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    apple: [
      {
        url: "/assets/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/assets/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      className={`${manrope.variable} ${poppins.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
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
