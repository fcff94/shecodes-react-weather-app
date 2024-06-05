import React from "react";
import { WiNightClear, WiDaySunny, WiDayWindy, WiDayCloudy, WiNightAltCloudy, WiCloud, WiSleet, WiSnow, WiThunderstorm, WiCloudy, WiStrongWind, WiRaindrops, WiSunset, WiSunrise, WiHumidity, WiThermometerInternal, WiThermometerExterior, WiThermometer, WiRain, } from "weather-icons-react";

const WeatherIcons = {
	NightClear: WiNightClear,
	DaySunny: WiDaySunny,
	DayWindy: WiDayWindy,
	DayCloudy: WiDayCloudy,
	NightAltCloudy: WiNightAltCloudy,
	Cloud: WiCloud,
	Rain: WiRain,
	Sleet: WiSleet,
	Snow: WiSnow,
	Thunderstorm: WiThunderstorm,
	Cloudy: WiCloudy,
	// Weather extras
	StrongWind: WiStrongWind,
	Raindrops: WiRaindrops,
	Sunset: WiSunset,
	Sunrise: WiSunrise,
	Humidity: WiHumidity,
	ThermometerInternal: WiThermometerInternal,
	// Min-max temperature
	ThermometerExterior: WiThermometerExterior,
	Thermometer: WiThermometer
}

export default function Icon(props) {
	const {iconName} = props;
	const WeatherIcon = WeatherIcons[iconName];
	return (
		<>
		<WeatherIcon size={props.size || 24} className={`customIcon ${props.customClass || ""} ${props.colorClass || "white"}`} color={props.color || ""}/>
		{/* {WeatherIcon && <WeatherIcon size={24} color="#000"/>} */}
			{/* {React.createElement(IconElement, { size: 24, color: "#000" })} */}
			{/* <IconElement size={24} color="#000"/> */}
		</>
	);
}