const ARCHITECTURE_STEPS = [
  "CORE PLATFORM",
  "ORGANISATIONAL WORKFLOWS",
  "CONFIGURATION",
  "DEPLOYMENT",
  "MANAGED TECHNOLOGY",
] as const;

export function ProductArchitectureSection() {
  return (
    <section
      aria-labelledby="product-architecture-heading"
      className="overflow-x-clip border-t border-divider bg-surface text-foreground"
      data-ssl-products-reveal
    >
      <div className="ssl-container ssl-products-chapter ssl-products-await">
        <header className="ssl-products-copy max-w-2xl">
          <p className="ssl-type-meta text-foreground-muted">PRODUCT ARCHITECTURE</p>
          <h2
            id="product-architecture-heading"
            className="ssl-products-heading mt-2 max-w-[20ch] text-balance"
          >
            One system. Configured around the organisation.
          </h2>
          <p className="mt-2.5 max-w-[36rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
            Studira Systems develops core technology systems that can be configured around
            organisational workflows, deployed into the appropriate environment and managed as the
            technology evolves.
          </p>
        </header>

        <ol
          className="ssl-products-architecture ssl-products-reveal-item mt-7 flex min-w-0 list-none flex-col gap-0 p-0 sm:mt-8 lg:mt-10 lg:flex-row lg:items-start lg:justify-between"
          aria-label="Product architecture progression"
        >
          {ARCHITECTURE_STEPS.map((step, index) => (
            <li
              key={step}
              className="flex min-w-0 flex-col items-stretch lg:flex-1 lg:flex-row lg:items-center"
            >
              <div className="border-l-2 border-accent/45 py-3 pl-3 lg:border-l-0 lg:border-t-2 lg:py-0 lg:pl-0 lg:pt-3">
                <span className="block font-mono text-[0.625rem] font-medium uppercase leading-snug tracking-[0.12em] text-foreground sm:text-[0.6875rem] sm:tracking-[0.14em]">
                  {step}
                </span>
              </div>
              {index < ARCHITECTURE_STEPS.length - 1 ? (
                <span
                  className="flex items-center py-1 pl-3 font-mono text-sm text-accent lg:px-2 lg:py-0 lg:pl-0 lg:pt-3"
                  aria-hidden="true"
                >
                  <span className="lg:hidden">↓</span>
                  <span className="hidden lg:inline">→</span>
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
