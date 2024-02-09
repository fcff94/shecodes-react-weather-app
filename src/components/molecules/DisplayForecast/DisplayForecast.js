import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import "./DisplayForecast.css";

const DisplayForecast = (props) => {
	return (
		<div className="forecast-wrapper">
			<DailyForecast />
			<WeeklyForecast />
		</div>
	);
}

export default DisplayForecast;
