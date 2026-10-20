import Image from "next/image";
import Link from "next/link";
import {
  HEALTHCARE_EMR_DASHBOARD_IMAGE_PATH,
  HEALTHCARE_EMR_PATIENTS_IMAGE_PATH,
} from "@/components/products/healthcare-product-visual";
import { REAL_WORLD_EVIDENCE } from "@/lib/solutions/content";
import { SolutionsChapterHeader } from "./solutions-chapter-header";

const EMR_IMAGE_WIDTH = 1864;
const EMR_IMAGE_HEIGHT = 1001;

export function SolutionsEvidenceSection() {
  return (
    <section
      aria-labelledby="solutions-evidence-heading"
      className="overflow-x-clip border-t border-divider bg-surface text-foreground"
      data-ssl-solutions-reveal
    >
      <div className="ssl-container ssl-solutions-chapter ssl-solutions-await">
        <div className="grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.38fr)_minmax(0,0.32fr)] lg:items-start lg:gap-5 xl:gap-6">
          <div className="ssl-solutions-copy flex min-w-0 flex-col gap-3 md:col-span-2 lg:col-span-1">
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

          <figure className="ssl-solutions-reveal-item m-0 min-w-0 lg:col-span-1">
            <div className="overflow-hidden rounded-sm border border-line-strong bg-surface-dark">
              <Image
                src={HEALTHCARE_EMR_PATIENTS_IMAGE_PATH}
                alt="Healthcare management platform patient registration screen"
                width={EMR_IMAGE_WIDTH}
                height={EMR_IMAGE_HEIGHT}
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="block h-auto w-full object-contain object-top"
              />
            </div>
            <figcaption className="mt-1.5 space-y-1">
              <p className="font-mono text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-foreground/55 sm:text-[0.625rem]">
                {REAL_WORLD_EVIDENCE.captions.primary}
              </p>
              <p className="text-[0.75rem] leading-snug text-text-secondary">
                {REAL_WORLD_EVIDENCE.captions.patient}
              </p>
            </figcaption>
          </figure>

          <figure
            className="ssl-solutions-reveal-item m-0 min-w-0 lg:col-span-1"
            style={{ animationDelay: "120ms" }}
          >
            <div className="overflow-hidden rounded-sm border border-line-strong bg-surface">
              <Image
                src={HEALTHCARE_EMR_DASHBOARD_IMAGE_PATH}
                alt="Operational dashboard within the healthcare management platform"
                width={EMR_IMAGE_WIDTH}
                height={EMR_IMAGE_HEIGHT}
                sizes="(min-width: 1024px) 18vw, 50vw"
                className="block h-auto w-full object-contain object-top"
              />
            </div>
            <figcaption className="mt-1.5 text-[0.75rem] leading-snug text-text-secondary">
              {REAL_WORLD_EVIDENCE.captions.organisation}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
