import Image from "next/image";

/** Trim-only derivative of studira-icon.png — sprout pixels unchanged. */
const APPROVED_SPROUT = "/images/brand/studira-sprout-mark.png";
const SPROUT_WIDTH = 874;
const SPROUT_HEIGHT = 933;

/**
 * Sharp web header lockup — same identity on mobile and desktop; scale responsive only.
 */
export function SslHeaderLockup() {
  return (
    <span
      className={[
        "inline-flex max-w-[7.875rem] shrink min-w-0 items-center",
        "h-[2.375rem] xs:h-[2.6875rem] xs:max-w-[9.25rem]",
        "md:h-[3.25rem] md:max-w-[10.6875rem]",
      ].join(" ")}
      aria-hidden="true"
    >
      <Image
        src={APPROVED_SPROUT}
        alt=""
        width={SPROUT_WIDTH}
        height={SPROUT_HEIGHT}
        sizes="(max-width: 767px) 36px, 40px"
        className={[
          "h-[2.375rem] w-[2rem] shrink-0 object-contain object-left",
          "xs:h-[2.6875rem] xs:w-[2.25rem]",
          "md:h-[3.25rem] md:w-[2.5rem]",
        ].join(" ")}
        priority
      />
      <span
        className={[
          "flex w-[5.875rem] shrink-0 flex-col justify-center leading-none",
          "xs:w-[7rem]",
          "md:w-[7.75rem]",
          "-translate-y-[0.125rem] md:-translate-y-[0.1875rem]",
        ].join(" ")}
      >
        <span
          className={[
            "font-sans font-semibold tracking-[-0.026em] text-foreground",
            "text-[1.0625rem] xs:text-[1.1875rem] md:text-[1.4375rem]",
          ].join(" ")}
        >
          Studira
        </span>
        <span
          className={[
            "mt-px font-mono font-medium uppercase text-foreground",
            "text-[0.4375rem] tracking-[0.14em] xs:text-[0.5rem] xs:tracking-[0.145em]",
            "md:text-[0.53125rem] md:tracking-[0.148em]",
          ].join(" ")}
        >
          Systems Limited
        </span>
      </span>
    </span>
  );
}
