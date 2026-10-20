import { ABOUT_HERO } from "@/lib/about/content";
import { AboutCtaLink } from "./about-cta-link";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
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
        <div
          className="absolute inset-0 opacity-35"
          style={{ backgroundImage: "var(--gradient-atmosphere-hero)" }}
        />
      </div>

      <div className="ssl-container relative z-[2] py-9 sm:py-11 lg:py-14 xl:py-16">
        <div
          className="flex min-h-[clamp(14rem,26vw,20rem)] min-w-0 max-w-[44rem] flex-col justify-center gap-3 sm:gap-3.5 lg:max-w-[38rem] xl:max-w-[42rem]"
        >
          <p className="ssl-type-meta text-accent/90">{ABOUT_HERO.label}</p>
          <h1
            id="about-hero-heading"
            className="max-w-[18ch] text-[clamp(1.75rem,4.2vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.032em] text-balance sm:max-w-[20ch]"
          >
            {ABOUT_HERO.title}
          </h1>
          <p className="max-w-[36rem] ssl-type-body-lg leading-[1.5] text-text-on-dark-secondary">
            {ABOUT_HERO.body}
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <AboutCtaLink href={ABOUT_HERO.primaryCta.href}>
              {ABOUT_HERO.primaryCta.label}
            </AboutCtaLink>
            <AboutCtaLink href={ABOUT_HERO.secondaryCta.href} variant="secondary">
              {ABOUT_HERO.secondaryCta.label}
            </AboutCtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
