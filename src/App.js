import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AppContainer from "./components/containers/AppContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import BookProfile from "./components/BookProfile";
import Houses from "./components/Houses";
import drawer from "./assets/images/align-justify.svg";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const toggleDrawer = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <div className="container">
      <Router>
        <img
          onClick={toggleDrawer}
          id="drawer-icon"
          src={drawer}
          title="drawer"
        />
        <Sidebar open={toggle} />
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/houses" component={Houses} />
        <Route path="/books/:name" component={BookProfile} />
      </Router>
    </div>
  );
};

export default App;
