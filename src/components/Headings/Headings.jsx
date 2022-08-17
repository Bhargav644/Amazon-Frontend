import React, { useState, useEffect } from "react";
import headerItems from "../../utils/items";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Headings.css";
import { logDOM } from "@testing-library/react";

function Heading() {
  const [headerServices, setheaderServices] = useState({});

  useEffect(() => {
    fetch("/Categories").then((res) => {
      res.json().then((data) => {
        setheaderServices(data);
      });
    });
  }, []);

  return (
    <div className="home__header">
      <div className="home__header--headings">
        <p className="home__headings">
          <a href="#">
            <MenuOutlinedIcon className="home__header--icon" />
          </a>
          <span className="home__unique"> All </span>
        </p>

        {Object.keys(Object.values(headerServices)).map((key) => {
          // console.log(headkey);
          return (
            <a href="#" className="home__headings">
              {headerServices[key]["name"]}
            </a>
          );
        })}
      </div>
      <img
        className="home__header--image"
        alt="err"
        src={require("../../Images/home__headerImage.jpg")}
      />
    </div>
  );
}

export default Heading;
