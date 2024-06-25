import React from "react";
import { useState, useEffect } from "react";
import CardLeft from "../../organisms/CardLeft/CardLeft";
import CardRight from "../../organisms/CardRight/CardRight";
import "./MainCard.css";
import apiService from "../../../services/apiService";
import MinMaxTemperature from "../../molecules/MinMaxTemperature/MinMaxTemperature";

function MainCard() {
	const [weatherData, setWeatherData] = useState({});
	const [city, setCity] = useState('Tokyo');
	const [loading, isLoading] = useState(false);

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const response = await apiService.get('weather', {
					params: {
						q: city,
					},
				});
				console.log('resp', response.data);
				handleResponse(response.data);
			} catch (error) {
				console.error('Error fetching the weather data', error);
			}
		}

		fetchWeatherData();
	}, [city]);
	
	function handleResponse(response) {
		setWeatherData({
			longitude: response.coord.lon,
			latitude: response.coord.lat,
			date: new Date(response.dt * 1000),
			feelsLike: Math.round(response.main.feels_like),
			humidity: Math.round(response.main.humidity),
			temperature: Math.round(response.main.temp),
			maxTemperature: Math.round(response.main.temp_max),
			minTemperature: Math.round(response.main.temp_min),
			
			city: response.name,
			country: response.sys.country,
			sunrise: response.sys.sunrise,
			sunset: response.sys.sunset,

			weatherDescription: response.weather[0].description,
			iconCode: response.weather[0].icon,
			iconId: response.weather[0].id,

			windSpeed: Math.round(response.wind.speed)
		});

		
	}

	return (
		<>
			<div className="container card-container">
				<div className="row">
					<CardLeft data={weatherData} setCity={setCity} />
					<CardRight />
				</div>

				<div className="row">
					<div className="col-12 text-center">
						Open-source code by{" "}
						<a
							href="https://github.com/fcff94"
							target="_blank"
							rel="noreferrer"
						>
							Carolina Freitas
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainCard;
