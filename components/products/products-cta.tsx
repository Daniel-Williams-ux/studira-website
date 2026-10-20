import Link from "next/link";

const ctaClass =
  "group inline-flex min-h-11 w-fit max-w-full items-center justify-center gap-2 rounded-md bg-accent px-6 ssl-type-label text-accent-foreground motion-safe:transition-[background-color] motion-safe:duration-fast hover:bg-accent/92 active:bg-accent/85 focus-visible:ssl-focus-ring sm:px-7";

export function ProductsCta() {
  return (
    <section
      aria-labelledby="products-cta-heading"
      className="overflow-x-clip border-t border-divider bg-surface-dark text-foreground-inverse"
      style={{ backgroundImage: "var(--gradient-atmosphere-dark)" }}
      data-ssl-products-reveal
    >
      <div className="ssl-container ssl-products-cta ssl-products-await">
        <div className="ssl-products-copy flex max-w-2xl flex-col gap-3 sm:gap-3.5">
          <p className="ssl-type-meta text-text-on-dark-secondary">HAVE A PROBLEM WORTH SOLVING?</p>
          <h2
            id="products-cta-heading"
            className="max-w-[18ch] text-[clamp(1.375rem,3vw,1.875rem)] font-semibold leading-[1.1] tracking-[-0.028em] text-balance"
          >
            Let&apos;s build the system around the problem.
          </h2>
          <Link href="/contact" className={[ctaClass, "mt-1"].join(" ")}>
            Talk to Studira Systems
            <span
              aria-hidden="true"
              className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
