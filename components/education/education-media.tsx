import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

export function publicEducationImageExists(src: string) {
  const relative = src.replace(/^\//, "");
  return fs.existsSync(path.join(process.cwd(), "public", relative));
}

type EducationMediaProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/** Responsive education imagery with safe fallback when assets are not yet on disk. */
export function EducationMedia({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
}: EducationMediaProps) {
  const hasImage = publicEducationImageExists(src);

  return (
    <div
      className={[
        "relative size-full overflow-hidden bg-[color-mix(in_srgb,var(--ssl-cool-grey)_12%,var(--ssl-off-white))]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={["object-cover", imageClassName].filter(Boolean).join(" ")}
        />
      ) : (
        <span className="sr-only">{`Image pending: ${src}`}</span>
      )}
    </div>
  );
}
