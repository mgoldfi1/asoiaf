import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/css/Houses.css";

const LordProfile = ({ lord }) => {
  console.log(lord);
  return (
    <div className="lord-details-container">
      <div className="inner-lord-container">
        <h1 style={{ textAlign: "center" }}>{lord.name}</h1>
        <div className="lord-text-holder">
          <p>
            <b>Gender</b>: {lord.gender}
          </p>
          <p>
            <b>Culure</b>: {lord.culture}
          </p>

          <p>
            <b>Died</b>: {lord.died}
          </p>
          <p>
            <b>Titles</b>: {lord.titles.join(" , ")}
          </p>
          <p>
            <b>Born</b>: {lord.born}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  lord: state.houses.houseData.lord
});

export default connect(
  mapStateToProps,
  null
)(LordProfile);
