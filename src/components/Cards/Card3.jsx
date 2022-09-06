import React from "react";
import { Link } from "react-router-dom";

function Card3() {
  return (
    <div className="individual__card3">
      <div className="card3__main__div">
        <p className="card3__heading">
          Sign in for your best
          <br /> experience
        </p>
        <Link to="/login">
          <button className="card3__button">Sign in Securely</button>
        </Link>
      </div>
    </div>
  );
}

export default Card3;
