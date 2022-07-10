import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { Fragment } from "react";
import Address from "./pages/Address/Address";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Fragment>
              <Header /> <Home />
            </Fragment>
          }
        />{" "}
        <Route
          path="/address"
          exact
          element={
            <Fragment>
              <Header /> <Home /> <Address />
            </Fragment>
          }
        />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
