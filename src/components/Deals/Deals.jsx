import React, { useEffect, useState } from "react";
import { mouseOut, mouseOver, moveLeft, moveRight } from "./DealsFunctions";
import "./Deals.css";
import Item from "./Item";
function Deals() {
  const [deals, setDeals] = useState([]);
  const [padd, setPadd] = useState("0");

  useEffect(() => {
    fetch("/Deals")
      .then((res) => {
        res.json().then((data) => {
          setDeals(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {deals.length > 0 && (
        <div className="deals__main">
          <div
            onMouseEnter={mouseOver}
            onMouseLeave={mouseOut}
            className="deals__body"
          >
            <p className="deal__heading">Today's Deals</p>
            <div className="deals__block">
              <div className="deal" id="deals__body_id">
                <a
                  id="side__arrow1"
                  className="side__arrows"
                  onClick={moveLeft}
                >
                  {"<"}
                </a>
                {deals.map((value, index) => {
                  return <Item key={index} data={value} />;
                })}
                <a
                  id="side__arrow2"
                  className="side__arrows"
                  onClick={moveRight}
                >
                  {">"}
                </a>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Deals;
