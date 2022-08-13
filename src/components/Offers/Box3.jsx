import React from "react";
import "./Offers.css";
function Box3(props) {
  const myImage = "url(" + props.image + ")";
  return (
    <div style={{ backgroundImage: myImage }} className="Box3">
      <p className="heading__movie">{props.heading}</p>
      <p className="name">{props.name}</p>
      <a href="#" className="foot">
        {props.label}
      </a>
    </div>
  );
}

export default Box3;
