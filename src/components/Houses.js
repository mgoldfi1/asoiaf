import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHouses } from "../actions/index";
import House from "./House";
import { RingLoader } from "react-spinners";
import "../assets/css/Houses.css";
import Button from "@material-ui/core/Button";
import arrowup from "../assets/images/arrow-up.svg";
import arrowdown from "../assets/images/arrow-down.svg";
import { sortHouses } from "../actions/index";
import { changePage } from "../actions/index";

const Houses = props => {
  useEffect(() => {
    props.fetchHouses(props.page);
  }, [props.page]);

  const renderHouses = () => {
    return props.houses.map(house => {
      return <House data={house} key={house.name} />;
    });
  };
  console.log(props.houses);
  return (
    <div style={{ overflow: "auto", width: "100%" }}>
      {props.loading ? (
        <div className="loader">
          <RingLoader />
        </div>
      ) : (
        <>
          <h1 style={{ width: "100%", textAlign: "center" }}>
            The Houses of Westeros
          </h1>
          <h3 style={{ marginLeft: "25px" }}>
            Showing results 1-{props.houses.length} from page {props.page}:{" "}
            <Button
              style={{ marginLeft: "50px" }}
              onClick={() =>
                props.page > 1 ? props.changePage(props.page - 1) : null
              }
              variant="contained"
            >
              Prev
            </Button>{" "}
            <Button
              style={{ marginLeft: "50px" }}
              onClick={() =>
                props.page < 45 ? props.changePage(props.page + 1) : null
              }
              variant="contained"
            >
              Next
            </Button>
          </h3>
          <h4 style={{ marginLeft: "25px" }}>
            Sort By:{" "}
            <Button style={{ marginLeft: "50px" }} variant="contained">
              Name
            </Button>
            <img
              src={arrowup}
              title="uparrow"
              onClick={() => props.sortHouses("name", "up")}
            />
            <img
              src={arrowdown}
              onClick={() => props.sortHouses("name", "down")}
              title="downarrow"
            />
            <Button style={{ marginLeft: "30px" }} variant="contained">
              Region
            </Button>
            <img
              src={arrowup}
              onClick={() => props.sortHouses("region", "up")}
              title="uparrow"
            />
            <img
              src={arrowdown}
              onClick={() => props.sortHouses("region", "down")}
              title="downarrow"
            />
          </h4>
          <div className="table-container">{renderHouses()}</div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.houses.loading,
  houses: state.houses.houses,
  page: state.houses.page
});

export default connect(
  mapStateToProps,
  { fetchHouses, sortHouses, changePage }
)(Houses);
