import React from "react";
import "./Offers.css";
function Box2(props) {
  return (
    <div className="Box2">
      <img className="offer__image" src={props.image} alt="" />
      <a className="offers__link" href="#">
        See More
      </a>
    </div>
  );
}

export default Box2;
