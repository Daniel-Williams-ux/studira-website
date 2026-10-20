import Image from "next/image";
import { SOLUTIONS_HERO, SOLUTIONS_HERO_IMAGE } from "@/lib/solutions/content";
import { SolutionsCtaLink } from "./solutions-cta-link";

export function SolutionsHero() {
  return (
    <section
      aria-labelledby="solutions-hero-heading"
      className="relative overflow-x-clip bg-surface-dark text-foreground-inverse"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={SOLUTIONS_HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_42%] max-sm:object-[42%_38%] sm:object-[36%_center] lg:object-[48%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, color-mix(in srgb, var(--ssl-graphite) 92%, transparent) 0%, color-mix(in srgb, var(--ssl-graphite) 78%, transparent) 42%, color-mix(in srgb, var(--ssl-graphite) 35%, transparent) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "var(--gradient-atmosphere-hero)" }}
        />
      </div>

      <div className="ssl-container relative z-[2] grid gap-6 py-8 sm:gap-7 sm:py-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-center lg:gap-8 lg:py-12 xl:py-14">
        <div className="flex min-w-0 flex-col gap-3 sm:gap-3.5 lg:max-w-[32rem]">
          <p className="ssl-type-meta text-accent/90">{SOLUTIONS_HERO.label}</p>
          <h1
            id="solutions-hero-heading"
            className="max-w-[18ch] text-[clamp(1.75rem,4.2vw,2.625rem)] font-semibold leading-[1.06] tracking-[-0.032em] text-balance sm:max-w-[20ch]"
          >
            {SOLUTIONS_HERO.title}
          </h1>
          <p className="max-w-[31rem] ssl-type-body-lg leading-[1.5] text-text-on-dark-secondary">
            {SOLUTIONS_HERO.body}
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <SolutionsCtaLink href={SOLUTIONS_HERO.primaryCta.href}>
              {SOLUTIONS_HERO.primaryCta.label}
            </SolutionsCtaLink>
            <SolutionsCtaLink
              href={SOLUTIONS_HERO.secondaryCta.href}
              variant="secondary"
            >
              {SOLUTIONS_HERO.secondaryCta.label}
            </SolutionsCtaLink>
          </div>
        </div>

        <ul
          className="hidden min-w-0 list-none flex-col gap-2.5 border-l border-accent/35 py-1 pl-5 lg:flex lg:max-w-[16rem] lg:justify-self-end"
          aria-label="How technology aligns with your organisation"
        >
          {SOLUTIONS_HERO.rail.map((item) => (
            <li
              key={item}
              className="relative ssl-type-body-sm leading-snug text-text-on-dark-secondary before:absolute before:-left-[1.3125rem] before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
