import { SslHeaderLockup } from "./ssl-header-lockup";

type SslHeaderLogoProps = {
  className?: string;
};

/** Approved constructed lockup — identical identity at all breakpoints (responsive scale only). */
export function SslHeaderLogo({ className }: SslHeaderLogoProps) {
  return (
    <span className={["inline-flex min-w-0 items-center", className].filter(Boolean).join(" ")}>
      <SslHeaderLockup />
    </span>
  );
}
