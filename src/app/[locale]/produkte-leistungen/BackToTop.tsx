"use client";
import React, { useEffect } from "react";

export default function BackToTop() {
  useEffect(() => {
    const progressWrap = document.querySelector(".progress-wrap") as HTMLElement | null;
    const progressPath = progressWrap?.querySelector("path") as SVGPathElement | null;

    if (!progressWrap || !progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;

      if (progressPath) {
        progressPath.style.strokeDashoffset = `${progress}`;
      }

      if (scroll > 50) {
        progressWrap?.classList.add("active-progress");
      } else {
        progressWrap?.classList.remove("active-progress");
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    const scrollTopHandler = (event: MouseEvent) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    progressWrap.addEventListener("click", scrollTopHandler);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      progressWrap?.removeEventListener("click", scrollTopHandler);
    };
  }, []);

  return (
    <>
      {/* progress area start */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
      {/* progress area end */}
    </>
  );
}
