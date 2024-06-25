import React from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import "./DateAndLocation.css";

export default function DateAndLocation(props) {

	return (
		<div className="row mt-4">
			<div className="col-12 text-center">
				<Text
					type="p"
					fontSizeClass="medium"
					colorClass="white"
					value="Monday, January 15th, 20:35"
					customClass="mb-2"
				/>
				<Text
					type="h2"
					fontSizeClass="large"
					colorClass="white"
					value="Lisbon, PT"
				/>
			</div>
		</div>
	);
}
