import Image from "next/image";

/** Production BIO Dental EMR evidence — do not substitute or duplicate. */
export const HEALTHCARE_EMR_VIDEO_PATH = "/videos/products/healthcare-emr-walkthrough.mp4";
export const HEALTHCARE_EMR_PATIENTS_IMAGE_PATH =
  "/images/products/healthcare/emr-patients.png";
export const HEALTHCARE_EMR_DASHBOARD_IMAGE_PATH =
  "/images/products/healthcare/emr-dashboard.png";

const PATIENTS_IMAGE_WIDTH = 1864;
const PATIENTS_IMAGE_HEIGHT = 1001;

type HealthcareProductVisualProps = {
  className?: string;
};

export function HealthcareProductVisual({ className }: HealthcareProductVisualProps) {
  return (
    <figure
      className={["m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
    >
      <div className="flex min-w-0 flex-col gap-3 sm:gap-3.5 lg:gap-4">
        <div className="min-w-0">
          <p className="mb-1.5 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-foreground/55 sm:text-[0.625rem]">
            REAL SYSTEM · CLINICAL WORKFLOW
          </p>
          <div className="overflow-hidden rounded-sm border border-line-strong bg-surface-dark">
            <video
              className="block aspect-video w-full object-cover object-top motion-reduce:object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="BIO Dental EMR system walkthrough"
            >
              <source src={HEALTHCARE_EMR_VIDEO_PATH} type="video/mp4" />
            </video>
          </div>
        </div>

        <div
          className="ssl-products-healthcare-stills grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:gap-4"
        >
          <div className="min-w-0">
            <p className="mb-1 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-foreground/50 sm:text-[0.625rem]">
              PATIENT OPERATIONS
            </p>
            <div className="overflow-hidden rounded-sm border border-line-strong bg-surface">
              <Image
                src={HEALTHCARE_EMR_PATIENTS_IMAGE_PATH}
                alt="BIO Dental EMR patient registry"
                width={PATIENTS_IMAGE_WIDTH}
                height={PATIENTS_IMAGE_HEIGHT}
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 100vw"
                className="block h-auto w-full object-contain object-top"
              />
            </div>
          </div>

          <div className="min-w-0">
            <p className="mb-1 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.12em] text-foreground/50 sm:text-[0.625rem]">
              ORGANISATIONAL OPERATIONS
            </p>
            <div className="overflow-hidden rounded-sm border border-line-strong bg-surface">
              <Image
                src={HEALTHCARE_EMR_DASHBOARD_IMAGE_PATH}
                alt="BIO Dental EMR operational dashboard"
                width={PATIENTS_IMAGE_WIDTH}
                height={PATIENTS_IMAGE_HEIGHT}
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 100vw"
                className="block h-auto w-full object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
