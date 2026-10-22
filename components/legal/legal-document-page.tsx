type LegalSection = {
  title: string;
  paragraphs: readonly string[];
};

type LegalDocumentPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: readonly LegalSection[];
};

const bodyClass = "ssl-type-body leading-[1.55] text-text-secondary";
const headingClass =
  "text-[1.0625rem] font-semibold tracking-[-0.02em] text-foreground";

export function LegalDocumentPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: LegalDocumentPageProps) {
  return (
    <>
      <section
        aria-labelledby="legal-doc-heading"
        className="relative overflow-x-clip bg-surface-dark text-foreground-inverse"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(118deg, color-mix(in srgb, var(--ssl-graphite) 98%, transparent) 0%, color-mix(in srgb, var(--ssl-graphite) 88%, transparent) 42%, color-mix(in srgb, var(--ssl-graphite) 62%, transparent) 58%, color-mix(in srgb, var(--ssl-graphite) 38%, transparent) 72%, color-mix(in srgb, var(--ssl-graphite) 22%, transparent) 100%)",
            }}
          />
        </div>
        <div className="ssl-container relative z-[2] py-8 sm:py-10 lg:py-12">
          <div className="flex min-w-0 max-w-[44rem] flex-col gap-3">
            <p className="ssl-type-meta text-accent/90">{eyebrow}</p>
            <h1
              id="legal-doc-heading"
              className="text-[clamp(1.75rem,4.2vw,2.625rem)] font-semibold leading-[1.06] tracking-[-0.032em]"
            >
              {title}
            </h1>
            <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-text-on-dark-secondary/80">
              Last updated: {updated}
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-x-clip border-t border-divider bg-surface-light text-foreground">
        <div className="ssl-container py-8 sm:py-10 lg:py-12">
          <div className="mx-auto flex min-w-0 max-w-[42rem] flex-col gap-8">
            <p className={`${bodyClass} text-[1rem] text-foreground`}>{intro}</p>

            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-2.5">
                <h2 className={headingClass}>{section.title}</h2>
                <div className="flex flex-col gap-2">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className={bodyClass}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
