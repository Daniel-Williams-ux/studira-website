"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type BuildInViewProps = {
  children: ReactNode;
  className?: string;
};

/** One-time in-view reveal for What We Build (respects reduced motion via CSS). */
export function BuildInView({ children, className }: BuildInViewProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={[className, active ? "ssl-build-is-in-view" : "ssl-build-await"]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
