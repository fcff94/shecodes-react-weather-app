import React from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";

function CardLeft() {
  return (
    <div className="card-column card-column-left">
      <div className="card-column-info">
        <SearchBar />
        <div className="weather-info">
          <h6 id="date">Monday, January 15th, 20:35</h6>
          <h2 className="mb-0">
            <span id="city">Lisbon, </span>
            <span id="country">PT</span>
          </h2>
          <div className="d-flex align-items-center justify-content-evenly w-100">
            <span className="icon-weather icon-weather-left" id="icon-weather">
              <i className="bi bi-cloud-lightning-rain-fill"></i>
            </span>
            <div className="d-flex flex-column align-items-center">
              <h1 className="mb-0" id="temperature">
                17ºC
              </h1>
              <h3 className="description" id="weather-description">
                Broken Clouds
              </h3>
            </div>
          </div>
          <div>
            <span className="me-2 min-max-temp">
              <i className="bi bi-thermometer-low"></i>
              <span id="min-temp">10</span>
            </span>
            <span className="ms-2 min-max-temp">
              <i className="bi bi-thermometer-high"></i>
              <span id="max-temp">18</span>
            </span>
          </div>
        </div>

        <div className="container weather-extra">
          <div className="row d-flex justify-content-around">
            <div className="col-4 d-flex flex-column">
              <div className="weather-extra-item">
                <i className="bi bi-sunrise-fill"></i>
                <span id="sunrise">07:00</span>
              </div>
              <div className="weather-extra-item">
                <i className="bi bi-umbrella-fill"></i>
                <span id="precipitation">46</span>%
              </div>
              <div className="weather-extra-item">
                <i className="bi bi-wind"></i>
                <span id="wind">10</span>Km/h
              </div>
            </div>

            <div className="col-4 d-flex flex-column">
              <div className="weather-extra-item">
                <i className="bi bi-sunset-fill"></i>
                <span id="sunset">06:00</span>
              </div>
              <div className="weather-extra-item">
                <i className="bi bi-droplet-fill"></i>
                <span id="humidity">68</span>%
              </div>
              <div className="weather-extra-item">
                <i className="bi bi-thermometer-half"></i>
                <span id="thermal-sensation">12</span>
              </div>
            </div>
          </div>
        </div>
        <div className="last-update">
          <p id="last-update">Last updated: Monday 16:54</p>
        </div>
      </div>
    </div>
  );
}

export default CardLeft;
