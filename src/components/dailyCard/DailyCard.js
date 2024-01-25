import React from "react";

function DailyCard() {
  return (
    <div class="daily-forecast-wrapper">
      <div class="title-favorite">
        <h2>Daily Forecast</h2>
      </div>
      <div class="daily-slider">
        <button type="button" class="scroll-left" id="btn-left">
          <i class="bi bi-chevron-left"></i>
        </button>
        <div class="daily-slides" id="daily-forecast">
          <div class="daily-slide">
            <span class="hour">3:00</span>
            <span class="icon-weather-hourly">
              <i class="bi bi-cloud-lightning-rain-fill"></i>
            </span>
            <span class="temperature">
              <span class="daily-temp">16</span>º
            </span>
          </div>
        </div>
        <button type="button" class="scroll-right" id="btn-right">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default DailyCard;
