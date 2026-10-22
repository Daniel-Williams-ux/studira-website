import Image from "next/image";
import Link from "next/link";
import {
  STUDIRA_EMR_OPERATIONS_DASHBOARD_HEIGHT,
  STUDIRA_EMR_OPERATIONS_DASHBOARD_PATH,
  STUDIRA_EMR_OPERATIONS_DASHBOARD_WIDTH,
} from "@/lib/products/emr-assets";
import { REAL_WORLD_EVIDENCE } from "@/lib/solutions/content";
import { SolutionsChapterHeader } from "./solutions-chapter-header";

export function SolutionsEvidenceSection() {
  return (
    <section
      aria-labelledby="solutions-evidence-heading"
      className="overflow-x-clip border-t border-divider bg-surface text-foreground"
      data-ssl-solutions-reveal
    >
      <div className="ssl-container ssl-solutions-chapter ssl-solutions-await">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start lg:gap-8 xl:gap-10">
          <div className="ssl-solutions-copy flex min-w-0 flex-col gap-3">
            <SolutionsChapterHeader
              id="solutions-evidence-heading"
              index={REAL_WORLD_EVIDENCE.index}
              label={REAL_WORLD_EVIDENCE.label}
              title={REAL_WORLD_EVIDENCE.title}
            />
            <div className="flex flex-col gap-2.5 ssl-type-body-lg leading-[1.45] text-text-secondary">
              {REAL_WORLD_EVIDENCE.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={REAL_WORLD_EVIDENCE.link.href}
              className="group mt-1 inline-flex w-fit items-center gap-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-accent no-underline hover:text-accent/85 focus-visible:ssl-focus-ring"
            >
              {REAL_WORLD_EVIDENCE.link.label}
              <span
                aria-hidden="true"
                className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>

          <figure className="ssl-solutions-reveal-item m-0 min-w-0">
            <div className="overflow-hidden rounded-sm border border-line-strong bg-surface">
              <Image
                src={STUDIRA_EMR_OPERATIONS_DASHBOARD_PATH}
                alt="Studira Systems EMR operations dashboard"
                width={STUDIRA_EMR_OPERATIONS_DASHBOARD_WIDTH}
                height={STUDIRA_EMR_OPERATIONS_DASHBOARD_HEIGHT}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="block h-auto w-full object-contain object-top"
              />
            </div>
            <figcaption className="mt-1.5 space-y-1">
              <p className="font-mono text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-foreground/55 sm:text-[0.625rem]">
                {REAL_WORLD_EVIDENCE.caption.label}
              </p>
              <p className="text-[0.75rem] leading-snug text-text-secondary">
                {REAL_WORLD_EVIDENCE.caption.body}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
