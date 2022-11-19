import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { Fragment } from "react";
import Address from "./pages/Address/Address";
import AdminF from "./pages/AdminF/Admin";
import Error from "../src/pages/Error/Error";
import Search from "./pages/Search/Search";
import Heading from "./components/Headings/Headings";
function App() {
  return (
    <Router>
      <Routes>
        {/* route for home page */}
        <Route
          path="/"
          exact
          element={
            <Fragment>
              <Header /> <Home />
            </Fragment>
          }
        />
        {/* route for address page */}
        <Route
          path="/address"
          exact
          element={
            <Fragment>
              <Header /> <Home /> <Address />
            </Fragment>
          }
        />
        {/* route for login page */}
        <Route
          path="/login"
          exact
          element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          }
        />
        {/* route for admin page */}
        <Route
          path="/admin"
          exact
          element={
            <Fragment>
              <AdminF />
            </Fragment>
          }
        />
        <Route
          path="/s&k=/*"
          element={
            <Fragment>
              <Header />
              <Heading />
              <Search />
            </Fragment>
          }
        />
        <Route
          path="*"
          element={
            <Fragment>
              <Error />
            </Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
