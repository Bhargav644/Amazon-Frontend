import React from "react";
import "./Admin.css";
import axios from "axios";
import { baseURL } from "../../config";
function Absence() {
  const tweeks = ["Categories", "nav-image", "Deals", "Footer"];

  const update = () => {
    tweeks.map((value, index) => {
      axios
        .post(`${baseURL}/` + value, {})
        .then((res) => {
          console.log(value + " Updated");
        })
        .catch((err) => {
          console.log(err);
        });
      return {};
    });
  };
  const updateCards = () => {
    axios
      .post(`${baseURL}/Cards`, {})
      .then((res) => {
        console.log("Cards Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateBG = () => {
    axios
      .post(`${baseURL}/BackgroundImages`, {})
      .then((res) => {
        console.log("Background Images Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="absence">
      <div className="absence__main">
        <h2>All is well!</h2>
        <input
          type="submit"
          onClick={update}
          className="absence__button"
          value="Update All"
        />
        <br />
        <br />
        <input
          type="submit"
          onClick={updateCards}
          className="absence__button"
          value="Update Cards"
        />
        <br />
        <br />
        <input
          type="submit"
          onClick={updateBG}
          className="absence__button"
          value="Update BGImage"
        />
      </div>
    </div>
  );
}

export default Absence;
