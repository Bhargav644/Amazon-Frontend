import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import headerServices from "../../utils/services";
import { focus, blur } from "./functions";

function Header() {
  return (
    <nav className="header">
      <div className="header__responsive">
        <Link to="/" class="header__option">
          <img
            className="header__logo header__boxes"
            src={require("../../Images/logo.png")}
            alt="Logo"
          />
        </Link>
        {/* for responsiveness */}
        <Link to="/checkout" className="header__option header__response">
          <div className="header__cart header__boxes ">
            <ShoppingCartOutlinedIcon />
            <div className="header__inside">
              <span className="header__option1 bascket__count"> 0 </span> <br />
              <span className="header__option2"> Cart </span>
            </div>
          </div>
        </Link>
        {/* for responsiveness */}
      </div>
      <Link to="/address" class="header__option">
        <div className="header__address header__boxes header__hide">
          <LocationOnOutlinedIcon className="header__address--icon" />
          <div className="header__inside">
            <span className="header__option1" id="span1">
              Hello
            </span>
            <br />
            <span className="header__option2" id="span2">
              Select Your Address
            </span>
          </div>
        </div>
      </Link>
      <div className="header__search">
        <select id="here" className="header__select">
          {headerServices &&
            headerServices.map((service, index) => <option>{service}</option>)}
        </select>
        <input
          autoComplete="off"
          id="input"
          type="text"
          className="header__searchinput"
          onFocus={focus}
          onBlur={blur}
        />
        <SearchIcon id="icon" className="header__search--icon" />
      </div>
      <div className="header__navbar">
        <div className="header__boxes header__hide header__fun">
          <img alt="err" src={require("../../Images/flag.png")} />
        </div>
        <Link to="/login" className="header__option">
          <div className="header__login header__boxes header__hide">
            <span className="header__option1"> Hello, Sign in </span> <br />
            <span className="header__option2"> Accounts & Lists </span>
          </div>
        </Link>
        <Link to="/orders" className="header__option">
          <div className="header__orders header__boxes header__hide">
            <span className="header__option1"> Returns </span> <br />
            <span className="header__option2"> & Orders </span>
          </div>
        </Link>
        <Link to="/checkout" className="header__option">
          <div className="header__cart header__boxes header__hide">
            <ShoppingCartOutlinedIcon />
            <div className="header__inside">
              <span className="header__option1 bascket__count"> 0 </span> <br />
              <span className="header__option2"> Cart </span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
