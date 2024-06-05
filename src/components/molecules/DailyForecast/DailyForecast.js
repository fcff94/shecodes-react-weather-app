import React from "react";
import Text from "../../atoms/Text/Text";
import Slider from "../Slider/Slider";
import "./DailyForecast.css";

function DailyForecast() {
	return (
		<div className="row daily-forecast">
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

			{/* <div className="daily-slider">
        <button type="button" className="scroll-left" id="btn-left">
          <i className="bi bi-chevron-left"></i>
        </button>
        <div className="daily-slides" id="daily-forecast">
          <div className="daily-slide">
            <span className="hour">3:00</span>
            <span className="icon-weather-hourly">
              <i className="bi bi-cloud-lightning-rain-fill"></i>
            </span>
            <span className="temperature">
              <span className="daily-temp">16</span>º
            </span>
          </div>
        </div>
        <button type="button" className="scroll-right" id="btn-right">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div> */}
		</div>
	);
}

export default DailyForecast;
