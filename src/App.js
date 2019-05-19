import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AppContainer from "./components/containers/AppContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import BookProfile from "./components/BookProfile";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Sidebar />
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/books" component={Books} />
        <Route path="/books/:name" component={BookProfile} />
      </Router>
    </div>
  );
};

export default App;
