import { CONTACT_HERO } from "@/lib/contact/content";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
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

      <div className="ssl-container relative z-[2] py-8 sm:py-10 lg:py-12">
        <div className="flex min-w-0 max-w-[44rem] flex-col gap-3 sm:gap-3.5">
          <p className="ssl-type-meta text-accent/90">{CONTACT_HERO.eyebrow}</p>
          <h1
            id="contact-hero-heading"
            className="max-w-[20ch] text-[clamp(1.75rem,4.2vw,2.625rem)] font-semibold leading-[1.06] tracking-[-0.032em] text-balance"
          >
            {CONTACT_HERO.title}
          </h1>
          <p className="max-w-[36rem] ssl-type-body-lg leading-[1.5] text-text-on-dark-secondary">
            {CONTACT_HERO.body}
          </p>
        </div>
      </div>
    </section>
  );
}
