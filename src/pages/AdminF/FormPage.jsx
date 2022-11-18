import React, { useState } from "react";
import "./Admin.css";

function FormPage(props) {
  const [credentials, setCredentials] = useState({ user: "", pass: "" });
  function passes(event) {
    event.preventDefault();
    props.login(credentials);
  }
  return (
    <div className="admin__main__box">
      <div className="admin__image">
        <img
          src="https://i.pinimg.com/564x/30/90/a5/3090a53a7379f5eb5ee40faf5377cf2e.jpg"
          alt=""
        />
      </div>
      <div className="admin__main">
        <h2 id="admin__heading">Welcome, Bhargav Sharma</h2>
        <br />
        <form
          autoComplete="off"
          onSubmit={passes}
          className="admin__input__box"
          method="post"
        >
          <input
            placeholder="Username"
            type="text"
            className="admin__input"
            id="adminName"
            name="adminN"
            onChange={(e) => {
              setCredentials({ ...credentials, user: e.target.value });
            }}
            value={credentials["user"]}
          ></input>
          <br />
          <br />
          <input
            placeholder="Password"
            type="password"
            className="admin__input"
            id="adminPassword"
            name="adminP"
            onChange={(e) => {
              setCredentials({ ...credentials, pass: e.target.value });
            }}
            value={credentials["pass"]}
          ></input>
          <br />
          <br />
          <input
            type="submit"
            id="admin__button_id"
            className="admin__button"
            value="Login"
          ></input>
        </form>
      </div>
    </div>
  );
}
export default FormPage;
