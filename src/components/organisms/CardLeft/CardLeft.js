import React from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import DateAndLocation from "../../molecules/DateAndLocation/DateAndLocation";
import DisplayWeather from "../../molecules/DisplayWeather/DisplayWeather";
import DisplayWeatherExtras from "../../molecules/DisplayWeatherExtras/DisplayWeatherExtras";
import MinMaxTemperature from "../../molecules/MinMaxTemperature/MinMaxTemperature";
import "./CardLeft.css";
import Text from "../../atoms/Text/Text";

export default function CardLeft(props) {
	console.log(props.data);
	return (
		<div className="col-12 col-lg-4 card-left card-column">
			<div className="card-content">
				<SearchBar setCity={props.setCity} />
				<DateAndLocation data={props.data} />
				<DisplayWeather data={props.data} />
				<MinMaxTemperature data={props.data}/>
				<DisplayWeatherExtras data={props.data} />
				
				<Text 
				type="p"
				customClass="my-3 justify-center x-small light-turquoise"
				value="Last updated: Monday 16:54"/>
			</div>
		</div>
	);
}
