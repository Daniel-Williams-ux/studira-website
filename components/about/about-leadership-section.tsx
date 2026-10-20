import Image from "next/image";
import { ABOUT_ASSETS, ABOUT_LEADERSHIP } from "@/lib/about/content";
import { AboutCapabilityIcon } from "./about-capability-icon";

function LeaderBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-accent/45 bg-accent/[0.06] px-2.5 py-1 text-[0.6875rem] font-medium leading-none text-accent"
    >
      {label}
    </span>
  );
}

function CapabilityGrid({
  items,
}: {
  items: readonly { label: string; icon: "code" | "database" | "cloud" | "ml" | "people" | "talent" | "relations" | "compliance" }[];
}) {
  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 sm:gap-3">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex min-w-0 items-start gap-2 rounded-sm border border-divider/80 bg-surface-light/60 px-2.5 py-2 sm:px-3 sm:py-2.5"
        >
          <AboutCapabilityIcon
            variant={item.icon}
            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
          />
          <span className="text-[0.6875rem] leading-snug text-text-secondary sm:text-[0.75rem]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AboutLeadershipSection() {
  return (
    <section
      aria-labelledby="about-leadership-heading"
      className="overflow-x-clip border-t border-divider bg-surface text-foreground"
      data-ssl-about-reveal
    >
      <div className="ssl-container ssl-about-chapter ssl-about-await">
        <header className="ssl-about-copy lg:grid lg:grid-cols-2 lg:items-start lg:gap-8 xl:gap-10">
          <div className="min-w-0">
            <p className="ssl-type-meta text-foreground-muted">{ABOUT_LEADERSHIP.label}</p>
            <h2
              id="about-leadership-heading"
              className="ssl-about-heading mt-2 max-w-[22ch] text-balance"
            >
              {ABOUT_LEADERSHIP.title}
            </h2>
          </div>
          <p className="mt-2.5 max-w-[34rem] ssl-type-body-lg leading-[1.45] text-text-secondary lg:mt-8 lg:max-w-none lg:justify-self-end xl:mt-9">
            {ABOUT_LEADERSHIP.intro}
          </p>
        </header>

        <ul
          className="mt-8 grid min-w-0 list-none grid-cols-1 gap-5 p-0 lg:mt-10 lg:grid-cols-2 lg:gap-5 xl:gap-6"
          aria-label="Leadership profiles"
        >
          <li className="ssl-about-reveal-item flex min-w-0 flex-col overflow-hidden border border-divider bg-surface-light">
            <div className="relative aspect-[5/4] w-full bg-[color-mix(in_srgb,var(--ssl-cool-grey)_8%,var(--ssl-off-white))] sm:aspect-[4/3]">
              <Image
                src={ABOUT_ASSETS.founder}
                alt={ABOUT_LEADERSHIP.daniel.imageAlt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-[68%_32%] sm:object-[66%_30%] lg:object-[72%_28%]"
              />
            </div>
            <div className="flex flex-col gap-3 px-4 py-5 sm:px-5 sm:py-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.02em]">
                  {ABOUT_LEADERSHIP.daniel.name}
                </h3>
                {ABOUT_LEADERSHIP.daniel.roles.map((role) => (
                  <p key={role} className="ssl-type-body-sm text-text-secondary">{role}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {ABOUT_LEADERSHIP.daniel.badges.map((badge) => (
                  <LeaderBadge key={badge} label={badge} />
                ))}
              </div>
              <p className="text-[0.8125rem] leading-[1.45] text-text-secondary">
                {ABOUT_LEADERSHIP.daniel.summary}
              </p>
              <CapabilityGrid items={ABOUT_LEADERSHIP.daniel.credentials} />
            </div>
          </li>

          <li
            className="ssl-about-reveal-item flex min-w-0 flex-col overflow-hidden border border-divider bg-surface-light"
            style={{ animationDelay: "120ms" }}
          >
            <div className="relative aspect-[5/4] w-full bg-[color-mix(in_srgb,var(--ssl-cool-grey)_8%,var(--ssl-off-white))] sm:aspect-[4/3]">
              <Image
                src={ABOUT_ASSETS.beauty}
                alt={ABOUT_LEADERSHIP.beauty.imageAlt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-[50%_22%]"
              />
            </div>
            <div className="flex flex-col gap-3 px-4 py-5 sm:px-5 sm:py-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.02em]">
                  {ABOUT_LEADERSHIP.beauty.name}
                </h3>
                <p className="ssl-type-body-sm text-text-secondary">
                  {ABOUT_LEADERSHIP.beauty.role}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {ABOUT_LEADERSHIP.beauty.badges.map((badge) => (
                  <LeaderBadge key={badge} label={badge} />
                ))}
              </div>
              <p className="text-[0.8125rem] leading-[1.45] text-text-secondary">
                {ABOUT_LEADERSHIP.beauty.summary}
              </p>
              <CapabilityGrid items={ABOUT_LEADERSHIP.beauty.capabilities} />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
