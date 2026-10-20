"use client";

import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";

/** Remounts mobile nav on route change so the menu closes without effect-driven state. */
export function MobileNavSlot() {
  const pathname = usePathname();
  return <MobileNav key={pathname} />;
}
