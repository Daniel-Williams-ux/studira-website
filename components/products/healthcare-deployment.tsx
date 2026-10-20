export function HealthcareDeployment() {
  return (
    <section
      aria-labelledby="healthcare-deployment-heading"
      className="overflow-x-clip border-t border-divider bg-surface-accent text-foreground"
      data-ssl-products-reveal
    >
      <div className="ssl-container ssl-products-strip ssl-products-await">
        <div className="ssl-products-copy max-w-3xl border-l-2 border-accent/70 pl-4 sm:pl-5">
          <p className="ssl-type-meta text-foreground-muted">INITIAL DEPLOYMENT</p>
          <h2
            id="healthcare-deployment-heading"
            className="mt-2 text-[clamp(1.25rem,2.8vw,1.625rem)] font-semibold leading-[1.12] tracking-[-0.024em]"
          >
            Built around the requirements of BIO Dental.
          </h2>
          <p className="mt-2 max-w-[38rem] ssl-type-body leading-[1.45] text-text-secondary sm:mt-2.5">
            The platform was developed around the operational requirements of BIO Dental and is
            intended to be adaptable for other healthcare organisations.
          </p>
        </div>
      </div>
    </section>
  );
}
