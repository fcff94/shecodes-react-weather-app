import React from "react";
import DailyCard from "../dailyCard/DailyCard";
import WeeklyCard from "../weeklyCard/WeeklyCard";

function ColumnRight() {
  return (
    <div class="card-column card-column-right">
      <nav>
        <div class="nav nav-tabs mb-3" id="pills-tab">
          <button
            class="nav-link active"
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

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-current-city"
          role="tabpanel"
          aria-labelledby="pills-current-city"
          tabindex="0"
        >
          <div class="forecast-wrapper">
            <DailyCard />
            <WeeklyCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColumnRight;
