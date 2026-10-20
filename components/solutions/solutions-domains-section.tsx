import { DOMAINS } from "@/lib/solutions/content";
import { SolutionsChapterHeader } from "./solutions-chapter-header";
import { SolutionsIcon } from "./solutions-icon";

export function SolutionsDomainsSection() {
  return (
    <section
      aria-labelledby="solutions-domains-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-solutions-reveal
    >
      <div className="ssl-container ssl-solutions-chapter ssl-solutions-await">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start lg:gap-8 xl:gap-10">
          <SolutionsChapterHeader
            id="solutions-domains-heading"
            index={DOMAINS.index}
            label={DOMAINS.label}
            title={DOMAINS.title}
            className="ssl-solutions-copy"
          >
            <p className="mt-2.5 max-w-[26rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3">
              {DOMAINS.intro}
            </p>
          </SolutionsChapterHeader>

          <ul
            className="m-0 grid min-w-0 list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3 xl:gap-4"
            aria-label="Organisational domains"
          >
            {DOMAINS.items.map((item, index) => (
              <li
                key={item.title}
                className="ssl-solutions-reveal-item flex min-w-0 flex-col gap-2 border-t border-divider pt-3 sm:pt-4 lg:border-t-0 lg:pt-0"
                style={{ animationDelay: `${80 + index * 45}ms` }}
              >
                <SolutionsIcon name={item.icon} size={40} className="h-10 w-10" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[0.8125rem] font-semibold leading-tight sm:text-[0.875rem]">
                    {item.title}
                  </h3>
                  <p className="text-[0.6875rem] leading-[1.4] text-text-secondary sm:text-[0.75rem]">
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
