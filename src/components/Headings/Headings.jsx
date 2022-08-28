import React, { useState, useEffect } from "react";
import headerItems from "../../utils/items";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Headings.css";
import { logDOM } from "@testing-library/react";

function Heading() {
  const [headerServices, setheaderServices] = useState({});
  const [navImage, setnavImage] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/Categories")
      .then((res) => {
        res.json().then((data) => {
          setheaderServices(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("/nav-image")
      .then((res) => {
        res.json().then((data) => {
          setnavImage(data["image"]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="home__header">
      <div className="home__header--headings">
        <a href="#" className="home__headings">
          <MenuOutlinedIcon className="home__header--icon" />
          <span className="home__unique"> All </span>
        </a>

        {Array.from(headerServices).map((key, index) => {
          return (
            <a
              key={key["id_"]}
              name={key["name"].replace(/ /g, "+")}
              href={
                process.env.REACT_APP_SEARCH_URL +
                key["name"].replace("& ", "").replace(/ /g, "+")
              }
              className="home__headings"
            >
              {key["name"]}
            </a>
          );
        })}
      </div>
      <img className="home__header--image" alt="err" src={navImage} />
    </div>
  );
}

export default Heading;
