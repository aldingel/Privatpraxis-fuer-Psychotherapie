import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Schematherapie I Psychotherapie Praxis Aldinger',
  description:
    'Was ist Schematherapie? Modi und Schemata, Ablauf und Eignung der Schematherapie nach Jeffrey E. Young. Privatpraxis für Psychotherapie Lisa-Maria Aldinger, Berlin-Pankow.',
}

export default function SchematherapiePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Behandlungsangebot" title="Schematherapie" />

        <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
          <h2 className="text-3xl font-semibold text-primary">
            Was ist Schematherapie?
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-pretty">
            <p>
              Die Schematherapie nach Jeffrey E. Young folgt der Vorstellung,
              dass in verschiedenen Situationen in unserem Alltag
              unterschiedliche Facetten unserer Persönlichkeit zum Tragen
              kommen. Je nach dem, wo und mit wem wir zusammen sind und was
              wir gerade tun, fühlen, verhalten und denken wir
              unterschiedlich. Vielleicht verändert sich auch unser Auftreten,
              unsere Gestik und Mimik.
            </p>
            <p>
              Diese verschiedenen Facetten oder &quot;Aggregatzustände&quot;
              unserer Persönlichkeit nennt man in der Schematherapie
              &quot;Modi&quot;. Laut der Schematherapie haben wir diese im
              Laufe unseres Lebens erworben, wenn Grundbedürfnisse (z.B. nach
              verlässlichen Beziehungen, Halt, Kontrolle oder einem positiven
              Selbstwertgefühl) nicht ausreichend erfüllt waren.
            </p>
          </div>
        </section>

        <section className="bg-secondary/60">
          <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold text-primary">
              Modi und Schemata
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-pretty">
              <p>
                Man unterscheidet in der Schematherapie &quot;verletzte
                Kindmodi&quot; &quot;Eltern-Modi&quot;,
                &quot;Bewältigungsmodi&quot;, den &quot;gesunden
                (Erwachsenen-)Modus&quot; und den &quot;glücklichen
                Kind-Modus&quot;. Kindmodi machen sich besonders durch
                intensive, schmerzhafte Gefühle wie Traurigkeit, Einsamkeit,
                Verletztsein oder auch Wut bemerkbar. Viele Menschen kennen
                Situationen, in denen sie sich &quot;plötzlich klein wie ein
                Kind&quot; fühlen, zum Beispiel, wenn Sie mit Autoritäten in
                Berührung kommen oder von der Partner_in kritisiert werden.
              </p>
              <p>
                Im Eltern-Modus sind bestimmte Überzeugungen in uns präsent
                und steuern unser Verhalten. Bei diesen hinderlichen
                Überzeugungen geht es z.B. um sehr hohe Erwartungen an die
                eigene Leistung, die Verantwortlichkeit für das Wohl anderer
                Menschen oder abwertende Gedanken gegenüber uns oder andere.
                Beispiele für solche belastenden Überzeugungen sind &quot;Du
                musst funktionieren&quot;, &quot;Du musst dafür sorgen, dass
                es anderen gut geht&quot; oder &quot;Du bist nicht gut
                genug&quot;. Solche Gedanken lösen häufig die schmerzhaften
                Gefühle des verletzten Kindmodus aus.
              </p>
              <p>
                Um diese nicht spüren zu müssen, wechseln Menschen in so
                genannte Bewältigungsmodi. Beispiele für Bewältigungsmodi sind
                z.B. zu viel arbeiten, übermäßiger Konsum von Substanzen,
                Medien oder Essen. Manche Menschen kontrollieren, klagen oder
                werden wütend, um sich nicht mit bestimmten Gefühlen
                auseinanderzusetzen. Diese Bewältigungsstrategien waren früher
                das Beste, was wir tun konnten, um mit bestimmten Situationen
                fertig zu werden. Heute stehen sie uns dagegen im Weg.
              </p>
              <p>
                Der gesunde (Erwachsenen-) Modus zeichnet sich dadurch aus,
                dass wir in Verbindung mit unseren eigenen Fähigkeiten sind.
                Wir handeln nicht einfach automatisch nach einer unserer
                dysfunktionalen Bewältigungsstrategien, sondern sind fähig zu
                Reflektion und Mitgefühl gegenüber uns selbst und sind in der
                Lage für uns zu sorgen und bewusst zu wählen, wie wir uns
                verhalten wollen.
              </p>
              <p>
                Zu diesen verschiedenen Modi passen meist ein oder mehrer
                sogenannte Schemata. Diese kann man sich vorstellen wie
                &quot;Lebensthemen&quot;, die uns immer wieder begegnen.
                Manche Menschen manchen zum Beispiel immer wieder die
                Erfahrung, &quot;anders&quot; zu sein als andere oder
                &quot;nicht richtig reinzupassen&quot;. Andere typische
                Lebensthemen sind das Erleben von Verlassenheit, eigener
                Abhängigkeit oder Inkompetenz oder Misstrauen gegenüber
                anderen.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
          <h2 className="text-3xl font-semibold text-primary">
            Wie läuft eine Schematherapie ab?
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-pretty">
            <p>
              Schematherapie kann helfen, belastende Muster aufzulösen und
              neue Wege zu beschreiten. Zunächst wird in der Therapie ein
              Verständnis der eigenen Schemata und Modi sowie deren Entstehung
              in der Biografie erarbeitet. Dieses so genannte
              &quot;Modusmodell&quot;, das als &quot;innere Landkarte&quot;
              funktioniert, macht es leichter, das eigene Verhalten und
              Erleben einzuordnen, anzunehmen und zu verstehen.
            </p>
            <p>
              In der Folge wird mit den Methoden der Schematherapie und der
              klassischen Verhaltenstherapie eine Veränderung dieser
              belastenden Muster ermöglicht. Für die Schematherapie typisch
              sind Imaginationsübungen und die Arbeit mit Stühlen oder
              Symbolen, um die verschiedenen Modi eines Menschen darzustellen
              und zu erleben. Auch die Klient_innen-Therapeut_innen Beziehung
              wird in der Schematherapie bewusst gestaltet, da auch sie die
              Möglichkeit bietet, korrigierende Erfahrungen zu machen.
            </p>
          </div>

          <h2 className="mt-12 text-3xl font-semibold text-primary">
            Für wen ist eine Schematherapie geeignet?
          </h2>
          <p className="mt-6 leading-relaxed text-pretty">
            Schematherapie ist anwendbar bei vielen psychischen Symptomen oder
            Belastungen, insbesondere jedoch, wenn es um Schwierigkeiten in
            der Beziehung zu anderen Menschen oder um die Loslösung aus
            hinderlichen Verhaltensmustern geht. Empirisch überprüft wurde
            diese Therapieform besonders zur Behandlung von
            Persönlichkeitsstörungen, insbesondere der Borderlinestörung. Es
            gibt mittlerweile jedoch auch wissenschaftliche Studien zur
            Behandlung von Depression, Posttraumatischer Belastungsstörung und
            Essstörungen mithilfe von Schematherapie.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
