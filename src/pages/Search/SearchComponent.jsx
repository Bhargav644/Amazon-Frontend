import React from "react";
import "./Search.css";
import Item from "../../components/Item/Item";

function SearchComponent(props) {
  return (
    <div className="searching__div">
      <p>RESULTS</p>
      {props.data.map((value, index) => {
        return (
          props.data[index]["toShow"] && (
            <Item
              key={props.data[index]["id_"]}
              item_data={props.data[index]}
            />
          )
        );
      })}
    </div>
  );
}

export default SearchComponent;
