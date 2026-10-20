type PhilosophyContextVisualProps = {
  compact?: boolean;
};

/**
 * Editorial system visual — inputs converging on engineered fit (companion to approach statement).
 */
export function PhilosophyContextVisual({ compact = false }: PhilosophyContextVisualProps) {
  if (compact) {
    return (
      <figure
        className="h-full w-full max-w-md text-foreground lg:hidden"
        role="img"
        aria-label="Abstract view of organisation, workflow and people informing how technology is shaped"
      >
        <PhilosophySvg />
      </figure>
    );
  }

  return (
    <figure
      className="hidden h-full w-full max-w-md text-foreground lg:block lg:max-w-none lg:max-h-[28rem]"
      role="img"
      aria-label="Abstract view of organisation, workflow and people informing how technology is shaped"
    >
      <PhilosophySvg />
    </figure>
  );
}

function PhilosophySvg() {
  return (
    <svg
      viewBox="0 0 360 420"
      className="h-full w-full max-h-[18rem] lg:max-h-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="stroke-foreground/8">
        {[80, 160, 240, 320].map((y) => (
          <line key={`h-${y}`} x1="24" y1={y} x2="336" y2={y} strokeWidth="1" />
        ))}
        {[72, 144, 216, 288].map((x) => (
          <line key={`v-${x}`} x1={x} y1="32" x2={x} y2="388" strokeWidth="1" />
        ))}
      </g>

      <line x1="180" y1="48" x2="180" y2="360" className="stroke-foreground/15" strokeWidth="1" />

      {[
        { x: 48, y: 72, link: "M 120 72 H 180" },
        { x: 48, y: 168, link: "M 120 168 H 180" },
        { x: 48, y: 264, link: "M 120 264 H 180" },
      ].map((item) => (
        <g key={`${item.x}-${item.y}`}>
          <path d={item.link} fill="none" className="stroke-foreground/22" strokeWidth="1" />
          <rect
            x={item.x}
            y={item.y - 20}
            width="72"
            height="40"
            fill="none"
            className="stroke-foreground/28"
            strokeWidth="1"
            rx="1"
          />
          <line
            x1={item.x + 12}
            y1={item.y - 4}
            x2={item.x + 60}
            y2={item.y - 4}
            className="stroke-foreground/12"
            strokeWidth="1"
          />
        </g>
      ))}

      <path
        d="M 180 300 V 332 H 228 V 364 H 132 V 332 H 180"
        fill="none"
        className="stroke-foreground/32"
        strokeWidth="1"
      />
      <rect
        x="132"
        y="332"
        width="96"
        height="56"
        fill="none"
        className="stroke-foreground/40"
        strokeWidth="1"
        rx="1"
      />
      <line x1="180" y1="288" x2="180" y2="332" className="stroke-accent/80" strokeWidth="1.5" />
      <circle cx="180" cy="288" r="5" className="fill-accent" />
      <line x1="144" y1="352" x2="216" y2="352" className="stroke-foreground/15" strokeWidth="1" />
      <line x1="144" y1="368" x2="200" y2="368" className="stroke-foreground/12" strokeWidth="1" />
    </svg>
  );
}
