import React from "react";
import "./footer.css";
function Foot(props) {
  const { list, heading } = props;
  return (
    <div className="main__foot">
      <div className="foot__heading">{heading}</div>

      <div className="foot__items">
        <ul className="foot__unordered__list">
          {list.map((value, index) => {
            return (
              <li className="foot__list__item" key={index}>
                <a href="#">{value}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Foot;
