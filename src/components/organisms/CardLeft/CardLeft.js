import React from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import DateAndLocation from "../../molecules/DateAndLocation/DateAndLocation";
import DisplayWeather from "../../molecules/DisplayWeather/DisplayWeather";
import DisplayWeatherExtras from "../../molecules/DisplayWeatherExtras/DisplayWeatherExtras";
import MinMaxTemperature from "../../molecules/MinMaxTemperature/MinMaxTemperature";
import "./CardLeft.css";
import Text from "../../atoms/Text/Text";

export default function CardLeft() {
	return (
		<div className="col-12 col-lg-4 card-left card-column">
			<div className="card-content">
				<SearchBar />
				<DateAndLocation />
				<DisplayWeather />
				<MinMaxTemperature/>
				<DisplayWeatherExtras />
				
				<Text 
				type="p"
				customClass="my-3 justify-center"
				fontSizeClass="x-small"
				colorClass="light-turquoise"
				value="Last updated: Monday 16:54"/>
			</div>
		</div>
	);
}
