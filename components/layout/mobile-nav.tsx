"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isPrimaryNavActive, primaryNav } from "@/lib/site/navigation";

const MOBILE_MENU_ID = "ssl-primary-mobile-menu";

const exploreItems = primaryNav.filter((item) => !item.emphasis);
const contactItem = primaryNav.find((item) => item.emphasis);

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  const toggle = () => setOpen((value) => !value);

  return (
    <div className="ssl-nav-mobile relative shrink-0">
      <button
        ref={menuButtonRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-line-strong px-3 ssl-type-label motion-safe:transition-[background-color,border-color] motion-safe:duration-fast hover:border-foreground/25 hover:bg-foreground/[0.04] active:bg-foreground/[0.07] focus-visible:ssl-focus-ring"
        aria-expanded={open}
        aria-controls={MOBILE_MENU_ID}
        onClick={toggle}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="relative flex h-5 w-5 items-center justify-center">
          <span
            className={[
              "absolute block h-px w-[1.125rem] rounded-full bg-foreground motion-safe:transition-transform motion-safe:duration-fast",
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
            ].join(" ")}
          />
          <span
            className={[
              "absolute block h-px w-[1.125rem] rounded-full bg-foreground motion-safe:transition-opacity motion-safe:duration-fast",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute block h-px w-[1.125rem] rounded-full bg-foreground motion-safe:transition-transform motion-safe:duration-fast",
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
            ].join(" ")}
          />
        </span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-surface-dark/15 motion-safe:transition-opacity md:hidden"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={close}
          />
          <nav
            id={MOBILE_MENU_ID}
            aria-label="Primary mobile"
            className={[
              "ssl-mobile-menu-panel is-open fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto overflow-x-hidden border-b border-line-subtle bg-surface-light md:hidden",
            ].join(" ")}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: [
                  "linear-gradient(180deg, var(--ssl-off-white) 0%, var(--ssl-off-white) 100%)",
                  "radial-gradient(ellipse 90% 55% at 100% -5%, color-mix(in srgb, var(--ssl-accent) 9%, transparent), transparent 52%)",
                ].join(", "),
              }}
              aria-hidden="true"
            />
            <div className="ssl-container relative py-6">
              <p className="ssl-mobile-menu-item ssl-mobile-menu-item-0 border-t border-line-subtle pt-5 font-mono text-[0.625rem] uppercase tracking-[0.22em] text-text-secondary">
                Explore
              </p>
              <ul className="mt-2 flex flex-col">
                {exploreItems.map((item, index) => {
                  const isActive = isPrimaryNavActive(pathname, item.href);

                  return (
                  <li key={item.href} className={`ssl-mobile-menu-item ssl-mobile-menu-item-${index + 1}`}>
                    <Link
                      href={item.href}
                      className={[
                        "group grid min-h-11 grid-cols-[2.75rem_minmax(0,1fr)_1.5rem] items-center gap-2 border-b border-line-subtle py-3 motion-safe:transition-colors motion-safe:duration-fast hover:bg-foreground/[0.03] focus-visible:ssl-focus-ring",
                        isActive ? "border-l-2 border-l-accent bg-accent/[0.05] pl-0.5" : "",
                      ].join(" ")}
                      aria-current={isActive ? "page" : undefined}
                      onClick={close}
                    >
                      <span className="font-mono text-[0.6875rem] tracking-[0.12em] text-text-secondary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={[
                          "ssl-type-label uppercase tracking-[0.06em]",
                          isActive ? "text-accent" : "text-foreground",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-right text-foreground/55 motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                  );
                })}
              </ul>
              {contactItem ? (
                <div
                  className={`ssl-mobile-menu-item ssl-mobile-menu-item-${exploreItems.length + 1} mt-5 border-t border-line-subtle pt-5`}
                >
                  <Link
                    href={contactItem.href}
                    className={[
                      "group flex min-h-11 items-center justify-between gap-3 rounded-sm border px-4 py-2.5 ssl-type-label motion-safe:transition-colors motion-safe:duration-fast hover:bg-foreground/[0.04] active:bg-foreground/[0.07] focus-visible:ssl-focus-ring",
                      isPrimaryNavActive(pathname, contactItem.href)
                        ? "border-accent bg-accent/[0.08] ring-2 ring-accent/40 ring-offset-2 ring-offset-surface-light"
                        : "border-foreground",
                    ].join(" ")}
                    aria-current={
                      isPrimaryNavActive(pathname, contactItem.href) ? "page" : undefined
                    }
                    onClick={close}
                  >
                    <span>{contactItem.label}</span>
                    <span
                      aria-hidden="true"
                      className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </div>
              ) : null}
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
