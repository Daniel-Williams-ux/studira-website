const spineNodes = [
  { id: "problem", label: "Problem", y: 36, emphasis: false },
  { id: "system", label: "System", y: 98, emphasis: true },
  { id: "deploy", label: "Deploy", y: 160, emphasis: false },
  { id: "manage", label: "Manage", y: 222, emphasis: false },
] as const;

const spineX = 88;

export function HeroSystemVisual() {
  return (
    <figure
      className="hero-system-visual mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
      role="img"
      aria-label="Abstract architecture showing problem, system, deploy and manage connected to modular technology structure"
    >
      <svg
        viewBox="0 0 400 260"
        className="h-full w-full text-foreground-inverse"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Process spine */}
        <line
          x1={spineX}
          y1={spineNodes[0].y}
          x2={spineX}
          y2={spineNodes[3].y}
          className="hero-system-spine stroke-current opacity-25"
          strokeWidth="1"
        />

        {/* Orthogonal links from spine to system chassis */}
        <path
          d={`M ${spineX} 98 H 132 V 72 H 188`}
          fill="none"
          className="hero-system-path stroke-current opacity-40"
          strokeWidth="1"
          strokeLinecap="square"
        />
        <path
          d={`M ${spineX} 160 H 118 V 200 H 188`}
          fill="none"
          className="hero-system-path stroke-current opacity-30"
          strokeWidth="1"
          strokeLinecap="square"
          style={{ animationDelay: "0.12s" }}
        />
        <path
          d={`M ${spineX} 36 H 108 V 52 H 188`}
          fill="none"
          className="hero-system-path stroke-current opacity-25"
          strokeWidth="1"
          strokeLinecap="square"
          style={{ animationDelay: "0.06s" }}
        />

        {/* System chassis — nested modular assembly */}
        <g className="hero-system-module">
          <rect
            x="188"
            y="56"
            width="184"
            height="168"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-25"
            rx="2"
          />
          <line x1="188" y1="96" x2="372" y2="96" className="stroke-current opacity-15" strokeWidth="1" />
          <line x1="188" y1="136" x2="372" y2="136" className="stroke-current opacity-15" strokeWidth="1" />
          <line x1="188" y1="176" x2="372" y2="176" className="stroke-current opacity-15" strokeWidth="1" />
          <line x1="280" y1="56" x2="280" y2="224" className="stroke-current opacity-15" strokeWidth="1" />

          <rect x="200" y="68" width="72" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-35" rx="1" />
          <rect x="292" y="68" width="72" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30" rx="1" />
          <rect x="200" y="108" width="164" height="56" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-40" rx="1" />
          <rect x="292" y="148" width="72" height="56" fill="none" stroke="currentColor" className="stroke-accent opacity-90" strokeWidth="1" rx="1" />
          <rect x="200" y="188" width="80" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30" rx="1" />

          {/* Interface ports */}
          <rect x="182" y="90" width="4" height="4" className="fill-current opacity-40" />
          <rect x="182" y="130" width="4" height="4" className="fill-current opacity-35" />
          <rect x="182" y="198" width="4" height="4" className="fill-current opacity-30" />
        </g>

        {spineNodes.map((node, index) => (
          <g
            key={node.id}
            className="hero-system-node"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <circle
              cx={spineX}
              cy={node.y}
              r={node.emphasis ? 5 : 3.5}
              className={node.emphasis ? "fill-accent" : "fill-current opacity-45"}
            />
            <text
              x={spineX - 14}
              y={node.y + 3}
              textAnchor="end"
              className="fill-current font-mono text-[8px] uppercase opacity-60 sm:text-[9px]"
              style={{ letterSpacing: "0.1em" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
