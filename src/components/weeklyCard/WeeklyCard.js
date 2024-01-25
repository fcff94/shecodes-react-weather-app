import React from "react";

function WeeklyCard() {
  return (
    <div class="weekly-forecast-wrapper" id="weekly-forecast">
      <div class="weekly-card">
        <div class="weekly-card-body">
          <span class="date">Tuesday, January 16th</span>
          <span class="icon-weather-weekly">
            <i class="bi bi-cloud-lightning-rain-fill"></i>
          </span>
          <span class="min-max-temp">
            <span class="weekly-min-temp">10</span>º /{" "}
            <span class="weekly-max-temp">18 </span>º
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeeklyCard;
