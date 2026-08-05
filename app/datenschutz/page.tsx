import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Psychotherapie Berlin-Pankow",
  description: "Datenschutzerklärung der Privatpraxis für Psychotherapie Lisa-Maria Aldinger, Berlin-Pankow.",
}

const sections: Array<{ heading: string; paragraphs: string[] }> = [
  {
    heading: "Welche personenbezogenen Daten werden erhoben?",
    paragraphs: [
      "Es werden personenbezogene Daten nur dann erhoben und genutzt, wenn ein gesetzlicher Grund für die Erhebung und Nutzung vorliegt. Wir erheben und verwenden personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Webseite sowie unserer Inhalte und Leistungen erforderlich ist.",
      "Als personenbezogene Daten gelten sämtliche Informationen, die dazu dienen, einen Rückschluss auf Ihre Person zuzulassen (z.B. Vor- und Nachname, E-Mail-Adresse, Telefonnummer). Aufgrund Ihrer freiwilligen Eingaben auf der Webseite erheben wir Daten auf dem Kontaktformular (Vor- und Nachname und Ihre E-Mail-Adresse).",
      "Die von Ihnen eingegebenen Daten dienen alleine der Kontaktaufnahme und werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Weitere Daten erheben wir nicht.",
    ],
  },
  {
    heading: "Welche Informationen werden noch erfasst?",
    paragraphs: [
      "Beim Aufruf der Webseite wird Ihre IP-Adresse mit dem Zeitpunkt und Inhalt Ihres Abrufs einschließlich der übertragenen Datenmenge und der Meldung, ob der Abruf erfolgreich war, erfasst. Die vorübergehende Speicherung der IP-Adresse erfolgt, um die Funktionsfähigkeit der Webseite sicherzustellen. Diese Daten werden nach Ende des Zugriffs auf die Webseite gelöscht, weil mit der Erreichung des Zweckes die Erhebung nicht mehr erforderlich ist.",
    ],
  },
  {
    heading: "Auf welche Weise werden Daten erfasst?",
    paragraphs: [
      "Die Daten, die bei jedem Zugriff der Seite erhoben werden, werden automatisch protokolliert; ansonsten nur aufgrund Ihrer Eingabe und beim Bestellservice durch ein temporäres Cookie.",
    ],
  },
  {
    heading: "Wofür werden die Daten genutzt?",
    paragraphs: [
      "Die Daten werden ausschließlich zur Bereitstellung, Optimierung und Sicherheit des Internetangebots genutzt. Mit Ihrer Einwilligung werden Ihre Daten nur zur Entgegennahme Ihrer Mitteilung genutzt.",
    ],
  },
  {
    heading: "Die Daten werden nicht genutzt …",
    paragraphs: [
      "Zur Profilbildung, zu Werbezwecken und werden nicht an Dritte weitergegeben.",
    ],
  },
  {
    heading: "Welche Rechte hat der Besucher der Webseite?",
    paragraphs: [
      "Auskunft, Löschung, Berichtigung, Widerspruch. Ihre Rechte können Sie schriftlich oder per E-Mail gegenüber der im Impressum genannten Stelle geltend machen.",
      "Ungeachtet dessen haben Sie das Recht auf Beschwerde bei einer Aufsichtsbehörde ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts der mutmaßlichen Datenschutzverletzung, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Datenschutzgrundverordnung verstößt.",
    ],
  },
  {
    heading: "Verwendung von Cookies",
    paragraphs: [
      "In bestimmten Fällen werden Cookies verwendet. Ruft ein Nutzer eine Webseite auf, kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden, die beim erneuten Aufruf der Webseite eine eindeutige Identifizierung ermöglicht. Cookies enthalten allerdings keine personenbezogenen Daten und werden nach Ablauf der Sitzung automatisch gelöscht. Im Fall einer Verlinkung können Cookies von Drittanbietern zum Einsatz kommen, ohne dass wir Sie darauf ausdrücklich hinweisen können.",
      "Die gängigen Browser erlauben es, die Verarbeitung solcher Cookies festzulegen, so dass Sie das Speichern dieser Cookies in Ihrem Internetbrowser deaktivieren bzw. die Art der Verarbeitung durch Ihren Browser einstellen können. Bei der Deaktivierung ist nicht gewährleistet, dass Sie auf alle Funktionen dieser Webseite ohne Einschränkungen zugreifen können.",
    ],
  },
  {
    heading: "Hinweis auf Verschlüsselung",
    paragraphs: [
      "Bei der Übertragung Ihrer Daten im Internet besteht die Möglichkeit, dass diese durch Unbefugte zur Kenntnis genommen oder verändert werden können.",
    ],
  },
]

export default function DatenschutzPage() {
  return (
    <>
      <PageHero title="Datenschutzerklärung" image="/images/about-leaves.png" imageAlt="" />

      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="flex flex-col gap-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif text-2xl text-foreground text-balance">
                {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
