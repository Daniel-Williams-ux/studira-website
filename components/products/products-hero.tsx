import { ProductsHeroComposition, ProductsProcessRail } from "./product-system-artwork";

export function ProductsHero() {
  return (
    <section
      aria-labelledby="products-hero-heading"
      className="relative overflow-x-clip bg-surface-dark text-foreground-inverse"
      style={{ backgroundImage: "var(--gradient-atmosphere-hero)" }}
    >
      <div className="ssl-container relative z-[2] grid gap-6 py-8 sm:gap-7 sm:py-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-center lg:gap-8 lg:py-12 xl:py-14">
        <div className="flex min-w-0 flex-col gap-3 sm:gap-3.5 lg:max-w-[34rem]">
          <p className="ssl-type-meta text-text-on-dark-secondary">PRODUCTS</p>
          <h1
            id="products-hero-heading"
            className="max-w-[16ch] text-[clamp(1.75rem,4.2vw,2.625rem)] font-semibold leading-[1.06] tracking-[-0.032em] text-balance sm:max-w-[18ch]"
          >
            Technology built around the way organisations work.
          </h1>
          <p className="max-w-[31rem] ssl-type-body-lg leading-[1.5] text-text-on-dark-secondary">
            Studira Systems develops technology products that turn real organisational problems
            into practical, configurable systems.
          </p>
          <ProductsProcessRail className="pt-1 lg:pt-2" />
        </div>

        <ProductsHeroComposition className="min-w-0 w-full" />
      </div>
    </section>
  );
}
