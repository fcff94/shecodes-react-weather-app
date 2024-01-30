import React from "react";
import CardLeft from "../../organisms/CardLeft/CardLeft";
import CardRight from "../../organisms/CardRight/CardRight";

function MainCard() {
  return (
    <>
    <div className="container">
      <div className="card-wrapper">
        <div className="card-weather">
          <div className="card-row">
            <CardLeft />
            <CardRight />
          </div>
        </div>
      </div>
     Coded by <a href="https://github.com/fcff94" target="_blank" rel="noreferrer">Carolina Freitas</a>
    </div>
    </>
  );
}

export default MainCard;
