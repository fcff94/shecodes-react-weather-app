import React from "react";
import Text from "../../atoms/Text/Text";
import Slider from "../Slider/Slider";
import "./DailyForecast.css";

function DailyForecast() {
	return (
		<div className="row daily-forecast mb-3">
			<div className="col-12 mb-3">
				<Text
					type="h2"
					customClass="medium w700 pink"
					value="Daily Forecast"
				/>
			</div>
			<div className="col-12">
				<div className="card-box">
					<Slider />
				</div>
			</div>
		</div>
	);
}

export default DailyForecast;
