import React from "react";
import "./Item.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
function Item(props) {
  var ratings = props.item_data["ratings"];
  var stars = [];
  for (var i = 0; i < 5; i++) {
    if (ratings >= 1) {
      stars.push(1);
    } else if (ratings >= 0.5) {
      stars.push(0);
    } else {
      stars.push(-1);
    }
    ratings = ratings - 1;
  }
  return (
    <div className="item_container">
      <div className="image_container">
        <img src={props.item_data["image"]} alt="" />
      </div>
      <div className="data_container">
        <div className="data__heading">
          <span className="data__title hover__class">
            {props.item_data["title"]}
          </span>
          <span className="ellipsis">...</span>
        </div>
        <div className="items__ratings">
          {stars.map((value, index) => {
            if (value === 1) {
              return <StarIcon className="item__star" key={index} />;
            } else if (value === 0) {
              return <StarBorderIcon className="item__star" key={index} />;
            } else {
              return <StarOutlineIcon className="item__star" key={index} />;
            }
          })}
          <span className="item__total__ratings hover__class">
            {props.item_data["total_ratings"]}
          </span>
        </div>
        <div className="item__price">
          <span className="item__price__after">
            <span className="rupee">₹</span>
            {props.item_data["price"]}
          </span>
          <span className="item__real__price price__font">
            {props.item_data["hidden_price"]}
          </span>
          <span className="item__discount__card price__font">
            {props.item_data["discount"]}
          </span>
        </div>
        <div className="item__offer price__font">
          {props.item_data["offer"]}
        </div>

        <div className="item__arrival">
          <img
            width="60"
            height="20"
            src={require("../../Images/prime.png")}
            alt=""
          />
          <span className="arrival__text">
            Get it by{" "}
            <span className="exact__arrival">{props.item_data["getIt"]}</span>
          </span>
          <p>FREE Delivery by Amazon</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
