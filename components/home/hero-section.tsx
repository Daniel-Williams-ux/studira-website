import Link from "next/link";
import { HeroFinishedArtwork } from "./hero-interface-composition";
import { HeroProcessRail } from "./hero-process-rail";

const ctaPrimary =
  "group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-7 ssl-type-label text-accent-foreground motion-safe:transition-[background-color] motion-safe:duration-fast hover:bg-accent/92 active:bg-accent/85 focus-visible:ssl-focus-ring lg:w-auto lg:min-w-[10.5rem]";

const ctaSecondary =
  "inline-flex min-h-11 w-full items-center justify-center rounded-md border border-foreground-inverse/38 bg-foreground-inverse/[0.03] px-7 ssl-type-label text-foreground-inverse motion-safe:transition-[background-color,border-color] motion-safe:duration-fast hover:border-foreground-inverse/52 hover:bg-foreground-inverse/[0.07] focus-visible:ssl-focus-ring lg:w-auto lg:min-w-[11.5rem]";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-x-clip bg-surface-dark text-foreground-inverse"
    >
      <HeroFinishedArtwork variant="desktop" />

      <div className="ssl-container relative z-[2] grid gap-3.5 py-5 max-lg:gap-4 sm:gap-5 sm:py-6 lg:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] lg:items-start lg:gap-5 lg:py-7 xl:gap-7">
        <div className="order-1 flex min-w-0 flex-col gap-3 max-lg:gap-3.5 lg:max-w-[33.5rem] lg:gap-3.5">
          <p className="ssl-hero-enter ssl-hero-delay-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-on-dark-secondary max-lg:pb-0.5">
            TECHNOLOGY SYSTEMS
          </p>
          <h1
            id="hero-heading"
            className="ssl-hero-enter ssl-hero-delay-2 max-w-[19ch] text-[clamp(1.6875rem,3.4vw,2.6875rem)] font-semibold leading-[1.03] tracking-[-0.032em] max-lg:max-w-[18ch] max-lg:text-[clamp(1.75rem,8.1vw,2.0625rem)] max-lg:leading-[1.04] sm:max-w-[20ch] lg:max-w-[17.5ch]"
          >
            <span className="block">We build technology</span>
            <span className="block">systems for</span>
            <span className="block">
              <span className="text-accent">real-world</span> problems.
            </span>
          </h1>
          <p className="ssl-hero-enter ssl-hero-delay-3 max-w-[31rem] ssl-type-body-lg leading-relaxed text-text-on-dark-secondary max-lg:max-w-[28rem] max-lg:leading-[1.55]">
            Studira Systems builds and manages technology systems that solve
            real-world organisational problems.
          </p>
          <div className="ssl-hero-enter ssl-hero-delay-4 flex flex-col gap-3 pt-0.5 lg:flex-row lg:flex-wrap lg:items-center">
            <Link href="/contact" className={ctaPrimary}>
              Work with us
              <span
                aria-hidden="true"
                className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
              >
                →
              </span>
            </Link>
            <Link href="/products" className={ctaSecondary}>
              Explore what we build
            </Link>
          </div>
          <HeroProcessRail className="hidden min-w-0 pt-1 lg:flex" />
        </div>

        <div className="order-2 hidden min-h-0 min-w-0 lg:block" aria-hidden="true" />

        <HeroFinishedArtwork
          variant="mobile"
          className="order-3 ssl-hero-enter ssl-hero-delay-5 lg:hidden"
        />

        <div className="order-4 z-[2] min-w-0 max-w-full max-lg:pt-0.5 lg:hidden">
          <HeroProcessRail compact className="pt-1" />
        </div>
      </div>
    </section>
  );
}
