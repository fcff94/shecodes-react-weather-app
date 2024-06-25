import React from "react";
import "./WeeklyForecast.css";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";

function WeeklyForecast() {
	// Use later
	// const WeeklyCardComponent = (props) => (
	// 	<div className="card-box weekly-card">
	// 		<span className="date">Tuesday, January 16th</span>

	// 		<Icon iconName="Cloud" colorClass="pink" />

	// 		<span className="temperatures d-inline-flex">
	// 			<span className="min-temperature">10ºC</span>
	// 			<span>&nbsp;/&nbsp;</span>
	// 			<span className="max-temperature">18ºC</span>
	// 		</span>
	// 	</div>
	// );
	
	return (
		<>
			<div className="row weekly-forecast">
				<div className="col-12 mb-3">
					<Text
						type="h2"
						customClass="medium w700 pink"
						value="Weekly Forecast"
					/>
				</div>
				<div className="col-12">
					<div className="card-box weekly-card">
						<span className="date">Tuesday, January 16th</span>

						<Icon iconName="Cloud" colorClass="pink" />

						<span className="temperatures d-inline-flex">
							<span className="min-temperature">10ºC</span>
							<span>&nbsp;/&nbsp;</span>
							<span className="max-temperature">18ºC</span>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default WeeklyForecast;
