import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import "./DisplayForecast.css";

const DisplayForecast = (props) => {
	return (
		<div className="row forecast-wrapper">
			<div className="col-12 mb-3">
				<DailyForecast />
			</div>
			<div className="col-12">
				<WeeklyForecast />
			</div>
		</div>
	);
};

export default DisplayForecast;
