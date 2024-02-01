import React from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import DateAndLocation from "../../molecules/DateAndLocation/DateAndLocation";
import DisplayWeather from "../../molecules/DisplayWeather/DisplayWeather"
import Text from "../../atoms/Text/Text";
import "./CardLeft.css";

export default function CardLeft() {
	return (
		<div className="col-12 col-lg-4 card-left card-column">
			<div className="card-content">
				<SearchBar />

				<DateAndLocation />
            <DisplayWeather/>
				<div className="weather-info">
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
