const steps = [
  { label: "Idea", accent: true },
  { label: "System", accent: false },
  { label: "Deploy", accent: false },
  { label: "Manage", accent: false },
] as const;

type ProcessArrowProps = {
  compact?: boolean;
};

function ProcessArrow({ compact = false }: ProcessArrowProps) {
  return (
    <svg
      viewBox="0 0 44 16"
      className={[
        "shrink-0 text-foreground-inverse/88",
        compact ? "h-[0.62rem] w-[1.75rem] max-[360px]:h-[0.58rem] max-[360px]:w-[1.55rem]" : "h-[0.82rem] w-[2.65rem]",
      ].join(" ")}
      aria-hidden="true"
    >
      <path
        d="M1 8h30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M26 3 37 8 26 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type HeroProcessRailProps = {
  className?: string;
  compact?: boolean;
};

/**
 * Hero method strip — single line, IDEA accent, heavy geometric arrows.
 */
export function HeroProcessRail({ className, compact = false }: HeroProcessRailProps) {
  return (
    <div
      className={[
        "flex max-w-full flex-nowrap items-center overflow-x-clip whitespace-nowrap",
        compact ? "origin-left max-[320px]:scale-[0.91] max-[360px]:scale-[0.94]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Idea to system to deploy to manage"
    >
      {steps.map((step, index) => (
        <span
          key={step.label}
          className={[
            "ssl-hero-rail-step",
            `ssl-hero-rail-step-${index}`,
            "inline-flex shrink-0 items-center",
            compact ? "gap-x-1 max-[360px]:gap-x-0.5" : "gap-x-2.5 lg:gap-x-3",
          ].join(" ")}
        >
          <span
            className={[
              "font-mono uppercase",
              compact
                ? "text-[0.52rem] tracking-[0.14em] max-[360px]:text-[0.48rem] max-[360px]:tracking-[0.11em]"
                : "text-[0.6rem] tracking-[0.22em] sm:text-[0.62rem] sm:tracking-[0.24em]",
              step.accent ? "font-medium text-accent" : "text-foreground-inverse/45",
            ].join(" ")}
          >
            {step.label}
          </span>
          {index < steps.length - 1 ? <ProcessArrow compact={compact} /> : null}
        </span>
      ))}
    </div>
  );
}
