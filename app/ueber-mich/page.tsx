import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactCta } from '@/components/contact-cta'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Über mich I Behandlungsphilosophie I Praxis Aldinger',
  description:
    'Behandlungsphilosophie, Verfahren & Methoden, berufliche Tätigkeit und Weiterbildungen von M.Sc. Psych. Lisa-Maria Aldinger, Psychologische Psychotherapeutin in Berlin-Pankow.',
}

const taetigkeiten = [
  {
    zeit: 'Seit 2024',
    text: 'Therapeutische Leitung und Aufbau eines Traumatherapieprogramms in der Tagesklinik für Posttraumatische Belastungsstörungen und Junge Erwachsene, St. Joseph-Klinikum Berlin',
  },
  {
    zeit: '2023-2024',
    text: 'Tätigkeit als Psychotherapeutin, Tagesklinik mit Schwerpunkt DBT, Fliedner Klinik Berlin',
  },
  {
    zeit: 'Seit 2020',
    text: 'Ambulante psychotherapeutische Tätigkeit in eigener Praxis',
  },
  {
    zeit: '2015 - 2019',
    text: 'Psychologische Beratung bei LARA – Fachstelle gegen sexualisierte Gewalt an Frauen*',
  },
]

const weiterbildungen = [
  {
    zeit: '2026',
    text: 'Fortbildung in MDMA-assistierter Psychotherapie und Forschung, MAPS (Multidisciplinary Association for Psychedelic Studies), Kiental, Schweiz',
  },
  {
    zeit: '2024/2025',
    text: 'Fortbildung in Ketamin-assistierter Psychotherapie',
  },
  {
    zeit: '2019',
    text: 'Weiterbildung Gruppenpsychotherapie',
  },
  {
    zeit: '2019',
    text: 'Weiterbildung in EMDR (Eye Movement Desensitization and Reprocessing), Institut für Traumatherapie, Berlin',
  },
  {
    zeit: '2016-2020',
    text: 'Ausbildung zur Psychologischen Psychotherapeutin mit Schwerpunkt Verhaltenstherapie, Berliner Fortbildungsakademie, Berlin',
  },
  {
    zeit: '2014-2016',
    text: 'Master of Science in Klinischer Psychologie, Freie Universität Berlin',
  },
  {
    zeit: '2010-2014',
    text: 'Studium Bachelor of Science Psychologie, Humboldt Universität zu Berlin und University of the Western Cape, Kapstadt',
  },
]

export default function UeberMichPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Praxis Aldinger" title="Über mich" />

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid items-stretch gap-10 lg:grid-cols-[3fr_2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                Behandlungsphilosophie
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-pretty">
                <p>
                  Seit mehr als zehn Jahren begleite ich Menschen in
                  psychotherapeutischen Veränderungsprozessen. Eine von
                  Transparenz, Wertschätzung und Authentizität geprägte
                  therapeutische Beziehung bildet die Grundlage unserer
                  Zusammenarbeit.
                </p>
                <p>
                  Dabei verbinde ich evidenzbasierte Methoden der integrativen
                  Verhaltenstherapie mit einem präzisen Blick auf Ihre
                  individuellen Wünsche und Ziele. Während wir uns Ihren
                  Belastungen zuwenden, sollen auch ihre Stärken, die Ihnen bei
                  Wachstum und Entwicklung helfen, Raum in der Therapie finden.
                </p>
                <p>
                  Psychische Belastungen entstehen jedoch nicht in einem
                  Vakuum. Mir ist es in der Therapie ein wichtiges Anliegen,
                  eine feministische und gesellschaftskritische Perspektive
                  einzunehmen. Das bedeutet für mich, systemische Ursachen,
                  Diskriminierungserfahrungen sowie einengende gesellschaftliche
                  Rollenbilder – von denen alle Geschlechter betroffen sind –
                  mit in den Blick zu nehmen.
                </p>
              </div>
            </div>
            <div className="relative min-h-96 overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/images/portrait-aldinger.jpg"
                alt="Porträt von Lisa-Maria Aldinger, Psychologische Psychotherapeutin"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-secondary/60">
          <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold text-primary">
              Verfahren &amp; Methoden
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-pretty">
              <p>
                Ich bin ausgebildet in kognitiver Verhaltenstherapie,
                Schematherapie und Dialektisch Behavioralen Therapie (DBT nach
                Linehan) sowie in verschiedenen traumatherapeutischen
                Verfahren, darunter EMDR, Narrative Expositionstherapie (NET)
                und Imagery Rescripting and Reprocessing Therapy (IRRT).
                Körperorientierte und achtsamkeitsbasierte Methoden ergänzen
                meine Arbeit.
              </p>
              <p>
                Außerdem bin ich fortgebildet in Transitionsbegleitung für
                trans* und nonbinäre Menschen sowie in der Unterstützung von
                Menschen, die Erfahrungen mit außergewöhnlichen
                Bewusstseinszuständen gemacht haben und Hilfe bei deren
                Verarbeitung suchen.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-primary md:text-3xl">
                Bisherige berufliche Tätigkeit
              </h2>
              <ul className="mt-6 space-y-5">
                {taetigkeiten.map((item) => (
                  <li
                    key={item.zeit + item.text}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <p className="text-sm font-medium tracking-wide text-accent uppercase">
                      {item.zeit}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary md:text-3xl">
                Aus- und Weiterbildungen
              </h2>
              <ul className="mt-6 space-y-5">
                {weiterbildungen.map((item) => (
                  <li
                    key={item.zeit + item.text}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <p className="text-sm font-medium tracking-wide text-accent uppercase">
                      {item.zeit}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16 md:px-6">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Mitgliedschaften
          </h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 leading-relaxed">
            <li>Mitglied der Psychotherapeutenkammer Berlin</li>
            <li>
              Mitglied der Deutschen Psychotherapeutenvereinigung (DPtV)
            </li>
            <li>Eintrag ins Arztregister der KV Berlin</li>
            <li>Mitglied der OPEN Foundation</li>
          </ul>
        </section>

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
