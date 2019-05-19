import React, { useEffect, useState, useRef } from "react";
import banner from "../assets/images/banner.png";
import { connect } from "react-redux";
import { selectTab } from "../actions/index";

const Sidebar = props => {
  const bookTab = useRef(null);
  const charTab = useRef(null);
  const houseTab = useRef(null);

  const styles = {
    backgroundColor: "white",
    color: "blue"
  };

  //   const tabHighlight = () => {
  //         return s
  //     }
  //   };

  useEffect(() => {
    props.selectTab("Books");
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
        <div
          onClick={() => props.selectTab("Books")}
          ref={bookTab}
          className="nav-item"
          style={props.currentTab === "Books" ? styles : null}
        >
          <div>Books</div>
        </div>
        <div
          ref={charTab}
          onClick={() => props.selectTab("Characters")}
          className="nav-item"
          style={props.currentTab === "Characters" ? styles : null}
        >
          <div>Characters</div>
        </div>
        <div
          onClick={() => props.selectTab("Houses")}
          ref={houseTab}
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

const mapDispatchToProps = {
  selectTab: selectTab
};

export default connect(
  mapStatetoProps,
  { selectTab }
)(Sidebar);
