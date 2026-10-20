export function WhatWeBuildVisual({ className }: { className?: string }) {
  return (
    <div
      className={["what-we-build-visual w-full min-w-0 text-foreground", className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 200"
        className="mx-auto h-auto w-full max-w-md lg:max-w-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="240" y1="16" x2="240" y2="56" className="stroke-current opacity-30" strokeWidth="1" />
        <rect
          x="216"
          y="56"
          width="48"
          height="20"
          fill="none"
          className="stroke-current opacity-35"
          strokeWidth="1"
          rx="1"
        />

        <line x1="96" y1="76" x2="384" y2="76" className="stroke-current opacity-22" strokeWidth="1" />
        <line x1="96" y1="76" x2="96" y2="108" className="stroke-current opacity-28" strokeWidth="1" />
        <line x1="384" y1="76" x2="384" y2="108" className="stroke-current opacity-28" strokeWidth="1" />

        <rect x="48" y="108" width="96" height="72" fill="none" className="stroke-current opacity-32" strokeWidth="1" rx="1" />
        <rect x="336" y="108" width="96" height="72" fill="none" className="stroke-current opacity-40" strokeWidth="1" rx="1" />

        <line x1="64" y1="124" x2="128" y2="124" className="stroke-current opacity-18" strokeWidth="1" />
        <line x1="64" y1="140" x2="112" y2="140" className="stroke-current opacity-15" strokeWidth="1" />
        <line x1="352" y1="124" x2="416" y2="124" className="stroke-current opacity-22" strokeWidth="1" />
        <line x1="352" y1="140" x2="400" y2="140" className="stroke-current opacity-18" strokeWidth="1" />

        <line x1="384" y1="180" x2="384" y2="192" className="stroke-accent/75" strokeWidth="1" />
        <circle cx="384" cy="196" r="3" className="fill-accent" />
      </svg>
    </div>
  );
}
