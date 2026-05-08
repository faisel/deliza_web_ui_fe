"use client";
import { useEffect } from "react";

export default function OnepageSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement | null;

      // Only for onepage menu with # ids
      if (
        link &&
        link.closest(".onepage") &&
        link.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = link.getAttribute("href")!;
        const section = document.querySelector(id);

        if (section) {
          const header = document.querySelector("header") as HTMLElement | null;
          const headerHeight = header ? header.offsetHeight : 0;

          const elementPosition =
            section.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
