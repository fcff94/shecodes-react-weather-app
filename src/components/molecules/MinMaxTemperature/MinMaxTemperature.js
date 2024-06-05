import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";

export default function MinMaxTemperature(props) {
    // Use later
    // const MinMaxComponent = (props) => (
    //     <div className="align-center">
	// 				<Icon
	// 					iconName="ThermometerExterior"
	// 					colorClass="light-turquoise"
	// 					customClass="me-1"
	// 				/>
	// 				<Text
	// 					type="p"
	// 					fontSizeClass="large"
	// 					fontWeightClass="w600"
    //                     colorClass="light-turquoise"
	// 					value="9ºC"
	// 				/>
	// 			</div>
    // );
	return (
		<div className="row mt-5 justify-center">
			<div className="col-3 justify-center">
				<div className="align-center">
					<Icon
						iconName="ThermometerExterior"
						colorClass="light-turquoise"
						customClass="me-1"
					/>
					<Text
						type="p"
						fontSizeClass="large"
						fontWeightClass="w600"
                        colorClass="light-turquoise"
						value="9ºC"
					/>
				</div>
			</div>
			<div className="col-3 justify-center">
				<div className="align-center">
					<Icon
						iconName="Thermometer"
						colorClass="light-turquoise"
						customClass="me-1"
					/>
					<Text
						type="p"
						fontSizeClass="large"
						fontWeightClass="w600"
                        colorClass="light-turquoise"
						value="18ºC"
					/>
				</div>
			</div>
		</div>
	);
}
