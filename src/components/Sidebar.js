import React, { useEffect, useState } from "react";
import banner from "../assets/images/banner.png";
import { connect } from "react-redux";
import { selectTab } from "../actions/index";
import { Link } from "react-router-dom";
const Sidebar = props => {
  const styles = {
    backgroundColor: "white",
    color: "blue"
  };

  useEffect(() => {
    props.selectTab(props.currentTab);
  }, []);

  return (
    <div className="sidebar">
      <div className="image-container">
        <img
          src={banner}
          style={{ height: 200, width: 350 }}
          title="banner-image"
        />
      </div>
      <div className="navigation-holder">
        <Link
          onClick={() => props.selectTab("Books")}
          className="nav-item"
          style={
            props.currentTab === "Books"
              ? { ...styles, textDecoration: "none" }
              : { textDecoration: "none" }
          }
          to="/books"
        >
          <div>
            <div>Books</div>
          </div>
        </Link>

        <div
          onClick={() => props.selectTab("Characters")}
          className="nav-item"
          style={props.currentTab === "Characters" ? styles : null}
        >
          <div>Characters</div>
        </div>
        <div
          onClick={() => props.selectTab("Houses")}
          className="nav-item"
          style={props.currentTab === "Houses" ? styles : null}
        >
          <div>Houses</div>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = state => ({
  currentTab: state.nav.currentTab
});

export default connect(
  mapStatetoProps,
  { selectTab }
)(Sidebar);
