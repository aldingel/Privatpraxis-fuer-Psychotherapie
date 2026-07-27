import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Gruppentherapie I Psychotherapie Praxis Aldinger Berlin Pankow',
  description:
    'Gruppentherapie in Berlin-Pankow: Ablauf einer Gruppentherapie und aktuelle Schematherapie-Gruppe in der Privatpraxis für Psychotherapie Lisa-Maria Aldinger.',
}

export default function GruppentherapiePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Behandlungsangebot" title="Gruppentherapie" />

        <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
          <h2 className="text-3xl font-semibold text-primary">
            Wie läuft eine Gruppentherapie ab?
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-pretty">
            <p>
              Zuerst treffen wir uns zu einem Vorgespräch, damit ich Ihre
              persönliche Situation kennenlernen und Sie in der Gruppe
              individuell begleiten kann.
            </p>
            <p>
              In den darauf folgenden Gruppensitzungen erleben Sie den
              therapeutischen Prozess gemeinsam mit anderen. Studienergebnisse
              zeigen, dass Gruppentherapie genauso effektiv ist wie
              Einzeltherapie. Das gemeinsame Erarbeiten der Themen ermöglicht
              ein tiefgreifendes Verständnis der eigenen Muster und
              Verhaltensweisen. Durch den Austausch in der Gruppe erkennen
              Sie, dass andere ähnliche Herausforderungen haben, was zu einem
              Gefühl von Gemeinschaft und gegenseitigem Verständnis führt. Das
              Gruppensetting fördert nicht nur die Selbstreflexion, sondern
              auch das Entwickeln neuer Perspektiven und Lösungsansätze.
            </p>
            <p>
              In den Gruppensitzungen können Sie in einem geschützten Raum
              neue Verhaltensweisen ausprobieren und erhalten unmittelbar
              Feedback, sowohl von mir als Therapeutin als auch von den
              anderen Teilnehmenden. Diese direkte Rückmeldung hilft,
              Fortschritte zu erkennen und Mut zu fassen, Veränderungen im
              Alltag umzusetzen. Zudem bietet die Gruppe eine kontinuierliche
              Unterstützung und Motivation, da Sie nicht nur für sich, sondern
              auch für die anderen ein wichtiger Teil des Prozesses sind.
            </p>
          </div>
        </section>

        <section className="bg-secondary/60">
          <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold text-primary">
              Welche Gruppen finden momentan statt?
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-pretty">
              <p>
                Zur Zeit biete ich eine Schematherapiegruppe auf Deutscher
                Sprache an. Die Sitzungen finden wöchentlich am
                Donnerstagvormittag statt und dauern 100 Minuten. Die Gruppe
                richtet sich an Privatversicherte, Selbstzahler_innen und
                Menschen, die das Kostenerstattungsverfahren nutzen wollen.
              </p>
              <p>
                Zur Vereinbarung eines Vorgesprächs schreiben Sie mir bitte
                eine E-Mail an{' '}
                <a
                  href="mailto:pt.aldinger@gmail.com"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  pt.aldinger@gmail.com
                </a>
                . Ich freue mich darauf, Sie kennenzulernen.
              </p>
            </div>

            <article className="mt-10 rounded-3xl border border-accent/30 bg-card p-8">
              <h3 className="text-sm font-semibold tracking-widest text-accent uppercase">
                Schematherapie-Gruppe
              </h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-pretty">
                <p>
                  In der Schematherapie Gruppe arbeiten wir daran, tief
                  verwurzelte Muster und Verhaltensweisen zu erkennen und zu
                  verändern, um langfristige positive Veränderungen zu
                  erreichen. Die Schematherapie zielt darauf ab, emotionale
                  Bedürfnisse zu identifizieren, die in der Vergangenheit oft
                  unerfüllt geblieben sind, und die daraus resultierenden
                  Verhaltensmuster zu durchbrechen. Gemeinsam erforschen wir,
                  wie alte Erfahrungen Ihr heutiges Denken, Fühlen und Handeln
                  beeinflussen, und entwickeln neue, gesündere Wege, mit
                  Herausforderungen umzugehen.
                </p>
                <p>
                  Diese Gruppe ist für Personen mit verschiedenen Diagnosen
                  geeignet, insbesondere für Menschen, die sich in
                  wiederkehrenden Beziehungsmustern oder Verhaltensweisen
                  gefangen fühlen. Wir arbeiten daran, alte, oft unbewusste
                  Schemata zu verändern, die in Stresssituationen aktiv werden
                  und zu ungewollten Reaktionen führen.
                </p>
                <p>
                  Durch den Austausch in der Gruppe lernen Sie, diese Schemata
                  zu erkennen, zu hinterfragen und schrittweise zu überwinden.
                  Es geht auch darum, Fähigkeiten zu entwickeln, die es Ihnen
                  ermöglichen, Ihre emotionalen Bedürfnisse auf gesunde Weise
                  zu erfüllen und sich selbst zu unterstützen. Die Gruppe
                  bietet dabei einen sicheren Raum, um neue Verhaltensweisen
                  auszuprobieren und von den Erfahrungen der anderen
                  Teilnehmenden zu lernen.
                </p>
                <p>
                  Mehr Information zur Schematherapie allgemein finden Sie{' '}
                  <Link
                    href="/schematherapie"
                    className="font-medium text-primary underline underline-offset-4"
                  >
                    hier
                  </Link>
                  .
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
