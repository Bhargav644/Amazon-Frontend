import React from "react";
import "./Home.css";
import Heading from "../../components/Headings/Headings";
import Slider from "../../components/Slider/Slider";
// import Offers from "../../components/Offers/Offers";
// import Deals from "../../components/Deals/Deals";
function Home() {
  return (
    <div className="home">
      <Heading />
      <div className="home__container">
        <a
          href={process.env.REACT_APP_SEARCH_URL + "mechanical+keyboard"}
          className="image__link"
        >
          <Slider />
        </a>
      </div>
      <div className="offers__container">
        {/* <Offers></Offers>
        <Deals></Deals> */}
      </div>
    </div>
  );
}

export default Home;
