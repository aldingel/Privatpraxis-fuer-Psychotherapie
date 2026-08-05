import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="text-sm font-medium tracking-widest uppercase opacity-80">
            Kontakt
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Privatpraxis für Psychotherapie
            <br />
            M.Sc. Psych. Lisa-Maria Aldinger
            <br />
            Psychologische Psychotherapeutin
            <br />
            Grabbeallee 84
            <br />
            13156 Berlin
          </p>
          <a
            href="mailto:pt.aldinger@gmail.com"
            className="mt-3 inline-block text-sm underline underline-offset-4 hover:opacity-80"
          >
            pt.aldinger@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-sm font-medium tracking-widest uppercase opacity-80">
            Information
          </h2>
          <p className="mt-4 text-sm leading-relaxed opacity-90">
            Bei der Übertragung der Daten im Internet besteht immer die
            Möglichkeit, dass diese durch unbefugte Dritte zur Kenntnis
            genommen oder auch verändert werden können. Mit der Kontaktaufnahme
            erteilen Sie mir die Einwilligung, Ihre Daten zum Zwecke der
            Kontaktaufnahme zu speichern. Ist dieser Zweck erfüllt, werden Ihre
            Daten gelöscht.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-medium tracking-widest uppercase opacity-80">
            Notfälle und Krisen
          </h2>
          <p className="mt-4 text-sm leading-relaxed opacity-90">
            Der <strong>Berliner Krisendienst</strong> ist 24 Stunden am Tag
            erreichbar (030 390 63 00) und unterstützt in emotionalen Notlagen.{' '}
            <strong>Neuhland</strong> berät und hilft Kindern, Jugendlichen und
            jungen Erwachsenen in suizidalen Krisen (030 873 01 11, Mo - Fr 9 -
            18 Uhr). <strong>LARA</strong> unterstützt Frauen, die Opfer von
            sexueller Belästigung, Missbrauch oder Vergewaltigung geworden sind
            (030 216 88 88, Mo - Fr 9 - 18 Uhr).
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row md:px-6">
          <p className="opacity-80">
            Privatpraxis für Psychotherapie Lisa-Maria Aldinger
          </p>
          <nav aria-label="Rechtliches" className="flex gap-6">
            <Link
              href="/datenschutz"
              className="underline-offset-4 hover:underline"
            >
              Datenschutzerklärung
            </Link>
            <Link
              href="/impressum"
              className="underline-offset-4 hover:underline"
            >
              Impressum
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
