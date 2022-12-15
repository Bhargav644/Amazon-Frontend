import React, { useEffect } from "react";
import "./CardsStyle.css";
function Card(props) {
  let data = props.data;
  useEffect(() => {}, [props.data]);
  return (
    <div className="individual__card">
      <p>{props.data.heading}</p>
      <a
        href={
          "/s&k=/" +
          data.heading
            .replace("& ", "")
            .replace("|", "")
            .replace(/ /g, "+")
            .replace(",", "")
            .replace("++", "+")
            .replace("%", "")
        }
      >
        <div className="card__images">
          <div className="card__image__div">
            <img src={data.image1} alt={data.heading} />
            <span className="card__label">{data.label1}</span>
          </div>
          <div className="card__image__div">
            <img src={data.image2} alt={data.heading} />
            <span className="card__label">{data.label2}</span>
          </div>
          <div className="card__image__div">
            <img src={data.image3} alt={data.heading} />
            <span className="card__label">{data.label3}</span>
          </div>
          <div className="card__image__div">
            <img src={data.image4} alt={data.heading} />
            <span className="card__label">{data.label4}</span>
          </div>
        </div>
      </a>

      <footer className="card__footer">
        <a
          href={
            "/s&k=/" +
            data["heading"]
              .replace("& ", "")
              .replace("|", "")
              .replace(/ /g, "+")
              .replace(",", "")
              .replace("++", "+")
          }
        >
          {data.footer}
        </a>
      </footer>
    </div>
  );
}

export default Card;
