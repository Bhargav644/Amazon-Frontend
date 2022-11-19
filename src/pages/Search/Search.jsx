import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import SearchComponent from "./SearchComponent";
import { baseURL } from "../../config";
function Search() {
  const path = window.location.pathname;
  const [tag, setTag] = useState(path.replace("/s&k=/", ""));

  const [containers, setContainers] = useState([]);
  const getDataUsingTag = (tag) => {
    axios
      .post(`${baseURL}/Search`, { tag: tag })
      .then((res) => {
        setContainers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setTag(path.replace("/s&k=/", ""));
    getDataUsingTag(tag);
  }, []);
  return containers.length === 0 ? (
    <center style={{ marginTop: "350px" }}>
      <Loader></Loader>
    </center>
  ) : (
    <SearchComponent data={containers} />
  );
}

export default Search;
