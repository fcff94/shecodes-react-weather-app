import React from "react";
import Search from "../search/Search";

function ColumnLeft() {
  return (
    <div class="card-column card-column-left">
      <div class="card-column-info">
        <Search />
        <div class="weather-info">
          <h6 id="date">Monday, January 15th, 20:35</h6>
          <h2 class="mb-0">
            <span id="city">Lisbon, </span>
            <span id="country">PT</span>
          </h2>
          <div class="d-flex align-items-center justify-content-evenly w-100">
            <span class="icon-weather icon-weather-left" id="icon-weather">
              <i class="bi bi-cloud-lightning-rain-fill"></i>
            </span>
            <div class="d-flex flex-column align-items-center">
              <h1 class="mb-0" id="temperature">
                17ºC
              </h1>
              <h3 class="description" id="weather-description">
                Broken Clouds
              </h3>
            </div>
          </div>
          <div>
            <span class="me-2 min-max-temp">
              <i class="bi bi-thermometer-low"></i>
              <span id="min-temp">10</span>
            </span>
            <span class="ms-2 min-max-temp">
              <i class="bi bi-thermometer-high"></i>
              <span id="max-temp">18</span>
            </span>
          </div>
        </div>

        <div class="container weather-extra">
          <div class="row d-flex justify-content-around">
            <div class="col-4 d-flex flex-column">
              <div class="weather-extra-item">
                <i class="bi bi-sunrise-fill"></i>
                <span id="sunrise">07:00</span>
              </div>
              <div class="weather-extra-item">
                <i class="bi bi-umbrella-fill"></i>
                <span id="precipitation">46</span>%
              </div>
              <div class="weather-extra-item">
                <i class="bi bi-wind"></i>
                <span id="wind">10</span>Km/h
              </div>
            </div>

            <div class="col-4 d-flex flex-column">
              <div class="weather-extra-item">
                <i class="bi bi-sunset-fill"></i>
                <span id="sunset">06:00</span>
              </div>
              <div class="weather-extra-item">
                <i class="bi bi-droplet-fill"></i>
                <span id="humidity">68</span>%
              </div>
              <div class="weather-extra-item">
                <i class="bi bi-thermometer-half"></i>
                <span id="thermal-sensation">12</span>
              </div>
            </div>
          </div>
        </div>
        <div class="last-update">
          <p id="last-update">Last updated: Monday 16:54</p>
        </div>
      </div>
    </div>
  );
}

export default ColumnLeft;
