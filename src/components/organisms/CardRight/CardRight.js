import React from "react";
import DailyForecast from "../../molecules/DailyForecast/DailyForecast";
import WeeklyForecast from "../../molecules/WeeklyForecast/WeeklyForecast";

function CardRight() {
  return (
    <div className="card-column card-column-right">
      <nav>
        <div className="nav nav-tabs mb-3" id="pills-tab">
          <button
            className="nav-link active"
            id="pills-current-city-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-current-city"
            type="button"
            role="tab"
            aria-controls="pills-current-city"
            aria-selected="true"
          >
            Lisbon
          </button>
        </div>
      </nav>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-current-city"
          role="tabpanel"
          aria-labelledby="pills-current-city"
          tabindex="0"
        >
          <div className="forecast-wrapper">
            <DailyForecast />
            <WeeklyForecast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRight;
