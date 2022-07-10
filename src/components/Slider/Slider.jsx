import React, { useEffect, useState } from "react";
import "./Slider.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  //   when  we recieve change in index and image then this useEffect will be called
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="slider">
      <div className="slider__centre">
        {images.map((image, imageIndex) => {
          let nameOfClass = "nextSlide";
          if (imageIndex === index) {
            nameOfClass = "activeSlide";
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === images.length - 1)
          ) {
            nameOfClass = "lastSlide";
          }
          return (
            <article className={nameOfClass} key={imageIndex}>
              <img src={image} alt="image" className="slider__image" />
            </article>
          );
        })}
        <a
          href="#"
          className="slider__prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <ArrowBackIosNewOutlinedIcon />
        </a>
        <a
          href="#"
          className="slider__next"
          onClick={() => setIndex(index + 1)}
        >
          <ArrowForwardIosOutlinedIcon />
        </a>
      </div>
    </div>
  );
};

export default Slider;
