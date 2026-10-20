import Image from "next/image";

/** Production Founder artwork — do not substitute. */
export const FOUNDER_ARTWORK_PATH = "/images/home/founder/studira-founder-system.png";

const FOUNDER_IMAGE_ALT =
  "Daniel Williams, founder of Studira Systems Limited, in the Studira workspace";

type FounderArtworkProps = {
  className?: string;
};

export function FounderArtwork({ className }: FounderArtworkProps) {
  return (
    <figure
      className={["ssl-founder-art m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
    >
      <div
        className={[
          "relative w-full overflow-hidden bg-surface-light",
          "h-[clamp(11rem,54vw,15.5rem)] sm:h-[clamp(12rem,58vw,16.5rem)]",
          "lg:h-[min(40vw,24rem)] lg:min-h-[18.5rem] lg:max-h-[26rem]",
          "xl:h-[min(38vw,25rem)] xl:min-h-[19rem]",
        ].join(" ")}
      >
        <Image
          src={FOUNDER_ARTWORK_PATH}
          alt={FOUNDER_IMAGE_ALT}
          fill
          priority={false}
          sizes="(min-width: 1536px) 58vw, (min-width: 1024px) 56vw, 100vw"
          className={[
            "mix-blend-multiply",
            "object-contain object-[68%_38%] sm:object-[66%_36%]",
            "lg:object-cover lg:object-[78%_28%] xl:object-[76%_26%]",
          ].join(" ")}
        />
      </div>
    </figure>
  );
}
