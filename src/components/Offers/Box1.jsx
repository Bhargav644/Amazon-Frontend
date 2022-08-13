import React from "react";
import "./Offers.css";
function Box1(props) {
  return (
    <div className="Box1">
      <img className="offer__image" src={props.image} alt="" />
      <p className="offer__span">{props.label}</p>
    </div>
  );
}

export default Box1;
