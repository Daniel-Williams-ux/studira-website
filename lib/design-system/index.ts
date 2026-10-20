/**
 * Studira Systems Limited — design system entry (tokens live in styles/ssl-design-tokens.css).
 * Use semantic Tailwind classes and ssl-* utilities in UI; avoid hard-coded brand hex in components.
 */

export { sslBrand } from "./brand";

/** Layout containers (pair with ssl-container utilities in globals.css). */
export const containers = {
  page: "ssl-container",
  content: "ssl-container-content",
  wide: "ssl-container-wide",
} as const;

/** Semantic colour utilities (Tailwind @theme). */
export const colors = {
  surface: "bg-surface text-foreground",
  surfaceInverse: "ssl-surface-inverse",
  muted: "text-foreground-muted",
  accent: "text-accent",
  accentFill: "bg-accent text-accent-foreground",
  border: "border-border",
  divider: "border-divider",
} as const;

/** Typography utility classes. */
export const typography = {
  displayXl: "ssl-type-display-xl",
  displayLg: "ssl-type-display-lg",
  displayMd: "ssl-type-display-md",
  heading: "ssl-type-heading",
  bodyLg: "ssl-type-body-lg",
  body: "ssl-type-body",
  bodySm: "ssl-type-body-sm",
  label: "ssl-type-label",
  meta: "ssl-type-meta",
  wordmark: "ssl-wordmark",
} as const;

/** Border radius — restrained scale. */
export const radius = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
} as const;

/** Motion — prefer ssl-motion-reveal + motion-safe: variants in CSS. */
export const motion = {
  reveal: "ssl-motion-reveal",
  safeTransition: "motion-safe:transition-colors motion-safe:duration-normal",
} as const;

/** Breakpoint names matching theme tokens (for JS/media queries when needed). */
export const breakpoints = {
  "2xs": "20rem",
  xs: "23.4375rem",
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "90rem",
} as const;
