import React from "react";
import banner from "../../assets/images/banner.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Books from "../Books";
import { connect } from "react-redux";
const AppContainer = props => {
  return (
    <Router>
      <div className="home-container" />;
    </Router>
  );
};

const mapStateToProps = state => ({
  loading: state.books.loading,
  books: state.books.books
});

export default connect(
  mapStateToProps,
  null
)(AppContainer);
