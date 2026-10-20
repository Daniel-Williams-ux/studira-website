const PRINCIPLES = [
  {
    num: "01",
    title: "PROBLEM",
    body: "Understand the operational problem.",
  },
  {
    num: "02",
    title: "SYSTEM",
    body: "Turn the problem into a reusable technology platform.",
  },
  {
    num: "03",
    title: "ADAPT",
    body: "Configure the system around the organisation using it.",
  },
] as const;

export function ProductPhilosophySection() {
  return (
    <section
      aria-labelledby="products-philosophy-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-products-reveal
    >
      <div className="ssl-container ssl-products-chapter ssl-products-await">
        <header className="ssl-products-copy max-w-2xl">
          <p className="ssl-type-meta text-foreground-muted">HOW WE BUILD PRODUCTS</p>
          <h2
            id="products-philosophy-heading"
            className="ssl-products-heading mt-2 max-w-[20ch] text-balance"
          >
            Start with the problem. Build the system.
          </h2>
          <p className="mt-2.5 max-w-[34rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
            Our products begin with real operational problems. We study how people, processes and
            information move through an organisation, then engineer technology around that reality.
          </p>
        </header>

        <ol className="ssl-products-principles mt-6 grid min-w-0 gap-0 sm:mt-8 lg:mt-9 lg:grid-cols-3 lg:gap-0">
          {PRINCIPLES.map((item, index) => (
            <li
              key={item.num}
              className={[
                "ssl-products-reveal-item flex min-w-0 flex-col gap-2 border-t border-divider py-5 sm:py-6",
                "lg:border-t-0 lg:border-l lg:py-0 lg:pl-8 lg:first:border-l-0 lg:first:pl-0",
                index > 0 ? "lg:pl-8" : "",
              ].join(" ")}
            >
              <p className="font-mono text-[0.6875rem] font-medium tracking-[0.16em] text-accent">
                {item.num}
              </p>
              <p className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.14em] text-foreground">
                {item.title}
              </p>
              <p className="max-w-[18rem] ssl-type-body-sm leading-snug text-text-secondary">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
