import { EDUCATION_APPROACH } from "@/lib/education/content";
import { EducationIcon } from "./education-icon";

export function EducationApproachSection() {
  return (
    <section
      aria-labelledby="education-approach-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-education-reveal
    >
      <div className="ssl-container ssl-education-chapter ssl-education-await">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-8 xl:gap-10">
          <header className="ssl-education-copy max-w-2xl lg:max-w-none lg:pt-0.5">
            <p className="ssl-type-meta text-foreground-muted">{EDUCATION_APPROACH.label}</p>
            <h2
              id="education-approach-heading"
              className="ssl-education-heading mt-2 max-w-[20ch] text-balance"
            >
              {EDUCATION_APPROACH.title}
            </h2>
            <p className="mt-2.5 max-w-[34rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-3 lg:max-w-[28rem]">
              {EDUCATION_APPROACH.intro}
            </p>
          </header>

          <ul
            className="mt-6 grid min-w-0 list-none grid-cols-1 gap-5 p-0 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:mt-0 lg:grid-cols-4 lg:gap-0"
            aria-label="Our approach benefits"
          >
            {EDUCATION_APPROACH.benefits.map((benefit, index) => (
              <li
                key={benefit.title}
                className={[
                  "ssl-education-reveal-item flex min-w-0 flex-col gap-2.5 lg:px-3 lg:first:pl-0 lg:last:pr-0 xl:px-4",
                  index < EDUCATION_APPROACH.benefits.length - 1
                    ? "lg:border-r lg:border-divider"
                    : "",
                ].join(" ")}
                style={{ animationDelay: `${80 + index * 55}ms` }}
              >
                <EducationIcon name={benefit.icon} size={36} className="h-9 w-9 shrink-0" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[0.9375rem] font-semibold leading-tight">{benefit.title}</h3>
                  <p className="text-[0.75rem] leading-[1.45] text-text-secondary sm:text-[0.8125rem]">
                    {benefit.body}
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
