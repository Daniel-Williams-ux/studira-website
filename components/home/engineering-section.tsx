import { EngineeringArtwork } from "./engineering-artwork";
import { EngineeringInView } from "./engineering-in-view";

const TECHNICAL_DISCIPLINES = [
  "APPLICATION ENGINEERING",
  "CLOUD & INFRASTRUCTURE",
  "DATA SYSTEMS",
  "DEPLOYMENT & OPERATIONS",
  "SECURITY",
  "OBSERVABILITY",
] as const;

export function EngineeringSection() {
  return (
    <section
      aria-labelledby="engineering-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
    >
      <div
        data-ssl-engineering-reveal-root
        className="ssl-container ssl-engineering-chapter ssl-engineering-await"
      >
        <header className="ssl-engineering-copy flex min-w-0 max-w-3xl flex-col">
          <p className="ssl-type-meta text-foreground-muted">ENGINEERING</p>
          <h2
            id="engineering-heading"
            className="ssl-engineering-heading mt-2 max-w-[18ch] text-balance sm:max-w-[20ch]"
          >
            Built to work behind the scenes.
          </h2>
          <p className="mt-2.5 max-w-[34rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
            We engineer the applications, data systems, infrastructure and operational
            environments that turn technology into dependable working systems.
          </p>
        </header>

        <ul
          className="ssl-engineering-disciplines mt-4 grid min-w-0 gap-x-8 gap-y-1.5 sm:mt-5 sm:grid-cols-2 sm:gap-x-10 lg:mt-7 lg:max-w-2xl lg:gap-y-2"
          aria-label="Technical disciplines"
        >
          {TECHNICAL_DISCIPLINES.map((label) => (
            <li
              key={label}
              className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-foreground/70"
            >
              {label}
            </li>
          ))}
        </ul>

        <div
          className="ssl-engineering-rule mt-4 border-t border-divider sm:mt-5 lg:mt-7"
          aria-hidden="true"
        />

        <EngineeringArtwork className="mt-3 sm:mt-4 lg:mt-6" />
      </div>
      <EngineeringInView />
    </section>
  );
}
