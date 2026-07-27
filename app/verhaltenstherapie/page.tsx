import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { ContactCta } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Was ist integrative Verhaltenstherapie? | Psychotherapie Berlin-Pankow",
  description:
    "Integrative Verhaltenstherapie in Berlin-Pankow: wissenschaftlich erprobte Strategien, achtsamkeitsbasierte Methoden, Schematherapie, DBT und EMDR.",
}

export default function VerhaltenstherapiePage() {
  return (
    <>
      <PageHero
        title="Integrative Verhaltenstherapie"
        subtitle="Was bedeutet Verhaltenstherapie?"
        image="/images/card-kognitive.jpg"
        imageAlt="Sukkulente in einem schlichten Betontopf vor hellem Hintergrund"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
          <p>
            Verhaltenstherapie basiert auf der Annahme, dass die Art, wie wir denken, fühlen und uns
            verhalten, zu einem maßgeblichen Teil erlernt ist. Vielleicht wurden wir in unserer
            Lebensgeschichte für bestimmte Verhaltensweisen belohnt (oder bestraft) oder haben Denk-
            oder Verhaltensmuster wichtiger Bezugspersonen übernommen.
          </p>
          <p>
            Diese Muster, die vor dem Hintergrund unserer Biografie verständlich sind, stehen uns
            heute manchmal im Weg.
          </p>
          <p className="text-lg font-medium text-foreground">
            Die gute Nachricht: Unser Gehirn ist über die gesamte Lebensspanne hinweg plastisch. Das
            bedeutet: Sie können ihr Denken, Fühlen und Verhalten verändern!
          </p>
          <p>
            Als integrativ arbeitende Verhaltenstherapeutin kenne ich eine Vielzahl an
            wissenschaftlich erprobten Strategien, um Sie bei diesem Prozess zu unterstützen. Dabei
            kommen klassische kognitiv-verhaltenstherapeutische Strategien sowie neuere Ansätze, wie
            z.B. achtsamkeitsbasierte Methoden,{" "}
            <Link href="/schematherapie" className="text-primary underline underline-offset-4">
              Schematherapie
            </Link>
            , Dialektisch-Behaviorale Therapie oder{" "}
            <Link href="/emdr" className="text-primary underline underline-offset-4">
              EMDR
            </Link>{" "}
            zum Einsatz.
          </p>
          <p>
            Auch die Psychotherapie selbst ist eine Gelegenheit, um neues Verhalten auszuprobieren
            und neue Beziehungserfahrungen zu machen.
          </p>
          <p className="text-lg font-medium text-foreground">
            Verhaltenstherapie bedeutet Hilfe zur Selbsthilfe: Ziel ist es, dass Sie ihr eigener
            Coach und Therapeut werden, um ihren Alltag wieder besser bewältigen zu können.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <h2 className="font-serif text-3xl text-foreground text-balance">
            Was bedeutet Verhaltenstherapie konkret?
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Jede Psychotherapie bei mir ist individuell auf Ihre Ziele und Bedürfnisse abgestimmt.
            Wir besprechen gemeinsam, welche Schritte für Sie ganz persönlich hilfreich sein können.
            Zu einer Verhaltenstherapie kann gehören:
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {[
              "neue Verhaltensmuster einüben und im Alltag ausprobieren",
              "sich im geschützten Rahmen in eine angstbesetzte Situation begeben, um eine korrigierende Erfahrung zu machen",
              "das Gleichgewicht von Energie raubenden und Kraft spendenden Aktivitäten verändern",
              "wirkungsvoll Grenzen setzen",
              "Techniken für eine verbesserte Achtsamkeit, Entspannung und Emotionsregulation erlernen",
              "sich von hinderlichen Glaubenssätzen lösen",
              "Verhaltensmuster in Beziehungen verstehen und verändern, um die Beziehungsqualität zu verbessern (siehe dazu auch unter Schematherapie)",
              "sich mit belastenden Ereignissen, Gefühlen und Gedanken in einem geschützten Raum auseinandersetzen (z.B. nach traumatischen Ereignissen oder bei einer Posttraumatischen Belastungsstörung, siehe dazu auch unter EMDR)",
            ].map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Wie eine Psychotherapie im Detail abläuft, erfahren Sie{" "}
            <Link href="/ablauf-kosten" className="text-primary underline underline-offset-4">
              hier
            </Link>
            .
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
