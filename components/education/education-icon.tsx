import Image from "next/image";

export const EDUCATION_ICON_BASE = "/images/education/icons";

export type EducationApproachIconName =
  | "personalised-guidance"
  | "practical-learning"
  | "career-focus"
  | "global-community";

type EducationIconProps = {
  name: EducationApproachIconName;
  className?: string;
  size?: number;
};

/** Green line icons for Education “Our approach” — matches reference / Solutions icon stroke style. */
export function EducationIcon({ name, className, size = 40 }: EducationIconProps) {
  return (
    <Image
      src={`${EDUCATION_ICON_BASE}/${name}.svg`}
      alt=""
      width={size}
      height={size}
      unoptimized
      className={className}
    />
  );
}
