import Image from "next/image";
import {
  STUDIRA_EMR_OPERATIONS_DASHBOARD_HEIGHT,
  STUDIRA_EMR_OPERATIONS_DASHBOARD_PATH,
  STUDIRA_EMR_OPERATIONS_DASHBOARD_WIDTH,
} from "@/lib/products/emr-assets";

type HealthcareProductVisualProps = {
  className?: string;
};

export function HealthcareProductVisual({ className }: HealthcareProductVisualProps) {
  return (
    <figure
      className={["m-0 min-w-0 w-full", className].filter(Boolean).join(" ")}
    >
      <p className="mb-1.5 font-mono text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-foreground/55 sm:text-[0.625rem]">
        STUDIRA SYSTEMS EMR · OPERATIONS DASHBOARD
      </p>
      <div className="overflow-hidden rounded-sm border border-line-strong bg-surface">
        <Image
          src={STUDIRA_EMR_OPERATIONS_DASHBOARD_PATH}
          alt="Studira Systems EMR operations dashboard"
          width={STUDIRA_EMR_OPERATIONS_DASHBOARD_WIDTH}
          height={STUDIRA_EMR_OPERATIONS_DASHBOARD_HEIGHT}
          sizes="(min-width: 1024px) 36vw, 100vw"
          className="block h-auto w-full object-contain object-top"
        />
      </div>
    </figure>
  );
}
