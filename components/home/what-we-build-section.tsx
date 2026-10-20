import type { CSSProperties } from "react";
import Link from "next/link";
import { BuildInView } from "./build-in-view";
import { WhatWeBuildSystemArtwork } from "./what-we-build-artwork";

const ctaClass =
  "group inline-flex min-h-11 items-center gap-2 ssl-type-label motion-safe:transition-colors motion-safe:duration-fast hover:text-accent focus-visible:ssl-focus-ring rounded-sm";

function BuildColumn({
  index,
  title,
  description,
  href,
  linkLabel,
  className,
  style,
}: {
  index: "01" | "02";
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  className?: string;
  style?: CSSProperties;
}) {
  const indexClass =
    index === "01" ? "ssl-build-index text-foreground/12" : "ssl-build-index text-accent/28";

  return (
    <article
      className={["ssl-build-col relative z-[1] flex min-w-0 flex-col", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <div className="flex min-w-0 flex-col gap-1.5 bg-surface-light sm:gap-2 lg:gap-1.5">
        <p className={indexClass} aria-hidden="true">
          {index}
        </p>
        <h3 className="text-[1.0625rem] font-semibold tracking-[-0.02em] sm:text-[1.125rem]">
          {title}
        </h3>
        <p className="max-w-[20rem] text-[0.9375rem] leading-[1.4] text-text-secondary lg:max-w-none">
          {description}
        </p>
        <Link href={href} className={`${ctaClass} w-fit pt-0.5`}>
          {linkLabel}
          <span
            className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export function WhatWeBuildSection() {
  return (
    <section
      aria-labelledby="what-we-build-heading"
      className="bg-surface-light text-foreground"
    >
      <BuildInView className="ssl-container ssl-build-chapter">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-0">
          <header className="ssl-build-copy relative z-[1] min-w-0 max-w-xl bg-surface-light lg:pr-6 xl:pr-8">
            <p className="ssl-type-meta text-foreground-muted">WHAT WE BUILD</p>
            <h2
              id="what-we-build-heading"
              className="ssl-build-heading mt-1.5 max-w-[14ch] text-balance sm:mt-2 sm:max-w-[15ch]"
            >
              Technology built for a purpose
              <span className="text-accent" aria-hidden="true">
                .
              </span>
            </h2>
          </header>

          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-divider pt-4 sm:gap-3.5 sm:pt-4 lg:col-span-2 lg:mt-0 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-0 lg:gap-y-2 lg:gap-4 lg:border-t-0 lg:pt-0">
            <BuildColumn
              index="01"
              title="Products"
              description="Technology platforms we build and develop as Studira Systems Limited products."
              href="/products"
              linkLabel="Explore products"
              className="order-1 lg:col-start-1 lg:row-start-1 lg:border-l lg:border-divider lg:pl-7 xl:pl-9"
              style={{ animationDelay: "90ms" }}
            />

            <WhatWeBuildSystemArtwork
              className="order-2 lg:col-span-2 lg:row-start-2"
              style={{ animationDelay: "200ms" }}
            />

            <BuildColumn
              index="02"
              title="Managed Technology Solutions"
              description="Technology systems engineered around an organisation&apos;s specific problem — and managed by Studira Systems Limited."
              href="/solutions"
              linkLabel="Explore solutions"
              className="order-3 lg:col-start-2 lg:row-start-1 lg:border-l lg:border-divider lg:pl-7 xl:pl-9"
              style={{ animationDelay: "160ms" }}
            />
          </div>
        </div>
      </BuildInView>
    </section>
  );
}
