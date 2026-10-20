import Link from "next/link";
import { FounderArtwork } from "./founder-artwork";
import { FounderInView } from "./founder-in-view";

const founderCtaClass =
  "group inline-flex min-h-11 w-fit max-w-full shrink-0 items-center justify-center gap-2 self-start rounded-md bg-accent px-6 ssl-type-label text-accent-foreground motion-safe:transition-[background-color] motion-safe:duration-fast hover:bg-accent/92 active:bg-accent/85 focus-visible:ssl-focus-ring sm:px-7";

export function FounderSection() {
  return (
    <section
      aria-labelledby="founder-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
    >
      <div
        data-ssl-founder-reveal-root
        className="ssl-container ssl-founder-chapter ssl-founder-await"
      >
        <div
          className="grid min-w-0 gap-2.5 sm:gap-3 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-stretch lg:gap-6 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:gap-8"
        >
          <header className="ssl-founder-copy flex min-w-0 flex-col lg:max-w-[26rem] lg:justify-center xl:max-w-[27.5rem]">
            <p className="ssl-type-meta text-foreground-muted">FOUNDER</p>
            <h2
              id="founder-heading"
              className="ssl-founder-heading mt-1.5 max-w-[16ch] text-balance sm:mt-2"
            >
              <span className="block">Building technology</span>
              <span className="block">for real-world impact.</span>
            </h2>
            <p className="mt-2 max-w-[38ch] ssl-type-body leading-[1.45] text-text-secondary sm:mt-2.5 sm:max-w-none sm:ssl-type-body-lg lg:mt-3">
              I started Studira Systems to build and manage technology systems that solve
              real-world organisational problems — helping institutions, businesses and people
              work more efficiently and create lasting value.
            </p>
          </header>

          <div className="flex min-w-0 flex-col gap-2 sm:gap-2.5 lg:relative lg:min-h-[18.5rem] lg:gap-0 xl:min-h-[19rem]">
            <div className="relative min-w-0 lg:contents">
              <FounderArtwork className="lg:-mr-6 xl:-mr-10 2xl:-mr-14" />

              <div
                className={[
                  "ssl-founder-identity flex min-w-0 flex-col gap-1 border-l-2 border-accent/75 pl-3.5",
                  "relative z-[2] -mt-4 max-w-[calc(100%-0.5rem)] bg-surface-light/92 py-1.5 backdrop-blur-[2px] sm:-mt-[1.125rem] sm:max-w-[min(100%,20.5rem)]",
                  "lg:absolute lg:bottom-[3.75rem] lg:left-0 lg:mt-0 lg:max-w-[15.5rem] lg:bg-surface-light/88 lg:py-2 lg:pl-4 lg:backdrop-blur-[2px]",
                  "xl:max-w-[16.5rem]",
                ].join(" ")}
              >
              <p className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-foreground">
                Daniel Williams
              </p>
              <p className="ssl-type-body-sm leading-snug text-text-secondary">
                Founder, Studira Systems Limited
              </p>
              <p className="mt-0.5 font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-foreground/65 sm:text-[0.6875rem]">
                TECHNOLOGY BUILDER · PRODUCT ARCHITECT
              </p>
              </div>
            </div>

            <Link
              href="/about"
              className={[founderCtaClass, "ssl-founder-cta lg:absolute lg:bottom-0 lg:left-0 lg:z-[2]"].join(
                " ",
              )}
            >
              More about the founder
              <span
                aria-hidden="true"
                className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
      <FounderInView />
    </section>
  );
}
