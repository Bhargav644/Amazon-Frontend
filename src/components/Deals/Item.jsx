import React from "react";
import "./Deals.css";
function Item(props) {
  let data = props.data;
  return (
    <div className="item__main">
      <a
        href={
          "/s&k=/" +
          data["name"]
            .replace("& ", "")
            .replace("|", "")
            .replace(/ /g, "+")
            .replace(",", "")
            .replace("++", "+")
        }
      >
        <div className="item__image">
          <img src={data.image} />
        </div>
        <p className="item__deal">
          <span className="item__discount">
            Up to{" "}
            {data.discount.length <= 2
              ? data.discount + "%"
              : "₹" + data.discount}
            &nbsp;off
          </span>
          &nbsp; Deal of the day
        </p>
        {/* <p className="item__name">{data.name}</p> */}
      </a>
    </div>
  );
}

export default Item;
