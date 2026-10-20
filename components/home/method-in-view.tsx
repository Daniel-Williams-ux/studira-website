"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type MethodInViewProps = {
  children: ReactNode;
  className?: string;
};

/** One-time in-view reveal for How We Work (respects reduced motion via CSS). */
export function MethodInView({ children, className }: MethodInViewProps) {
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
      { rootMargin: "0px 0px -6% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={[className, active ? "ssl-method-is-in-view" : "ssl-method-await"]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
