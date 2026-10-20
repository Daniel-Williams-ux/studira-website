"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-ssl-solutions-reveal]";

function markInView(node: HTMLElement) {
  node.classList.add("ssl-solutions-is-in-view");
}

function isIntersectingViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom > 0 && rect.top < viewHeight;
}

/** One-shot in-view reveal for Solutions page sections. */
export function SolutionsInView() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    if (!nodes.length) {
      return;
    }

    nodes.forEach((node) => {
      if (isIntersectingViewport(node)) {
        markInView(node);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            markInView(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
    );

    nodes.forEach((node) => {
      if (!node.classList.contains("ssl-solutions-is-in-view")) {
        observer.observe(node);
      }
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
