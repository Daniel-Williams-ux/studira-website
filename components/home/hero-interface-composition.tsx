import Image from "next/image";

export const HERO_ARTWORK_PATH = "/images/hero/studira-hero-artwork.png";

const desktopSizes = "(min-width: 1536px) 52vw, (min-width: 1280px) 54vw, 56vw";
const mobileSizes = "100vw";

type HeroFinishedArtworkProps = {
  /** Desktop: absolute right-side layer. Mobile: in-flow figure after CTAs. */
  variant: "desktop" | "mobile";
  className?: string;
};

/**
 * Finished hero artwork — PNG only (no masks, overlays, filters, or CSS recreation).
 */
export function HeroFinishedArtwork({ variant, className }: HeroFinishedArtworkProps) {
  if (variant === "desktop") {
    return (
      <div
        className={[
          "pointer-events-none absolute inset-y-0 z-[1] hidden overflow-hidden lg:block ssl-hero-enter-art",
          "left-[29%] right-0 xl:left-[30%] 2xl:left-[31%]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      >
        <div className="relative h-full w-full origin-[90%_50%] lg:scale-[1.07]">
          <Image
            src={HERO_ARTWORK_PATH}
            alt=""
            fill
            priority
            unoptimized
            sizes={desktopSizes}
            className="object-contain object-[95%_50%]"
          />
        </div>
      </div>
    );
  }

  return (
    <figure
      className={["relative m-0 w-full min-w-0 overflow-hidden", className].filter(Boolean).join(" ")}
    >
      <div className="relative h-[clamp(13.25rem,41vw,17.75rem)] w-full max-h-[18rem] sm:h-[clamp(13.75rem,39vw,18.25rem)] sm:max-h-[19rem]">
        <Image
          src={HERO_ARTWORK_PATH}
          alt="Studira technology systems dashboard in an operational environment, including workflow and outcomes visualization"
          fill
          priority
          unoptimized
          sizes={mobileSizes}
          className="object-cover object-[32%_50%] xs:object-[34%_48%] sm:object-[36%_46%]"
        />
      </div>
    </figure>
  );
}

/** @deprecated Use HeroFinishedArtwork */
export function HeroInterfaceComposition({ className }: { className?: string }) {
  return <HeroFinishedArtwork variant="mobile" className={className} />;
}
