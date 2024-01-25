import React from "react";
import ColumnLeft from "../columnLeft/ColumnLeft";
import ColumnRight from "../columnRight/ColumnRight";

function MainCard() {
  return (
    <>
    <div class="weather-container">
      <div class="card-wrapper">
        <div class="card-weather">
          <div class="card-row">
            <ColumnLeft />
            <ColumnRight />
          </div>
        </div>
      </div>
     Coded by <a href="https://github.com/fcff94" target="_blank" rel="noreferrer">Carolina Freitas</a>
    </div>
    </>
  );
}

export default MainCard;
