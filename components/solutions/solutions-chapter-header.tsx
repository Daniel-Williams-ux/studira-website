import type { ReactNode } from "react";

type SolutionsChapterHeaderProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  children?: ReactNode;
  className?: string;
  inverted?: boolean;
};

export function SolutionsChapterHeader({
  id,
  index,
  label,
  title,
  children,
  className,
  inverted = false,
}: SolutionsChapterHeaderProps) {
  return (
    <header className={["ssl-solutions-copy min-w-0", className].filter(Boolean).join(" ")}>
      <p
        className={[
          "font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em]",
          inverted ? "text-accent/90" : "text-accent",
        ].join(" ")}
      >
        <span className={inverted ? "text-foreground-inverse/75" : "text-foreground/70"}>
          {index}
        </span>
        <span className="mx-2 text-foreground-muted" aria-hidden="true">
          /
        </span>
        {label}
      </p>
      <h2
        id={id}
        className={[
          "ssl-solutions-heading mt-2 max-w-[22ch] text-balance",
          inverted ? "text-foreground-inverse" : "",
        ].join(" ")}
      >
        {title}
      </h2>
      {children}
    </header>
  );
}
