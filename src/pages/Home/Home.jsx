import React from "react";
import "./Home.css";
import Heading from "../../components/Headings/Headings";
import Slider from "../../components/Slider/Slider";
import Cards from "../../components/Cards/Cards";
import { useLocation } from "react-router-dom";
import Deals from "../../components/Deals/Deals";
import Footer from "../../components/Footer/Footer";
function Home() {
  let location = useLocation();
  if (location.pathname === "/address") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
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
      <div className="cards__container">
        <Cards />
      </div>
      <div className="deals__container">
        <Deals />
      </div>
      <div className="footer__container">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
