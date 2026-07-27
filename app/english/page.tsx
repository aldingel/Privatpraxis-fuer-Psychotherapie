import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Psychotherapy in English I Cognitive-Behavioral Therapy',
  description:
    'Evidence-based psychotherapy in English in Berlin-Pankow. Licensed cognitive-behavioral therapist with an integrative approach: CBT, Schema Therapy, DBT and EMDR.',
}

const BOOKING_URL =
  'https://complicated.life/book/cognitive-behavioural-therapy-cbt-psychotherapist-emdr-psychotherapist-lisa-maria-aldinger'

export default function EnglishPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Praxis Aldinger" title="Psychotherapy in English" />

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid items-start gap-10 md:grid-cols-[3fr_2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-primary">About me</h2>
              <div className="mt-6 space-y-5 leading-relaxed text-pretty">
                <p>
                  As a licensed cognitive-behavioral therapist with a graduate
                  degree in psychology, I offer evidence-based psychotherapy
                  tailored to your individual needs. My work combines Cognitive
                  Behavioral Therapy (CBT) with integrative approaches such as
                  Schema Therapy, Dialectical Behavior Therapy (DBT), EMDR,
                  Nonviolent Communication, and Mindful Self-Compassion.
                </p>
                <p>
                  Although my work is grounded in empirical research, I believe
                  that every person is unique. Together, we will develop a
                  treatment approach that reflects your goals, strengths, and
                  personal circumstances. Therapy is a collaborative process:
                  You are the expert on your own life, and I support you with
                  psychological expertise and evidence-based methods.
                </p>
                <p>
                  Throughout my clinical training and professional experience, I
                  have worked with clients from diverse backgrounds experiencing
                  a wide range of difficulties, including depression, anxiety,
                  trauma, and psychosis. I strive to provide a safe, supportive,
                  and non-judgmental space where lasting change and personal
                  growth can take place.
                </p>
                <p className="text-lg font-medium text-foreground">
                  I welcome clients of all genders, cultural backgrounds, and
                  sexual orientations.
                </p>
                <p>
                  To get in touch, you can send me an email or book an initial
                  consultation using my online booking page linked below.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center md:justify-end">
              <Image
                src="/images/portrait-aldinger.jpg"
                alt="Portrait of Lisa-Maria Aldinger, psychological psychotherapist"
                width={323}
                height={484}
                className="h-auto w-full max-w-xs rounded-3xl shadow-sm"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-secondary/60">
          <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold text-primary">
              Therapy information
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-pretty">
              <p>
                Please note that I am not affiliated with Germany&apos;s
                statutory health insurance providers (e.g. TK or AOK).
                Therefore, I offer psychotherapy for privately insured and
                self-paying clients, as well as for clients with statutory
                health insurance through the cost-reimbursement procedure
                (Kostenerstattungsverfahren).
              </p>
              <p>
                I currently offer therapy of approximately five months, with the
                possibility of extension if appropriate. Depending on your
                needs, more intensive treatment formats, such as double sessions
                or two sessions per week, can also be arranged.
              </p>
              <p>
                Fees are charged according to the German Scale of Psychotherapy
                Fees (Gebührenordnung für Psychotherapeut*innen, GOP). Please see
                the{' '}
                <Link
                  href="/ablauf-kosten"
                  className="text-primary underline underline-offset-4"
                >
                  fees page
                </Link>{' '}
                for a complete overview of my fees, or feel free to contact me
                if you have any questions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6 md:py-20">
            <h2 className="text-3xl font-semibold text-balance text-primary md:text-4xl">
              Get in touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Whether you would like an initial consultation or have questions
              about therapy, please don&apos;t hesitate to reach out. Email is
              the easiest way to contact me, and I will get back to you as soon
              as possible.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book an appointment
              </a>
              <a
                href="mailto:pt.aldinger@gmail.com"
                className="inline-flex items-center rounded-full border border-primary px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Send an email
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
