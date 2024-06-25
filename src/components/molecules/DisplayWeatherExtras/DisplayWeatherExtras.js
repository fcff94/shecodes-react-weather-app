import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import "./DisplayWeatherExtras.css";

export default function DisplayWeatherExtras(props) {
    // Use later 
	// const WeatherExtraComponent = (props) => (
	// 	<div className="align-center mb-2">
	// 		<Icon iconName="Sunrise" colorClass="pink" customClass="me-1" />
	// 		<Text
	// 			type="p"
	// 			fontSizeClass="small"
	// 			fontWeightClass="w600"
	// 			value="07:00"
	// 		/>
	// 	</div>
	// );

	return (
		<div className="row weather-extras justify-center mt-5">
			<div className="col-4 col-sm-3 col-lg-4 justify-center">
				<div>
					<div className="align-center mb-2">
						<Icon
							iconName="Sunrise"
							colorClass="pink"
							customClass="me-1"
						/>
						<Text
							type="p"
							fontSizeClass="small"
							fontWeightClass="w600"
							value="07:00"
						/>
					</div>

					<div className="align-center mb-2">
						<Icon
							iconName="Raindrops"
							colorClass="pink"
							customClass="me-1"
						/>
						<Text
							type="p"
							fontSizeClass="small"
							fontWeightClass="w600"
							value="46%"
						/>
					</div>

					<div className="align-center mb-2">
						<Icon
							iconName="StrongWind"
							colorClass="pink"
							customClass="me-1"
						/>
						<Text
							type="p"
							fontSizeClass="small"
							fontWeightClass="w600"
							value="10Km/h"
						/>
					</div>
				</div>
			</div>

			<div className="col-4 col-sm-3 col-lg-4 justify-center">
				<div>
					
					<div className="align-center mb-2">
						<Icon
							iconName="Sunset"
							colorClass="pink"
							customClass="me-1"
						/>
						<Text
							type="p"
							fontSizeClass="small"
							fontWeightClass="w600"
							value="18:00"
						/>
					</div>

					
					<div className="align-center mb-2">
						<Icon
							iconName="Humidity"
							colorClass="pink"
							customClass="me-1"
						/>
						<Text
							type="p"
							fontSizeClass="small"
							fontWeightClass="w600"
							value="68%"
						/>
					</div>

					
					<div className="align-center mb-2">
						<Icon
							iconName="ThermometerInternal"
							colorClass="pink"
							customClass="me-1"
						/>
						<Text
							type="p"
							fontSizeClass="small"
							fontWeightClass="w600"
							value="14ºC"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
