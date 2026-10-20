"use client";

import { useEffect } from "react";

export const FOUNDER_REVEAL_ROOT_SELECTOR = "[data-ssl-founder-reveal-root]";

/** Attaches one-shot in-view reveal to the server-rendered founder root (no wrapper element). */
export function FounderInView() {
  useEffect(() => {
    const node = document.querySelector<HTMLElement>(FOUNDER_REVEAL_ROOT_SELECTOR);
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add("ssl-founder-is-in-view");
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
