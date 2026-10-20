type SslWordmarkProps = {
  className?: string;
};

/**
 * Wordmark-first brand treatment (no symbolic mark). For headers and identity slots.
 */
export function SslWordmark({ className }: SslWordmarkProps) {
  return (
    <span
      className={[ "ssl-wordmark", className ].filter(Boolean).join(" ")}
      aria-label="Studira Systems"
    >
      Studira Systems
    </span>
  );
}
