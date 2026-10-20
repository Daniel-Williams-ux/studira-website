import type { ABOUT_OPERATE } from "@/lib/about/content";

export type AboutPrincipleKey = (typeof ABOUT_OPERATE.principles)[number]["key"];

type AboutPrincipleIconProps = {
  name: AboutPrincipleKey;
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function UnderstandIcon() {
  return (
    <>
      <path d="M32 14v4" {...strokeProps} />
      <path
        d="M22 38h20l-2-8H24l-2 8z"
        {...strokeProps}
      />
      <path d="M26 30c2-6 10-6 12 0" {...strokeProps} />
      <path d="M32 18a10 10 0 0 1 10 10c0 4-2 7-4 9" {...strokeProps} />
    </>
  );
}

function EngineerIcon() {
  return (
    <>
      <path d="M18 20 8 32l10 12" {...strokeProps} />
      <path d="M46 20 56 32 46 44" {...strokeProps} />
      <path d="M38 14 26 50" {...strokeProps} strokeWidth={2.25} />
    </>
  );
}

function DeployIcon() {
  return (
    <path
      d="M16 38a12 12 0 0 1 32 0M20 38a8 8 0 0 1 24 0M24 38a4 4 0 0 1 16 0"
      {...strokeProps}
    />
  );
}

function ManageIcon() {
  return (
    <>
      <circle cx="32" cy="32" r="10" {...strokeProps} />
      <path
        d="M32 22v-4M32 44v-4M22 32h-4M44 32h-4M25.5 25.5l-2.8-2.8M41.3 41.3l-2.8-2.8M38.5 25.5l2.8-2.8M22.7 41.3l2.8-2.8"
        {...strokeProps}
      />
    </>
  );
}

const icons: Record<AboutPrincipleKey, () => React.ReactNode> = {
  understand: UnderstandIcon,
  engineer: EngineerIcon,
  deploy: DeployIcon,
  manage: ManageIcon,
};

/** Inline principle icons — green stroke via `text-accent` on parent. */
export function AboutPrincipleIcon({ name, className }: AboutPrincipleIconProps) {
  const Icon = icons[name];

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <Icon />
    </svg>
  );
}
