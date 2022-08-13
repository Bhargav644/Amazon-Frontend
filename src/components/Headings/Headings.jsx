import React from "react";
import headerItems from "../../utils/items";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Headings.css";

function Heading() {
  return (
    <div className="home__header">
      <div className="home__header--headings">
        <p className="home__headings">
          <MenuOutlinedIcon className="home__header--icon" />
          <span className="home__unique"> All </span>
        </p>
        {headerItems &&
          headerItems.map((item, index) => {
            return index < 2 ? (
              <p className="home__headings"> {item} </p>
            ) : (
              <p className="home__headings to__hide"> {item} </p>
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
