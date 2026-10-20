import Image from "next/image";

/** Production Technology in Practice system artwork — do not substitute. */
export const TECHNOLOGY_IN_PRACTICE_ARTWORK_PATH =
  "/images/home/technology-in-practice/studira-technology-in-practice-system.png";

export function TechnologyInPracticeArtwork({ className }: { className?: string }) {
  return (
    <figure
      className={["ssl-practice-art m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <div
        className={[
          "relative w-full overflow-hidden bg-surface-light",
          "h-[11.25rem] sm:h-[12.5rem] md:h-[13.5rem]",
          "lg:aspect-[2.35/1] lg:h-auto lg:min-h-[15.5rem] xl:min-h-[16.5rem]",
          "[mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]",
          "[-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]",
        ].join(" ")}
      >
        <Image
          src={TECHNOLOGY_IN_PRACTICE_ARTWORK_PATH}
          alt=""
          fill
          priority={false}
          sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 62vw, 100vw"
          className={[
            "object-contain object-center mix-blend-multiply",
            "max-sm:object-[50%_52%]",
          ].join(" ")}
        />
      </div>
    </figure>
  );
}
