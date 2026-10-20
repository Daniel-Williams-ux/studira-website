type ClassNameProps = { className?: string };

const RAIL_STEPS = ["PROBLEM", "PRODUCT", "SYSTEM", "SCALE"] as const;

function RailArrow({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 44 16"
      className={[
        "shrink-0 text-foreground-inverse/75",
        compact ? "h-[0.58rem] w-[1.6rem]" : "h-[0.72rem] w-[2.2rem]",
      ].join(" ")}
      aria-hidden="true"
    >
      <path d="M1 8h30" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
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

export function ProductsProcessRail({ className }: ClassNameProps) {
  return (
    <div
      className={[
        "flex max-w-full flex-nowrap items-center overflow-x-clip whitespace-nowrap",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Problem to product to system to scale"
    >
      {RAIL_STEPS.map((step, index) => (
        <span key={step} className="inline-flex shrink-0 items-center gap-x-1.5 sm:gap-x-2">
          <span
            className={[
              "font-mono text-[0.52rem] uppercase tracking-[0.14em] sm:text-[0.58rem] sm:tracking-[0.18em]",
              index === 0 ? "font-medium text-accent" : "text-foreground-inverse/45",
            ].join(" ")}
          >
            {step}
          </span>
          {index < RAIL_STEPS.length - 1 ? <RailArrow compact /> : null}
        </span>
      ))}
    </div>
  );
}

const HERO_LAYERS = ["APPLICATION", "DATA", "WORKFLOW", "USERS"] as const;

export function ProductsHeroComposition({ className }: ClassNameProps) {
  return (
    <figure
      className={["m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <div className="relative aspect-[1.05/1] w-full max-w-[28rem] overflow-hidden border border-foreground-inverse/12 bg-[var(--gradient-panel-dark)] sm:aspect-[1.15/1] lg:max-w-none lg:aspect-[1.08/1] xl:aspect-[1.05/1]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(90deg, color-mix(in srgb, var(--accent) 8%, transparent) 1px, transparent 1px), linear-gradient(color-mix(in srgb, var(--accent) 8%, transparent) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute left-[8%] top-[10%] w-[42%] rounded border border-accent/35 bg-surface-dark/90 p-2 shadow-[var(--shadow-panel)]">
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-accent sm:text-[0.55rem]">
            {HERO_LAYERS[0]}
          </p>
          <div className="mt-1.5 space-y-1">
            <div className="h-1.5 w-3/4 rounded bg-foreground-inverse/15" />
            <div className="h-8 rounded border border-accent/25 bg-accent/10" />
          </div>
        </div>
        <div className="absolute right-[6%] top-[22%] w-[38%] rounded border border-foreground-inverse/15 bg-surface-dark/85 p-2">
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-foreground-inverse/70 sm:text-[0.55rem]">
            {HERO_LAYERS[1]}
          </p>
          <div className="mt-1 grid grid-cols-2 gap-1">
            <div className="h-6 bg-foreground-inverse/10" />
            <div className="h-6 bg-accent/15" />
          </div>
        </div>
        <div className="absolute bottom-[28%] left-[12%] w-[48%] rounded border border-foreground-inverse/12 bg-surface-dark/80 p-2">
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-foreground-inverse/65 sm:text-[0.55rem]">
            {HERO_LAYERS[2]}
          </p>
          <svg className="mt-1 h-10 w-full text-accent/60" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M4 32 L28 18 L52 24 L88 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="absolute bottom-[8%] right-[10%] w-[36%] rounded border border-accent/30 bg-accent/10 p-2">
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-accent sm:text-[0.55rem]">
            {HERO_LAYERS[3]}
          </p>
          <div className="mt-1 flex gap-1">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="h-2 w-2 rounded-full bg-foreground-inverse/25" />
            <span className="h-2 w-2 rounded-full bg-foreground-inverse/25" />
          </div>
        </div>
        <svg className="absolute inset-0 h-full w-full text-accent/35" aria-hidden="true">
          <path d="M120 80 L200 120 M200 120 L280 90" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
        </svg>
      </div>
    </figure>
  );
}

export function HealthcareProductComposition({ className }: ClassNameProps) {
  return (
    <figure
      className={["m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <div className="relative min-h-[14rem] w-full overflow-hidden border border-line-strong bg-surface-dark sm:min-h-[16rem] lg:min-h-[20rem] lg:aspect-[1.35/1]">
        <div className="absolute inset-0 bg-[var(--gradient-panel-dark)]" />
        <div className="absolute inset-x-0 top-0 flex h-8 items-center gap-2 border-b border-foreground-inverse/10 px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-foreground-inverse/55 sm:text-[0.55rem]">
            Clinical workspace
          </span>
        </div>
        <div className="absolute left-[4%] top-[14%] w-[55%] rounded border border-foreground-inverse/12 bg-surface-dark/95 p-2 sm:p-2.5">
          <div className="flex gap-2">
            <div className="min-w-0 flex-1 space-y-1">
              <div className="h-1 w-2/3 rounded bg-foreground-inverse/20" />
              <div className="h-12 rounded border border-accent/30 bg-accent/10 sm:h-14" />
              <div className="grid grid-cols-2 gap-1">
                <div className="h-6 bg-foreground-inverse/10" />
                <div className="h-6 bg-foreground-inverse/10" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[4%] top-[18%] w-[34%] rounded border border-accent/25 bg-surface-dark/90 p-2">
          <p className="font-mono text-[0.48rem] uppercase tracking-[0.1em] text-accent sm:text-[0.52rem]">
            Record
          </p>
          <div className="mt-1 space-y-1">
            <div className="h-1 w-full bg-foreground-inverse/15" />
            <div className="h-1 w-4/5 bg-foreground-inverse/10" />
            <div className="h-1 w-3/5 bg-foreground-inverse/10" />
          </div>
        </div>
        <div className="absolute bottom-[8%] left-[4%] right-[4%] flex gap-2 rounded border border-foreground-inverse/10 bg-surface-dark/80 p-2">
          <div className="flex-1">
            <p className="font-mono text-[0.48rem] uppercase tracking-[0.1em] text-foreground-inverse/50 sm:text-[0.52rem]">
              Appointments / workflow
            </p>
            <div className="mt-1 flex gap-1">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-5 flex-1 rounded bg-foreground-inverse/10" />
              ))}
            </div>
          </div>
          <div className="w-16 shrink-0 border-l border-accent/30 pl-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <div className="mt-1 h-6 w-full bg-accent/15" />
          </div>
        </div>
      </div>
    </figure>
  );
}

export function WorkforceProductComposition({ className }: ClassNameProps) {
  return (
    <figure
      className={["m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <div className="relative min-h-[14rem] w-full overflow-hidden border border-line-strong bg-surface-dark sm:min-h-[16rem] lg:min-h-[20rem] lg:aspect-[1.35/1]">
        <div className="absolute inset-0 bg-[var(--gradient-panel-dark)]" />
        <div className="absolute left-[5%] top-[12%] w-[42%] space-y-2">
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-accent sm:text-[0.55rem]">
            People
          </p>
          <div className="space-y-1.5 rounded border border-foreground-inverse/12 bg-surface-dark/90 p-2">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex items-center gap-2">
                <span className="h-4 w-4 shrink-0 rounded-full bg-foreground-inverse/15" />
                <div className="h-1.5 flex-1 rounded bg-foreground-inverse/12" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-[5%] top-[14%] w-[44%] rounded border border-foreground-inverse/12 bg-surface-dark/85 p-2">
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-foreground-inverse/60 sm:text-[0.55rem]">
            Onboarding flow
          </p>
          <div className="mt-2 flex items-center gap-1">
            <span className="h-2 w-6 rounded bg-accent/40" />
            <span className="h-px flex-1 bg-foreground-inverse/20" />
            <span className="h-2 w-6 rounded bg-foreground-inverse/15" />
            <span className="h-px flex-1 bg-foreground-inverse/20" />
            <span className="h-2 w-6 rounded bg-foreground-inverse/15" />
          </div>
        </div>
        <div className="absolute bottom-[10%] left-[5%] right-[5%] rounded border border-accent/20 bg-accent/5 p-2">
          <p className="font-mono text-[0.48rem] uppercase tracking-[0.1em] text-foreground-inverse/55 sm:text-[0.52rem]">
            Process · data relationships
          </p>
          <svg className="mt-1 h-12 w-full text-accent/50" viewBox="0 0 200 48">
            <circle cx="24" cy="24" r="6" fill="currentColor" fillOpacity="0.35" />
            <circle cx="100" cy="12" r="5" fill="currentColor" fillOpacity="0.25" />
            <circle cx="100" cy="36" r="5" fill="currentColor" fillOpacity="0.25" />
            <circle cx="176" cy="24" r="6" fill="currentColor" fillOpacity="0.35" />
            <path d="M30 24 H94 M106 15 L170 22 M106 33 L170 26" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
    </figure>
  );
}
