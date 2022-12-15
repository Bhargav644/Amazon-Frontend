import React from "react";
let ele;
function Loader() {
  return (
    <div id="loader" style={{ margin: "auto" }}>
      {/* <img src="src\components\Loader\1488.gif" /> */}
      <img
        src="https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a_w200.webp"
        alt="this slowpoke moves"
        width={40}
        height={40}
        id="load"
      />
      {/* {(ele = document.getElementById("load"))} */}{" "}
      {/*//! THis Single line f***** up  */}
    </div>
  );
}
export { ele };
export default Loader;
