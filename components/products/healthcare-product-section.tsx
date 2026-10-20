import { HealthcareProductVisual } from "./healthcare-product-visual";

const DIMENSIONS = ["APPLICATIONS", "DATA", "WORKFLOWS", "INFRASTRUCTURE"] as const;

export function HealthcareProductSection() {
  return (
    <section
      aria-labelledby="healthcare-product-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-products-reveal
    >
      <div className="ssl-container ssl-products-chapter ssl-products-await">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-start lg:gap-8 xl:gap-10">
          <div className="ssl-products-copy flex min-w-0 flex-col lg:max-w-[26rem]">
            <p className="ssl-type-meta text-foreground-muted">01 / HEALTHCARE</p>
            <p className="mt-2 text-[1.0625rem] font-semibold tracking-[-0.02em]">
              Healthcare Management Platform
            </p>
            <p className="mt-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-foreground/65">
              EMR · HEALTHCARE OPERATIONS
            </p>
            <h2
              id="healthcare-product-heading"
              className="ssl-products-heading mt-3 max-w-[18ch] text-balance"
            >
              A healthcare system built around clinical operations.
            </h2>
            <p className="mt-2.5 ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
              A healthcare management platform engineered around the workflows, records and
              operational requirements of a healthcare organisation.
            </p>
            <ul
              className="mt-4 flex flex-wrap gap-x-4 gap-y-1 lg:mt-5"
              aria-label="Technical dimensions"
            >
              {DIMENSIONS.map((label) => (
                <li
                  key={label}
                  className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-foreground/70"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <HealthcareProductVisual className="min-w-0 lg:pt-1" />
        </div>
      </div>
    </section>
  );
}
