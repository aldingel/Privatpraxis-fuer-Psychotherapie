import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { ContactCta } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Psychotherapy in English | Cognitive-Behavioral Therapy Berlin-Pankow",
  description:
    "Cognitive-behavioral therapy in English in Berlin-Pankow. Integrative approach with CBT, schema therapy, DBT and EMDR for native and non-native speakers.",
}

const qualifications = [
  ["2019", "Further specialist training in EMDR (Eye Movement Desensitization and Reprocessing)"],
  [
    "2019",
    "Further specialist training in Group Therapy with a focus on Dialectic-Behavioral Therapy and Schematherapy",
  ],
  [
    "2016–2020",
    "German license (Approbation as Psychological Psychotherapist) in (Integrative) Cognitive-Behavioral Therapy",
  ],
  ["2015–2016", "MSc Clinical and Health Psychology, Freie Universität Berlin"],
  ["2010–2014", "BSc Psychology, Humboldt University Berlin"],
  ["2016", "Extended training in nonviolent communication according to Marshall W. Rosenberg"],
  [
    "2014–2016",
    "Additional courses in Mindfulness-Based Stress Reduction, Progressive Muscle Relaxation and Autogenic Training",
  ],
]

const experience = [
  ["since 2020", "Psychotherapist in own private practice"],
  ["2022/2023", "Therapeutic Lead, Briese addictions clinic, Birkenwerder"],
  ["2017–2020", "Therapist, outpatient psychotherapy centre, Berliner Fortbildungsakademie"],
  [
    "2017",
    "Clinical Psychologist and Counselor at the psychotherapy department of Immanuel Klinikum, Rüdersdorf",
  ],
  [
    "2016",
    "Clinical Psychologist and Counselor at the crisis intervention and psychosis unit of Humboldt Klinikum, Berlin",
  ],
  ["2014–2018", "Counselor at LARA – crisis intervention center against sexual violence toward women*"],
]

export default function EnglishPage() {
  return (
    <>
      <PageHero
        title="Therapy for native and non-native speakers of English"
        subtitle="About"
        image="/images/portrait-aldinger.jpg"
        imageAlt="Portrait of Lisa-Maria Aldinger, psychological psychotherapist"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
          <p className="text-lg font-medium text-foreground">
            As a cognitive-behavioral therapist with an integrative approach, I am dedicated to
            helping individuals with a wide range of goals and difficulties. I want to provide a
            safe space for you to grow!
          </p>
          <p>
            I am a fully-licensed cognitive-behavioral therapist with a graduate degree in
            psychology. I have an integrative approach and work with classical CBT methods as well
            as new approaches such as schema therapy, dialectic-behavioral therapy and EMDR.
          </p>
          <p>
            I base my work on empirical research, however I am committed to fully grasp each
            client&apos;s individual perspective and tailor the treatment to your individual needs.
            Therapy is teamwork: You know your circumstances best, you know your personal strengths
            and weaknesses.
          </p>
          <p>
            During my extensive clinical training and my previous work experience I have worked
            with clients from all walks of life presenting with a wide range of psychological
            symptoms, spanning from depression and anxiety to trauma or psychosis. During our
            sessions we will use our combined potential and knowledge to create the changes in your
            life you want to achieve.
          </p>
        </div>

        <h2 className="mt-14 font-serif text-3xl text-foreground text-balance">My approach</h2>
        <div className="mt-6 flex flex-col gap-6 leading-relaxed text-muted-foreground">
          <p>
            I believe there is power in each of us to find new solutions and grow. I am dedicated
            to assist you in this process. I place great value on transparency, empathy and
            unconditional acceptance of your individual perspective. In the therapeutic process we
            will draw on your personal experiences and strengths in order to facilitate change.
          </p>
          <p>
            My work is also influenced by Marshall Rosenberg&apos;s approach of Nonviolent
            Communication as well as Kristin Neff&apos;s Mindful Self-Compassion. Of course, I am
            open to work with clients of all genders, cultures and sexual orientations.
          </p>
          <p>
            Please note that I am not affiliated with public insurances (like TK or AOK etc.) and
            can therefore only accept clients who have private insurance or self-pay. At the
            moment, I offer therapy spots for the duration of 5 months which can potentially be
            extended to a longer period. This is a good time frame to work on a wide range of
            therapeutic goals effectively. During that time it is also possible to work together
            more intensely with double sessions or 2 sessions a week if necessary.
          </p>
          <p>
            It is important to know that I invoice according to the German Scale of Psychotherapy
            Fees (Gebührenordnung für Psychotherapeuten, GOP). See the{" "}
            <Link href="/ablauf-kosten" className="text-primary underline underline-offset-4">
              fees page
            </Link>{" "}
            for more information. Don&apos;t hesitate to ask for more information.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
          <h2 className="font-serif text-3xl text-foreground text-balance">
            Qualifications and Experience
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Qualifications
              </h3>
              <ul className="mt-6 flex flex-col gap-5">
                {qualifications.map(([year, text]) => (
                  <li key={`${year}-${text}`} className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-primary">{year}</span>
                    <span className="leading-relaxed text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Work experience
              </h3>
              <ul className="mt-6 flex flex-col gap-5">
                {experience.map(([year, text]) => (
                  <li key={`${year}-${text}`} className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-primary">{year}</span>
                    <span className="leading-relaxed text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
