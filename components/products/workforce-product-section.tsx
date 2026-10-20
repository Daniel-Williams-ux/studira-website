import { WorkforceProductComposition } from "./product-system-artwork";

export function WorkforceProductSection() {
  return (
    <section
      aria-labelledby="workforce-product-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-products-reveal
    >
      <div className="ssl-container ssl-products-chapter ssl-products-await">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start lg:gap-8 xl:gap-10">
          <WorkforceProductComposition className="ssl-products-reveal-item order-2 min-w-0 lg:order-1 lg:pt-1" />

          <div className="ssl-products-copy order-1 flex min-w-0 flex-col lg:order-2 lg:max-w-[26rem] lg:justify-self-end">
            <p className="ssl-type-meta text-foreground-muted">02 / WORKFORCE</p>
            <p className="mt-2 text-[1.0625rem] font-semibold tracking-[-0.02em]">
              Workforce Management Platform
            </p>
            <p className="mt-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-foreground/65">
              HR · WORKFORCE · ORGANISATIONAL OPERATIONS
            </p>
            <p className="mt-2 inline-flex w-fit items-center border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[0.625rem] font-medium uppercase tracking-[0.12em] text-foreground">
              IN DEVELOPMENT
            </p>
            <p className="mt-2 ssl-type-body-sm text-text-secondary">
              The product identity/name is not final.
            </p>
            <h2
              id="workforce-product-heading"
              className="ssl-products-heading mt-3 max-w-[18ch] text-balance"
            >
              Technology for the people behind the organisation.
            </h2>
            <p className="mt-2.5 ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
              A configurable workforce platform designed to help organisations manage people,
              processes and the systems that support their work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
