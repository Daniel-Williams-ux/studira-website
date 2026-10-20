import { MethodInView } from "./method-in-view";
import { SslMethodProcess } from "./ssl-method-process";

export function SslMethodSection() {
  return (
    <section
      aria-labelledby="ssl-method-heading"
      className="ssl-bg-atmosphere-dark relative overflow-x-clip text-foreground-inverse"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-6 opacity-25 sm:w-8"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--ssl-accent) 35%, transparent) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-6 opacity-25 sm:w-8"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--ssl-accent) 35%, transparent) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />

      <MethodInView className="ssl-container ssl-method-chapter">
        <SslMethodProcess />
      </MethodInView>
    </section>
  );
}
