import Image from 'next/image'

const options = [
  {
    id: 1,
    label: 'Option 1: Sanftes Licht durch Blätter',
    image: '/images/hero-option-1.png',
  },
  {
    id: 2,
    label: 'Option 2: Ruhiger See und Himmel',
    image: '/images/hero-option-2.png',
  },
  {
    id: 3,
    label: 'Option 3: Lichter Birkenwald',
    image: '/images/hero-option-3.png',
  },
  {
    id: 4,
    label: 'Option 4: Weiche abstrakte Natur-Textur',
    image: '/images/hero-option-4.png',
  },
]

export default function HeroOptionsPage() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-2xl font-semibold text-foreground">
          Hero-Bild Optionen
        </h1>
        <p className="mt-2 text-muted-foreground">
          Vorschau der vier Varianten im echten Hero-Layout. Sagen Sie mir
          einfach, welche Option Ihnen am besten gefällt.
        </p>
      </div>
      <div className="flex flex-col gap-12 pb-16">
        {options.map((option) => (
          <section key={option.id} className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <h2 className="mb-3 text-lg font-medium text-foreground">
              {option.label}
            </h2>
            <div className="relative flex min-h-[55vh] items-center justify-center overflow-hidden rounded-xl">
              <Image
                src={option.image || "/placeholder.svg"}
                alt={option.label}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/40" aria-hidden="true" />
              <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 text-center text-primary-foreground">
                <p className="text-sm font-medium tracking-widest uppercase">
                  Privatpraxis für Psychotherapie
                </p>
                <h3 className="mt-4 text-4xl font-semibold text-balance md:text-5xl">
                  Lisa-Maria Aldinger
                </h3>
                <p className="mt-4 text-lg text-pretty opacity-90">
                  Psychologische Psychotherapeutin · Verhaltenstherapie ·
                  Berlin-Pankow
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
