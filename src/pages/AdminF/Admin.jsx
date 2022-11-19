import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import FormPage from "./FormPage";
import Absence from "./Absence";
import { baseURL } from "../../config";
function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {}, [authenticated]);

  //login works here
  function login(credentials) {
    axios
      .post(`${baseURL}/Cred`, credentials)
      .then((res) => {
        if (!res["data"]["authentication"]) {
          alert("Credentials are not correct,Are u really Admin");
        }
        setAuthenticated(res["data"]["authentication"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return authenticated ? <Absence /> : <FormPage login={login} />;
}

export default Admin;
