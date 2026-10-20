import Image from "next/image";
import { EDUCATION_CTA } from "@/lib/education/content";
import { EducationCtaLink } from "./education-cta-link";

const SPROUT_MARK = "/images/brand/studira-sprout-mark.png";

export function EducationCta() {
  return (
    <section
      aria-labelledby="education-cta-heading"
      className="relative overflow-x-clip border-t border-divider bg-surface-dark text-foreground-inverse"
      style={{ backgroundImage: "var(--gradient-atmosphere-dark)" }}
      data-ssl-education-reveal
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[min(42vw,14rem)] opacity-[0.14] sm:w-[min(36vw,16rem)]"
        aria-hidden="true"
      >
        <Image
          src={SPROUT_MARK}
          alt=""
          width={320}
          height={320}
          className="h-auto w-full object-contain object-left-bottom"
        />
      </div>

      <div className="ssl-container ssl-education-cta ssl-education-await">
        <div className="relative z-[1] grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
          <div className="ssl-education-copy flex max-w-2xl flex-col gap-3 sm:gap-3.5">
            <p className="ssl-type-meta text-accent/90">{EDUCATION_CTA.label}</p>
            <h2
              id="education-cta-heading"
              className="max-w-[20ch] text-[clamp(1.375rem,3vw,1.875rem)] font-semibold leading-[1.1] tracking-[-0.028em] text-balance"
            >
              {EDUCATION_CTA.title}
            </h2>
            <p className="max-w-[28rem] ssl-type-body-lg leading-[1.45] text-text-on-dark-secondary">
              {EDUCATION_CTA.body}
            </p>
          </div>
          <EducationCtaLink href={EDUCATION_CTA.cta.href} className="lg:shrink-0">
            {EDUCATION_CTA.cta.label}
          </EducationCtaLink>
        </div>
      </div>
    </section>
  );
}
