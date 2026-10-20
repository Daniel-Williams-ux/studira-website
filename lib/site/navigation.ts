export type PrimaryNavItem = {
  href: string;
  label: string;
  /** Primary navigation action (Contact). */
  emphasis?: boolean;
};

export const primaryNav: PrimaryNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", emphasis: true },
];

/** True when `pathname` is the nav item or a nested route under it (not for unrelated paths). */
export function isPrimaryNavActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  if (pathname === href) {
    return true;
  }

  return pathname.startsWith(`${href}/`);
}

export const footerNav = {
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  explore: [
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/education", label: "Education" },
  ],
  legal: [
    { label: "Privacy", placeholder: true },
    { label: "Terms", placeholder: true },
  ],
} as const;
