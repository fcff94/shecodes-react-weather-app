import React from "react";
import "./SliderUnit.css";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";

const SliderUnit = (props) => {
	
	return (
		<>
			<div className="slider-unit">
				<Text
					type="span"
					customClass="small w500 turquoise"
					value={"3:00"}
				/>
				<Icon iconName="Cloud" colorClass="pink" />

				<Text type="span" customClass="small w500 turquoise" value={"16"} symbol="º"/>
			</div>
		</>
	);
};

export default SliderUnit;
