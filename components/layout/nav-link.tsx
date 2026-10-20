"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isPrimaryNavActive } from "@/lib/site/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  emphasis?: boolean;
  onNavigate?: () => void;
  className?: string;
};

const base =
  "inline-flex min-h-11 items-center rounded-sm ssl-type-label motion-safe:transition-[color,background-color] motion-safe:duration-fast focus-visible:ssl-focus-ring";

const standard = [
  "relative px-2 tracking-[0.048em] text-foreground/72 no-underline md:px-2.5 lg:px-3 lg:tracking-[0.05em] xl:px-3.5",
  "hover:text-foreground",
  "after:pointer-events-none after:absolute after:inset-x-2 after:bottom-[0.625rem] after:block after:h-px after:origin-left after:scale-x-0 after:bg-accent after:content-[''] md:after:inset-x-2.5 lg:after:inset-x-3 xl:after:inset-x-3.5",
  "after:transition-transform after:duration-fast motion-safe:after:transition-transform",
  "hover:after:scale-x-100 focus-visible:after:scale-x-100",
].join(" ");

const standardActive =
  "text-foreground after:scale-x-100";

const emphasisStyle = [
  "shrink-0 justify-center rounded-sm bg-graphite px-4 tracking-[0.05em] text-foreground-inverse no-underline lg:min-w-[5.25rem] lg:px-5",
  "hover:bg-accent hover:text-accent-foreground active:bg-accent/92",
].join(" ");

const emphasisActive =
  "ring-2 ring-accent/60 ring-offset-2 ring-offset-surface-light";

export function NavLink({
  href,
  label,
  emphasis = false,
  onNavigate,
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = isPrimaryNavActive(pathname, href);

  return (
    <Link
      href={href}
      className={[
        base,
        emphasis ? emphasisStyle : standard,
        isActive ? (emphasis ? emphasisActive : standardActive) : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
