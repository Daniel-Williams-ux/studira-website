import { ApproachInView } from "./approach-in-view";
import { ApproachInterfaceComposition } from "./approach-interface-composition";

export function PhilosophySection() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="bg-surface-light text-foreground"
    >
      <ApproachInView className="ssl-container ssl-approach-chapter">
        <div className="grid min-w-0 items-center gap-4 sm:gap-5 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.56fr)] lg:gap-6 xl:gap-7">
          <div className="ssl-approach-copy flex min-w-0 flex-col gap-1.5">
            <p className="ssl-type-meta text-foreground-muted">OUR APPROACH</p>
            <div className="flex flex-col gap-1">
              <h2
                id="philosophy-heading"
                className="max-w-[16ch] text-balance text-[clamp(1.625rem,4.2vw,2rem)] font-semibold leading-[1.08] tracking-[-0.024em] lg:max-w-[15ch] lg:text-[2rem] xl:text-[2.125rem]"
              >
                Technology should fit the way you work.
              </h2>
              <p className="max-w-[31rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:max-w-[32rem]">
                Every organisation operates differently. We start by understanding
                the problem, the workflow and the people behind it — then engineer
                the technology around them.
              </p>
              <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-text-secondary">
                <span className="text-foreground/75">Understand</span>
                <span className="mx-2 text-foreground-muted" aria-hidden="true">
                  →
                </span>
                <span className="text-foreground/75">Fit</span>
                <span className="mx-2 text-foreground-muted" aria-hidden="true">
                  →
                </span>
                <span className="font-semibold text-[color-mix(in_srgb,var(--ssl-accent)_70%,var(--ssl-graphite))]">
                  Engineer
                </span>
              </p>
            </div>
          </div>

          <ApproachInterfaceComposition />
        </div>
      </ApproachInView>
    </section>
  );
}
