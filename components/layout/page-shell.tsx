import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  children?: ReactNode;
};

/** Minimal structural page wrapper (not marketing content). */
export function PageShell({ title, children }: PageShellProps) {
  return (
    <div className="ssl-container py-[var(--spacing-section)]">
      <div className="ssl-container-content flex flex-col gap-[var(--spacing-stack)]">
        <h1 className="ssl-type-display-md">{title}</h1>
        {children}
      </div>
    </div>
  );
}
