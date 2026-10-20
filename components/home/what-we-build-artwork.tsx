import type { CSSProperties } from "react";
import Image from "next/image";

/** Approved What We Build artwork — visual-only composite (no baked-in copy). */
export const WHAT_WE_BUILD_ARTWORK_PATH =
  "/images/home/what-we-build/studira-what-we-build-system-clean.png";

type WhatWeBuildSystemArtworkProps = {
  className?: string;
  style?: CSSProperties;
};

/** Single render — continuous visual under Products (left) + Solutions (right). */
export function WhatWeBuildSystemArtwork({
  className,
  style,
}: WhatWeBuildSystemArtworkProps) {
  return (
    <figure
      className={["ssl-build-art m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
      style={style}
      aria-hidden="true"
    >
      <div
        className={[
          "relative w-full overflow-hidden bg-surface-light",
          "h-[8rem] sm:h-[8.5rem] md:h-[9rem] lg:h-[11rem] xl:h-[11.5rem]",
          "[mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]",
          "[-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]",
        ].join(" ")}
      >
        <Image
          src={WHAT_WE_BUILD_ARTWORK_PATH}
          alt=""
          fill
          sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 62vw, 100vw"
          className={[
            "object-cover mix-blend-multiply",
            "object-[46%_92%]",
            "sm:object-[47%_91%]",
            "lg:object-[44%_90%]",
            "xl:object-[46%_88%]",
          ].join(" ")}
        />
      </div>
    </figure>
  );
}
