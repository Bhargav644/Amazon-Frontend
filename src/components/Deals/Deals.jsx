import React, { useState, useEffect } from "react";
function Deals() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("/Deals").then((res) => {
      res.json().then((data) => {
        setdata({});
      });
    });
  }, []);

  return <div>{data.name}</div>;
}

export default Deals;
