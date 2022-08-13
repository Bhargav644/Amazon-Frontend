import React from "react";
import "./Offers.css";
import { ourOffers } from "../../utils/services";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
function Offers() {
  return (
    <div className="offers__main">
      <div className="offers__main--line1">
        {Object.keys(ourOffers).map((key, value) => {
          if (Object.keys(ourOffers[key]).length > 4) {
            return (
              /**each offer box here */
              <div className="offers__box">
                <h2 className="heading">{ourOffers[key]["heading"]}</h2>
                <br />
                <div className="offers__images">
                  <Box1
                    image={ourOffers[key]["image1"]}
                    label={ourOffers[key]["label1"]}
                  />
                  <Box1
                    image={ourOffers[key]["image2"]}
                    label={ourOffers[key]["label2"]}
                  />
                  <Box1
                    image={ourOffers[key]["image3"]}
                    label={ourOffers[key]["label3"]}
                  />
                  <Box1
                    image={ourOffers[key]["image4"]}
                    label={ourOffers[key]["label4"]}
                  />
                  <a className="offers__link" href="#">
                    See More
                  </a>
                </div>
              </div>
            );
          } else if (Object.keys(ourOffers[key]).length > 2) {
            return (
              <Box3
                heading={ourOffers[key]["heading"]}
                image={ourOffers[key]["image"]}
                label={ourOffers[key]["text"]}
                name={ourOffers[key]["name"]}
              />
            );
          } else {
            return (
              <div className="offers__box">
                <h2 className="heading">{ourOffers[key]["heading"]}</h2>
                <br />
                <Box2 image={ourOffers[key]["image1"]} />
              </div>
            );
          }
        })}
      </div>
      <div className="offers__main--line2"></div>
    </div>
  );
}

export default Offers;
