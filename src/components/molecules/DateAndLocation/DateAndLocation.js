import React from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import "./DateAndLocation.css";

export default function DateAndLocation(props) {
	const { data } = props;
	const locationString = `${data.city}, ${data.country}`;

	// FORMAT DATE - PUT IN ANOTHER FILE
	if (!data.date) {
		return <p>Data is undefined or null.</p>;
	}

	if (!(data.date instanceof Date)) {
		return <p>Data is not a valid Date object.</p>;
	}
	// Get day of the week, date, month, hours, and minutes
	const dayOfWeek = data.date.toLocaleDateString("en-GB", {
		weekday: "long",
	}); // Long weekday name (e.g., Monday)
	const dayOfMonth = data.date.getDate(); // Day of the month (1-31)
	const month = data.date.toLocaleDateString("en-GB", { month: "long" }); // Long month name (e.g., June)
	let hours = data.date.getHours(); // Hours (0-23)
	let minutes = data.date.getMinutes(); // Minutes (0-59)

	// Ensure hours and minutes are formatted with leading zeros if needed
	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	const formattedDateTime = `${dayOfWeek}, ${dayOfMonth} ${month}, ${hours}:${minutes}`;

	return (
		<div className="row mt-4">
			<div className="col-12 text-center">
				<Text
					type="p"
					fontSizeClass="medium"
					colorClass="white"
					value={formattedDateTime}
					customClass="mb-2"
				/>
				<Text
					type="h2"
					fontSizeClass="large"
					colorClass="white"
					value={locationString}
				/>
			</div>
		</div>
	);
}
