import React from "react";
import type { Locale } from "@/i18n/config";

interface Section {
  heading: string;
  body: string[];
}

interface Copy {
  intro: string;
  sections: Section[];
}

const copy: Record<Locale, Copy> = {
  de: {
    intro:
      "Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und behandeln Ihre Daten vertraulich sowie entsprechend der gesetzlichen Datenschutzvorschriften und dieser Datenschutzerklärung.",
    sections: [
      {
        heading: "Verantwortlicher",
        body: [
          "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
          "Deliza GmbH, Musterstrasse 1, 8000 Zürich, Schweiz",
          "E-Mail: info@deliza.com",
        ],
      },
      {
        heading: "Erhobene Daten",
        body: [
          "Bei der Nutzung dieser Website werden allgemeine Informationen automatisch erfasst (z. B. IP-Adresse, Browsertyp, Zugriffszeit). Diese Daten werden ausschliesslich zur Verbesserung des Angebots verwendet und lassen keinen Rückschluss auf Ihre Person zu.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern. Sie können das Setzen von Cookies in Ihrem Browser jederzeit deaktivieren.",
        ],
      },
      {
        heading: "Ihre Rechte",
        body: [
          "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Wenden Sie sich hierfür an die oben genannte Kontaktadresse.",
        ],
      },
      {
        heading: "Kontakt",
        body: [
          "Bei Fragen zum Datenschutz erreichen Sie uns unter info@deliza.com.",
        ],
      },
    ],
  },
  en: {
    intro:
      "We take the protection of your personal data seriously. We treat your data confidentially and in accordance with the statutory data protection regulations and this privacy policy.",
    sections: [
      {
        heading: "Controller",
        body: [
          "The controller responsible for data processing on this website is:",
          "Deliza GmbH, Musterstrasse 1, 8000 Zurich, Switzerland",
          "Email: info@deliza.com",
        ],
      },
      {
        heading: "Data we collect",
        body: [
          "When you use this website, general information is automatically collected (such as IP address, browser type and access time). This data is used solely to improve our services and does not allow any conclusions to be drawn about you personally.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "This website uses cookies to improve the user experience. You can disable the use of cookies in your browser at any time.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You have the right to access, correct, delete and restrict the processing of your data at any time. Please contact us at the address above to exercise these rights.",
        ],
      },
      {
        heading: "Contact",
        body: ["For privacy-related questions you can reach us at info@deliza.com."],
      },
    ],
  },
  fr: {
    intro:
      "Nous prenons la protection de vos données personnelles au sérieux et traitons vos données de manière confidentielle, conformément aux dispositions légales en matière de protection des données et à la présente politique de confidentialité.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: [
          "Le responsable du traitement des données sur ce site est :",
          "Deliza GmbH, Musterstrasse 1, 8000 Zurich, Suisse",
          "E-mail : info@deliza.com",
        ],
      },
      {
        heading: "Données collectées",
        body: [
          "Lors de l'utilisation de ce site, des informations générales sont automatiquement collectées (telles que l'adresse IP, le type de navigateur et l'heure d'accès). Ces données sont utilisées uniquement pour améliorer notre offre et ne permettent pas de tirer de conclusions sur votre personne.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Ce site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez désactiver l'utilisation des cookies dans votre navigateur à tout moment.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Vous avez à tout moment le droit d'accéder, de rectifier, de supprimer et de limiter le traitement de vos données. Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée ci-dessus.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Pour toute question relative à la protection des données, vous pouvez nous joindre à info@deliza.com.",
        ],
      },
    ],
  },
  it: {
    intro:
      "Prendiamo sul serio la protezione dei vostri dati personali. Trattiamo i vostri dati in modo riservato e conforme alle disposizioni di legge in materia di protezione dei dati e alla presente informativa sulla privacy.",
    sections: [
      {
        heading: "Titolare del trattamento",
        body: [
          "Il titolare del trattamento dei dati su questo sito è:",
          "Deliza GmbH, Musterstrasse 1, 8000 Zurigo, Svizzera",
          "Email: info@deliza.com",
        ],
      },
      {
        heading: "Dati raccolti",
        body: [
          "Durante l'utilizzo di questo sito vengono raccolte automaticamente informazioni generali (come indirizzo IP, tipo di browser e ora di accesso). Questi dati vengono utilizzati esclusivamente per migliorare la nostra offerta e non consentono alcuna conclusione sulla vostra persona.",
        ],
      },
      {
        heading: "Cookie",
        body: [
          "Questo sito utilizza i cookie per migliorare l'esperienza utente. È possibile disattivare l'uso dei cookie nel browser in qualsiasi momento.",
        ],
      },
      {
        heading: "I vostri diritti",
        body: [
          "Avete il diritto in qualsiasi momento di accedere, rettificare, cancellare e limitare il trattamento dei vostri dati. Per esercitare questi diritti, contattateci all'indirizzo sopra indicato.",
        ],
      },
      {
        heading: "Contatti",
        body: [
          "Per domande relative alla protezione dei dati potete contattarci all'indirizzo info@deliza.com.",
        ],
      },
    ],
  },
};

interface PrivacyPolicyInnerProps {
  locale: Locale;
}

function PrivacyPolicyInner({ locale }: PrivacyPolicyInnerProps) {
  const content = copy[locale];

  return (
    <div className="rts-faq-area rts-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="disc mb--40">{content.intro}</p>
            {content.sections.map((section) => (
              <div key={section.heading} className="mb--40">
                <h3 className="title">{section.heading}</h3>
                {section.body.map((line, i) => (
                  <p key={i} className="disc mb--10">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyInner;
