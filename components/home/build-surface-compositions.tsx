import Image from "next/image";

type SurfaceProps = {
  className?: string;
};

export function ProductsSurfaceComposition({ className }: SurfaceProps) {
  return (
    <div
      className={["relative flex min-h-[12rem] items-center justify-center px-6 py-8 sm:min-h-[14rem]", className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <div className="relative w-[88%] max-w-xs">
        <div
          className="absolute -inset-4 rounded-full opacity-70 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--ssl-accent) 28%, transparent), transparent)",
          }}
        />
        <div className="relative rotate-[-6deg] rounded-2xl border border-line-strong bg-surface-dark p-2 shadow-[var(--shadow-panel)]">
          <div className="aspect-[3/4] overflow-hidden rounded-xl border border-foreground-inverse/10 bg-gradient-to-b from-surface-dark to-surface-accent-dark">
            <div className="flex h-8 items-center gap-1.5 border-b border-foreground-inverse/10 px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground-inverse/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-foreground-inverse/20" />
            </div>
            <div className="space-y-2 p-3">
              <div className="h-2 w-2/3 rounded bg-foreground-inverse/15" />
              <div className="h-20 rounded border border-accent/35 bg-accent/10" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 bg-foreground-inverse/10" />
                <div className="h-10 bg-foreground-inverse/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SolutionsSurfaceComposition({ className }: SurfaceProps) {
  return (
    <div
      className={["relative overflow-hidden rounded-lg border border-divider", className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <div className="relative aspect-[16/10] min-h-[12rem] sm:min-h-[14rem]">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/35 to-accent/10" />
        <svg
          className="absolute inset-0 h-full w-full text-accent"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 12 78 L 38 52 L 58 60 L 82 38"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="0.4"
            strokeDasharray="1.2 1.2"
          />
          <circle cx="38" cy="52" r="1.3" fill="currentColor" />
          <circle cx="58" cy="60" r="1.3" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
