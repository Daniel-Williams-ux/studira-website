import Image from "next/image";

/** Approved Our Approach artwork — do not modify pixels or substitute. */
export const APPROACH_ARTWORK_PATH =
  "/images/home/our-approach/studira-our-approach-system-fit.png";

/**
 * Wide shallow band — full width of the right column; fixed height + object-cover/position only.
 */
export function ApproachInterfaceComposition() {
  return (
    <figure className="ssl-approach-visual m-0 w-full min-w-0">
      <div className="relative h-[6.5rem] w-full overflow-hidden sm:h-[7rem] lg:h-[9.25rem] xl:h-[9.5rem]">
        <Image
          src={APPROACH_ARTWORK_PATH}
          alt="Workplace environment with a system diagram linking organisation, workflow and technology fit"
          fill
          sizes="(min-width: 1440px) 520px, (min-width: 1024px) 52vw, 100vw"
          className="object-cover object-[46%_48%] lg:object-[50%_46%]"
          priority={false}
        />
      </div>
    </figure>
  );
}
