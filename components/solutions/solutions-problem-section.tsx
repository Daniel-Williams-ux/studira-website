import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { PROBLEM_SECTION } from "@/lib/solutions/content";
import { SolutionsChapterHeader } from "./solutions-chapter-header";

function publicImageExists(src: string) {
  const relative = src.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}

export function SolutionsProblemSection() {
  return (
    <section
      aria-labelledby="solutions-problem-heading"
      className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      data-ssl-solutions-reveal
    >
      <div className="ssl-container ssl-solutions-chapter ssl-solutions-await">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-8 xl:gap-10">
          <div className="ssl-solutions-copy flex min-w-0 flex-col gap-3">
            <SolutionsChapterHeader
              id="solutions-problem-heading"
              index={PROBLEM_SECTION.index}
              label={PROBLEM_SECTION.label}
              title={PROBLEM_SECTION.title}
            />
            <div className="flex flex-col gap-2.5 ssl-type-body-lg leading-[1.45] text-text-secondary">
              {PROBLEM_SECTION.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div
            className="ssl-solutions-problem-rail min-w-0 max-w-full overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch] lg:overflow-visible lg:pb-0"
          >
            <ol
              className="m-0 flex min-w-0 w-max max-w-none list-none gap-2 p-0 sm:gap-2.5 lg:grid lg:w-full lg:max-w-full lg:grid-cols-5 lg:gap-2"
              aria-label="From people to better outcomes"
            >
              {PROBLEM_SECTION.themes.map((theme, index) => {
                const hasImage = publicImageExists(theme.imagePath);

                return (
                  <li
                    key={theme.title}
                    className="ssl-solutions-reveal-item relative flex w-[6.75rem] shrink-0 flex-col overflow-hidden rounded-sm border border-divider bg-surface sm:w-[7.25rem] lg:w-auto"
                    style={{ animationDelay: `${80 + index * 50}ms` }}
                  >
                    <div
                      className={[
                        "relative aspect-[5/6] w-full",
                        hasImage ? "bg-surface-accent" : "bg-[color-mix(in_srgb,var(--ssl-cool-grey)_14%,var(--ssl-off-white))]",
                      ].join(" ")}
                    >
                      {hasImage ? (
                        <Image
                          src={theme.imagePath}
                          alt={theme.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 12vw, 28vw"
                          className="object-cover object-center"
                        />
                      ) : (
                        <span className="sr-only">
                          {`Approved photograph pending: ${theme.imagePath}`}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5 px-2 py-2 sm:px-2.5 sm:py-2.5">
                      <p className="text-[0.8125rem] font-semibold leading-tight">{theme.title}</p>
                      <p className="text-[0.6875rem] leading-snug text-text-secondary">
                        {theme.description}
                      </p>
                    </div>
                    {index < PROBLEM_SECTION.themes.length - 1 ? (
                      <span
                        className="pointer-events-none absolute -right-1.5 top-[42%] z-[1] hidden text-accent lg:inline"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
