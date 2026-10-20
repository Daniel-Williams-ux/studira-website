"use client";

import { useEffect } from "react";

export const ENGINEERING_REVEAL_ROOT_SELECTOR = "[data-ssl-engineering-reveal-root]";

/** Attaches one-shot in-view reveal to the server-rendered engineering root (no wrapper element). */
export function EngineeringInView() {
  useEffect(() => {
    const node = document.querySelector<HTMLElement>(ENGINEERING_REVEAL_ROOT_SELECTOR);
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add("ssl-engineering-is-in-view");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return null;
}
