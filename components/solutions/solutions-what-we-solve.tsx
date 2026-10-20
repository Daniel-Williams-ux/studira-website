import { WHAT_WE_SOLVE } from "@/lib/solutions/content";
import { SolutionsChapterHeader } from "./solutions-chapter-header";
import { SolutionsIcon } from "./solutions-icon";

export function SolutionsWhatWeSolve() {
  return (
    <section
      aria-labelledby="solutions-what-we-solve-heading"
      className="overflow-x-clip border-t border-divider bg-surface text-foreground"
      data-ssl-solutions-reveal
    >
      <div className="ssl-container ssl-solutions-chapter ssl-solutions-await">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-8 xl:gap-10">
          <SolutionsChapterHeader
            id="solutions-what-we-solve-heading"
            index={WHAT_WE_SOLVE.index}
            label={WHAT_WE_SOLVE.label}
            title={WHAT_WE_SOLVE.title}
            className="ssl-solutions-copy"
          >
            <p className="mt-2.5 max-w-[28rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
              {WHAT_WE_SOLVE.intro}
            </p>
          </SolutionsChapterHeader>

          <ul
            className="m-0 grid min-w-0 list-none grid-cols-1 gap-3 p-0 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-2.5 xl:gap-3"
            aria-label="Solution areas"
          >
            {WHAT_WE_SOLVE.items.map((item, index) => (
              <li
                key={item.title}
                className="ssl-solutions-reveal-item flex h-full min-w-0 flex-col gap-2 rounded-sm border border-divider bg-surface px-3 py-3.5 sm:px-3.5 sm:py-4 lg:items-start lg:px-2.5 lg:py-3.5"
                style={{ animationDelay: `${100 + index * 60}ms` }}
              >
                <SolutionsIcon name={item.icon} size={36} className="h-9 w-9 shrink-0" />
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="text-[0.8125rem] font-semibold leading-tight sm:text-[0.875rem]">
                    {item.title}
                  </h3>
                  <p className="text-[0.6875rem] leading-[1.45] text-text-secondary sm:text-[0.75rem]">
                    {item.body}
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
