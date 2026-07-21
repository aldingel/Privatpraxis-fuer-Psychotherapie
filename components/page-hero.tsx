export function PageHero({
  eyebrow,
  title,
}: {
  eyebrow?: string
  title: string
}) {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        {eyebrow && (
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-4xl font-semibold text-balance text-primary md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  )
}
