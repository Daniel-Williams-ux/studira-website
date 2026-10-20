"use client";

import { useEffect } from "react";

export const PRACTICE_REVEAL_ROOT_SELECTOR = "[data-ssl-practice-reveal-root]";

/** Attaches one-shot in-view reveal to the server-rendered practice root (no wrapper element). */
export function PracticeInView() {
  useEffect(() => {
    const node = document.querySelector<HTMLElement>(PRACTICE_REVEAL_ROOT_SELECTOR);
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add("ssl-practice-is-in-view");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return null;
}
