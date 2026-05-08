import React from "react";
import type { Locale } from "@/i18n/config";

interface Section {
  heading: string;
  lines: string[];
}

interface Copy {
  sections: Section[];
}

const ADDRESS_LINES = [
  "Deliza GmbH",
  "Flurweg 4",
  "7310 Bad Ragaz",
  "",
  "081 661 23 45",
  "info@giessenpark.com",
];

const REGISTER_LINES = [
  "UID: CHE-239.707.548",
  "CH-ID: CH-320-4100477-8",
];

const copy: Record<Locale, Copy> = {
  de: {
    sections: [
      { heading: "Gesamtverantwortung", lines: ADDRESS_LINES },
      {
        heading: "Vertretungsberechtigte Person",
        lines: ["Geschäftsführung: Judith und Mathew Zacharias"],
      },
      { heading: "Handelsregister", lines: REGISTER_LINES },
    ],
  },
  en: {
    sections: [
      { heading: "Overall responsibility", lines: ADDRESS_LINES },
      {
        heading: "Authorised representative",
        lines: ["Managing directors: Judith and Mathew Zacharias"],
      },
      { heading: "Commercial register", lines: REGISTER_LINES },
    ],
  },
  fr: {
    sections: [
      { heading: "Responsabilité globale", lines: ADDRESS_LINES },
      {
        heading: "Personne autorisée à représenter",
        lines: ["Direction : Judith et Mathew Zacharias"],
      },
      { heading: "Registre du commerce", lines: REGISTER_LINES },
    ],
  },
  it: {
    sections: [
      { heading: "Responsabilità complessiva", lines: ADDRESS_LINES },
      {
        heading: "Persona autorizzata a rappresentare",
        lines: ["Direzione: Judith e Mathew Zacharias"],
      },
      { heading: "Registro di commercio", lines: REGISTER_LINES },
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
            {content.sections.map((section, i) => (
              <div key={i} className="mb--40">
                <h3 className="title mt--30">{section.heading}</h3>
                <address
                  className="disc"
                  style={{ fontStyle: "normal", whiteSpace: "pre-line" }}
                >
                  {section.lines.join("\n")}
                </address>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalNoticeInner;
