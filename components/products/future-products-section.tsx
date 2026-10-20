const DOMAIN_TAGS = ["HEALTHCARE", "WORKFORCE", "OPERATIONS", "FUTURE SYSTEMS"] as const;

export function FutureProductsSection() {
  return (
    <section
      aria-labelledby="products-future-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-products-reveal
    >
      <div className="ssl-container ssl-products-chapter-compact ssl-products-await">
        <div className="ssl-products-copy max-w-2xl">
          <p className="ssl-type-meta text-foreground-muted">WHAT&apos;S NEXT</p>
          <h2
            id="products-future-heading"
            className="ssl-products-heading mt-2 max-w-[22ch] text-balance"
          >
            The portfolio will grow with the problems worth solving.
          </h2>
          <p className="mt-2.5 ssl-type-body-lg leading-[1.45] text-text-secondary">
            Healthcare and workforce technology are part of a broader product direction. Studira
            Systems is designed to develop technology across domains where real organisational
            problems can be solved through well-engineered systems.
          </p>
          <p className="mt-4 font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-foreground/60 sm:text-[0.6875rem]">
            {DOMAIN_TAGS.join(" / ")}
          </p>
        </div>
      </div>
    </section>
  );
}
