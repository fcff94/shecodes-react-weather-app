import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";

function MinMaxTemperature(props) {
	const { data } = props;
	
	const MinMaxElement = (props) => (
		<div className="align-center">
			<Icon
				iconName={props.icon}
				colorClass="light-turquoise"
				customClass="me-1"
			/>
			<Text
				type="p"
				fontSizeClass="large"
				fontWeightClass="w600"
				colorClass="light-turquoise"
				value={props.temp}
				symbol="ºC"
			/>
		</div>
	);

	return (
		<div className="row mt-5 justify-center">
			<div className="col-2 col-lg-4 col-xl-3 justify-center">
				<MinMaxElement
					temp={data.minTemperature}
					icon={"ThermometerExterior"}
				/>
			</div>
			<div className="col-2 col-lg-4 col-xl-3 justify-center">
				<MinMaxElement
					temp={data.maxTemperature}
					icon={"Thermometer"}
				/>
			</div>
		</div>
	);
}

export default MinMaxTemperature;