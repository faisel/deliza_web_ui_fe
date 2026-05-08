"use client";

import { useTranslation } from "@/i18n/useTranslation";
import type { Locale } from "@/i18n/config";

const copy: Record<Locale, {
    eyebrow: string;
    titleLeft: string;
    titleRight: string;
    placeholder: string;
    button: string;
}> = {
    de: {
        eyebrow: "Newsletter abonnieren",
        titleLeft: "Bleiben Sie informiert",
        titleRight: "über Neuigkeiten von Deliza",
        placeholder: "E-Mail-Adresse eingeben",
        button: "Jetzt abonnieren",
    },
    en: {
        eyebrow: "Subscribe to our newsletter",
        titleLeft: "Stay updated with",
        titleRight: "the latest news from Deliza",
        placeholder: "Enter your email address",
        button: "Subscribe now",
    },
    fr: {
        eyebrow: "Abonnez-vous à la newsletter",
        titleLeft: "Restez informé",
        titleRight: "des dernières actualités Deliza",
        placeholder: "Entrez votre adresse e-mail",
        button: "S'abonner",
    },
    it: {
        eyebrow: "Iscriviti alla newsletter",
        titleLeft: "Resta aggiornato",
        titleRight: "sulle novità di Deliza",
        placeholder: "Inserisci la tua e-mail",
        button: "Iscriviti ora",
    },
};

function CtaInner() {
    const { locale } = useTranslation();
    const c = copy[locale];

    return (
        <>
            {/* rts cta area start */}
            <div className="rts-cta-area-inner bg_image ptb--100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-inner-content-inner-page">
                                <div className="left-side-content">
                                    <span>{c.eyebrow}</span>
                                    <h2 className="title">
                                        {c.titleLeft} <br /> {c.titleRight}!
                                    </h2>
                                </div>
                                <form action="#" aria-label={c.eyebrow}>
                                    <label
                                        htmlFor="cta-newsletter-email"
                                        className="visually-hidden"
                                    >
                                        {c.placeholder}
                                    </label>
                                    <input
                                        id="cta-newsletter-email"
                                        name="email"
                                        type="email"
                                        placeholder={c.placeholder}
                                        autoComplete="email"
                                    />
                                    <button
                                        className="rts-btn btn-primary btn-white"
                                        type="submit"
                                    >
                                        {c.button}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts cta area end */}
        </>
    );
}

export default CtaInner;
