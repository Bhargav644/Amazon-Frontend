import React, { useState, useEffect } from "react";
import "./CardsStyle.css";
import Loader from "../Loader/Loader";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
function Cards() {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch("/Cards")
      .then((res) => {
        res.json().then((data) => {
          setDetail(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="cards__main">
        {detail.length > 0 ? (
          detail.map((value, index) => {
            if (Object.keys(value).length == 1) {
              return <Card3 key={index} />;
            }
            return Object.keys(value).length > 4 ? (
              <Card1 key={value.id_} data={value}>
                {(document.body.style.background = "transparent")}
              </Card1>
            ) : (
              <Card2 key={value.id_} data={value}>
                {(document.body.style.background = "transparent")}
              </Card2>
            );
          })
        ) : (
          <Loader>
            {(document.body.style.background = "rgb(219,219,219)")}
          </Loader>
        )}
      </div>
    </>
  );
}

export default Cards;
