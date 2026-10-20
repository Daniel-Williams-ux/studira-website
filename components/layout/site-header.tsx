import Link from "next/link";
import { SslHeaderLogo } from "@/components/brand";
import { primaryNav } from "@/lib/site/navigation";
import { MobileNavSlot } from "./mobile-nav-slot";
import { NavLink } from "./nav-link";

const navLinks = primaryNav.filter((item) => !item.emphasis);
const contactNav = primaryNav.find((item) => item.emphasis);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/[0.08] bg-surface-light">
      <div className="ssl-container flex h-16 items-center justify-between gap-4 md:h-[4.75rem] md:gap-5">
        <Link
          href="/"
          aria-label="Studira Systems home"
          className="shrink-0 rounded-sm focus-visible:ssl-focus-ring"
        >
          <SslHeaderLogo />
        </Link>

        <nav
          aria-label="Primary"
          className="ssl-nav-desktop ml-auto shrink-0 items-center"
        >
          <div className="flex items-center">
            <ul className="flex items-center">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
            {contactNav ? (
              <>
                <span
                  aria-hidden="true"
                  className="mx-2.5 hidden h-3.5 w-px shrink-0 self-center bg-foreground/[0.12] md:block lg:mx-4 lg:h-4"
                />
                <NavLink
                  href={contactNav.href}
                  label={contactNav.label}
                  emphasis
                />
              </>
            ) : null}
          </div>
        </nav>

        <MobileNavSlot />
      </div>
    </header>
  );
}
