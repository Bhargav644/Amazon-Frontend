import React, { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Side from "./Side";
import "./Headings.css";
import { baseURL } from "../../config";
function Heading() {
  const [headerServices, setheaderServices] = useState({});
  const [navImage, setnavImage] = useState("");
  const [Clicked, setClicked] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  function adjust() {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
    // setDis("block");
  }

  const fetchData = () => {
    fetch(`${baseURL}/Categories`)
      .then((res) => {
        res.json().then((data) => {
          setheaderServices(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`${baseURL}/nav-image`)
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
      {/* <Link to="/">
        <div style={{ display: dis }} className="background__mask"></div>
      </Link> */}
      <Side clicked={Clicked} />
      <div className="home__header--headings">
        <a
          onClick={adjust}
          id="specific__heading"
          href="#"
          className="home__headings"
        >
          <MenuOutlinedIcon className="home__header--icon" />
          <span className="home__unique"> All </span>
        </a>

        {Array.from(headerServices).map((key, index) => {
          return (
            <a
              key={key["id_"]}
              name={key["name"].replace(/ /g, "+")}
              href={"/s&k=/" + key["name"].replace("& ", "").replace(/ /g, "+")}
              className="home__headings"
            >
              {key["name"]}
            </a>
          );
        })}
      </div>
      {navImage !== "" && (
        <img className="home__header--image" alt="err" src={navImage} />
      )}
    </div>
  );
}

export default Heading;
