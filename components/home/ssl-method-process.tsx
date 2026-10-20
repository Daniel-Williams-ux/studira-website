import { sslMethodStages } from "@/lib/home/ssl-method-stages";
import { methodStageIcons } from "@/lib/home/method-stage-icons";

const SUPPORTING_COPY =
  "A structured engineering process that turns real organisational problems into reliable, managed technology systems.";

const managePanelClass =
  "rounded-md border border-accent/30 bg-[color-mix(in_srgb,var(--ssl-accent)_12%,var(--ssl-graphite))] px-2.5 py-2 sm:px-3 sm:py-2.5 lg:px-2.5 lg:py-1.5";

function stageFlags(index: number) {
  const isBuild = index === 2;
  const isManage = index === 4;
  return { isBuild, isManage, isEmphasis: isBuild || isManage };
}

function DesktopStageIcon({
  index,
  Icon,
}: {
  index: number;
  Icon: (typeof methodStageIcons)[number];
}) {
  const { isBuild, isManage, isEmphasis } = stageFlags(index);

  return (
    <div className="relative z-[1] flex justify-center lg:justify-start">
      <span
        className={[
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-surface-dark",
          isManage
            ? "border-accent/55 bg-[color-mix(in_srgb,var(--ssl-accent)_14%,var(--ssl-graphite))]"
            : isBuild
              ? "border-accent/65"
              : "border-accent/40",
        ].join(" ")}
      >
        <Icon
          className={[
            "h-3.5 w-3.5",
            isEmphasis ? "text-accent" : "text-accent/85",
          ].join(" ")}
        />
      </span>
    </div>
  );
}

function MobileStageIcon({
  index,
  Icon,
}: {
  index: number;
  Icon: (typeof methodStageIcons)[number];
}) {
  const { isBuild, isManage, isEmphasis } = stageFlags(index);

  return (
    <span
      className={[
        "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-surface-dark",
        isManage
          ? "border-accent/55"
          : isBuild
            ? "border-accent/65"
            : "border-accent/45",
      ].join(" ")}
    >
      <Icon className={["h-3 w-3", isEmphasis ? "text-accent" : "text-accent/85"].join(" ")} />
    </span>
  );
}

export function SslMethodProcess() {
  return (
    <>
      <div className="ssl-method-intro grid gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,16.5rem)] lg:items-start lg:gap-6 xl:gap-8">
        <div className="min-w-0 max-w-xl">
          <p className="ssl-type-meta text-accent/90">HOW WE WORK</p>
          <h2
            id="ssl-method-heading"
            className="ssl-method-heading mt-2 max-w-[17ch] text-balance text-foreground-inverse"
          >
            From problem to managed system.
          </h2>
        </div>
        <p className="max-w-[18rem] ssl-method-support text-text-on-dark-secondary sm:max-w-[19rem] lg:max-w-none lg:justify-self-end lg:pt-0.5 lg:text-right xl:max-w-[17.5rem]">
          {SUPPORTING_COPY}
        </p>
      </div>

      <div className="ssl-method-process relative mt-5 sm:mt-6 lg:mt-5 xl:mt-6">
        <div
          className="pointer-events-none absolute left-[6%] right-[3%] top-4 hidden h-px border-t border-dotted border-accent/50 lg:block"
          aria-hidden="true"
        />

        <ol className="m-0 hidden list-none gap-0 p-0 lg:grid lg:grid-cols-5 lg:gap-x-1.5 xl:gap-x-2">
          {sslMethodStages.map((stage, index) => {
            const Icon = methodStageIcons[index];
            const { isBuild, isManage } = stageFlags(index);

            return (
              <li
                key={stage.num}
                className={[
                  "ssl-method-stage relative flex min-w-0 flex-col gap-0.5 pb-0 pt-0 lg:gap-0",
                  isManage ? "z-[2] lg:-mx-0.5" : "px-0 lg:pr-1",
                ].join(" ")}
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <DesktopStageIcon index={index} Icon={Icon} />
                <div
                  className={[
                    "flex min-w-0 flex-col gap-0.5 lg:gap-0",
                    isManage ? managePanelClass : "",
                  ].join(" ")}
                >
                  <p
                    className={[
                      "ssl-method-stage-num mt-0.5 text-left lg:mt-0",
                      isManage
                        ? "text-foreground-inverse/85"
                        : isBuild
                          ? "text-accent"
                          : "text-foreground-inverse/75",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {stage.num}
                  </p>
                  <p className="sr-only">{`Stage ${stage.num}`}</p>
                  <h3 className="text-left text-[0.9375rem] font-semibold leading-tight text-foreground-inverse">
                    {stage.name}
                  </h3>
                  <p className="max-w-[11.5rem] text-left text-[0.8125rem] leading-[1.4] text-text-on-dark-secondary lg:leading-[1.32]">
                    {stage.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <ol className="relative m-0 list-none border-l border-dotted border-accent/45 p-0 pl-5 sm:pl-6 lg:hidden">
          {sslMethodStages.map((stage, index) => {
            const Icon = methodStageIcons[index];
            const { isBuild, isManage } = stageFlags(index);

            return (
              <li
                key={stage.num}
                className={[
                  "ssl-method-stage relative pb-3 pl-1.5 last:pb-0 sm:pb-3.5 lg:pb-4",
                  isManage ? ["-ml-5 pl-5 sm:-ml-6 sm:pl-6", managePanelClass].join(" ") : "",
                ].join(" ")}
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <span
                  className={[
                    "absolute -left-[calc(1.25rem+1px)] top-0 flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[0.625rem] font-medium tracking-tight sm:-left-[calc(1.5rem+1px)]",
                    isManage
                      ? "border-accent/50 bg-[color-mix(in_srgb,var(--ssl-accent)_18%,var(--ssl-graphite))] text-foreground-inverse"
                      : isBuild
                        ? "border-accent/60 bg-surface-dark text-accent"
                        : "border-accent/45 bg-surface-dark text-foreground-inverse/85",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  {stage.num}
                </span>
                <p className="sr-only">{`Stage ${stage.num}`}</p>
                <div className="flex items-start gap-2">
                  <MobileStageIcon index={index} Icon={Icon} />
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="text-[0.9375rem] font-semibold leading-tight text-foreground-inverse">
                      {stage.name}
                    </h3>
                    <p className="mt-1 max-w-[18rem] text-[0.8125rem] leading-[1.4] text-text-on-dark-secondary">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
