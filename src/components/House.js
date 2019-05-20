import React, { useEffect, useState } from "react";
import { cacheHouseData } from "../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const House = props => {
  const [lord, setLord] = useState({});

  const fetchLord = async () => {
    try {
      if (props.data.currentLord) {
        const res = await fetch(props.data.currentLord);
        const result = await res.json();
        console.log(result);
        if (result) {
          setLord(result);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLord();
  }, []);

  return (
    <div class="house-card">
      <h2 style={{ textAlign: "center" }}>{props.data.name}</h2>
      <p>
        <b>Coat of Arms</b>: {props.data.coatOfArms}
      </p>
      <p>
        <b>Region</b>: {props.data.region}
      </p>
      <p>
        <b>Words</b>: {props.data.words}
      </p>
      <p>
        <b>Founded</b>: {props.data.founded}
      </p>
      <p>
        <b>Current Lord</b>:
        <Link
          onClick={() =>
            props.cacheHouseData({
              lord: lord,
              members: props.data.swornMembers
            })
          }
          to={"/lords/" + lord.name}
        >
          {lord.name}
        </Link>
      </p>
    </div>
  );
};

export default connect(
  null,
  { cacheHouseData }
)(House);
