import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Headings.css";
import CloseIcon from "@mui/icons-material/Close";
import Inside from "./Inside";
function Side(props) {
  const [move, setMove] = useState(-100);
  const [dis, setDis] = useState("none");
  const [dis2, setDis2] = useState("none");
  useEffect(() => {
    if (props.clicked === true) {
      adjust();
      setDis2("block");
      setTimeout(() => {
        setDis("block", (document.body.style.overflow = "hidden"));
      }, 300);
    }
  }, [props.clicked]);

  function adjust() {
    setMove(0);
  }
  function close() {
    setMove(-100);
    setDis("none", (document.body.style.overflow = "auto"));
    setDis2("none");
  }
  return (
    <>
      <Link onClick={close} to="/">
        <div style={{ display: dis2 }} className="background__mask"></div>
      </Link>
      <div
        className="left__view"
        style={{ transform: "translateX(" + move + "%)" }}
      >
        <a
          className="close__icon"
          href="#"
          style={{ display: dis }}
          onClick={close}
        >
          <CloseIcon id="CloseIcon" />
        </a>
        <Inside />
      </div>
    </>
  );
}

export default Side;
