import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Was ist EMDR? Traumatherapie | Psychotherapie Berlin-Pankow",
  description:
    "Traumatherapie mit EMDR in Berlin-Pankow: Eye Movement Desensitization and Reprocessing zur Verarbeitung belastender Erlebnisse und Traumafolgestörungen.",
}

export default function EmdrPage() {
  return (
    <>
      <PageHero
        title="Traumatherapie mit EMDR"
        subtitle="Was ist EMDR?"
        image="/images/card-trauma.jpg"
        imageAlt="Sanfte Schatten von Palmblättern auf einer hellen Wand"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
          <p>
            EMDR steht für Eye Movement Desensitization and Reprocessing, übersetzt heißt das
            Desensibilisierung und Verarbeitung durch Augenbewegungen. Die Methode wurde von
            Francine Shapiro entwickelt, nachdem sie bei einem Spaziergang im Central Park entdeckt
            hatte, dass sie ihre Gedanken als weniger belastend empfand, wenn sie – die
            herabfallenden Blätter beobachtend – die Augen beständig von rechts nach links bewegte.
          </p>
        </div>

        <h2 className="mt-14 font-serif text-3xl text-foreground text-balance">
          Wie läuft eine EMDR-Behandlung ab?
        </h2>
        <div className="mt-6 flex flex-col gap-6 leading-relaxed text-muted-foreground">
          <p>
            Bei EMDR werden belastende Situationen unter Zuhilfenahme von so genannter bilateraler
            Stimulation vorgestellt und bearbeitet. Die Methode wird häufig verglichen mit einer
            Zugfahrt: Der/die Patient_in sitzt im Zug und kann durch das Fenster das Erlebte aus
            sicherer Entfernung noch einmal an sich vorbeiziehen lassen. Dabei entsteht eine
            hilfreichere Neubewertung des Geschehenen, sodass die belastende Symptomatik zurückgeht.
          </p>
          <p>
            Bilaterale Stimulation kann bedeuten, dass der/die Patient_in – ähnlich wie in der
            REM-Schlafphase – die Augen hin und her bewegt, sich abwechselnd rechts und links auf
            die Oberschenkel oder -arme tippt oder über Kopfhörer links und rechts Geräusche hört,
            während er/sie an das belastende Erlebnis denkt. Dabei folgt die Person den
            Assoziationen ihrer Gefühle, Gedanken, Körperempfindungen und inneren Bildern.
          </p>
          <p>
            Der/die Therapeut_in begleitet den Prozess und stellt sicher, dass der/die Klient_in in
            ausreichendem Kontakt zum {"„Hier und Jetzt“"} bleibt. In regelmäßigen Abständen leitet
            der/die Therapeut_in eine kurze Pause ein, um die Belastung und den Fortgang des
            Verarbeitungsprozesses zu erfragen.
          </p>
          <p>
            Jedoch sind auch die Herstellung einer vertrauensvollen Beziehung sowie stabilisierende
            Techniken wichtiger Bestandteil der Behandlung mit EMDR. Klient_innen wird so
            ermöglicht, sich in einem sicheren Rahmen mit belastenden Situationen
            auseinanderzusetzen.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <h2 className="font-serif text-3xl text-foreground text-balance">
            Die Wirksamkeit von EMDR
          </h2>
          <div className="mt-6 flex flex-col gap-6 leading-relaxed text-muted-foreground">
            <p>
              Die Wirksamkeit von EMDR zur Behandlung von Traumafolgestörungen ist sehr gut belegt.
              Daher hat der wissenschaftliche Beirat Psychotherapie EMDR als wissenschaftlich
              begründete Therapiemethode zur Behandlung der Posttraumatischen Belastungsstörung
              anerkannt.
            </p>
            <p>
              Die klinische Erfahrung zeigt, dass EMDR auch bei der Behandlung von Ängsten,
              Panikattacken, Depression, Schmerz und Trauerreaktionen hilfreich ist.
            </p>
            <p>
              Obgleich die Wirksamkeit von EMDR sehr gut erforscht ist, gibt es über die
              Wirkungsweise der Methode bisher keine eindeutigen wissenschaftlichen Ergebnisse. Eine
              Hypothese besagt, dass durch die bilaterale Stimulation des Gehirns die Ressourcen
              bzw. Selbstheilungskräfte gleichzeitig mit belastenden Inhalten aktiviert werden, was
              hilft, diese zu verarbeiten und Symptome zu lindern.
            </p>
            <p>
              Die Vorstellung, dass unser Gehirn natürliche Selbstheilungskräfte besitzt, die wir
              durch EMDR aktivieren und die uns bei der Verarbeitung belastender Erlebnisse helfen,
              gefällt mir persönlich sehr gut an dieser Methode.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
