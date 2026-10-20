import Image from "next/image";
import { EDUCATION_ASSETS, EDUCATION_HERO } from "@/lib/education/content";
import { EducationCtaLink } from "./education-cta-link";

export function EducationHero() {
  return (
    <section
      aria-labelledby="education-hero-heading"
      className="relative overflow-x-clip bg-surface-dark text-foreground-inverse"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={EDUCATION_ASSETS.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_50%] max-sm:object-[18%_50%] sm:object-[58%_50%] md:object-[54%_50%] lg:object-[51%_50%] xl:object-[49%_50%]"
        />
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(98deg, color-mix(in srgb, var(--ssl-graphite) 94%, transparent) 0%, color-mix(in srgb, var(--ssl-graphite) 86%, transparent) 32%, color-mix(in srgb, var(--ssl-graphite) 52%, transparent) 52%, color-mix(in srgb, var(--ssl-graphite) 16%, transparent) 68%, transparent 82%)",
          }}
        />
        <div
          className="absolute inset-0 max-sm:hidden"
          style={{
            background:
              "linear-gradient(105deg, color-mix(in srgb, var(--ssl-graphite) 90%, transparent) 0%, color-mix(in srgb, var(--ssl-graphite) 68%, transparent) 34%, color-mix(in srgb, var(--ssl-graphite) 22%, transparent) 50%, transparent 64%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "var(--gradient-atmosphere-hero)" }}
        />
      </div>

      <div className="ssl-container relative z-[2] grid min-h-[clamp(15.5rem,28vw,21rem)] items-center gap-6 py-8 sm:gap-7 sm:py-9 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:gap-5 lg:py-10 xl:gap-7 xl:py-11">
        <div className="flex min-w-0 flex-col gap-3 sm:gap-3.5 lg:max-w-[32rem]">
          <p className="ssl-type-meta text-accent/90">{EDUCATION_HERO.label}</p>
          <h1
            id="education-hero-heading"
            className="max-w-[17ch] text-[clamp(1.75rem,4.2vw,2.625rem)] font-semibold leading-[1.06] tracking-[-0.032em] text-balance sm:max-w-[19ch]"
          >
            {EDUCATION_HERO.title}
          </h1>
          <p className="max-w-[31rem] ssl-type-body-lg leading-[1.5] text-text-on-dark-secondary">
            {EDUCATION_HERO.body}
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <EducationCtaLink href={EDUCATION_HERO.primaryCta.href}>
              {EDUCATION_HERO.primaryCta.label}
            </EducationCtaLink>
            <EducationCtaLink href={EDUCATION_HERO.secondaryCta.href} variant="secondary">
              {EDUCATION_HERO.secondaryCta.label}
            </EducationCtaLink>
          </div>
        </div>

        <div
          className="hidden min-w-0 items-center gap-2.5 lg:flex lg:max-w-[21rem] lg:justify-self-end xl:max-w-[23rem] xl:gap-3.5"
          aria-label="What you gain from Studira education"
        >
          <div
            className="flex min-w-0 flex-col gap-2 rounded-sm border border-foreground-inverse/10 bg-[color-mix(in_srgb,var(--ssl-graphite)_74%,transparent)] px-3.5 py-2.5 backdrop-blur-[1px] xl:px-4 xl:py-3"
          >
            <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] text-foreground-inverse/60">
              {EDUCATION_HERO.railHeading}
            </p>
            <ul className="m-0 list-none space-y-1.5 p-0 ssl-type-body-sm text-text-on-dark-secondary">
              {EDUCATION_HERO.railMuted.map((item) => (
                <li
                  key={item}
                  className="relative pl-3 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ul className="m-0 min-w-[7rem] list-none space-y-1.5 p-0 ssl-type-body-sm text-text-on-dark-secondary">
            {EDUCATION_HERO.railAccent.map((item) => (
              <li
                key={item}
                className="relative pl-3 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
