import { OUR_METHOD } from "@/lib/solutions/content";
import { SolutionsChapterHeader } from "./solutions-chapter-header";
import { SolutionsIcon } from "./solutions-icon";

function ProcessArrow() {
  return (
    <svg
      viewBox="0 0 24 12"
      className="hidden h-3 w-6 shrink-0 text-foreground-muted lg:block"
      aria-hidden="true"
    >
      <path
        d="M1 6h14M12 2l6 4-6 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SolutionsMethodSection() {
  return (
    <section
      aria-labelledby="solutions-method-heading"
      className="overflow-x-clip border-t border-divider bg-surface-accent text-foreground"
      data-ssl-solutions-reveal
    >
      <div className="ssl-container ssl-solutions-chapter ssl-solutions-await">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start lg:gap-8 xl:gap-10">
          <SolutionsChapterHeader
            id="solutions-method-heading"
            index={OUR_METHOD.index}
            label={OUR_METHOD.label}
            title={OUR_METHOD.title}
            className="ssl-solutions-copy"
          >
            <p className="mt-2.5 max-w-[22rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
              {OUR_METHOD.intro}
            </p>
          </SolutionsChapterHeader>

          <div className="relative min-w-0">
            <div
              className="pointer-events-none absolute left-[4%] right-[2%] top-[0.85rem] hidden h-px border-t border-dotted border-foreground/25 lg:block"
              aria-hidden="true"
            />
            <ol
              className="m-0 flex min-w-0 list-none flex-col gap-4 p-0 lg:flex-row lg:items-start lg:gap-0.5 xl:gap-1"
              aria-label="Our method from understand to manage"
            >
              {OUR_METHOD.steps.map((step, index) => (
                <li
                  key={step.num}
                  className="ssl-solutions-reveal-item relative flex min-w-0 flex-1 flex-col gap-1.5 lg:px-0.5 lg:pr-1"
                  style={{ animationDelay: `${90 + index * 55}ms` }}
                >
                  <div className="flex items-center gap-2 lg:flex-col lg:items-start lg:gap-1">
                    <span
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-[color-mix(in_srgb,var(--ssl-accent)_16%,var(--ssl-off-white))] font-mono text-[0.625rem] font-medium text-accent"
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                    <SolutionsIcon name={step.icon} size={32} className="h-8 w-8" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[0.8125rem] font-semibold leading-tight sm:text-[0.875rem]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 max-w-[10.5rem] text-[0.6875rem] leading-[1.38] text-text-secondary sm:text-[0.75rem]">
                      {step.body}
                    </p>
                  </div>
                  {index < OUR_METHOD.steps.length - 1 ? (
                    <div className="flex items-center pl-1 lg:absolute lg:-right-0.5 lg:top-[0.65rem] lg:pl-0">
                      <ProcessArrow />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
