import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonTab.css";

function ButtonTab(props) {
	const [isHovered, setIsHovered] = useState(false);
	const [isFavorite, setIsFavorite] = useState(props.isFavorite || false);
	const [isActive, setIsActive] = useState(props.isActive || false);

	function addFavorite(e) {
		setIsFavorite(!isFavorite);
	}

	function handleHover() {
		setIsHovered(!isHovered);
	}

	return (
		<button
			className={`buttonTab nav-link ${props.customClass || ""} ${
				props.isActive ? "active" : ""
			}`}
			id={`${props.targetPane}-tab`}
			data-bs-toggle="tab"
			data-bs-target={`#${props.targetPane}`}
			type="button"
			role="tab"
			aria-controls={`${props.targetPane}`}
			aria-selected={`${props.isActive}`}
		>
			{props.value}
			<FontAwesomeIcon
				icon={`${isFavorite || isHovered ? "fas" : "far"} fa-star`}
				className="favorite-city"
				onClick={addFavorite}
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
			/>
		</button>
	);
}

export default ButtonTab;
