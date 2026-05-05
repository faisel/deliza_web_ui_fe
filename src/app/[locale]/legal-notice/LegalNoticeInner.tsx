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
      "Dieses Impressum gilt für die Inhalte dieser Website. Die nachfolgenden Angaben dienen der Erfüllung der gesetzlichen Pflichten zur Anbieterkennzeichnung.",
    sections: [
      {
        heading: "Anbieter",
        body: [
          "Deliza GmbH",
          "Musterstrasse 1",
          "8000 Zürich, Schweiz",
        ],
      },
      {
        heading: "Kontakt",
        body: [
          "Telefon: +41 00 000 00 00",
          "E-Mail: info@deliza.com",
        ],
      },
      {
        heading: "Vertretungsberechtigte Person",
        body: ["Geschäftsführung: [Name der Geschäftsführung]"],
      },
      {
        heading: "Handelsregister",
        body: [
          "Eintrag im Handelsregister des Kantons Zürich",
          "Registernummer: CHE-000.000.000",
        ],
      },
      {
        heading: "Haftungsausschluss",
        body: [
          "Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
        ],
      },
    ],
  },
  en: {
    intro:
      "This legal notice applies to the contents of this website. The following information is provided in order to comply with statutory disclosure requirements.",
    sections: [
      {
        heading: "Provider",
        body: [
          "Deliza GmbH",
          "Musterstrasse 1",
          "8000 Zurich, Switzerland",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Phone: +41 00 000 00 00",
          "Email: info@deliza.com",
        ],
      },
      {
        heading: "Authorized representative",
        body: ["Management: [Name of management]"],
      },
      {
        heading: "Commercial register",
        body: [
          "Entered in the commercial register of the Canton of Zurich",
          "Register number: CHE-000.000.000",
        ],
      },
      {
        heading: "Disclaimer",
        body: [
          "The contents of this website have been prepared with the greatest possible care. However, no guarantee can be given for the accuracy, completeness or topicality of the content.",
        ],
      },
    ],
  },
  fr: {
    intro:
      "Les présentes mentions légales s'appliquent au contenu de ce site web. Les informations suivantes sont fournies afin de respecter les obligations légales d'identification.",
    sections: [
      {
        heading: "Éditeur",
        body: [
          "Deliza GmbH",
          "Musterstrasse 1",
          "8000 Zurich, Suisse",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Téléphone : +41 00 000 00 00",
          "E-mail : info@deliza.com",
        ],
      },
      {
        heading: "Représentation légale",
        body: ["Direction : [Nom de la direction]"],
      },
      {
        heading: "Registre du commerce",
        body: [
          "Inscrit au registre du commerce du canton de Zurich",
          "Numéro de registre : CHE-000.000.000",
        ],
      },
      {
        heading: "Limitation de responsabilité",
        body: [
          "Le contenu de ce site a été préparé avec le plus grand soin. Toutefois, aucune garantie ne peut être donnée quant à l'exactitude, l'exhaustivité ou l'actualité des informations.",
        ],
      },
    ],
  },
  it: {
    intro:
      "Le presenti note legali si applicano ai contenuti di questo sito web. Le informazioni seguenti sono fornite al fine di adempiere agli obblighi di legge in materia di identificazione del fornitore.",
    sections: [
      {
        heading: "Fornitore",
        body: [
          "Deliza GmbH",
          "Musterstrasse 1",
          "8000 Zurigo, Svizzera",
        ],
      },
      {
        heading: "Contatti",
        body: [
          "Telefono: +41 00 000 00 00",
          "Email: info@deliza.com",
        ],
      },
      {
        heading: "Rappresentante legale",
        body: ["Direzione: [Nome della direzione]"],
      },
      {
        heading: "Registro di commercio",
        body: [
          "Iscritto nel registro di commercio del Canton Zurigo",
          "Numero di registro: CHE-000.000.000",
        ],
      },
      {
        heading: "Limitazione di responsabilità",
        body: [
          "I contenuti di questo sito sono stati preparati con la massima cura. Tuttavia, non viene fornita alcuna garanzia in merito all'accuratezza, completezza o attualità delle informazioni.",
        ],
      },
    ],
  },
};

interface LegalNoticeInnerProps {
  locale: Locale;
}

function LegalNoticeInner({ locale }: LegalNoticeInnerProps) {
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

export default LegalNoticeInner;
