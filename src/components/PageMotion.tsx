"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Progressive enhancement: content stays visible without JS or with reduced motion.
export default function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const selector = [
      ".hero-copy",
      ".system-sketch",
      ".page-heading",
      ".project-heading",
      ".section-heading",
      ".project-card",
      ".experience-entry",
      ".experience-preview",
      ".hardware-feature",
      ".systems-strip",
      ".cv-card",
      ".case-body > *",
      ".skills-list > section",
      ".training-grid > section",
      ".about-layout > *",
    ].join(",");
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );
    let observer: IntersectionObserver | undefined;

    function clear() {
      observer?.disconnect();
      elements.forEach((element) => {
        element.removeAttribute("data-reveal");
        element.style.removeProperty("--reveal-delay");
      });
    }

    function setup() {
      clear();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-reveal", "visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -24px 0px" },
      );

      elements.forEach((element, index) => {
        const bounds = element.getBoundingClientRect();
        // Never hide content that is already above the viewport (back/forward navigation).
        if (bounds.bottom < 0) return;
        element.style.setProperty("--reveal-delay", (index % 3) * 65 + "ms");
        element.setAttribute("data-reveal", "waiting");
        observer?.observe(element);
      });
    }

    setup();
    preference.addEventListener("change", setup);
    return () => {
      clear();
      preference.removeEventListener("change", setup);
    };
  }, [pathname]);

  return null;
}
