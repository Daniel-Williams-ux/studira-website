import Image from "next/image";

/** Production Engineering system artwork — do not substitute. */
export const ENGINEERING_ARTWORK_PATH = "/images/home/engineering/studira-engineering-system.png";

export function EngineeringArtwork({ className }: { className?: string }) {
  return (
    <figure
      className={["ssl-engineering-art m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <div
        className={[
          "relative w-full overflow-hidden bg-surface-light",
          "h-[9.5rem] xs:h-[10.25rem] sm:h-[11.25rem] md:h-[12.25rem]",
          "lg:h-[15.5rem] xl:h-[17rem] 2xl:h-[18rem]",
        ].join(" ")}
      >
        <Image
          src={ENGINEERING_ARTWORK_PATH}
          alt=""
          fill
          priority={false}
          sizes="(min-width: 1280px) min(100vw, 72rem), 100vw"
          className="object-contain object-center mix-blend-multiply"
        />
      </div>
    </figure>
  );
}
