import Image from "next/image";
import { SOLUTIONS_ICON_BASE } from "@/lib/solutions/content";

type SolutionsIconProps = {
  name: string;
  className?: string;
  size?: number;
};

/** Supplied SVG icons from public/images/solutions/icons — do not substitute. */
export function SolutionsIcon({ name, className, size = 48 }: SolutionsIconProps) {
  return (
    <Image
      src={`${SOLUTIONS_ICON_BASE}/${name}.svg`}
      alt=""
      width={size}
      height={size}
      unoptimized
      className={className}
    />
  );
}
