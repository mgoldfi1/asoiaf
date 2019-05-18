import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AppContainer from "./components/containers/AppContainer";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <AppContainer />
    </div>
  );
};

export default App;
