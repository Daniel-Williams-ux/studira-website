import Image from "next/image";

type EducationMediaProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/** Responsive education imagery (paths under public/ are deployed as static assets). */
export function EducationMedia({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
}: EducationMediaProps) {
  return (
    <div
      className={[
        "relative size-full overflow-hidden bg-[color-mix(in_srgb,var(--ssl-cool-grey)_12%,var(--ssl-off-white))]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={["object-cover", imageClassName].filter(Boolean).join(" ")}
      />
    </div>
  );
}
