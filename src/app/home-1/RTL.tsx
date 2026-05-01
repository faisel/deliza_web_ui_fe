"use client";
import React, { useEffect, useState } from "react";

function RTL() {
  const [direction, setDirection] = useState("ltr");

  // Load saved direction on mount
  useEffect(() => {
    const savedDir = localStorage.getItem("pageDirection") || "ltr";
    setDirection(savedDir);
    document.body.setAttribute("dir", savedDir);
  }, []);

  // Handle toggle click
  const toggleDirection = () => {
    const newDir = direction === "rtl" ? "ltr" : "rtl";
    setDirection(newDir);
    document.body.setAttribute("dir", newDir);
    localStorage.setItem("pageDirection", newDir);
  };

  return (
    <>
      {/* rtl btn area start */}
      <div className="rtl-ltr-switcher-btn" onClick={toggleDirection}>
        <span className={`rtl ${direction === "ltr" ? "show" : ""}`}>
          View RTL
        </span>
        <span className={`ltr ${direction === "rtl" ? "show" : ""}`}>
          View LTR
        </span>
      </div>
      {/* rtl btn area end */}
    </>
  );
}

export default RTL;
