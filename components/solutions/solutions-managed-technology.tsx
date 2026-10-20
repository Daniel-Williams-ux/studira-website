import { MANAGED_TECHNOLOGY } from "@/lib/solutions/content";
import { SolutionsChapterHeader } from "./solutions-chapter-header";
import { SolutionsIcon } from "./solutions-icon";

export function SolutionsManagedTechnology() {
  return (
    <section
      aria-labelledby="solutions-managed-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-solutions-reveal
    >
      <div className="ssl-container ssl-solutions-chapter ssl-solutions-await">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-8 xl:gap-10">
          <SolutionsChapterHeader
            id="solutions-managed-heading"
            index={MANAGED_TECHNOLOGY.index}
            label={MANAGED_TECHNOLOGY.label}
            title={MANAGED_TECHNOLOGY.title}
            className="ssl-solutions-copy"
          >
            <p className="mt-2.5 max-w-[28rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
              {MANAGED_TECHNOLOGY.intro}
            </p>
          </SolutionsChapterHeader>

          <ul
            className="m-0 grid min-w-0 list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3 sm:gap-2.5 lg:gap-3"
            aria-label="Managed technology services"
          >
            {MANAGED_TECHNOLOGY.cards.map((card, index) => (
              <li
                key={card.title}
                className="ssl-solutions-reveal-item flex min-w-0 flex-col gap-2 rounded-sm border border-divider bg-surface px-3.5 py-3.5 sm:px-4 sm:py-4"
                style={{ animationDelay: `${100 + index * 65}ms` }}
              >
                <SolutionsIcon name={card.icon} size={36} className="h-9 w-9 shrink-0" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[0.8125rem] font-semibold leading-tight sm:text-[0.875rem]">
                    {card.title}
                  </h3>
                  <p className="text-[0.6875rem] leading-[1.45] text-text-secondary sm:text-[0.75rem]">
                    {card.body}
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
