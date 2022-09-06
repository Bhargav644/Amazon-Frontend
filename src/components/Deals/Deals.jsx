import React, { useEffect, useState } from "react";
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
          <div className="deals__body">
            <p className="deal__heading">Today's Deals</p>
            <div className="deal">
              {deals.map((value, index) => {
                return <Item key={index} data={value} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Deals;
