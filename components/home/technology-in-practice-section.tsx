import { PracticeInView } from "./practice-in-view";
import { TechnologyInPracticeArtwork } from "./technology-in-practice-artwork";

const TECHNICAL_DIMENSIONS = [
  "APPLICATION SYSTEMS",
  "DATA & WORKFLOWS",
  "CLOUD INFRASTRUCTURE",
  "DEPLOYMENT & OPERATIONS",
  "SECURITY",
  "OBSERVABILITY",
] as const;

export function TechnologyInPracticeSection() {
  return (
    <section
      aria-labelledby="technology-in-practice-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
    >
      <div
        data-ssl-practice-reveal-root
        className="ssl-container ssl-practice-chapter ssl-practice-await"
      >
        <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-8 xl:gap-9">
          <header className="ssl-practice-copy flex min-w-0 flex-col">
            <p className="ssl-type-meta text-foreground-muted">TECHNOLOGY IN PRACTICE</p>
            <h2
              id="technology-in-practice-heading"
              className="ssl-practice-heading mt-2 max-w-[16ch] text-balance sm:max-w-[18ch]"
            >
              Systems built beyond the interface.
            </h2>
            <p className="mt-2.5 max-w-[31rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
              Applications, data, infrastructure and operational environments engineered to
              work together as one system.
            </p>
            <ul
              className="ssl-practice-dimensions mt-4 grid min-w-0 grid-cols-2 gap-x-3 gap-y-1 sm:gap-x-6 sm:gap-y-1.5 lg:mt-5"
              aria-label="Technical dimensions"
            >
              {TECHNICAL_DIMENSIONS.map((label) => (
                <li
                  key={label}
                  className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-foreground/70"
                >
                  {label}
                </li>
              ))}
            </ul>
          </header>

          <TechnologyInPracticeArtwork className="lg:pt-1" />
        </div>
      </div>
      <PracticeInView />
    </section>
  );
}
