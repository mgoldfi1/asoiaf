import React from "react";
import banner from "../../assets/images/banner.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Books from "../Books";
const AppContainer = () => {
  return (
    <Router>
      <div className="home-container" />;
      <Route path="/books" component={Books} />
    </Router>
  );
};

export default AppContainer;
