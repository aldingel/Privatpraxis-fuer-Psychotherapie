import type { Metadata } from 'next'
import { MapPin, Mail, TrainFront } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Psychotherapie Berlin Pankow Aldinger Kontakt',
  description:
    'Kontakt und Anfahrt: Privatpraxis für Psychotherapie, M.Sc. Psych. Lisa-Maria Aldinger, Grabbeallee 84, 13156 Berlin. Direkt an der Tram-Haltestelle Grabbeallee/Pastor-Niemöller-Platz.',
}

export default function KontaktPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Praxis Aldinger" title="Kontakt & Praxis" />

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-7">
                <h2 className="text-2xl font-semibold text-primary">
                  Privatpraxis für Psychotherapie
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed">
                  <p className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>
                      M.Sc. Psych. Lisa-Maria Aldinger
                      <br />
                      Psychologische Psychotherapeutin
                      <br />
                      Grabbeallee 84
                      <br />
                      13156 Berlin
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail
                      className="h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <a
                      href="mailto:pt.aldinger@gmail.com"
                      className="font-medium text-primary underline underline-offset-4"
                    >
                      pt.aldinger@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-7">
                <h2 className="text-2xl font-semibold text-primary">
                  Anfahrt
                </h2>
                <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed">
                  <TrainFront
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>
                    Die Praxis befindet sich direkt an der Tram-Haltestelle
                    &quot;Grabbeallee/Pastor-Niemöller-Platz&quot;
                  </span>
                </p>
                <p className="mt-3 pl-7 text-sm leading-relaxed text-muted-foreground">
                  Die Praxis ist barrierefrei.
                </p>
              </div>

              <div className="rounded-3xl bg-secondary p-7">
                <p className="text-sm leading-relaxed text-pretty">
                  Ob Sie einen einen Erstgesprächstermin möchten oder Fragen
                  zu Beratung und Therapie haben - zögern Sie nicht, mich zu
                  kontaktieren. Am leichtesten bin ich per Email erreichbar.
                  Ich melde mich schnellstmöglich zurück!
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/40 p-7 md:p-9">
              <h2 className="text-2xl font-semibold text-primary">
                Schreiben Sie mir
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
