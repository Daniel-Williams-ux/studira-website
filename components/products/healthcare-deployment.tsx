export function HealthcareDeployment() {
  return (
    <section
      aria-labelledby="healthcare-deployment-heading"
      className="overflow-x-clip border-t border-divider bg-surface-accent text-foreground"
      data-ssl-products-reveal
    >
      <div className="ssl-container ssl-products-strip ssl-products-await">
        <div className="ssl-products-copy max-w-3xl border-l-2 border-accent/70 pl-4 sm:pl-5">
          <p className="ssl-type-meta text-foreground-muted">HEALTHCARE OPERATIONS</p>
          <h2
            id="healthcare-deployment-heading"
            className="mt-2 text-[clamp(1.25rem,2.8vw,1.625rem)] font-semibold leading-[1.12] tracking-[-0.024em]"
          >
            Built around real clinical operations.
          </h2>
          <p className="mt-2 max-w-[38rem] ssl-type-body leading-[1.45] text-text-secondary sm:mt-2.5">
            Designed to support patient registration, clinical workflows, appointments, records and
            day-to-day healthcare operations, with scope to adapt to the needs of different
            healthcare organisations.
          </p>
        </div>
      </div>
    </section>
  );
}
