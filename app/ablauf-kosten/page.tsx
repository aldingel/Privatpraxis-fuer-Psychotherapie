import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactCta } from '@/components/contact-cta'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Ablauf einer Psychotherapie Verhaltenstherapie Berlin Pankow',
  description:
    'Ablauf einer Psychotherapie und Informationen zu Kosten: gesetzliche Krankenversicherung, Selbstzahler, Beihilfe und private Krankenversicherung. Praxis Aldinger, Berlin-Pankow.',
}

const steps = [
  {
    title: 'Kennenlernen.',
    text: 'Die ersten Sitzungen bieten Raum für ein gegenseitiges Kennenlernen. Für den Erfolg einer Therapie ist eine vertrauensvolle Arbeitsbeziehung entscheidend – die Chemie muss stimmen. Nutzen Sie diese Zeit ganz in Ruhe, um zu spüren, ob Sie sich bei mir wohl und sicher fühlen. Gleichzeitig prüfe ich sorgfältig, ob mein therapeutisches Angebot gut zu Ihrem Anliegen passt. Sollte ich den Eindruck haben, dass Sie in einer Praxis mit einem anderen Schwerpunkt besser aufgehoben sind, gebe ich Ihnen hierzu eine Rückmeldung.',
  },
  {
    title: 'Gemeinsam Verstehen.',
    text: 'Um den passenden Weg zu finden, verschaffe ich mir ein detailliertes Bild Ihrer aktuellen Symptome, Belastungen und Ziele. Dabei betrachten wir Ihre Beschwerden nie isoliert, sondern immer im Kontext Ihrer Lebensrealität. Wir erforschen gemeinsam, wie diese Dynamiken entstanden sind und was eine Besserung derzeit blockiert. Ein ebenso wichtiger Fokus liegt auf Ihren Stärken und inneren Ressourcen, denn sie sind der Motor für Ihren Veränderungsprozess.',
  },
  {
    title: 'Ziele setzen.',
    text: 'Im nächsten Schritt konkretisieren wir Ihre persönlichen Ziele: Was soll sich in Ihrem Leben verändern oder (wieder) möglich werden? Welche Qualitäten vermissen Sie aktuell? Woran würden Sie selbst – oder auch Menschen in Ihrem Umfeld – merken, dass wir auf dem richtigen Weg sind?',
  },
  {
    title: 'Ins Handeln kommen.',
    text: 'Gemeinsam wählen wir individuell auf Sie zugeschnittene, konkrete Schritte und Methoden aus. Das kann das Einüben neuer Verhaltensweisen, die Arbeit mit prägenden Gedanken- und Gefühlsmustern, Imaginationen, Stühlearbeit oder das Erlernen von Achtsamkeits- und Emotionsregulationsschniken beinhalten.',
  },
  {
    title: 'Überprüfen und Anpassen.',
    text: 'Therapie ist ein lebendiger, flexibler Prozess. Wir reflektieren regelmäßig, ob die gewählten Schritte für Sie stimmig und im Alltag erfolgreich sind. Wenn sich Ihre Bedürfnisse verändern, passen wir die Ziele oder Methoden flexibel an.',
  },
]

export default function AblaufKostenPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Praxis Aldinger" title="Ablauf & Kosten" />

        {/* Ablauf */}
        <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Ablauf einer Psychotherapie
          </h2>
          <ol className="mt-10 space-y-8">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground"
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-pretty text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Kosten */}
        <section className="bg-secondary/60">
          <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
              Kosten
            </h2>
            <div className="mt-8 space-y-6">
              <article className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-xl font-semibold text-primary">
                  Gesetzliche Krankenversicherung
                </h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">
                  Als approbierte Psychologische Psychotherapeutin mit
                  Arztregistereintrag in der kassenärztlichen Vereinigung
                  Berlin bin ich für die Durchführung von Psychotherapie
                  zugelassen. Ich verfüge jedoch NICHT über die
                  Abrechnungsgenehmigung für die gesetzlichen Krankenkassen
                  (&quot;Kassensitz&quot;). Sollten Sie sich dennoch für eine
                  Psychotherapie bei mir entscheiden, müssen Sie die Kosten
                  selbst tragen oder einen Antrag auf Kostenerstattung bei
                  Ihrer gesetzlichen Krankenkasse stellen. Mehr Informationen
                  dazu finden Sie{' '}
                  <a
                    href="https://www.bptk.de/wp-content/uploads/2019/01/BPtK_Ratgeber_Kostenerstattung_2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-4"
                  >
                    hier
                  </a>
                  .
                </p>
              </article>

              <article className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-xl font-semibold text-primary">
                  Selbstzahler
                </h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">
                  Coaching- und Beratungsangebote werden grundsätzlich nicht
                  von der Krankenkasse übernommen. Auch bei einer
                  Psychotherapie besteht die Möglichkeit, die Kosten selbst zu
                  tragen. Auch hier richtet sich das Honorar nach der{' '}
                  <a
                    href="https://www.bptk.de/wp-content/uploads/2020/04/GOP-Infotabelle_Stand-2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-4"
                  >
                    Gebührenordnung für Psychotherapeuten
                  </a>{' '}
                  (GOP). Der Regelsatz für ein Erstgespräch (50 Minuten) bei
                  mir beträgt aktuell um die 134 €. Es fallen jedoch auch
                  Kosten zusätzlich zur Sitzungsgebühr an (z.B. für das
                  Erstellen einer biografischen Anamnese und die Auswertung
                  diagnostischer Fragebögen). Eine Übersicht über die
                  wichtigsten von mir berechneten Gebührenziffern finden Sie{' '}
                  <a
                    href="https://www.pankowpsychotherapie.de/uploads/1/3/1/6/131656042/geb%C3%BChrentabelle.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-4"
                  >
                    hier
                  </a>
                  . Sie erhalten ca. alle 8 Wochen eine Rechnung von mir.
                </p>
              </article>

              <article className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-xl font-semibold text-primary">
                  Beihilfe
                </h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">
                  Die Beihilfestellen übernehmen in der Regel die Kosten einer
                  ambulanten Psychotherapie. Dafür ist ein Antrag auf
                  Kostenübernahme notwendig. Die entsprechenden Formulare dafür
                  können Sie bei Ihrer Beihilfestelle anfordern. Die
                  schriftliche Beantragung bei Ihrer Beihilfestelle erfolgt
                  nach den fünf probatorischen Sitzungen, diese sind
                  antragsfrei. Grundlage der Abrechnung ist auch hier die GOP.
                </p>
              </article>

              <article className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-xl font-semibold text-primary">
                  Private Krankenversicherung
                </h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">
                  Kosten für eine ambulante Psychotherapie werden in der Regel
                  von den privaten Krankenkassen übernommen. Da sich die
                  Versicherer in ihren Angeboten jedoch unterscheiden, empfehle
                  ich Ihnen, sich rechtzeitig zu erkundigen, ob und in welchem
                  Umfang Psychotherapie in Ihrem Versicherungstarif enthalten
                  ist und welche Formalitäten dazu nötig sind. Grundlage der
                  Abrechnung ist die GOP (Gebührenordnung für
                  Psychotherapeuten). Formal finden bei privat Versicherten
                  vier sogenannte probatorische Sitzungen statt, in denen wir
                  uns kennenlernen, Informationen für den späteren
                  Therapieantrag sammeln und entscheiden, ob Sie eine Therapie
                  beginnen möchten. Im Anschluss beantragte ich ein
                  Stundenkontingent bei der Kasse. Das Honorar richtet sich
                  dabei nach der Gebührenordnung für Psychotherapeuten
                  (GOP-Ziffer 870). Sie erhalten dann wie gewohnt eine
                  Rechnung, die Ihnen später von der Versicherung erstattet
                  wird. Möglicherweise wird Ihre Krankenkasse für einige
                  Sitzungen auch nur einen Teil des in Rechnung gestellten
                  Betrages übernehmen. Eine Übersicht über die wichtigsten von
                  mir berechneten Gebührenziffern finden Sie{' '}
                  <a
                    href="https://www.pankowpsychotherapie.de/uploads/1/3/1/6/131656042/geb%C3%BChrentabelle.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-4"
                  >
                    hier
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
