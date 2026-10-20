import { ABOUT_OPERATE } from "@/lib/about/content";
import { AboutPrincipleIcon } from "./about-principle-icon";

export function AboutOperateSection() {
  return (
    <section
      id={ABOUT_OPERATE.id}
      aria-labelledby="about-operate-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-about-reveal
    >
      <div className="ssl-container ssl-about-chapter ssl-about-await">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-8 xl:gap-10">
          <header className="ssl-about-copy max-w-2xl lg:max-w-none lg:pt-0.5">
            <p className="ssl-type-meta text-foreground-muted">{ABOUT_OPERATE.label}</p>
            <h2
              id="about-operate-heading"
              className="ssl-about-heading mt-2 max-w-[22ch] text-balance"
            >
              {ABOUT_OPERATE.title}
            </h2>
            <p className="mt-2.5 max-w-[34rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
              {ABOUT_OPERATE.intro}
            </p>
          </header>

          <ul
            className="mt-6 grid min-w-0 list-none grid-cols-1 gap-5 p-0 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:mt-0 lg:grid-cols-4 lg:gap-0"
            aria-label="How we operate"
          >
            {ABOUT_OPERATE.principles.map((principle, index) => (
              <li
                key={principle.key}
                className={[
                  "ssl-about-reveal-item flex min-w-0 flex-col gap-2.5 lg:px-3 lg:first:pl-0 lg:last:pr-0",
                  index < ABOUT_OPERATE.principles.length - 1
                    ? "lg:border-r lg:border-divider"
                    : "",
                ].join(" ")}
                style={{ animationDelay: `${80 + index * 55}ms` }}
              >
                <AboutPrincipleIcon
                  name={principle.key}
                  className="h-9 w-9 shrink-0 text-accent"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[0.9375rem] font-semibold leading-tight">
                    {principle.title}
                  </h3>
                  <p className="text-[0.75rem] leading-[1.45] text-text-secondary sm:text-[0.8125rem]">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
