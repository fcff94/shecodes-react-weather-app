import React from "react";
import "./DisplayWeather.css";
import AnimatedIcon from "../../atoms/AnimatedIcon/AnimatedIcon";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

export default function DisplayWeather(props) {
	const { data } = props;
	const temperatureValue = (
		<Text type="h1" customClass="w500" value={data.temperature} fontSize="45" />
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
			<div className="displayWeather row mt-5  align-center justify-center">
				<div className="col-12 col-sm-4 col-lg-5 col-xl-6 text-center p-0 ps-sm-4 mb-3 mb-sm-0">
					<AnimatedIcon
						icon="CLEAR_DAY"
						color="#fcffc1"
						size={115}
						animate={true}
					/>
				</div>
				<div className="col-12 col-sm-4 col-lg-7 col-xl-6 justify-center p-0 pe-sm-4">
					<div className="text-center text-sm-start">
						<div className="mb-2">
							<Button
								type="button"
								btnClass="secondary"
								customClass="d-flex"
								value={temperatureDisplay}
							/>
						</div>
						<Text
							type="h4"
							customClass="capitalize"
							value={data.weatherDescription}
							fontWeightClass="w400"
							onClick={convertUnits}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
