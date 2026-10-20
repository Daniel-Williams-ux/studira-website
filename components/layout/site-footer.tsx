import Link from "next/link";
import { SslWordmark } from "@/components/brand";
import { footerNav } from "@/lib/site/navigation";
import { site } from "@/lib/site/metadata";

const footerLinkClass =
  "inline-flex min-h-11 items-center rounded-sm ssl-type-body-sm text-text-on-dark-secondary motion-safe:transition-colors motion-safe:duration-fast hover:text-accent focus-visible:ssl-focus-ring";

const footerLegalClass =
  "inline-flex min-h-11 items-center ssl-type-body-sm text-text-on-dark-secondary/70";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-x-clip bg-surface-dark text-foreground-inverse">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden="true"
      />

      <div className="ssl-container pb-6 pt-7 sm:pb-7 sm:pt-8 lg:pb-9 lg:pt-11">
        <div className="grid gap-7 sm:gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:gap-12">
          <div className="flex min-w-0 flex-col gap-2.5 border-l-2 border-accent/75 pl-3.5 sm:gap-3 sm:pl-4 lg:max-w-[21rem] lg:gap-3.5 lg:pl-5">
            <SslWordmark
              className="!text-foreground-inverse text-[0.7rem] xs:text-[0.8125rem]"
            />
            <p className="max-w-[22ch] ssl-type-body leading-[1.45] text-text-on-dark-secondary sm:max-w-sm sm:ssl-type-body-lg">
              Technology systems for real-world problems.
            </p>
            <p className="ssl-type-body-sm text-text-on-dark-secondary/75">{site.companyName}</p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 lg:gap-x-8 xl:gap-x-10">
            <div className="min-w-0">
              <h2 className="mb-1.5 sm:mb-2">
                <Link
                  href="/about"
                  className="inline-block rounded-sm ssl-type-label text-foreground-inverse no-underline motion-safe:transition-colors motion-safe:duration-fast hover:text-accent focus-visible:ssl-focus-ring"
                >
                  Company
                </Link>
              </h2>
              <ul className="m-0 list-none p-0">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={footerLinkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h2 className="ssl-type-label mb-1.5 text-foreground-inverse sm:mb-2">Explore</h2>
              <ul className="m-0 list-none p-0">
                {footerNav.explore.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={footerLinkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 min-w-0 border-t border-foreground-inverse/10 pt-5 sm:col-span-1 sm:border-t-0 sm:pt-0">
              <h2 className="ssl-type-label mb-1.5 text-foreground-inverse sm:mb-2">Legal</h2>
              <ul className="m-0 list-none p-0">
                {footerNav.legal.map((item) => (
                  <li key={item.label}>
                    <span className={footerLegalClass} aria-disabled="true">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-foreground-inverse/12">
        <div className="ssl-container flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:py-4">
          <p className="ssl-type-body-sm text-text-on-dark-secondary/70">
            © {year} {site.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
