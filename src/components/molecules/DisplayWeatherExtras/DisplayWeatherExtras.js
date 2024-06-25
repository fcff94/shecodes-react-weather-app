import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import "./DisplayWeatherExtras.css";

export default function DisplayWeatherExtras(props) {
    const { data } = props;
	const WeatherExtraElement = (props) => (
		<div className="align-center mb-2">
			<Icon iconName={props.icon} colorClass="pink" customClass="me-1" />
			<Text
				type="p"
				fontSizeClass="small"
				fontWeightClass="w600"
				value={props.value}
				symbol={props.symbol}
			/>
		</div>
	);

	return (
		<div className="row weather-extras justify-center mt-5">
			<div className="col-4 col-sm-3 col-lg-4 justify-center">
				<div>
					<WeatherExtraElement value={data.sunrise} icon={"Sunrise"} />
					{/* Should be precipitation  */}
					<WeatherExtraElement value={data.humidity} icon={"Raindrops"} symbol={" %"} />
					<WeatherExtraElement value={data.windSpeed} icon={"StrongWind"} symbol={" Km/h"} />
					
				</div>
			</div>

			<div className="col-4 col-sm-3 col-lg-4 justify-center">
				<div>
					<WeatherExtraElement value={data.sunset} icon={"Sunset"} />
					<WeatherExtraElement value={data.humidity} icon={"Humidity"} symbol={" %"} />
					<WeatherExtraElement value={data.feelsLike} icon={"ThermometerInternal"} symbol={" ºC"} />
				</div>
			</div>
		</div>
	);
}
