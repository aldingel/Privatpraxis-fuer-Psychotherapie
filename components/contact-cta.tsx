import Link from 'next/link'

export function ContactCta() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6 md:py-20">
        <h2 className="text-3xl font-semibold text-balance text-primary md:text-4xl">
          Ich freue mich, Sie kennenzulernen.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Ob Sie einen einen Erstgesprächstermin möchten oder Fragen zu
          Beratung und Therapie haben - zögern Sie nicht, mich zu kontaktieren.
          Am leichtesten bin ich per Email erreichbar. Ich melde mich
          schnellstmöglich zurück!
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Termin vereinbaren
          </Link>
          <a
            href="mailto:pt.aldinger@gmail.com"
            className="inline-flex items-center rounded-full border border-primary px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Email schreiben
          </a>
        </div>
      </div>
    </section>
  )
}
