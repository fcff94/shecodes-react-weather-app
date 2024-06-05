import React from "react";
import "./DisplayWeather.css";
import AnimatedIcon from "../../atoms/AnimatedIcon/AnimatedIcon";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

export default function DisplayWeather(props) {
	const temperatureValue = (
		<Text type="h1" customClass="w500" value={17} fontSize="45"/>
	);
	const temperatureSymbol = (
		<Text
			type="h1"
			value={`\u00a0${"ºC"}`}
			customClass="w600"
			fontSize="45"
		/>
	);
	const temperatureDisplay = (
		<>
			{temperatureValue}
			{temperatureSymbol}
		</>
	);

	function convertUnits() {}

	return (
		<div>
			<div className="row mt-5 align-center justify-center">
				<div className="col-5 text-center ps-4">
					<AnimatedIcon
						icon="CLEAR_DAY"
						color="#fcffc1"
						size={115}
						animate={true}
					/>
				</div>
				<div className="col-6 pe-4">
					<div className="d-flex justify-content-end mb-2">
						<Button
							type="button"
							btnClass="secondary"
							customClass="d-flex"
							value={temperatureDisplay}
						/>
					</div>
					<Text
						type="h3"
						value="Clear Day"
						fontWeightClass="w400"
						customClass="d-flex justify-content-end"
						onClick={convertUnits}
					/>
				</div>
			</div>
		</div>
	);
}
