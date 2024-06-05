import React from "react";
import ButtonTab from "../../atoms/ButtonTab/ButtonTab";
import TabPane from "../../atoms/TabPane/TabPane";
import DisplayForecast from "../../molecules/DisplayForecast/DisplayForecast";
import "./CardRight.css";

function CardRight() {
   const tabPaneContent = <DisplayForecast />;

	return (
		<div className="col-12 col-lg-8 card-column card-right">
			<nav>
				<div className="nav nav-tabs mb-4" id="nav-tab" role="tablist">
               <ButtonTab targetPane="city1" value="Lisbon" isActive />
               <ButtonTab targetPane="city2" value="Paris" isFavorite />
				</div>
			</nav>

			<div className="tab-content" id="nav-tabContent">
            <TabPane idPane="city1" tabContent={tabPaneContent} isActive />
            <TabPane idPane="city2" tabContent={tabPaneContent} />
			</div>
		</div>
	);
}

export default CardRight;
