import { sslMethodStages } from "@/lib/home/ssl-method-stages";

const centers = [96, 264, 432, 600, 768];
const railY = 142;
const frameTop = 36;
const frameH = 72;
const frameW = 88;

function frameLeft(cx: number) {
  return cx - frameW / 2;
}

export function SslMethodVisual() {
  return (
    <div
      className="ssl-method-visual relative hidden w-full lg:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 864 240"
        className="h-auto w-full text-foreground-inverse"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[108, 180, 252].map((y) => (
          <line
            key={y}
            x1="32"
            y1={y}
            x2="832"
            y2={y}
            className="ssl-method-grid-line"
            strokeWidth="1"
          />
        ))}
        {[168, 336, 504, 672].map((x) => (
          <line
            key={x}
            x1={x}
            y1="24"
            x2={x}
            y2="216"
            className="ssl-method-grid-line"
            strokeWidth="1"
          />
        ))}

        <line
          x1={centers[0]}
          y1={railY}
          x2={centers[3] - 24}
          y2={railY}
          className="ssl-method-rail stroke-current opacity-25"
          strokeWidth="1"
        />
        <line
          x1={centers[3] - 24}
          y1={railY}
          x2={centers[4]}
          y2={railY}
          className="ssl-method-rail-accent stroke-accent"
          strokeWidth="1.5"
        />

        {centers.map((cx, index) => {
          const x = frameLeft(cx);
          const isManage = index === 4;
          const isLate = index >= 3;

          return (
            <g
              key={sslMethodStages[index].num}
              className="ssl-method-module"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <path
                d={`M ${x} ${frameTop + frameH} V ${frameTop + 8} H ${x + frameW} V ${frameTop + frameH}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className={isManage ? "opacity-55" : isLate ? "opacity-42" : "opacity-30"}
              />
              <line
                x1={x + 14}
                y1={frameTop + 28}
                x2={x + frameW - 14}
                y2={frameTop + 28}
                className="stroke-current opacity-15"
                strokeWidth="1"
              />
              <line
                x1={x + 14}
                y1={frameTop + 44}
                x2={x + frameW - 28}
                y2={frameTop + 44}
                className="stroke-current opacity-12"
                strokeWidth="1"
              />

              <line
                x1={cx}
                y1={frameTop + frameH}
                x2={cx}
                y2={railY - (isManage ? 6 : 0)}
                className={isManage ? "stroke-accent/70" : "stroke-current opacity-30"}
                strokeWidth="1"
              />

              <circle
                cx={cx}
                cy={railY}
                r={isManage ? 7 : index >= 2 ? 5 : 4}
                className={
                  isManage
                    ? "fill-accent"
                    : isLate
                      ? "fill-current opacity-60"
                      : "fill-current opacity-40"
                }
              />

              {index < centers.length - 1 ? (
                <path
                  d={`M ${cx + 10} ${railY} H ${centers[index + 1] - 10}`}
                  fill="none"
                  className={
                    index >= 3
                      ? "ssl-method-link stroke-accent/55"
                      : "ssl-method-link stroke-current opacity-35"
                  }
                  strokeWidth="1"
                  style={{ animationDelay: `${index * 100 + 50}ms` }}
                />
              ) : null}
            </g>
          );
        })}

        <g className="ssl-method-module" style={{ animationDelay: "520ms" }}>
          <rect
            x={frameLeft(centers[4]) - 28}
            y={168}
            width={frameW + 72}
            height={48}
            fill="none"
            className="stroke-accent/50"
            strokeWidth="1"
            rx="1"
          />
          <line
            x1={frameLeft(centers[4]) - 20}
            y1={178}
            x2={frameLeft(centers[4]) + frameW + 44}
            y2={178}
            className="stroke-accent/35"
            strokeWidth="1"
          />
          <line
            x1={frameLeft(centers[4]) - 12}
            y1={192}
            x2={frameLeft(centers[4]) + frameW + 28}
            y2={192}
            className="stroke-current opacity-20"
            strokeWidth="1"
          />
          <line
            x1={frameLeft(centers[4]) - 12}
            y1={204}
            x2={frameLeft(centers[4]) + frameW + 12}
            y2={204}
            className="stroke-current opacity-15"
            strokeWidth="1"
          />
          <line
            x1={centers[4]}
            y1={railY + 7}
            x2={centers[4]}
            y2={168}
            className="stroke-accent/65"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}
