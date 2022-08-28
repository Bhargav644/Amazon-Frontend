import React, { useEffect, useState, ImgHTMLAttributes } from "react";
import "./Slider.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [BGImages, setBGImages] = useState([]);
  //   when  we recieve change in index and image then this useEffect will be called

  useEffect(() => {
    fetch("/BackgroundImages")
      .then((res) => {
        res.json().then((data) => {
          setBGImages(Object.values(data));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const lastIndex = BGImages.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

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
        {BGImages.map((image, imageIndex) => {
          let nameOfClass = "nextSlide";
          if (imageIndex === index) {
            nameOfClass = "activeSlide";
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === BGImages.length - 1)
          ) {
            nameOfClass = "lastSlide";
          }
          return (
            <section className={nameOfClass} key={imageIndex}>
              <img src={image} alt="image" className="slider__image" />
            </section>
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
