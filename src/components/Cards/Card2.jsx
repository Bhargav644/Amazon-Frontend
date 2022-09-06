import React, { useEffect } from "react";

function Card2(props) {
  let data = props.data;
  useEffect(() => {}, [props.data]);
  return (
    <div className="individual__card">
      <p>{props.data.heading}</p>
      <a
        href={
          process.env.REACT_APP_SEARCH_URL +
          data.heading
            .replace("& ", "")
            .replace("|", "")
            .replace(/ /g, "+")
            .replace(",", "")
            .replace("++", "+")
        }
      >
        <div className="card__images2">
          <div className="card__image__div2">
            <img src={data.image1} alt={data.heading} />
          </div>
        </div>
      </a>
      <footer className="card__footer">
        <a
          href={
            process.env.REACT_APP_SEARCH_URL +
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

export default Card2;
