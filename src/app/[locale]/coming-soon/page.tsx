"use client";

import React, { useEffect } from "react";
import BodyClass from "../home-2/BodyClassTwo";

function Page() {
  useEffect(() => {
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;

    const endDate = countdownElement.getAttribute("data-end-date");
    if (!endDate) return;

    const endTime = new Date(endDate).getTime();

    if (isNaN(endTime)) {
      const timerSection = document.querySelector(".timer-section");
      if (timerSection) timerSection.innerHTML = "Invalid end date!";
      return;
    }

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (diff % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysElement) daysElement.textContent = String(days);
        if (hoursElement) hoursElement.textContent = String(hours);
        if (minutesElement) minutesElement.textContent = String(minutes);
        if (secondsElement) secondsElement.textContent = String(seconds);
      } else {
        clearInterval(interval);
        const timerSection = document.querySelector(".timer-section");
        if (timerSection) timerSection.innerHTML = "Time's up!";
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Body class assign */}
      <BodyClass className="account-page-body" />

      {/* rts coming soon area start */}
      <div className="rts-coming-soon-area rts-section-gap d-flex align-items-center h-100-vh">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="coming-soon-wrapper-main">
                <div className="timer-area">
                  <div
                    className="countdown"
                    id="countdown"
                    data-end-date="2026-03-31T23:59:59"
                  >
                    <h3>Coming Soon</h3>
                    <div className="timer-section">
                      <div className="time-unit">
                        <span id="days">0</span>
                        <small>Days</small>
                      </div>
                      <div className="time-unit">
                        <span id="hours">0</span>
                        <small>Hours</small>
                      </div>
                      <div className="time-unit">
                        <span id="minutes">0</span>
                        <small>Minutes</small>
                      </div>
                      <div className="time-unit">
                        <span id="seconds">0</span>
                        <small>Seconds</small>
                      </div>
                    </div>
                  </div>
                  <p className="para">
                    Comeback again when we’re live! Thank you for understanding
                    and patience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts coming soon area end */}
    </>
  );
}

export default Page;
