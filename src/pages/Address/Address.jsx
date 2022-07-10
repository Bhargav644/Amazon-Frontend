import React from "react";
import { Link } from "react-router-dom";
import "./Address.css";
import getLocation from "./functions";
function Address() {
  return (
    <div className="address__main">
      <div className="background__mask"></div>
      <div className="main">
        <header className="main__header">
          <p className="header__text">Choose your location</p>{" "}
        </header>
        <div className="main__body">
          <p className="main__text1">
            Select a delivery location to see product availability and delivery
            options
          </p>
          <Link to="/login">
            <button class="login__button ">
              Sign in to see your addresses
            </button>
          </Link>
          <div className="main__middle">
            <hr />
            <span className="main__text2">or enter an Indian pincode</span>
            <hr />
          </div>
          <section className="main__footer">
            <input
              autocomplete="off"
              id="get"
              type="digits"
              className="main__input"
            />
            <Link to="/">
              <button onClick={getLocation} className="apply__button">
                Apply
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Address;
