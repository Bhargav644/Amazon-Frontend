import React, { useState, useEffect, Fragment } from "react";
import "./Headings.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { baseURL } from "../../config";
import { UserName } from "../Header/Header";
function Inside() {
  const [hdata, setHdata] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/HMenu`)
      .then((res) => {
        res.json().then((data) => {
          setHdata(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="inside__main">
      <Link to="/login">
        <div className="inside__header">
          <AccountCircleIcon style={{ fontSize: "30px" }} />
          <p>Hello, {UserName}</p>
        </div>
      </Link>
      <div className="inside__body">
        {hdata.map((key, index) => {
          if (key.heading) {
            return <h3 key={key.id}>{key.title}</h3>;
          } else if (key.sep) {
            return <hr key={index}></hr>;
          } else {
            return (
              <Fragment key={key.id}>
                <a
                  name={key["title"].replace(/ /g, "+")}
                  href={
                    "/s&k=/" + key["title"].replace("& ", "").replace(/ /g, "+")
                  }
                  className="inside__menu__list"
                >
                  {key["title"]}
                </a>
                <br />
                <br />
                <br />
              </Fragment>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Inside;
