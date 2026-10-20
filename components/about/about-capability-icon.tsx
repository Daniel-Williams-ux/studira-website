type AboutCapabilityVariant =
  | "code"
  | "database"
  | "cloud"
  | "ml"
  | "people"
  | "talent"
  | "relations"
  | "compliance";

type AboutCapabilityIconProps = {
  variant: AboutCapabilityVariant;
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Leadership highlight icons for the 2-column capability grid. */
export function AboutCapabilityIcon({ variant, className }: AboutCapabilityIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {variant === "code" ? (
        <>
          <path d="M8 8 4 12l4 4" {...strokeProps} />
          <path d="m16 8 4 4-4 4" {...strokeProps} />
          <path d="M13 6 11 18" {...strokeProps} />
        </>
      ) : null}
      {variant === "database" ? (
        <>
          <ellipse cx="12" cy="6" rx="7" ry="3" {...strokeProps} />
          <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" {...strokeProps} />
          <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" {...strokeProps} />
        </>
      ) : null}
      {variant === "cloud" ? (
        <path
          d="M7 16a4 4 0 0 1 .2-8A5 5 0 0 1 18 10a3.5 3.5 0 0 1 .3 7H7z"
          {...strokeProps}
        />
      ) : null}
      {variant === "ml" ? (
        <>
          <rect x="5" y="5" width="14" height="14" rx="2" {...strokeProps} />
          <path d="M8 15l3-4 2 2 3-5" {...strokeProps} />
        </>
      ) : null}
      {variant === "people" ? (
        <>
          <circle cx="9" cy="9" r="3" {...strokeProps} />
          <path d="M4 19c1.5-3 4-4.5 5-4.5s3.5 1.5 5 4.5" {...strokeProps} />
          <circle cx="17" cy="10" r="2.5" {...strokeProps} />
        </>
      ) : null}
      {variant === "talent" ? (
        <>
          <circle cx="12" cy="8" r="3" {...strokeProps} />
          <path d="M6 19c1.2-2.8 3.4-4 6-4s4.8 1.2 6 4" {...strokeProps} />
          <path d="M16 6l2-2 2 2" {...strokeProps} />
        </>
      ) : null}
      {variant === "relations" ? (
        <>
          <path d="M8 12h8" {...strokeProps} />
          <path d="M12 8v8" {...strokeProps} />
          <circle cx="12" cy="12" r="9" {...strokeProps} />
        </>
      ) : null}
      {variant === "compliance" ? (
        <>
          <path d="M6 12l4 4 8-9" {...strokeProps} />
          <rect x="4" y="4" width="16" height="16" rx="2" {...strokeProps} />
        </>
      ) : null}
    </svg>
  );
}
