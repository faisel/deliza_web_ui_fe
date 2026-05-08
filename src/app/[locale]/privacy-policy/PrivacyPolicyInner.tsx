import React from "react";
import type { Locale } from "@/i18n/config";

type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "addr"; lines: string[] }
  | { kind: "links"; items: { label: string; href: string }[] };

interface Section {
  heading: string;
  blocks: Block[];
}

interface Copy {
  intro: Block[];
  sections: Section[];
  footer: string;
}

const BROWSER_LINKS: { label: string; href: string }[] = [
  {
    label: "Mozilla Firefox",
    href: "https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen",
  },
  {
    label: "Internet Explorer",
    href: "https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies",
  },
  {
    label: "Google Chrome",
    href: "https://support.google.com/accounts/answer/61416?hl=de",
  },
  { label: "Opera", href: "http://www.opera.com/de/help" },
  {
    label: "Safari",
    href: "https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE",
  },
];

const ADDRESS_LINES = [
  "Deliza GmbH",
  "Flurweg 4,",
  "7310 Bad Ragaz",
  "",
  "081 661 23 45",
  "info@giessenpark.com",
];

const copy: Record<Locale, Copy> = {
  de: {
    intro: [
      {
        kind: "p",
        text: "Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:",
      },
      { kind: "addr", lines: ADDRESS_LINES },
    ],
    sections: [
      {
        heading: "Ihre Betroffenenrechte",
        blocks: [
          {
            kind: "p",
            text: "Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:",
          },
          {
            kind: "ul",
            items: [
              "Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),",
              "Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),",
              "Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),",
              "Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),",
              "Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und",
              "Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).",
            ],
          },
          {
            kind: "p",
            text: "Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.",
          },
        ],
      },
      {
        heading: "Erfassung allgemeiner Informationen beim Besuch unserer Website",
        blocks: [
          { kind: "h", text: "Art und Zweck der Verarbeitung:" },
          {
            kind: "p",
            text: "Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.",
          },
          {
            kind: "p",
            text: "Sie werden insbesondere zu folgenden Zwecken verarbeitet:",
          },
          {
            kind: "ul",
            items: [
              "Sicherstellung eines problemlosen Verbindungsaufbaus der Website,",
              "Sicherstellung einer reibungslosen Nutzung unserer Website,",
              "Auswertung der Systemsicherheit und -stabilität sowie",
              "zu weiteren administrativen Zwecken.",
            ],
          },
          {
            kind: "p",
            text: "Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.",
          },
          { kind: "h", text: "Rechtsgrundlage:" },
          {
            kind: "p",
            text: "Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.",
          },
          { kind: "h", text: "Empfänger:" },
          {
            kind: "p",
            text: "Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.",
          },
          { kind: "h", text: "Speicherdauer:" },
          {
            kind: "p",
            text: "Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.",
          },
          { kind: "h", text: "Bereitstellung vorgeschrieben oder erforderlich:" },
          {
            kind: "p",
            text: "Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.",
          },
        ],
      },
      {
        heading: "Cookies",
        blocks: [
          { kind: "h", text: "Art und Zweck der Verarbeitung:" },
          {
            kind: "p",
            text: "Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen.",
          },
          {
            kind: "p",
            text: "Hierdurch erhalten wir bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser und Betriebssystem.",
          },
          {
            kind: "p",
            text: "Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.",
          },
          {
            kind: "p",
            text: "In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.",
          },
          {
            kind: "p",
            text: "Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.",
          },
          { kind: "h", text: "Speicherdauer und eingesetzte Cookies:" },
          {
            kind: "p",
            text: "Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können Cookies auf unseren Webseiten zum Einsatz kommen.",
          },
          {
            kind: "p",
            text: "Soweit diese Cookies (auch) personenbezogene Daten betreffen können, informieren wir Sie darüber in den folgenden Abschnitten.",
          },
          {
            kind: "p",
            text: "Sie können über Ihre Browsereinstellungen einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:",
          },
          { kind: "links", items: BROWSER_LINKS },
        ],
      },
      {
        heading: "Erbringung kostenpflichtiger Leistungen",
        blocks: [
          { kind: "h", text: "Art und Zweck der Verarbeitung:" },
          {
            kind: "p",
            text: "Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung ausführen zu können.",
          },
          { kind: "h", text: "Rechtsgrundlage:" },
          {
            kind: "p",
            text: "Die Verarbeitung der Daten, die für den Abschluss des Vertrages erforderlich ist, basiert auf Art. 6 Abs. 1 lit. b DSGVO.",
          },
          { kind: "h", text: "Empfänger:" },
          {
            kind: "p",
            text: "Empfänger der Daten sind ggf. Auftragsverarbeiter.",
          },
          { kind: "h", text: "Speicherdauer:" },
          {
            kind: "p",
            text: "Wir speichern diese Daten in unseren Systemen bis die gesetzlichen Aufbewahrungsfristen abgelaufen sind. Diese betragen grundsätzlich 6 oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und steuerrechtlichen Anforderungen.",
          },
          { kind: "h", text: "Bereitstellung vorgeschrieben oder erforderlich:" },
          {
            kind: "p",
            text: "Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte und Leistungen gewähren.",
          },
        ],
      },
      {
        heading: "Newsletter",
        blocks: [
          { kind: "h", text: "Art und Zweck der Verarbeitung:" },
          {
            kind: "p",
            text: "Ihre Daten werden ausschließlich dazu verwendet, Ihnen den abonnierten Newsletter per E-Mail zuzustellen. Die Angabe Ihres Namens erfolgt, um Sie im Newsletter persönlich ansprechen zu können und ggf. zu identifizieren, falls Sie von Ihren Rechten als Betroffener Gebrauch machen wollen.",
          },
          {
            kind: "p",
            text: "Für den Empfang des Newsletters ist die Angabe Ihrer E-Mail-Adresse ausreichend. Bei der Anmeldung zum Bezug unseres Newsletters werden die von Ihnen angegebenen Daten ausschließlich für diesen Zweck verwendet. Abonnenten können auch über Umstände per E-Mail informiert werden, die für den Dienst oder die Registrierung relevant sind (bspw. Änderungen des Newsletterangebots oder technische Gegebenheiten).",
          },
          {
            kind: "p",
            text: "Für eine wirksame Registrierung benötigen wir eine valide E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung tatsächlich durch den Inhaber einer E-Mail-Adresse erfolgt, setzen wir das „Double-opt-in“-Verfahren ein. Hierzu protokollieren wir die Bestellung des Newsletters, den Versand einer Bestätigungsmail und den Eingang der hiermit angeforderten Antwort. Weitere Daten werden nicht erhoben. Die Daten werden ausschließlich für den Newsletterversand verwendet und nicht an Dritte weitergegeben.",
          },
          { kind: "h", text: "Rechtsgrundlage:" },
          {
            kind: "p",
            text: "Auf Grundlage Ihrer ausdrücklich erteilten Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), übersenden wir Ihnen regelmäßig unseren Newsletter bzw. vergleichbare Informationen per E-Mail an Ihre angegebene E-Mail-Adresse.",
          },
          {
            kind: "p",
            text: "Die Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer Nutzung für den Newsletterversand können Sie jederzeit mit Wirkung für die Zukunft widerrufen. In jedem Newsletter findet sich dazu ein entsprechender Link. Außerdem können Sie sich jederzeit auch direkt auf dieser Website abmelden oder uns Ihren Widerruf über die am Ende dieser Datenschutzhinweise angegebene Kontaktmöglichkeit mitteilen.",
          },
          { kind: "h", text: "Empfänger:" },
          {
            kind: "p",
            text: "Empfänger der Daten sind ggf. Auftragsverarbeiter.",
          },
          { kind: "h", text: "Speicherdauer:" },
          {
            kind: "p",
            text: "Die Daten werden in diesem Zusammenhang nur verarbeitet, solange die entsprechende Einwilligung vorliegt. Danach werden sie gelöscht.",
          },
          { kind: "h", text: "Bereitstellung vorgeschrieben oder erforderlich:" },
          {
            kind: "p",
            text: "Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Ohne bestehende Einwilligung können wir Ihnen unseren Newsletter leider nicht zusenden.",
          },
        ],
      },
      {
        heading: "Kontaktformular",
        blocks: [
          { kind: "h", text: "Art und Zweck der Verarbeitung:" },
          {
            kind: "p",
            text: "Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.",
          },
          { kind: "h", text: "Rechtsgrundlage:" },
          {
            kind: "p",
            text: "Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).",
          },
          {
            kind: "p",
            text: "Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.",
          },
          {
            kind: "p",
            text: "Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).",
          },
          { kind: "h", text: "Empfänger:" },
          {
            kind: "p",
            text: "Empfänger der Daten sind ggf. Auftragsverarbeiter.",
          },
          { kind: "h", text: "Speicherdauer:" },
          {
            kind: "p",
            text: "Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.",
          },
          {
            kind: "p",
            text: "Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.",
          },
          { kind: "h", text: "Bereitstellung vorgeschrieben oder erforderlich:" },
          {
            kind: "p",
            text: "Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.",
          },
        ],
      },
      {
        heading: "Verwendung von Google Analytics",
        blocks: [
          { kind: "h", text: "Art und Zweck der Verarbeitung:" },
          {
            kind: "p",
            text: "Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.",
          },
          {
            kind: "p",
            text: "Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website und des Internets sollen dann weitere verbundene Dienstleistungen erbracht werden.",
          },
          { kind: "h", text: "Rechtsgrundlage:" },
          {
            kind: "p",
            text: "Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).",
          },
          { kind: "h", text: "Empfänger:" },
          {
            kind: "p",
            text: "Empfänger der Daten ist Google als Auftragsverarbeiter. Hierfür haben wir mit Google den entsprechenden Auftragsverarbeitungsvertrag abgeschlossen.",
          },
          { kind: "h", text: "Speicherdauer:" },
          {
            kind: "p",
            text: "Die Löschung der Daten erfolgt, sobald diese für unsere Aufzeichnungszwecke nicht mehr erforderlich sind.",
          },
          { kind: "h", text: "Drittlandtransfer:" },
          {
            kind: "p",
            text: "Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Bereitstellung vorgeschrieben oder erforderlich:" },
          {
            kind: "p",
            text: "Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.",
          },
          { kind: "h", text: "Widerruf der Einwilligung:" },
          {
            kind: "p",
            text: "Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: Browser Add On zur Deaktivierung von Google Analytics.",
          },
          {
            kind: "p",
            text: "Zusätzlich oder als Alternative zum Browser-Add-On können Sie das Tracking durch Google Analytics auf unseren Seiten unterbinden, indem Sie diesen Link anklicken. Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, so lange das Cookie in Ihrem Browser installiert bleibt.",
          },
          { kind: "h", text: "Profiling:" },
          {
            kind: "p",
            text: "Mit Hilfe des Tracking-Tools Google Analytics kann das Verhalten der Besucher der Webseite bewertet und die Interessen analysiert werden. Hierzu erstellen wir ein pseudonymes Nutzerprofil.",
          },
        ],
      },
      {
        heading: "Verwendung von Scriptbibliotheken (Google Webfonts)",
        blocks: [
          { kind: "h", text: "Art und Zweck der Verarbeitung:" },
          {
            kind: "p",
            text: "Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.",
          },
          {
            kind: "p",
            text: "Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: https://www.google.com/policies/privacy/",
          },
          { kind: "h", text: "Rechtsgrundlage:" },
          {
            kind: "p",
            text: "Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).",
          },
          { kind: "h", text: "Empfänger:" },
          {
            kind: "p",
            text: "Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass der Betreiber in diesem Fall Google Daten erhebt.",
          },
          { kind: "h", text: "Speicherdauer:" },
          {
            kind: "p",
            text: "Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Webfonts.",
          },
          {
            kind: "p",
            text: "Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://www.google.com/policies/privacy/.",
          },
          { kind: "h", text: "Drittlandtransfer:" },
          {
            kind: "p",
            text: "Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Bereitstellung vorgeschrieben oder erforderlich:" },
          {
            kind: "p",
            text: "Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich, noch vertraglich vorgeschrieben. Allerdings kann ggfs. die korrekte Darstellung der Inhalte durch Standardschriften nicht möglich sein.",
          },
          { kind: "h", text: "Widerruf der Einwilligung:" },
          {
            kind: "p",
            text: "Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache JavaScript verwendet. Sie können der Datenverarbeitung daher widersprechen, indem Sie die Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen JavaScript-Blocker installieren. Bitte beachten Sie, dass es hierdurch zu Funktionseinschränkungen auf der Website kommen kann.",
          },
        ],
      },
      {
        heading: "Verwendung von Google Maps",
        blocks: [
          { kind: "h", text: "Art und Zweck der Verarbeitung:" },
          {
            kind: "p",
            text: "Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google“) betrieben. Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.",
          },
          {
            kind: "p",
            text: "Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.",
          },
          {
            kind: "p",
            text: "Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie hier.",
          },
          { kind: "h", text: "Rechtsgrundlage:" },
          {
            kind: "p",
            text: "Rechtsgrundlage für die Einbindung von Google Maps und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).",
          },
          { kind: "h", text: "Empfänger:" },
          {
            kind: "p",
            text: "Durch den Besuch der Webseite erhält Google Informationen, dass Sie die entsprechende Unterseite unserer Webseite aufgerufen haben. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet.",
          },
          {
            kind: "p",
            text: "Wenn Sie die Zuordnung in Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons bei Google ausloggen. Google speichert Ihre Daten als Nutzungsprofile und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter Gestaltung seiner Webseite. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Webseite zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google richten müssen.",
          },
          { kind: "h", text: "Speicherdauer:" },
          {
            kind: "p",
            text: "Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Maps.",
          },
          { kind: "h", text: "Drittlandtransfer:" },
          {
            kind: "p",
            text: "Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Widerruf der Einwilligung:" },
          {
            kind: "p",
            text: "Wenn Sie nicht möchten, dass Google über unseren Internetauftritt Daten über Sie erhebt, verarbeitet oder nutzt, können Sie in Ihrem Browsereinstellungen JavaScript deaktivieren. In diesem Fall können Sie unsere Webseite jedoch nicht oder nur eingeschränkt nutzen.",
          },
          { kind: "h", text: "Bereitstellung vorgeschrieben oder erforderlich:" },
          {
            kind: "p",
            text: "Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.",
          },
        ],
      },
      {
        heading: "SSL-Verschlüsselung",
        blocks: [
          {
            kind: "p",
            text: "Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.",
          },
        ],
      },
      {
        heading: "Änderung unserer Datenschutzbestimmungen",
        blocks: [
          {
            kind: "p",
            text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.",
          },
        ],
      },
    ],
    footer:
      "Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für externe Datenschutzbeauftragte (Version #2019-04-10).",
  },

  en: {
    intro: [
      {
        kind: "p",
        text: "The controller within the meaning of data protection laws, in particular the EU General Data Protection Regulation (GDPR), is:",
      },
      { kind: "addr", lines: ADDRESS_LINES },
    ],
    sections: [
      {
        heading: "Your rights as a data subject",
        blocks: [
          {
            kind: "p",
            text: "Using the contact details listed above, you can exercise the following rights at any time:",
          },
          {
            kind: "ul",
            items: [
              "Access to the data we have stored about you and information on its processing (Art. 15 GDPR),",
              "Rectification of inaccurate personal data (Art. 16 GDPR),",
              "Erasure of your data stored with us (Art. 17 GDPR),",
              "Restriction of processing where we are not yet permitted to delete your data due to legal obligations (Art. 18 GDPR),",
              "Objection to the processing of your data with us (Art. 21 GDPR), and",
              "Data portability, provided you have consented to the data processing or concluded a contract with us (Art. 20 GDPR).",
            ],
          },
          {
            kind: "p",
            text: "If you have given us your consent, you can revoke it at any time with effect for the future.",
          },
        ],
      },
      {
        heading: "Collection of general information when visiting our website",
        blocks: [
          { kind: "h", text: "Type and purpose of processing:" },
          {
            kind: "p",
            text: "When you access our website, i.e. when you do not register or otherwise submit information, general information is automatically collected. This information (server log files) includes, for example, the type of web browser, the operating system used, the domain name of your internet service provider, your IP address and similar.",
          },
          {
            kind: "p",
            text: "It is processed in particular for the following purposes:",
          },
          {
            kind: "ul",
            items: [
              "ensuring a smooth connection to the website,",
              "ensuring the smooth use of our website,",
              "evaluating system security and stability, and",
              "for further administrative purposes.",
            ],
          },
          {
            kind: "p",
            text: "We do not use your data to draw any conclusions about you personally. Information of this kind may be evaluated statistically by us in order to optimise our website and the technology behind it.",
          },
          { kind: "h", text: "Legal basis:" },
          {
            kind: "p",
            text: "Processing is carried out in accordance with Art. 6 (1) (f) GDPR on the basis of our legitimate interest in improving the stability and functionality of our website.",
          },
          { kind: "h", text: "Recipients:" },
          {
            kind: "p",
            text: "Recipients of the data may include technical service providers acting as data processors for the operation and maintenance of our website.",
          },
          { kind: "h", text: "Storage period:" },
          {
            kind: "p",
            text: "The data will be deleted as soon as it is no longer required for the purpose of collection. For data used to provide the website, this is generally the case when the respective session has ended.",
          },
          { kind: "h", text: "Provision required or obligatory:" },
          {
            kind: "p",
            text: "Provision of the aforementioned personal data is neither required by law nor by contract. However, without the IP address the service and functionality of our website cannot be guaranteed. In addition, individual services and features may be unavailable or restricted. For this reason, objection is excluded.",
          },
        ],
      },
      {
        heading: "Cookies",
        blocks: [
          { kind: "h", text: "Type and purpose of processing:" },
          {
            kind: "p",
            text: "Like many other websites, we also use so-called “cookies”. Cookies are small text files that are stored on your end device (laptop, tablet, smartphone, etc.) when you visit our website.",
          },
          {
            kind: "p",
            text: "This allows us to receive certain data such as IP address, browser used and operating system.",
          },
          {
            kind: "p",
            text: "Cookies cannot be used to start programs or transmit viruses to a computer. Based on the information contained in cookies, we can make navigation easier for you and enable our pages to be displayed correctly.",
          },
          {
            kind: "p",
            text: "In no case will the data we collect be passed on to third parties or linked with personal data without your consent.",
          },
          {
            kind: "p",
            text: "Of course, you can in principle also view our website without cookies. Internet browsers are usually set to accept cookies. In general, you can deactivate the use of cookies at any time via your browser settings. Please use the help function of your internet browser to find out how to change these settings. Please note that some functions of our website may not work if you have deactivated the use of cookies.",
          },
          { kind: "h", text: "Storage period and cookies used:" },
          {
            kind: "p",
            text: "Insofar as you allow us to use cookies through your browser settings or consent, cookies may be used on our pages.",
          },
          {
            kind: "p",
            text: "Insofar as these cookies (also) concern personal data, we will inform you about this in the following sections.",
          },
          {
            kind: "p",
            text: "You can delete individual cookies or all cookies via your browser settings. You will also receive information and instructions on how to delete these cookies or block their storage in advance. Depending on the provider of your browser, you will find the necessary information at the following links:",
          },
          { kind: "links", items: BROWSER_LINKS },
        ],
      },
      {
        heading: "Provision of paid services",
        blocks: [
          { kind: "h", text: "Type and purpose of processing:" },
          {
            kind: "p",
            text: "In order to provide paid services, we collect additional data, e.g. payment details, in order to be able to execute your order.",
          },
          { kind: "h", text: "Legal basis:" },
          {
            kind: "p",
            text: "The processing of data necessary for the conclusion of the contract is based on Art. 6 (1) (b) GDPR.",
          },
          { kind: "h", text: "Recipients:" },
          {
            kind: "p",
            text: "Recipients of the data may include data processors.",
          },
          { kind: "h", text: "Storage period:" },
          {
            kind: "p",
            text: "We store this data in our systems until the legal retention periods have expired. These are generally 6 or 10 years for reasons of proper accounting and tax law requirements.",
          },
          { kind: "h", text: "Provision required or obligatory:" },
          {
            kind: "p",
            text: "Provision of your personal data is voluntary. Without the provision of your personal data we cannot grant you access to our content and services.",
          },
        ],
      },
      {
        heading: "Newsletter",
        blocks: [
          { kind: "h", text: "Type and purpose of processing:" },
          {
            kind: "p",
            text: "Your data is used exclusively to send you the newsletter you have subscribed to by email. Your name is requested so that we can address you personally in the newsletter and identify you, if necessary, should you wish to exercise your rights as a data subject.",
          },
          {
            kind: "p",
            text: "To receive the newsletter, providing your email address is sufficient. When you sign up to receive our newsletter, the data you provide will be used exclusively for this purpose. Subscribers may also be informed by email of circumstances relevant to the service or registration (e.g. changes to the newsletter offering or technical conditions).",
          },
          {
            kind: "p",
            text: "For an effective registration, we need a valid email address. To verify that a registration is actually being made by the holder of an email address, we use the “double opt-in” procedure. For this purpose, we log the order of the newsletter, the sending of a confirmation email and the receipt of the requested response. No further data is collected. The data is used exclusively for sending the newsletter and is not shared with third parties.",
          },
          { kind: "h", text: "Legal basis:" },
          {
            kind: "p",
            text: "On the basis of your express consent (Art. 6 (1) (a) GDPR), we regularly send you our newsletter or comparable information by email to the email address you have provided.",
          },
          {
            kind: "p",
            text: "You can revoke your consent to the storage of your personal data and its use for sending the newsletter at any time with effect for the future. Each newsletter contains a corresponding link. You can also unsubscribe directly on this website at any time or notify us of your revocation via the contact option provided at the end of this privacy policy.",
          },
          { kind: "h", text: "Recipients:" },
          {
            kind: "p",
            text: "Recipients of the data may include data processors.",
          },
          { kind: "h", text: "Storage period:" },
          {
            kind: "p",
            text: "In this context, the data is only processed for as long as the corresponding consent exists. Afterwards it is deleted.",
          },
          { kind: "h", text: "Provision required or obligatory:" },
          {
            kind: "p",
            text: "Provision of your personal data is voluntary, solely on the basis of your consent. Without your consent, we are unfortunately unable to send you our newsletter.",
          },
        ],
      },
      {
        heading: "Contact form",
        blocks: [
          { kind: "h", text: "Type and purpose of processing:" },
          {
            kind: "p",
            text: "The data you enter is stored for the purpose of individual communication with you. A valid email address and your name are required for this. They are used to assign the request and to subsequently respond to it. The provision of further data is optional.",
          },
          { kind: "h", text: "Legal basis:" },
          {
            kind: "p",
            text: "The processing of data entered in the contact form is based on a legitimate interest (Art. 6 (1) (f) GDPR).",
          },
          {
            kind: "p",
            text: "By providing the contact form, we wish to enable you to make contact with us in an uncomplicated manner. The information you provide will be stored for the purpose of processing the request and for any follow-up questions.",
          },
          {
            kind: "p",
            text: "If you contact us to request an offer, the data entered in the contact form is processed for the implementation of pre-contractual measures (Art. 6 (1) (b) GDPR).",
          },
          { kind: "h", text: "Recipients:" },
          {
            kind: "p",
            text: "Recipients of the data may include data processors.",
          },
          { kind: "h", text: "Storage period:" },
          {
            kind: "p",
            text: "Data is deleted no later than 6 months after processing the request.",
          },
          {
            kind: "p",
            text: "If a contractual relationship arises, we are subject to the statutory retention periods under the Commercial Code and will delete your data after these periods have expired.",
          },
          { kind: "h", text: "Provision required or obligatory:" },
          {
            kind: "p",
            text: "Provision of your personal data is voluntary. However, we can only process your request if you provide us with your name, email address and the reason for the request.",
          },
        ],
      },
      {
        heading: "Use of Google Analytics",
        blocks: [
          { kind: "h", text: "Type and purpose of processing:" },
          {
            kind: "p",
            text: "This website uses Google Analytics, a web analytics service of Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (hereinafter: “Google”). Google Analytics uses so-called “cookies”, text files that are stored on your computer and that allow analysis of your use of the website. Information generated by the cookie about your use of this website is generally transmitted to a Google server in the USA and stored there. Due to the activation of IP anonymisation on these pages, your IP address will be shortened by Google beforehand within Member States of the European Union or in other contracting states of the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. On behalf of the operator of this website, Google will use this information to evaluate your use of the website, to compile reports on website activity and to provide other services related to website activity and internet usage to the website operator. The IP address transmitted by your browser as part of Google Analytics is not merged with other Google data.",
          },
          {
            kind: "p",
            text: "The purposes of data processing are to evaluate the use of the website and to compile reports on activities on the website. Further related services will then be provided based on the use of the website and the internet.",
          },
          { kind: "h", text: "Legal basis:" },
          {
            kind: "p",
            text: "Processing is based on the user's consent (Art. 6 (1) (a) GDPR).",
          },
          { kind: "h", text: "Recipients:" },
          {
            kind: "p",
            text: "The recipient of the data is Google as data processor. We have concluded the corresponding data processing agreement with Google for this purpose.",
          },
          { kind: "h", text: "Storage period:" },
          {
            kind: "p",
            text: "Data is deleted as soon as it is no longer required for our recording purposes.",
          },
          { kind: "h", text: "Transfer to third countries:" },
          {
            kind: "p",
            text: "Google processes your data in the USA and has subscribed to the EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Provision required or obligatory:" },
          {
            kind: "p",
            text: "Provision of your personal data is voluntary, solely on the basis of your consent. If you prevent access, this may result in functional restrictions on the website.",
          },
          { kind: "h", text: "Withdrawal of consent:" },
          {
            kind: "p",
            text: "You can prevent the storage of cookies through a corresponding setting of your browser software; however, we point out that in this case you may not be able to use all functions of this website to their full extent. You can also prevent the collection of data generated by the cookie and relating to your use of the website (incl. your IP address) to Google as well as the processing of this data by Google by downloading and installing the browser plug-in available at the following link: Browser Add On to deactivate Google Analytics.",
          },
          {
            kind: "p",
            text: "In addition or as an alternative to the browser add-on, you can prevent tracking by Google Analytics on our pages by clicking on this link. An opt-out cookie will be installed on your device. This will prevent the collection by Google Analytics for this website and for this browser in future, as long as the cookie remains installed in your browser.",
          },
          { kind: "h", text: "Profiling:" },
          {
            kind: "p",
            text: "With the help of the Google Analytics tracking tool, the behaviour of website visitors can be evaluated and their interests analysed. For this purpose we create a pseudonymous user profile.",
          },
        ],
      },
      {
        heading: "Use of script libraries (Google Web Fonts)",
        blocks: [
          { kind: "h", text: "Type and purpose of processing:" },
          {
            kind: "p",
            text: "In order to display our content correctly and graphically appealing across browsers, we use “Google Web Fonts” from Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; hereinafter “Google”) on this website to display fonts.",
          },
          {
            kind: "p",
            text: "You can find the privacy policy of the library operator Google here: https://www.google.com/policies/privacy/",
          },
          { kind: "h", text: "Legal basis:" },
          {
            kind: "p",
            text: "The legal basis for the integration of Google Web Fonts and the associated data transfer to Google is your consent (Art. 6 (1) (a) GDPR).",
          },
          { kind: "h", text: "Recipients:" },
          {
            kind: "p",
            text: "The call-up of script or font libraries automatically triggers a connection to the operator of the library. It is theoretically possible – although currently also unclear whether and, if so, for what purposes – that the operator, in this case Google, may collect data.",
          },
          { kind: "h", text: "Storage period:" },
          {
            kind: "p",
            text: "We do not collect any personal data through the integration of Google Web Fonts.",
          },
          {
            kind: "p",
            text: "You can find further information on Google Web Fonts at https://developers.google.com/fonts/faq and in Google's privacy policy: https://www.google.com/policies/privacy/.",
          },
          { kind: "h", text: "Transfer to third countries:" },
          {
            kind: "p",
            text: "Google processes your data in the USA and has subscribed to the EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Provision required or obligatory:" },
          {
            kind: "p",
            text: "Provision of personal data is neither legally nor contractually required. However, the correct display of content using standard fonts may not be possible.",
          },
          { kind: "h", text: "Withdrawal of consent:" },
          {
            kind: "p",
            text: "The programming language JavaScript is regularly used to display the content. You can therefore object to the data processing by deactivating the execution of JavaScript in your browser or by installing a JavaScript blocker. Please note that this may lead to functional restrictions on the website.",
          },
        ],
      },
      {
        heading: "Use of Google Maps",
        blocks: [
          { kind: "h", text: "Type and purpose of processing:" },
          {
            kind: "p",
            text: "We use Google Maps on this website. Google Maps is operated by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (hereinafter “Google”). This allows us to display interactive maps directly on the website and enables you to use the map function comfortably.",
          },
          {
            kind: "p",
            text: "Further information about data processing by Google can be found in the Google privacy notices. There you can also change your personal privacy settings in the Privacy Center.",
          },
          {
            kind: "p",
            text: "Detailed instructions for managing your own data in connection with Google products can be found here.",
          },
          { kind: "h", text: "Legal basis:" },
          {
            kind: "p",
            text: "The legal basis for the integration of Google Maps and the associated data transfer to Google is your consent (Art. 6 (1) (a) GDPR).",
          },
          { kind: "h", text: "Recipients:" },
          {
            kind: "p",
            text: "By visiting the website, Google receives information that you have called up the corresponding sub-page of our website. This takes place regardless of whether Google provides a user account through which you are logged in or whether no user account exists. If you are logged in to Google, your data will be assigned directly to your account.",
          },
          {
            kind: "p",
            text: "If you do not wish to be associated with your Google profile, you must log out of Google before activating the button. Google stores your data as usage profiles and uses it for purposes of advertising, market research and/or designing its website according to needs. Such an evaluation is carried out in particular (even for users who are not logged in) for the purpose of providing needs-based advertising and to inform other users of the social network about your activities on our website. You have a right to object to the creation of these user profiles, whereby you must contact Google to exercise this right.",
          },
          { kind: "h", text: "Storage period:" },
          {
            kind: "p",
            text: "We do not collect any personal data through the integration of Google Maps.",
          },
          { kind: "h", text: "Transfer to third countries:" },
          {
            kind: "p",
            text: "Google processes your data in the USA and has subscribed to the EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Withdrawal of consent:" },
          {
            kind: "p",
            text: "If you do not want Google to collect, process or use data about you via our website, you can deactivate JavaScript in your browser settings. In this case, however, you may not be able to use our website at all or only to a limited extent.",
          },
          { kind: "h", text: "Provision required or obligatory:" },
          {
            kind: "p",
            text: "Provision of your personal data is voluntary, solely on the basis of your consent. If you prevent access, this may result in functional restrictions on the website.",
          },
        ],
      },
      {
        heading: "SSL encryption",
        blocks: [
          {
            kind: "p",
            text: "To protect the security of your data during transmission, we use state-of-the-art encryption procedures (e.g. SSL) via HTTPS.",
          },
        ],
      },
      {
        heading: "Changes to our privacy policy",
        blocks: [
          {
            kind: "p",
            text: "We reserve the right to amend this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy, e.g. when introducing new services. The new privacy policy will then apply to your next visit.",
          },
        ],
      },
    ],
    footer:
      "This privacy policy was created with the help of activeMind AG, the experts for external data protection officers (Version #2019-04-10).",
  },

  fr: {
    intro: [
      {
        kind: "p",
        text: "Le responsable du traitement au sens des lois sur la protection des données, en particulier du Règlement général sur la protection des données de l'UE (RGPD), est :",
      },
      { kind: "addr", lines: ADDRESS_LINES },
    ],
    sections: [
      {
        heading: "Vos droits en tant que personne concernée",
        blocks: [
          {
            kind: "p",
            text: "Aux coordonnées indiquées ci-dessus, vous pouvez à tout moment exercer les droits suivants :",
          },
          {
            kind: "ul",
            items: [
              "Droit d'accès aux données vous concernant et à leur traitement (art. 15 RGPD),",
              "Droit de rectification des données à caractère personnel inexactes (art. 16 RGPD),",
              "Droit à l'effacement de vos données conservées chez nous (art. 17 RGPD),",
              "Droit à la limitation du traitement, dans la mesure où nous ne sommes pas encore autorisés à effacer vos données en raison d'obligations légales (art. 18 RGPD),",
              "Droit d'opposition au traitement de vos données chez nous (art. 21 RGPD), et",
              "Droit à la portabilité des données, dans la mesure où vous avez consenti au traitement des données ou conclu un contrat avec nous (art. 20 RGPD).",
            ],
          },
          {
            kind: "p",
            text: "Si vous nous avez donné votre consentement, vous pouvez le révoquer à tout moment avec effet pour l'avenir.",
          },
        ],
      },
      {
        heading: "Collecte d'informations générales lors de la visite de notre site",
        blocks: [
          { kind: "h", text: "Nature et finalité du traitement :" },
          {
            kind: "p",
            text: "Lorsque vous accédez à notre site, c'est-à-dire lorsque vous ne vous enregistrez pas et ne transmettez pas d'informations d'une autre manière, des informations de nature générale sont collectées automatiquement. Ces informations (fichiers journaux du serveur) comprennent par exemple le type de navigateur web, le système d'exploitation utilisé, le nom de domaine de votre fournisseur d'accès à internet, votre adresse IP et autres informations similaires.",
          },
          {
            kind: "p",
            text: "Elles sont notamment traitées aux fins suivantes :",
          },
          {
            kind: "ul",
            items: [
              "garantir l'établissement sans problème d'une connexion au site,",
              "garantir une utilisation sans problème de notre site,",
              "évaluer la sécurité et la stabilité du système, ainsi que",
              "à d'autres fins administratives.",
            ],
          },
          {
            kind: "p",
            text: "Nous n'utilisons pas vos données pour tirer des conclusions sur votre personne. Les informations de ce type sont, le cas échéant, évaluées statistiquement par nos soins afin d'optimiser notre présence sur internet et la technique qui se trouve derrière.",
          },
          { kind: "h", text: "Base juridique :" },
          {
            kind: "p",
            text: "Le traitement est effectué conformément à l'art. 6 al. 1 let. f RGPD sur la base de notre intérêt légitime à améliorer la stabilité et la fonctionnalité de notre site.",
          },
          { kind: "h", text: "Destinataires :" },
          {
            kind: "p",
            text: "Les destinataires des données sont, le cas échéant, des prestataires techniques agissant en tant que sous-traitants pour l'exploitation et la maintenance de notre site.",
          },
          { kind: "h", text: "Durée de conservation :" },
          {
            kind: "p",
            text: "Les données sont effacées dès qu'elles ne sont plus nécessaires à la finalité de leur collecte. Pour les données qui servent à la mise à disposition du site, c'est en principe le cas lorsque la session correspondante est terminée.",
          },
          { kind: "h", text: "Fourniture obligatoire ou requise :" },
          {
            kind: "p",
            text: "La fourniture des données à caractère personnel susmentionnées n'est ni légalement ni contractuellement obligatoire. Toutefois, sans l'adresse IP, le service et le bon fonctionnement de notre site ne sont pas garantis. En outre, certains services et fonctionnalités peuvent être indisponibles ou limités. C'est pourquoi toute opposition est exclue.",
          },
        ],
      },
      {
        heading: "Cookies",
        blocks: [
          { kind: "h", text: "Nature et finalité du traitement :" },
          {
            kind: "p",
            text: "Comme de nombreux autres sites web, nous utilisons également des « cookies ». Les cookies sont de petits fichiers texte qui sont stockés sur votre terminal (ordinateur portable, tablette, smartphone, etc.) lorsque vous visitez notre site.",
          },
          {
            kind: "p",
            text: "Nous obtenons ainsi certaines données telles que l'adresse IP, le navigateur utilisé et le système d'exploitation.",
          },
          {
            kind: "p",
            text: "Les cookies ne peuvent pas être utilisés pour démarrer des programmes ou transférer des virus sur un ordinateur. Sur la base des informations contenues dans les cookies, nous pouvons vous faciliter la navigation et permettre l'affichage correct de nos pages web.",
          },
          {
            kind: "p",
            text: "En aucun cas les données que nous collectons ne sont transmises à des tiers ou liées à des données personnelles sans votre consentement.",
          },
          {
            kind: "p",
            text: "Bien entendu, vous pouvez en principe consulter notre site également sans cookies. Les navigateurs internet sont régulièrement réglés pour accepter les cookies. En général, vous pouvez désactiver l'utilisation des cookies à tout moment via les paramètres de votre navigateur. Veuillez utiliser les fonctions d'aide de votre navigateur internet pour savoir comment modifier ces paramètres. Veuillez noter que certaines fonctions de notre site peuvent ne pas fonctionner si vous avez désactivé l'utilisation des cookies.",
          },
          { kind: "h", text: "Durée de conservation et cookies utilisés :" },
          {
            kind: "p",
            text: "Dans la mesure où vous nous autorisez à utiliser des cookies par les paramètres de votre navigateur ou votre consentement, des cookies peuvent être utilisés sur nos pages.",
          },
          {
            kind: "p",
            text: "Dans la mesure où ces cookies peuvent (également) concerner des données à caractère personnel, nous vous en informons dans les sections suivantes.",
          },
          {
            kind: "p",
            text: "Vous pouvez supprimer des cookies individuels ou l'ensemble des cookies via les paramètres de votre navigateur. Vous y trouverez également des informations et des instructions sur la manière de supprimer ces cookies ou de bloquer leur stockage à l'avance. Selon le fournisseur de votre navigateur, vous trouverez les informations nécessaires sous les liens suivants :",
          },
          { kind: "links", items: BROWSER_LINKS },
        ],
      },
      {
        heading: "Fourniture de prestations payantes",
        blocks: [
          { kind: "h", text: "Nature et finalité du traitement :" },
          {
            kind: "p",
            text: "Pour la fourniture de prestations payantes, nous demandons des données supplémentaires telles que des coordonnées de paiement, afin de pouvoir exécuter votre commande.",
          },
          { kind: "h", text: "Base juridique :" },
          {
            kind: "p",
            text: "Le traitement des données nécessaires à la conclusion du contrat est fondé sur l'art. 6 al. 1 let. b RGPD.",
          },
          { kind: "h", text: "Destinataires :" },
          {
            kind: "p",
            text: "Les destinataires des données sont, le cas échéant, des sous-traitants.",
          },
          { kind: "h", text: "Durée de conservation :" },
          {
            kind: "p",
            text: "Nous conservons ces données dans nos systèmes jusqu'à l'expiration des délais légaux de conservation. Ceux-ci sont en principe de 6 ou 10 ans pour des raisons de comptabilité régulière et d'exigences fiscales.",
          },
          { kind: "h", text: "Fourniture obligatoire ou requise :" },
          {
            kind: "p",
            text: "La fourniture de vos données à caractère personnel est volontaire. Sans la fourniture de vos données à caractère personnel, nous ne pouvons pas vous accorder l'accès à nos contenus et services.",
          },
        ],
      },
      {
        heading: "Newsletter",
        blocks: [
          { kind: "h", text: "Nature et finalité du traitement :" },
          {
            kind: "p",
            text: "Vos données sont utilisées exclusivement pour vous envoyer par e-mail la newsletter à laquelle vous vous êtes abonné. L'indication de votre nom permet de vous adresser personnellement dans la newsletter et, le cas échéant, de vous identifier si vous souhaitez exercer vos droits en tant que personne concernée.",
          },
          {
            kind: "p",
            text: "Pour recevoir la newsletter, l'indication de votre adresse e-mail est suffisante. Lors de l'inscription à notre newsletter, les données que vous indiquez sont utilisées exclusivement à cette fin. Les abonnés peuvent également être informés par e-mail des circonstances pertinentes pour le service ou l'inscription (par exemple, modifications de l'offre de newsletter ou conditions techniques).",
          },
          {
            kind: "p",
            text: "Pour une inscription valable, nous avons besoin d'une adresse e-mail valide. Pour vérifier qu'une inscription est effectivement effectuée par le titulaire d'une adresse e-mail, nous utilisons la procédure « double opt-in ». À cet effet, nous enregistrons la commande de la newsletter, l'envoi d'un e-mail de confirmation et la réception de la réponse demandée. Aucune autre donnée n'est collectée. Les données sont utilisées exclusivement pour l'envoi de la newsletter et ne sont pas transmises à des tiers.",
          },
          { kind: "h", text: "Base juridique :" },
          {
            kind: "p",
            text: "Sur la base de votre consentement express (art. 6 al. 1 let. a RGPD), nous vous envoyons régulièrement notre newsletter ou des informations comparables par e-mail à l'adresse que vous avez indiquée.",
          },
          {
            kind: "p",
            text: "Vous pouvez révoquer à tout moment, avec effet pour l'avenir, votre consentement à la conservation de vos données personnelles et à leur utilisation pour l'envoi de la newsletter. Chaque newsletter contient un lien correspondant. Vous pouvez également vous désabonner directement sur ce site à tout moment ou nous communiquer votre révocation via la possibilité de contact indiquée à la fin de cette politique de confidentialité.",
          },
          { kind: "h", text: "Destinataires :" },
          {
            kind: "p",
            text: "Les destinataires des données sont, le cas échéant, des sous-traitants.",
          },
          { kind: "h", text: "Durée de conservation :" },
          {
            kind: "p",
            text: "Dans ce contexte, les données ne sont traitées que tant que le consentement correspondant existe. Elles sont ensuite supprimées.",
          },
          { kind: "h", text: "Fourniture obligatoire ou requise :" },
          {
            kind: "p",
            text: "La fourniture de vos données à caractère personnel est volontaire, uniquement sur la base de votre consentement. Sans consentement, nous ne pouvons malheureusement pas vous envoyer notre newsletter.",
          },
        ],
      },
      {
        heading: "Formulaire de contact",
        blocks: [
          { kind: "h", text: "Nature et finalité du traitement :" },
          {
            kind: "p",
            text: "Les données que vous saisissez sont enregistrées aux fins de communication individuelle avec vous. Pour cela, l'indication d'une adresse e-mail valide ainsi que de votre nom est nécessaire. Celles-ci servent à attribuer la demande et à y répondre par la suite. L'indication d'autres données est facultative.",
          },
          { kind: "h", text: "Base juridique :" },
          {
            kind: "p",
            text: "Le traitement des données saisies dans le formulaire de contact est fondé sur un intérêt légitime (art. 6 al. 1 let. f RGPD).",
          },
          {
            kind: "p",
            text: "En mettant à disposition le formulaire de contact, nous souhaitons vous permettre de prendre contact avec nous de manière simple. Les indications que vous fournissez sont enregistrées aux fins du traitement de la demande ainsi que pour d'éventuelles questions complémentaires.",
          },
          {
            kind: "p",
            text: "Si vous nous contactez pour demander une offre, le traitement des données saisies dans le formulaire de contact est effectué pour la mise en œuvre de mesures précontractuelles (art. 6 al. 1 let. b RGPD).",
          },
          { kind: "h", text: "Destinataires :" },
          {
            kind: "p",
            text: "Les destinataires des données sont, le cas échéant, des sous-traitants.",
          },
          { kind: "h", text: "Durée de conservation :" },
          {
            kind: "p",
            text: "Les données sont supprimées au plus tard 6 mois après le traitement de la demande.",
          },
          {
            kind: "p",
            text: "Si une relation contractuelle est établie, nous sommes soumis aux délais légaux de conservation prévus par le code de commerce et nous supprimons vos données à l'expiration de ces délais.",
          },
          { kind: "h", text: "Fourniture obligatoire ou requise :" },
          {
            kind: "p",
            text: "La fourniture de vos données à caractère personnel est volontaire. Toutefois, nous ne pouvons traiter votre demande que si vous nous communiquez votre nom, votre adresse e-mail et le motif de votre demande.",
          },
        ],
      },
      {
        heading: "Utilisation de Google Analytics",
        blocks: [
          { kind: "h", text: "Nature et finalité du traitement :" },
          {
            kind: "p",
            text: "Ce site utilise Google Analytics, un service d'analyse web de Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (ci-après « Google »). Google Analytics utilise des « cookies », c'est-à-dire des fichiers texte qui sont stockés sur votre ordinateur et qui permettent une analyse de votre utilisation du site. Les informations générées par le cookie sur votre utilisation de ce site sont en règle générale transmises à un serveur de Google aux États-Unis et y sont stockées. En raison de l'activation de l'anonymisation IP sur ces pages, votre adresse IP sera toutefois préalablement raccourcie par Google au sein des États membres de l'Union européenne ou dans d'autres États parties à l'accord sur l'Espace économique européen. Ce n'est qu'exceptionnellement que l'adresse IP complète sera transmise à un serveur de Google aux États-Unis et y sera raccourcie. Pour le compte de l'exploitant de ce site, Google utilisera ces informations pour évaluer votre utilisation du site, pour établir des rapports sur les activités du site et pour fournir d'autres services liés à l'utilisation du site et à l'utilisation d'internet à l'exploitant du site. L'adresse IP transmise par votre navigateur dans le cadre de Google Analytics n'est pas combinée avec d'autres données de Google.",
          },
          {
            kind: "p",
            text: "Les finalités du traitement résident dans l'évaluation de l'utilisation du site et dans la compilation de rapports sur les activités sur le site. D'autres services connexes seront ensuite fournis sur la base de l'utilisation du site et d'internet.",
          },
          { kind: "h", text: "Base juridique :" },
          {
            kind: "p",
            text: "Le traitement des données est fondé sur le consentement de l'utilisateur (art. 6 al. 1 let. a RGPD).",
          },
          { kind: "h", text: "Destinataires :" },
          {
            kind: "p",
            text: "Le destinataire des données est Google en tant que sous-traitant. Nous avons conclu à cet effet le contrat de sous-traitance correspondant avec Google.",
          },
          { kind: "h", text: "Durée de conservation :" },
          {
            kind: "p",
            text: "Les données sont supprimées dès qu'elles ne sont plus nécessaires à nos fins d'enregistrement.",
          },
          { kind: "h", text: "Transfert vers des pays tiers :" },
          {
            kind: "p",
            text: "Google traite vos données aux États-Unis et a adhéré au EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Fourniture obligatoire ou requise :" },
          {
            kind: "p",
            text: "La fourniture de vos données à caractère personnel est volontaire, uniquement sur la base de votre consentement. Si vous empêchez l'accès, des restrictions de fonctionnement peuvent en résulter sur le site.",
          },
          { kind: "h", text: "Révocation du consentement :" },
          {
            kind: "p",
            text: "Vous pouvez empêcher le stockage des cookies par un paramétrage approprié de votre logiciel de navigation ; nous attirons toutefois votre attention sur le fait que dans ce cas, vous ne pourrez éventuellement pas utiliser toutes les fonctions de ce site dans leur intégralité. Vous pouvez en outre empêcher la collecte par Google des données générées par le cookie et relatives à votre utilisation du site (y compris votre adresse IP) ainsi que le traitement de ces données par Google en téléchargeant et en installant le module complémentaire de navigateur disponible au lien suivant : Module complémentaire de navigateur pour la désactivation de Google Analytics.",
          },
          {
            kind: "p",
            text: "En complément ou en alternative au module complémentaire de navigateur, vous pouvez empêcher le suivi par Google Analytics sur nos pages en cliquant sur ce lien. Un cookie de désactivation sera installé sur votre appareil. Cela empêche la collecte par Google Analytics pour ce site et ce navigateur à l'avenir, tant que le cookie reste installé dans votre navigateur.",
          },
          { kind: "h", text: "Profilage :" },
          {
            kind: "p",
            text: "À l'aide de l'outil de suivi Google Analytics, le comportement des visiteurs du site peut être évalué et les centres d'intérêt analysés. À cette fin, nous créons un profil utilisateur pseudonymisé.",
          },
        ],
      },
      {
        heading: "Utilisation de bibliothèques de scripts (Google Web Fonts)",
        blocks: [
          { kind: "h", text: "Nature et finalité du traitement :" },
          {
            kind: "p",
            text: "Afin de présenter nos contenus correctement et de manière graphiquement attrayante sur tous les navigateurs, nous utilisons sur ce site « Google Web Fonts » de Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ; ci-après « Google ») pour l'affichage des polices.",
          },
          {
            kind: "p",
            text: "Vous trouverez la politique de confidentialité de l'exploitant de la bibliothèque Google ici : https://www.google.com/policies/privacy/",
          },
          { kind: "h", text: "Base juridique :" },
          {
            kind: "p",
            text: "La base juridique de l'intégration de Google Web Fonts et du transfert de données associé à Google est votre consentement (art. 6 al. 1 let. a RGPD).",
          },
          { kind: "h", text: "Destinataires :" },
          {
            kind: "p",
            text: "L'appel des bibliothèques de scripts ou de polices déclenche automatiquement une connexion à l'exploitant de la bibliothèque. Il est théoriquement possible – mais actuellement aussi peu clair de savoir si et, le cas échéant, à quelles fins – que l'exploitant, en l'occurrence Google, collecte des données.",
          },
          { kind: "h", text: "Durée de conservation :" },
          {
            kind: "p",
            text: "Nous ne collectons aucune donnée à caractère personnel par l'intégration de Google Web Fonts.",
          },
          {
            kind: "p",
            text: "Vous trouverez de plus amples informations sur Google Web Fonts à l'adresse https://developers.google.com/fonts/faq et dans la politique de confidentialité de Google : https://www.google.com/policies/privacy/.",
          },
          { kind: "h", text: "Transfert vers des pays tiers :" },
          {
            kind: "p",
            text: "Google traite vos données aux États-Unis et a adhéré au EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Fourniture obligatoire ou requise :" },
          {
            kind: "p",
            text: "La fourniture de données à caractère personnel n'est ni légalement ni contractuellement requise. Toutefois, l'affichage correct des contenus avec des polices standard peut le cas échéant ne pas être possible.",
          },
          { kind: "h", text: "Révocation du consentement :" },
          {
            kind: "p",
            text: "Pour l'affichage des contenus, le langage de programmation JavaScript est régulièrement utilisé. Vous pouvez donc vous opposer au traitement des données en désactivant l'exécution de JavaScript dans votre navigateur ou en installant un bloqueur de JavaScript. Veuillez noter que cela peut entraîner des restrictions de fonctionnement sur le site.",
          },
        ],
      },
      {
        heading: "Utilisation de Google Maps",
        blocks: [
          { kind: "h", text: "Nature et finalité du traitement :" },
          {
            kind: "p",
            text: "Sur ce site, nous utilisons l'offre de Google Maps. Google Maps est exploité par Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (ci-après « Google »). Cela nous permet de vous afficher des cartes interactives directement sur le site et vous permet d'utiliser confortablement la fonction cartographique.",
          },
          {
            kind: "p",
            text: "Vous trouverez de plus amples informations sur le traitement des données par Google dans les notices de protection des données de Google. Vous pouvez également y modifier vos paramètres personnels de protection des données dans le centre de protection des données.",
          },
          {
            kind: "p",
            text: "Vous trouverez ici des instructions détaillées pour gérer vos propres données en relation avec les produits Google.",
          },
          { kind: "h", text: "Base juridique :" },
          {
            kind: "p",
            text: "La base juridique de l'intégration de Google Maps et du transfert de données associé à Google est votre consentement (art. 6 al. 1 let. a RGPD).",
          },
          { kind: "h", text: "Destinataires :" },
          {
            kind: "p",
            text: "Lors de la visite du site, Google reçoit l'information selon laquelle vous avez consulté la sous-page correspondante de notre site. Cela se produit indépendamment du fait que Google fournisse un compte utilisateur via lequel vous êtes connecté ou qu'il n'existe pas de compte utilisateur. Si vous êtes connecté à Google, vos données sont directement attribuées à votre compte.",
          },
          {
            kind: "p",
            text: "Si vous ne souhaitez pas l'attribution dans votre profil chez Google, vous devez vous déconnecter de Google avant d'activer le bouton. Google enregistre vos données sous forme de profils d'utilisation et les utilise à des fins de publicité, d'études de marché et/ou de conception de son site adaptée aux besoins. Une telle évaluation est effectuée notamment (même pour les utilisateurs non connectés) en vue de fournir une publicité adaptée aux besoins et d'informer d'autres utilisateurs du réseau social de vos activités sur notre site. Vous disposez d'un droit d'opposition à la création de ces profils d'utilisateur, que vous devez exercer auprès de Google.",
          },
          { kind: "h", text: "Durée de conservation :" },
          {
            kind: "p",
            text: "Nous ne collectons aucune donnée à caractère personnel par l'intégration de Google Maps.",
          },
          { kind: "h", text: "Transfert vers des pays tiers :" },
          {
            kind: "p",
            text: "Google traite vos données aux États-Unis et a adhéré au EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Révocation du consentement :" },
          {
            kind: "p",
            text: "Si vous ne souhaitez pas que Google collecte, traite ou utilise des données vous concernant via notre site, vous pouvez désactiver JavaScript dans les paramètres de votre navigateur. Dans ce cas, vous ne pouvez toutefois pas utiliser notre site ou seulement de manière limitée.",
          },
          { kind: "h", text: "Fourniture obligatoire ou requise :" },
          {
            kind: "p",
            text: "La fourniture de vos données à caractère personnel est volontaire, uniquement sur la base de votre consentement. Si vous empêchez l'accès, des restrictions de fonctionnement peuvent en résulter sur le site.",
          },
        ],
      },
      {
        heading: "Chiffrement SSL",
        blocks: [
          {
            kind: "p",
            text: "Pour protéger la sécurité de vos données lors de la transmission, nous utilisons des procédés de chiffrement à la pointe de la technique (par ex. SSL) via HTTPS.",
          },
        ],
      },
      {
        heading: "Modification de notre politique de confidentialité",
        blocks: [
          {
            kind: "p",
            text: "Nous nous réservons le droit d'adapter cette politique de confidentialité afin qu'elle soit toujours conforme aux exigences légales actuelles ou pour mettre en œuvre dans la politique de confidentialité des modifications de nos prestations, par ex. lors de l'introduction de nouveaux services. Lors de votre prochaine visite, la nouvelle politique de confidentialité s'appliquera.",
          },
        ],
      },
    ],
    footer:
      "Cette politique de confidentialité a été élaborée avec l'aide d'activeMind AG, les experts en délégués externes à la protection des données (Version #2019-04-10).",
  },

  it: {
    intro: [
      {
        kind: "p",
        text: "Il titolare del trattamento ai sensi delle leggi sulla protezione dei dati, in particolare del Regolamento generale sulla protezione dei dati dell'UE (GDPR), è:",
      },
      { kind: "addr", lines: ADDRESS_LINES },
    ],
    sections: [
      {
        heading: "I vostri diritti come interessato",
        blocks: [
          {
            kind: "p",
            text: "Ai recapiti sopra indicati potete esercitare in qualsiasi momento i seguenti diritti:",
          },
          {
            kind: "ul",
            items: [
              "Diritto di accesso ai dati conservati presso di noi e al loro trattamento (art. 15 GDPR),",
              "Rettifica di dati personali inesatti (art. 16 GDPR),",
              "Cancellazione dei dati conservati presso di noi (art. 17 GDPR),",
              "Limitazione del trattamento, qualora non possiamo ancora cancellare i vostri dati a causa di obblighi di legge (art. 18 GDPR),",
              "Opposizione al trattamento dei vostri dati presso di noi (art. 21 GDPR), e",
              "Portabilità dei dati, qualora abbiate acconsentito al trattamento dei dati o stipulato un contratto con noi (art. 20 GDPR).",
            ],
          },
          {
            kind: "p",
            text: "Se ci avete fornito il vostro consenso, potete revocarlo in qualsiasi momento con effetto per il futuro.",
          },
        ],
      },
      {
        heading: "Raccolta di informazioni generali durante la visita del nostro sito",
        blocks: [
          { kind: "h", text: "Tipo e finalità del trattamento:" },
          {
            kind: "p",
            text: "Quando accedete al nostro sito, ovvero quando non vi registrate o non trasmettete in altro modo informazioni, vengono automaticamente raccolte informazioni di carattere generale. Tali informazioni (file di log del server) comprendono ad esempio il tipo di browser web, il sistema operativo utilizzato, il nome di dominio del vostro provider di servizi internet, il vostro indirizzo IP e simili.",
          },
          {
            kind: "p",
            text: "Vengono trattati in particolare per i seguenti scopi:",
          },
          {
            kind: "ul",
            items: [
              "garantire una connessione regolare al sito,",
              "garantire un utilizzo regolare del nostro sito,",
              "valutare la sicurezza e la stabilità del sistema, e",
              "per ulteriori scopi amministrativi.",
            ],
          },
          {
            kind: "p",
            text: "Non utilizziamo i vostri dati per trarre conclusioni sulla vostra persona. Eventualmente, le informazioni di questo tipo vengono valutate da noi in modo statistico al fine di ottimizzare la nostra presenza in internet e la tecnologia che ne sta alla base.",
          },
          { kind: "h", text: "Base giuridica:" },
          {
            kind: "p",
            text: "Il trattamento avviene ai sensi dell'art. 6, par. 1, lett. f) GDPR sulla base del nostro legittimo interesse al miglioramento della stabilità e della funzionalità del nostro sito.",
          },
          { kind: "h", text: "Destinatari:" },
          {
            kind: "p",
            text: "I destinatari dei dati sono eventualmente fornitori di servizi tecnici che operano come responsabili del trattamento per la gestione e la manutenzione del nostro sito.",
          },
          { kind: "h", text: "Periodo di conservazione:" },
          {
            kind: "p",
            text: "I dati vengono cancellati non appena non sono più necessari per la finalità per cui sono stati raccolti. Per i dati che servono alla messa a disposizione del sito ciò avviene di norma al termine della rispettiva sessione.",
          },
          { kind: "h", text: "Conferimento obbligatorio o necessario:" },
          {
            kind: "p",
            text: "Il conferimento dei dati personali sopra indicati non è prescritto né per legge né contrattualmente. Tuttavia, senza l'indirizzo IP non è garantito il servizio e la funzionalità del nostro sito. Inoltre, alcuni servizi e funzioni potrebbero non essere disponibili o essere limitati. Per questo motivo è esclusa l'opposizione.",
          },
        ],
      },
      {
        heading: "Cookie",
        blocks: [
          { kind: "h", text: "Tipo e finalità del trattamento:" },
          {
            kind: "p",
            text: "Come molti altri siti web, anche noi utilizziamo i cosiddetti « cookie ». I cookie sono piccoli file di testo che vengono memorizzati sul vostro dispositivo (laptop, tablet, smartphone o simili) quando visitate il nostro sito.",
          },
          {
            kind: "p",
            text: "In questo modo otteniamo determinati dati come ad esempio l'indirizzo IP, il browser utilizzato e il sistema operativo.",
          },
          {
            kind: "p",
            text: "I cookie non possono essere utilizzati per avviare programmi o trasferire virus su un computer. Sulla base delle informazioni contenute nei cookie possiamo facilitarvi la navigazione e consentire la corretta visualizzazione delle nostre pagine.",
          },
          {
            kind: "p",
            text: "In nessun caso i dati da noi raccolti vengono trasmessi a terzi né vengono collegati a dati personali senza il vostro consenso.",
          },
          {
            kind: "p",
            text: "Naturalmente potete in linea di massima visualizzare il nostro sito anche senza cookie. I browser internet sono regolarmente impostati in modo da accettare i cookie. In generale, potete disattivare l'utilizzo dei cookie in qualsiasi momento tramite le impostazioni del vostro browser. Vi preghiamo di utilizzare le funzioni di aiuto del vostro browser per scoprire come modificare queste impostazioni. Vi preghiamo di tenere presente che alcune funzioni del nostro sito potrebbero non funzionare se avete disattivato l'utilizzo dei cookie.",
          },
          { kind: "h", text: "Periodo di conservazione e cookie utilizzati:" },
          {
            kind: "p",
            text: "Nella misura in cui ci consentite l'utilizzo dei cookie tramite le impostazioni del browser o il consenso, sulle nostre pagine possono essere utilizzati cookie.",
          },
          {
            kind: "p",
            text: "Nella misura in cui questi cookie possono (anche) riguardare dati personali, vi informiamo al riguardo nelle sezioni seguenti.",
          },
          {
            kind: "p",
            text: "Tramite le impostazioni del vostro browser potete cancellare singoli cookie o l'intero archivio di cookie. Inoltre, vengono fornite informazioni e istruzioni su come cancellare questi cookie o bloccarne preventivamente la memorizzazione. A seconda del fornitore del vostro browser troverete le informazioni necessarie ai seguenti link:",
          },
          { kind: "links", items: BROWSER_LINKS },
        ],
      },
      {
        heading: "Erogazione di prestazioni a pagamento",
        blocks: [
          { kind: "h", text: "Tipo e finalità del trattamento:" },
          {
            kind: "p",
            text: "Per l'erogazione di prestazioni a pagamento richiediamo dati aggiuntivi, ad esempio dati di pagamento, al fine di poter eseguire il vostro ordine.",
          },
          { kind: "h", text: "Base giuridica:" },
          {
            kind: "p",
            text: "Il trattamento dei dati necessari per la conclusione del contratto si basa sull'art. 6, par. 1, lett. b) GDPR.",
          },
          { kind: "h", text: "Destinatari:" },
          {
            kind: "p",
            text: "I destinatari dei dati sono eventualmente responsabili del trattamento.",
          },
          { kind: "h", text: "Periodo di conservazione:" },
          {
            kind: "p",
            text: "Conserviamo questi dati nei nostri sistemi fino alla scadenza dei termini legali di conservazione. Tali termini sono di norma pari a 6 o 10 anni per ragioni di corretta tenuta della contabilità e per requisiti di natura fiscale.",
          },
          { kind: "h", text: "Conferimento obbligatorio o necessario:" },
          {
            kind: "p",
            text: "Il conferimento dei vostri dati personali è volontario. Senza il conferimento dei vostri dati personali non possiamo concedervi l'accesso ai nostri contenuti e servizi.",
          },
        ],
      },
      {
        heading: "Newsletter",
        blocks: [
          { kind: "h", text: "Tipo e finalità del trattamento:" },
          {
            kind: "p",
            text: "I vostri dati vengono utilizzati esclusivamente per inviarvi via e-mail la newsletter da voi sottoscritta. L'indicazione del vostro nome avviene per potervi rivolgere personalmente nella newsletter ed eventualmente identificarvi qualora intendiate esercitare i vostri diritti come interessato.",
          },
          {
            kind: "p",
            text: "Per ricevere la newsletter è sufficiente l'indicazione del vostro indirizzo e-mail. Al momento dell'iscrizione alla nostra newsletter, i dati da voi indicati vengono utilizzati esclusivamente per questa finalità. Gli abbonati possono inoltre essere informati via e-mail su circostanze rilevanti per il servizio o l'iscrizione (ad es. modifiche all'offerta della newsletter o circostanze tecniche).",
          },
          {
            kind: "p",
            text: "Per una registrazione efficace abbiamo bisogno di un indirizzo e-mail valido. Per verificare che l'iscrizione sia effettivamente effettuata dal titolare di un indirizzo e-mail, utilizziamo la procedura del « double opt-in ». A tal fine registriamo l'ordine della newsletter, l'invio di un'e-mail di conferma e la ricezione della risposta richiesta. Non vengono raccolti ulteriori dati. I dati vengono utilizzati esclusivamente per l'invio della newsletter e non vengono trasmessi a terzi.",
          },
          { kind: "h", text: "Base giuridica:" },
          {
            kind: "p",
            text: "Sulla base del vostro consenso espresso (art. 6, par. 1, lett. a) GDPR), vi inviamo regolarmente la nostra newsletter o informazioni comparabili via e-mail all'indirizzo e-mail da voi indicato.",
          },
          {
            kind: "p",
            text: "Il consenso alla memorizzazione dei vostri dati personali e al loro utilizzo per l'invio della newsletter può essere revocato in qualsiasi momento con effetto per il futuro. In ogni newsletter è presente un link corrispondente. Inoltre potete cancellarvi in qualsiasi momento direttamente su questo sito o comunicarci la vostra revoca tramite la possibilità di contatto indicata alla fine di queste informative sulla privacy.",
          },
          { kind: "h", text: "Destinatari:" },
          {
            kind: "p",
            text: "I destinatari dei dati sono eventualmente responsabili del trattamento.",
          },
          { kind: "h", text: "Periodo di conservazione:" },
          {
            kind: "p",
            text: "In questo contesto i dati vengono trattati solo finché esiste il relativo consenso. Successivamente vengono cancellati.",
          },
          { kind: "h", text: "Conferimento obbligatorio o necessario:" },
          {
            kind: "p",
            text: "Il conferimento dei vostri dati personali è volontario, esclusivamente sulla base del vostro consenso. Senza un consenso esistente non possiamo purtroppo inviarvi la nostra newsletter.",
          },
        ],
      },
      {
        heading: "Modulo di contatto",
        blocks: [
          { kind: "h", text: "Tipo e finalità del trattamento:" },
          {
            kind: "p",
            text: "I dati da voi inseriti vengono memorizzati ai fini della comunicazione individuale con voi. A tal fine sono necessari l'indicazione di un indirizzo e-mail valido e del vostro nome. Questi servono per attribuire la richiesta e per la successiva risposta. L'indicazione di ulteriori dati è facoltativa.",
          },
          { kind: "h", text: "Base giuridica:" },
          {
            kind: "p",
            text: "Il trattamento dei dati inseriti nel modulo di contatto avviene sulla base di un legittimo interesse (art. 6, par. 1, lett. f) GDPR).",
          },
          {
            kind: "p",
            text: "Mettendo a disposizione il modulo di contatto desideriamo offrirvi la possibilità di contattarci in modo semplice. I dati da voi forniti vengono memorizzati ai fini dell'elaborazione della richiesta e per eventuali domande successive.",
          },
          {
            kind: "p",
            text: "Qualora ci contattiate per richiedere un'offerta, il trattamento dei dati inseriti nel modulo di contatto avviene per l'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b) GDPR).",
          },
          { kind: "h", text: "Destinatari:" },
          {
            kind: "p",
            text: "I destinatari dei dati sono eventualmente responsabili del trattamento.",
          },
          { kind: "h", text: "Periodo di conservazione:" },
          {
            kind: "p",
            text: "I dati vengono cancellati al più tardi 6 mesi dopo l'elaborazione della richiesta.",
          },
          {
            kind: "p",
            text: "Qualora si instauri un rapporto contrattuale, siamo soggetti ai termini legali di conservazione previsti dal codice di commercio e cancelliamo i vostri dati alla scadenza di tali termini.",
          },
          { kind: "h", text: "Conferimento obbligatorio o necessario:" },
          {
            kind: "p",
            text: "Il conferimento dei vostri dati personali è volontario. Tuttavia, possiamo elaborare la vostra richiesta solo se ci comunicate il vostro nome, il vostro indirizzo e-mail e il motivo della richiesta.",
          },
        ],
      },
      {
        heading: "Utilizzo di Google Analytics",
        blocks: [
          { kind: "h", text: "Tipo e finalità del trattamento:" },
          {
            kind: "p",
            text: "Questo sito utilizza Google Analytics, un servizio di analisi web di Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (di seguito: « Google »). Google Analytics utilizza i cosiddetti « cookie », ovvero file di testo che vengono memorizzati sul vostro computer e che permettono un'analisi del vostro utilizzo del sito. Le informazioni generate dal cookie sul vostro utilizzo di questo sito vengono di norma trasmesse a un server di Google negli Stati Uniti e ivi memorizzate. A causa dell'attivazione dell'anonimizzazione IP su queste pagine, il vostro indirizzo IP verrà tuttavia preventivamente abbreviato da Google all'interno degli Stati membri dell'Unione europea o in altri Stati contraenti dell'Accordo sullo Spazio economico europeo. Solo in casi eccezionali l'indirizzo IP completo viene trasmesso a un server di Google negli Stati Uniti e ivi abbreviato. Per conto del gestore di questo sito Google utilizzerà queste informazioni per valutare il vostro utilizzo del sito, per redigere rapporti sulle attività del sito e per fornire al gestore del sito ulteriori servizi connessi all'utilizzo del sito e di internet. L'indirizzo IP trasmesso dal vostro browser nell'ambito di Google Analytics non viene messo in relazione con altri dati di Google.",
          },
          {
            kind: "p",
            text: "Le finalità del trattamento dei dati consistono nella valutazione dell'utilizzo del sito e nella redazione di rapporti sulle attività sul sito. Sulla base dell'utilizzo del sito e di internet vengono poi forniti ulteriori servizi connessi.",
          },
          { kind: "h", text: "Base giuridica:" },
          {
            kind: "p",
            text: "Il trattamento dei dati avviene sulla base del consenso dell'utente (art. 6, par. 1, lett. a) GDPR).",
          },
          { kind: "h", text: "Destinatari:" },
          {
            kind: "p",
            text: "Il destinatario dei dati è Google in qualità di responsabile del trattamento. A tal fine abbiamo stipulato con Google il relativo contratto di trattamento.",
          },
          { kind: "h", text: "Periodo di conservazione:" },
          {
            kind: "p",
            text: "La cancellazione dei dati avviene non appena non sono più necessari per le nostre finalità di registrazione.",
          },
          { kind: "h", text: "Trasferimento verso paesi terzi:" },
          {
            kind: "p",
            text: "Google tratta i vostri dati negli Stati Uniti e ha aderito al EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Conferimento obbligatorio o necessario:" },
          {
            kind: "p",
            text: "Il conferimento dei vostri dati personali è volontario, esclusivamente sulla base del vostro consenso. Se impedite l'accesso, ciò può comportare limitazioni di funzionalità sul sito.",
          },
          { kind: "h", text: "Revoca del consenso:" },
          {
            kind: "p",
            text: "Potete impedire la memorizzazione dei cookie tramite un'apposita impostazione del software del vostro browser; vi segnaliamo tuttavia che in tal caso potreste non essere in grado di utilizzare tutte le funzioni di questo sito nella loro interezza. Potete inoltre impedire la rilevazione dei dati generati dal cookie e relativi al vostro utilizzo del sito (compreso il vostro indirizzo IP) a Google nonché il trattamento di tali dati da parte di Google scaricando e installando il plug-in del browser disponibile al seguente link: Componente aggiuntivo del browser per la disattivazione di Google Analytics.",
          },
          {
            kind: "p",
            text: "In aggiunta o in alternativa al componente aggiuntivo del browser, potete impedire il tracciamento da parte di Google Analytics sulle nostre pagine cliccando su questo link. Verrà installato un cookie di opt-out sul vostro dispositivo. In tal modo verrà impedita in futuro la rilevazione da parte di Google Analytics per questo sito e per questo browser, finché il cookie rimane installato nel vostro browser.",
          },
          { kind: "h", text: "Profilazione:" },
          {
            kind: "p",
            text: "Con l'aiuto dello strumento di tracciamento Google Analytics è possibile valutare il comportamento dei visitatori del sito e analizzarne gli interessi. A tale scopo creiamo un profilo utente pseudonimo.",
          },
        ],
      },
      {
        heading: "Utilizzo di librerie di script (Google Web Fonts)",
        blocks: [
          { kind: "h", text: "Tipo e finalità del trattamento:" },
          {
            kind: "p",
            text: "Per visualizzare correttamente e in modo graficamente accattivante i nostri contenuti su tutti i browser, utilizziamo su questo sito « Google Web Fonts » di Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; di seguito « Google ») per la visualizzazione dei caratteri.",
          },
          {
            kind: "p",
            text: "L'informativa sulla privacy del gestore della libreria Google è disponibile qui: https://www.google.com/policies/privacy/",
          },
          { kind: "h", text: "Base giuridica:" },
          {
            kind: "p",
            text: "La base giuridica per l'integrazione di Google Web Fonts e per il connesso trasferimento di dati a Google è il vostro consenso (art. 6, par. 1, lett. a) GDPR).",
          },
          { kind: "h", text: "Destinatari:" },
          {
            kind: "p",
            text: "Il richiamo di librerie di script o di font genera automaticamente una connessione con il gestore della libreria. Teoricamente è possibile – allo stato attuale tuttavia non è chiaro se e a quali fini – che il gestore, in questo caso Google, raccolga dati.",
          },
          { kind: "h", text: "Periodo di conservazione:" },
          {
            kind: "p",
            text: "Non raccogliamo dati personali tramite l'integrazione di Google Web Fonts.",
          },
          {
            kind: "p",
            text: "Ulteriori informazioni su Google Web Fonts sono disponibili all'indirizzo https://developers.google.com/fonts/faq e nell'informativa sulla privacy di Google: https://www.google.com/policies/privacy/.",
          },
          { kind: "h", text: "Trasferimento verso paesi terzi:" },
          {
            kind: "p",
            text: "Google tratta i vostri dati negli Stati Uniti e ha aderito al EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Conferimento obbligatorio o necessario:" },
          {
            kind: "p",
            text: "Il conferimento dei dati personali non è prescritto né per legge né contrattualmente. Tuttavia, la corretta visualizzazione dei contenuti tramite caratteri standard potrebbe non essere possibile.",
          },
          { kind: "h", text: "Revoca del consenso:" },
          {
            kind: "p",
            text: "Per la visualizzazione dei contenuti viene regolarmente utilizzato il linguaggio di programmazione JavaScript. Potete pertanto opporvi al trattamento dei dati disattivando l'esecuzione di JavaScript nel vostro browser o installando un blocco JavaScript. Vi preghiamo di tenere presente che ciò può comportare limitazioni di funzionalità sul sito.",
          },
        ],
      },
      {
        heading: "Utilizzo di Google Maps",
        blocks: [
          { kind: "h", text: "Tipo e finalità del trattamento:" },
          {
            kind: "p",
            text: "Su questo sito utilizziamo l'offerta di Google Maps. Google Maps è gestito da Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (di seguito « Google »). Ciò ci consente di mostrarvi mappe interattive direttamente sul sito e vi permette di utilizzare comodamente la funzione cartografica.",
          },
          {
            kind: "p",
            text: "Ulteriori informazioni sul trattamento dei dati da parte di Google sono disponibili nelle informative sulla privacy di Google. Lì potete anche modificare le vostre impostazioni personali sulla privacy nel centro per la privacy.",
          },
          {
            kind: "p",
            text: "Istruzioni dettagliate sulla gestione dei propri dati in relazione ai prodotti Google sono disponibili qui.",
          },
          { kind: "h", text: "Base giuridica:" },
          {
            kind: "p",
            text: "La base giuridica per l'integrazione di Google Maps e per il connesso trasferimento di dati a Google è il vostro consenso (art. 6, par. 1, lett. a) GDPR).",
          },
          { kind: "h", text: "Destinatari:" },
          {
            kind: "p",
            text: "Visitando il sito, Google riceve l'informazione che avete consultato la corrispondente sottopagina del nostro sito. Ciò avviene indipendentemente dal fatto che Google fornisca un account utente tramite il quale siete connessi o che non esista un account utente. Se siete connessi a Google, i vostri dati vengono associati direttamente al vostro account.",
          },
          {
            kind: "p",
            text: "Se non desiderate l'associazione al vostro profilo presso Google, dovete disconnettervi da Google prima di attivare il pulsante. Google memorizza i vostri dati come profili di utilizzo e li utilizza per finalità di pubblicità, ricerche di mercato e/o configurazione del proprio sito in base alle esigenze. Tale valutazione avviene in particolare (anche per gli utenti non connessi) per fornire pubblicità mirata e per informare altri utenti del social network sulle vostre attività sul nostro sito. Avete un diritto di opposizione alla creazione di questi profili utente, che dovete esercitare presso Google.",
          },
          { kind: "h", text: "Periodo di conservazione:" },
          {
            kind: "p",
            text: "Non raccogliamo dati personali tramite l'integrazione di Google Maps.",
          },
          { kind: "h", text: "Trasferimento verso paesi terzi:" },
          {
            kind: "p",
            text: "Google tratta i vostri dati negli Stati Uniti e ha aderito al EU-US Privacy Shield https://www.privacyshield.gov/EU-US-Framework.",
          },
          { kind: "h", text: "Revoca del consenso:" },
          {
            kind: "p",
            text: "Se non desiderate che Google raccolga, tratti o utilizzi dati su di voi tramite la nostra presenza in internet, potete disattivare JavaScript nelle impostazioni del vostro browser. In tal caso, però, non potete utilizzare il nostro sito o potete utilizzarlo solo in modo limitato.",
          },
          { kind: "h", text: "Conferimento obbligatorio o necessario:" },
          {
            kind: "p",
            text: "Il conferimento dei vostri dati personali è volontario, esclusivamente sulla base del vostro consenso. Se impedite l'accesso, ciò può comportare limitazioni di funzionalità sul sito.",
          },
        ],
      },
      {
        heading: "Crittografia SSL",
        blocks: [
          {
            kind: "p",
            text: "Per proteggere la sicurezza dei vostri dati durante la trasmissione, utilizziamo procedure di crittografia all'avanguardia (ad es. SSL) tramite HTTPS.",
          },
        ],
      },
      {
        heading: "Modifica della nostra informativa sulla privacy",
        blocks: [
          {
            kind: "p",
            text: "Ci riserviamo il diritto di adeguare questa informativa sulla privacy affinché sia sempre conforme ai requisiti legali in vigore o per attuare nell'informativa modifiche delle nostre prestazioni, ad esempio in caso di introduzione di nuovi servizi. Per la vostra prossima visita varrà quindi la nuova informativa.",
          },
        ],
      },
    ],
    footer:
      "Questa informativa sulla privacy è stata redatta con il supporto di activeMind AG, esperti per responsabili esterni della protezione dei dati (Versione #2019-04-10).",
  },
};

interface PrivacyPolicyInnerProps {
  locale: Locale;
}

function renderBlock(block: Block, key: number) {
  switch (block.kind) {
    case "p":
      return (
        <p key={key} className="disc mb--15">
          {block.text}
        </p>
      );
    case "h":
      return (
        <h4 key={key} className="title mt--20 mb--10">
          {block.text}
        </h4>
      );
    case "ul":
      return (
        <ul key={key} className="mb--15" style={{ paddingLeft: "1.25rem" }}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "addr":
      return (
        <address
          key={key}
          className="disc mb--20"
          style={{ fontStyle: "normal", whiteSpace: "pre-line" }}
        >
          {block.lines.join("\n")}
        </address>
      );
    case "links":
      return (
        <ul key={key} className="mb--15" style={{ paddingLeft: "1.25rem" }}>
          {block.items.map((item, i) => (
            <li key={i}>
              {item.label}:{" "}
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.href}
              </a>
            </li>
          ))}
        </ul>
      );
  }
}

function PrivacyPolicyInner({ locale }: PrivacyPolicyInnerProps) {
  const content = copy[locale];

  return (
    <div className="rts-faq-area rts-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {content.intro.map((b, i) => renderBlock(b, i))}
            {content.sections.map((section, si) => (
              <div key={si} className="mb--40">
                <h3 className="title mt--30">{section.heading}</h3>
                {section.blocks.map((b, bi) => renderBlock(b, bi))}
              </div>
            ))}
            <p className="disc mt--40" style={{ fontStyle: "italic" }}>
              {content.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyInner;
