"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import type { Locale } from "@/i18n/config";
import { BRAND_CONTACT } from "@/lib/site";

const labels: Record<Locale, {
    callUs: string;
    workWithUs: string;
    location: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    subject: string;
}> = {
    de: {
        callUs: "Anrufen",
        workWithUs: "Mit uns arbeiten",
        location: "Unser Standort",
        formTitle: "Schreiben Sie uns",
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "Ihre E-Mail-Adresse",
        messagePlaceholder: "Ihre Nachricht",
        submit: "Nachricht senden",
        subject: "Anfrage von",
    },
    en: {
        callUs: "Call us",
        workWithUs: "Work with us",
        location: "Our location",
        formTitle: "Get in touch",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email address",
        messagePlaceholder: "Your message",
        submit: "Send message",
        subject: "Enquiry from",
    },
    fr: {
        callUs: "Nous appeler",
        workWithUs: "Travailler avec nous",
        location: "Notre adresse",
        formTitle: "Écrivez-nous",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre adresse e-mail",
        messagePlaceholder: "Votre message",
        submit: "Envoyer le message",
        subject: "Demande de",
    },
    it: {
        callUs: "Chiamaci",
        workWithUs: "Lavora con noi",
        location: "Il nostro indirizzo",
        formTitle: "Scrivici",
        namePlaceholder: "Il tuo nome",
        emailPlaceholder: "La tua e-mail",
        messagePlaceholder: "Il tuo messaggio",
        submit: "Invia messaggio",
        subject: "Richiesta da",
    },
};

function ContactMainTwo() {
    const { locale } = useTranslation();
    const t = labels[locale];
    const address = `${BRAND_CONTACT.street}, ${BRAND_CONTACT.postalCode} ${BRAND_CONTACT.city}`;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Static export safe — open user's email client with prefilled fields.
        e.preventDefault();
        const subject = encodeURIComponent(`${t.subject} ${name}`.trim());
        const body = encodeURIComponent(
            `${message}\n\n— ${name}\n${email}`
        );
        window.location.href = `mailto:${BRAND_CONTACT.email}?subject=${subject}&body=${body}`;
    };

    return (
        <>
            {/* contact areas main */}
            <div
                className="rts-contact-area-in-page"
                data-animation="fadeInUp"
                data-delay="0.2"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-info-area-wrapper-p new">
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone-flip" aria-hidden="true" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span>{t.callUs}</span>
                                        <a href={`tel:${BRAND_CONTACT.phoneTel}`}>
                                            {BRAND_CONTACT.phoneE164}
                                        </a>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope" aria-hidden="true" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span>{t.workWithUs}</span>
                                        <a href={`mailto:${BRAND_CONTACT.email}`}>
                                            {BRAND_CONTACT.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot" aria-hidden="true" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span>{t.location}</span>
                                        <address>
                                            {address}, {BRAND_CONTACT.countryName}
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-p new">
                                <form
                                    className="form__content"
                                    onSubmit={onSubmit}
                                    aria-label={t.formTitle}
                                    id="contact-form"
                                >
                                    <h2 className="title">{t.formTitle}</h2>
                                    <label htmlFor="contact-name" className="visually-hidden">
                                        {t.namePlaceholder}
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder={t.namePlaceholder}
                                        autoComplete="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="contact-email" className="visually-hidden">
                                        {t.emailPlaceholder}
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        placeholder={t.emailPlaceholder}
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="contact-message" className="visually-hidden">
                                        {t.messagePlaceholder}
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        placeholder={t.messagePlaceholder}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <button className="rts-btn btn-primary" type="submit">
                                        {t.submit}
                                    </button>
                                </form>
                                <div id="form-messages" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact areas main end */}
        </>
    );
}

export default ContactMainTwo;
