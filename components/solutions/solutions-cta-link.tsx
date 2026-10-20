import Link from "next/link";

const primaryCtaClass =
  "group inline-flex min-h-11 w-fit max-w-full items-center justify-center gap-2 rounded-md bg-accent px-6 ssl-type-label text-accent-foreground motion-safe:transition-[background-color] motion-safe:duration-fast hover:bg-accent/92 active:bg-accent/85 focus-visible:ssl-focus-ring sm:px-7";

const secondaryCtaClass =
  "group inline-flex min-h-11 w-fit max-w-full items-center justify-center gap-2 rounded-md border border-foreground-inverse/38 bg-foreground-inverse/[0.03] px-6 ssl-type-label text-foreground-inverse motion-safe:transition-[background-color,border-color] motion-safe:duration-fast hover:border-foreground-inverse/52 hover:bg-foreground-inverse/[0.07] focus-visible:ssl-focus-ring sm:px-7";

type SolutionsCtaLinkProps = {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function SolutionsCtaLink({
  href,
  children,
  variant = "primary",
  className,
}: SolutionsCtaLinkProps) {
  const base = variant === "secondary" ? secondaryCtaClass : primaryCtaClass;

  return (
    <Link href={href} className={[base, className].filter(Boolean).join(" ")}>
      {children}
      {variant === "primary" ? (
        <span
          aria-hidden="true"
          className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
