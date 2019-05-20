import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AppContainer from "./components/containers/AppContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import BookProfile from "./components/BookProfile";
import LordProfile from "./components/LordProfile";
import MembersProfile from "./components/MembersProfile";
import Houses from "./components/Houses";
import drawer from "./assets/images/align-justify.svg";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const toggleDrawer = () => {
    setToggle(!toggle);
  };
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
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/houses" component={Houses} />
        <Route path="/houses/:name/swornmembers" component={MembersProfile} />
        <Route path="/books/:name" component={BookProfile} />
        <Route path="/lords/:name" component={LordProfile} />
      </Router>
    </div>
  );
};

export default App;
