import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const specializations = [
  {
    title: 'Kognitive Verhaltenstherapie',
    text: 'Wissenschaftlich fundiert, wirksam und individuell auf Sie abgestimmt: Die kognitive Verhaltenstherapie bietet effektive Unterstützung beim gesamten Spektrum psychischer Belastungen, u.a. bei Ängsten, Zwängen, Depressionen, ADHS oder Psychosen.',
    image: '/images/card-kognitive.jpg',
    alt: 'Sukkulente in einem schlichten Betontopf vor hellem Hintergrund',
    href: '/verhaltenstherapie',
  },
  {
    title: 'Gruppentherapie',
    text: 'In der Gruppentherapie erleben Sie den therapeutischen Prozess gemeinsam mit anderen und profitieren von gegenseitigem Verständnis und Austausch. Das gemeinsame Erarbeiten von Themen fördert Selbstreflexion und neue Perspektiven. In einem geschützten Rahmen können Sie neue Verhaltensweisen ausprobieren und Feedback erhalten.',
    image: '/images/card-gruppe.jpg',
    alt: 'Möwen, die gemeinsam über einen hellen Himmel fliegen',
    href: '/gruppentherapie',
  },
  {
    title: 'Schematherapie',
    text: 'Die Schematherapie hilft Ihnen, alte Muster zu erkennen und sich von ihnen zu lösen. Durch das Verständnis Ihrer inneren Anteile und biografischen Prägungen entwickeln Sie neue Wege, mit schwierigen Situationen umzugehen. So entsteht langfristig mehr Freiheit im Denken, Fühlen und Handeln.',
    image: '/images/card-schema.jpg',
    alt: 'Einzelnes grünes Blatt vor hellem Hintergrund',
    href: '/schematherapie',
  },
  {
    title: 'Traumatherapie & EMDR',
    text: 'Mit verschiedenen Methoden der Traumatherapie, z.B. Emdr, NET oder IRRT, unterstütze ich Sie dabei, belastende Erfahrungen und Traumata in einem sicheren Rahmen zu verarbeiten.',
    image: '/images/card-trauma.jpg',
    alt: 'Sanfte Schatten von Palmblättern auf einer hellen Wand',
    href: '/emdr',
  },
  {
    title: 'Queere Menschen & Transitionsbegleitung',
    text: 'Therapie kann einen sicheren und wertschätzenden Reflexiionsraum für Themen wie Identität, Coming-out, Transition, Beziehungen oder Diskriminierungserfahrungen bieten.',
    image: '/images/card-queer.jpg',
    alt: 'Regenbogen zwischen weichen Wolken am Himmel',
    href: '/ueber-mich',
  },
  {
    title: 'Psychedelic Integration',
    text: 'Psychedelische Integration hilft, Erfahrungen mit veränderten Bewusstseinszuständen – ob substanzinduziert oder nicht – zu verarbeiten und nachhaltig in Ihr alltägliches Leben zu integrieren.',
    image: '/images/card-psychedelic.jpg',
    alt: 'Grüne Blätter einer Zimmerpflanze vor hellem Hintergrund',
    href: '/ueber-mich',
  },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <Image
            src="/images/hero-home.jpg"
            alt=""
            fill
            priority
            className="object-cover object-right"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 hidden"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
            <div className="max-w-xl">
              <p className="text-sm font-medium tracking-widest text-accent uppercase">
                Privatpraxis für Psychotherapie
              </p>
              <h1 className="mt-4 text-5xl font-semibold text-balance text-primary md:text-6xl">
                Lisa-Maria Aldinger
              </h1>
              <p className="mt-4 text-lg text-pretty text-foreground">
                Psychologische Psychotherapeutin · Verhaltenstherapie ·
                Berlin-Pankow
              </p>
              <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
                Willkommen auf meiner Praxis-Website. Hier finden Sie
                Informationen zu meinem therapeutischen Angebot, dem Ablauf einer
                Therapie, den Kosten sowie weitere organisatorische Hinweise.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://complicated.life/book/cognitive-behavioural-therapy-cbt-psychotherapist-emdr-psychotherapist-lisa-maria-aldinger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Termin buchen
                </a>
                <a
                  href="mailto:pt.aldinger@gmail.com"
                  className="inline-flex items-center rounded-full border border-primary px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Email schreiben
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Aktuelle Informationen */}
        <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
          <div className="rounded-3xl border border-accent/30 bg-card p-8 text-center shadow-sm md:p-10">
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">
              Aktuelle Informationen
            </h2>
            <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
              Zur Zeit biete ich Therapieplätze für eine Schematherapiegruppe
              kombiniert mit Einzelsitzungen an. Nach vorbereitenden
              Einzelgesprächen finden die Gruppensitzungen am Donnerstag von
              9-10:50 Uhr statt.
            </p>
            <Link
              href="/gruppentherapie"
              className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Mehr zur Gruppentherapie
            </Link>
          </div>
        </section>

        {/* Spezialisierungen */}
        <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
          <h2 className="text-center text-3xl font-semibold text-primary md:text-4xl">
            Spezialisierungen
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {specializations.map((item) => (
              <article
                key={item.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-xl font-semibold text-balance text-primary">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-2 inline-flex w-fit items-center rounded-full border border-primary px-5 py-2 text-xs font-medium tracking-widest text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Mehr
                    <span className="sr-only"> über {item.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
