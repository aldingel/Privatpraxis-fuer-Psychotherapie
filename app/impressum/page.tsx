import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Impressum | Psychotherapie Berlin-Pankow",
  description: "Impressum der Privatpraxis für Psychologische Psychotherapie Lisa-Maria Aldinger, Berlin-Pankow.",
}

export default function ImpressumPage() {
  return (
    <>
      <PageHero title="Impressum" image="/images/about-leaves.png" imageAlt="" />

      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="font-serif text-2xl text-foreground">Angaben</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Lisa-Maria Aldinger
              <br />
              Privatpraxis für Psychologische Psychotherapie
              <br />
              Grabbeallee 84
              <br />
              13156 Berlin
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">Kontakt</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Telefon: 0152 24110948
              <br />
              E-Mail: kontakt@pankowpsychotherapie.de
              <br />
              Website: www.pankowpsychotherapie.de
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">Berufsbezeichnung</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Psychologische Psychotherapeutin (verliehen in der Bundesrepublik Deutschland durch
              das Landesamt für Gesundheit und Soziales von Berlin)
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">Zuständige Aufsichtsbehörden</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              1. Senatsverwaltung für Gesundheit, Oranienstraße 106, 10969 Berlin, Telefon: 030
              90280
              <br />
              2. Kassenärztliche Vereinigung Berlin, Masurenallee 6A, 14057 Berlin, Telefon: 030
              310030
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">Zuständige Kammer</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Kammer für Psychologische Psychotherapeuten und Kinder- und
              Jugendlichenpsychotherapeuten im Land Berlin (PTK Berlin), Kurfürstendamm 184, 10707
              Berlin, Telefon: 030 8871400,{" "}
              <a
                href="http://www.psychotherapeutenkammer-berlin.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                www.psychotherapeutenkammer-berlin.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">Berufsrechtliche Regelungen</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              1. Berufsordnung der Kammer für Psychologische Psychotherapeuten und Kinder- und
              Jugendlichenpsychotherapeuten im Land Berlin
              <br />
              2. Psychotherapeutengesetz. Die Regelungen können bei der Psychotherapeutenkammer
              Berlin eingesehen werden.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
