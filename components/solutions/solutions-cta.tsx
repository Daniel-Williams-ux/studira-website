import Image from "next/image";
import { SOLUTIONS_CTA } from "@/lib/solutions/content";
import { SolutionsCtaLink } from "./solutions-cta-link";

const SPROUT_MARK = "/images/brand/studira-sprout-mark.png";

export function SolutionsCta() {
  return (
    <section
      aria-labelledby="solutions-cta-heading"
      className="relative overflow-x-clip border-t border-divider bg-surface-dark text-foreground-inverse"
      style={{ backgroundImage: "var(--gradient-atmosphere-dark)" }}
      data-ssl-solutions-reveal
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

      <div className="ssl-container ssl-solutions-cta ssl-solutions-await">
        <div className="relative z-[1] grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
          <div className="ssl-solutions-copy flex max-w-2xl flex-col gap-3 sm:gap-3.5">
            <p className="ssl-type-meta text-accent/90">{SOLUTIONS_CTA.label}</p>
            <h2
              id="solutions-cta-heading"
              className="max-w-[20ch] text-[clamp(1.375rem,3vw,1.875rem)] font-semibold leading-[1.1] tracking-[-0.028em] text-balance"
            >
              {SOLUTIONS_CTA.title}
            </h2>
            <p className="max-w-[28rem] ssl-type-body-lg leading-[1.45] text-text-on-dark-secondary">
              {SOLUTIONS_CTA.body}
            </p>
          </div>
          <SolutionsCtaLink href={SOLUTIONS_CTA.cta.href} className="lg:shrink-0">
            {SOLUTIONS_CTA.cta.label}
          </SolutionsCtaLink>
        </div>
      </div>
    </section>
  );
}
