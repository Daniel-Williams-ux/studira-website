import Link from "next/link";
import { EDUCATION_PROGRAMMES } from "@/lib/education/content";
import { EducationMedia } from "./education-media";

const programmePrimaryCta =
  "group inline-flex min-h-11 w-fit max-w-full items-center justify-center gap-2 rounded-md bg-accent px-5 ssl-type-label text-accent-foreground motion-safe:transition-[background-color] motion-safe:duration-fast hover:bg-accent/92 focus-visible:ssl-focus-ring sm:px-6";

const programmeGhostCta =
  "inline-flex min-h-11 w-fit max-w-full items-center justify-center rounded-md border border-divider bg-surface px-5 ssl-type-label text-foreground-muted sm:px-6";

export function EducationProgrammesSection() {
  return (
    <section
      aria-labelledby="education-programmes-heading"
      className="overflow-x-clip border-t border-divider bg-surface text-foreground"
      data-ssl-education-reveal
    >
      <div className="ssl-container ssl-education-chapter ssl-education-await">
        <h2 id="education-programmes-heading" className="sr-only">
          Education programmes
        </h2>

        <ul
          className="m-0 grid min-w-0 list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-3.5 xl:gap-4"
          aria-label="Education programmes"
        >
          {EDUCATION_PROGRAMMES.map((programme, index) => (
            <li
              key={programme.num}
              className="ssl-education-reveal-item flex min-w-0 flex-col overflow-hidden rounded-md border border-divider bg-surface-light"
              style={{ animationDelay: `${100 + index * 70}ms` }}
            >
              <div className="relative w-full">
                <EducationMedia
                  src={programme.image}
                  alt={programme.imageAlt}
                  className="aspect-video w-full"
                  imageClassName={[
                    "object-cover",
                    programme.num === "01" ? "object-[42%_center]" : "object-center",
                  ].join(" ")}
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 44vw, 100vw"
                />
                <span
                  className="absolute left-3 top-3 inline-flex min-h-6 min-w-6 items-center justify-center bg-surface-dark px-1.5 font-mono text-[0.625rem] font-medium text-foreground-inverse"
                  aria-hidden="true"
                >
                  {programme.num}
                </span>
                {programme.num === "03" ? (
                  <span
                    className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-[color-mix(in_srgb,var(--ssl-graphite)_88%,transparent)] px-2 py-0.5 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.08em] text-foreground-inverse"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e85d4c]" />
                    Live
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col gap-2 px-4 py-4 sm:gap-2.5 sm:px-4 sm:py-4">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="text-[0.9375rem] font-semibold leading-tight sm:text-[1rem]">
                    {programme.title}
                  </h3>
                  {programme.status ? (
                    <span
                      className={[
                        "rounded-full px-2 py-0.5 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.1em] sm:ml-0",
                        programme.status === "In development"
                          ? "bg-accent/15 text-foreground"
                          : "bg-[color-mix(in_srgb,var(--ssl-cool-grey)_18%,var(--ssl-off-white))] text-foreground-muted",
                      ].join(" ")}
                    >
                      {programme.status}
                    </span>
                  ) : null}
                </div>

                <p className="flex-1 text-[0.8125rem] leading-[1.45] text-text-secondary">
                  {programme.body}
                </p>

                {programme.cta.kind === "link" ? (
                  <Link href={programme.cta.href} className={programmePrimaryCta}>
                    {programme.cta.label}
                    <span
                      aria-hidden="true"
                      className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <span className={[programmeGhostCta, "cursor-not-allowed opacity-80"].join(" ")} aria-disabled="true">
                    {programme.cta.label}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
