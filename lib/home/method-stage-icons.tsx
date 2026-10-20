type IconProps = { className?: string };

export function StageUnderstandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M8 5 H16 A1 1 0 0 1 17 6 V17 A1 1 0 0 1 16 18 H8 A1 1 0 0 1 7 17 V6 A1 1 0 0 1 8 5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10 9 H14 M10 12 H14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="15.5" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17.6 17.6 L19.5 19.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function StageDesignIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="4" y="4" width="6.5" height="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="4" width="6.5" height="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="13.5" width="6.5" height="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function StageBuildIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 4 L19 8 V16 L12 20 L5 16 V8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 4 V20 M5 8 L19 8 M5 16 L19 16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function StageDeployIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M7 17 H17 A3.5 3.5 0 0 0 17.4 10.2 A4.5 4.5 0 0 0 7.2 11.5 A3 3 0 0 0 7 17 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 13 V10 M10.5 11.5 L12 10 L13.5 11.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function StageManageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="5" y="13" width="2.5" height="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.75" y="9" width="2.5" height="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16.5" y="5" width="2.5" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export const methodStageIcons = [
  StageUnderstandIcon,
  StageDesignIcon,
  StageBuildIcon,
  StageDeployIcon,
  StageManageIcon,
] as const;
