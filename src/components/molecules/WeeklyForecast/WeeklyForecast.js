import React from "react";

function WeeklyForecast() {
  return (
    <div className="weekly-forecast-wrapper" id="weekly-forecast">
      <div className="weekly-card">
        <div className="weekly-card-body">
          <span className="date">Tuesday, January 16th</span>
          <span className="icon-weather-weekly">
            <i className="bi bi-cloud-lightning-rain-fill"></i>
          </span>
          <span className="min-max-temp">
            <span className="weekly-min-temp">10</span>º /{" "}
            <span className="weekly-max-temp">18 </span>º
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeeklyForecast;
