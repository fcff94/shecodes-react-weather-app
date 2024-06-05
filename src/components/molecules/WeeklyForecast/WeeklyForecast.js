import React from "react";
import "./WeeklyForecast.css";
import Card from "../../atoms/Card/Card";
import Text from "../../atoms/Text/Text";

function WeeklyForecast() {
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
					<div className="card-box">
						<div className="weekly-card">
							<div className="weekly-card-body">
								<span className="date">
									Tuesday, January 16th
								</span>
								<span className="icon-weather-weekly">
									<i className="bi bi-cloud-lightning-rain-fill"></i>
								</span>
								<span className="min-max-temp">
									<span className="weekly-min-temp">10</span>º
									/{" "}
									<span className="weekly-max-temp">18 </span>
									º
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WeeklyForecast;
