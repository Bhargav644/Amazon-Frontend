import React from "react";
import "./Home.css";
import Heading from "../../components/Headings/Headings";
import Image1 from "../../Images/background-image1.jpg";
import Image2 from "../../Images/background-image2.jpg";
import Image3 from "../../Images/background-image3.jpg";
import Image4 from "../../Images/background-image4.jpg";
import Image5 from "../../Images/background-image5.jpg";
import Image6 from "../../Images/background-image6.jpg";
import Image7 from "../../Images/background-image7.jpg";
import Image8 from "../../Images/background-image8.jpg";
import Slider from "../../components/Slider/Slider";
import Offers from "../../components/Offers/Offers";
function Home() {
  const backgroundImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];
  return (
    <div className="home">
      <Heading />
      <div className="home__container">
        <Slider images={backgroundImages} />
      </div>
      <Offers />
    </div>
  );
}

export default Home;
