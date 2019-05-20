import React, { Component } from "react";
import "../assets/css/Houses.css";
import Button from "@material-ui/core/Button";
import arrowup from "../assets/images/arrow-up.svg";
import arrowdown from "../assets/images/arrow-down.svg";
//LOADING SPINNER
import { RingLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchMembers } from "../actions/index";
import { sortCultureAsc } from "../utils/index";
import { sortCultureDesc } from "../utils/index";
import { sortGenderAsc } from "../utils/index";
import { sortGenderDesc } from "../utils/index";

class MembersProfile extends Component {
  state = {
    data: []
  };

  fetchMemberData = async () => {
    try {
      this.props.links.forEach(async link => {
        const res = await fetch(link);
        const result = await res.json();
        this.setState({ data: [...this.state.data, result] });
      });
    } catch (error) {
      console.log(error);
    }
  };

  sortCulture = dir => {
    if (dir === "up") {
      this.setState(this.state.data.sort(sortCultureAsc));
    } else {
      this.setState(this.state.data.sort(sortCultureDesc));
    }
  };

  sortGender = dir => {
    if (dir === "up") {
      this.setState(this.state.data.sort(sortGenderAsc));
    } else {
      this.setState(this.state.data.sort(sortGenderDesc));
    }
  };
  renderHouseMembers = () => {
    return this.state.data.map(member => {
      console.log(member);
      return (
        <div key={member.name} className="member-card">
          <h1 style={{ width: "100%", textAlign: "center" }}>{member.name}</h1>
          <p>
            <b>Culture</b>: {member.culture}
          </p>
          <p>
            <b>Gender</b>: {member.gender}
          </p>
          <p>
            <b>Played By</b>: {member.playedBy.join(" , ")}
          </p>
          <p>
            <b>Titles</b>: {member.titles.join(" , ")}
          </p>
          <p>
            <b>Aliases</b>: {member.aliases.join(" , ")}
          </p>
          <p>
            <b>Born</b>: {member.born}
          </p>
        </div>
      );
    });
  };

  componentDidMount = () => {
    this.fetchMemberData();
  };

  render() {
    console.log(this.state);
    return (
      <div className="member-container">
        <h1 style={{ width: "100%", textAlign: "center" }}>
          Sworn Members Of {this.props.match.params.name}
        </h1>
        <h4 style={{ marginLeft: "25px", width: "100%" }}>
          Sort By:
          <Button style={{ marginLeft: "50px" }} variant="contained">
            Culture
          </Button>
          <img
            src={arrowup}
            onClick={() => this.sortCulture("up")}
            title="uparrow"
          />
          <img
            src={arrowdown}
            onClick={() => this.sortCulture("down")}
            title="downarrow"
          />
          <Button style={{ marginLeft: "30px" }} variant="contained">
            Gender
          </Button>
          <img
            src={arrowup}
            onClick={() => this.sortGender("up")}
            title="uparrow"
          />
          <img
            onClick={() => this.sortGender("down")}
            src={arrowdown}
            title="downarrow"
          />
        </h4>
        {this.renderHouseMembers()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  links: state.houses.houseData.members
});
export default connect(
  mapStateToProps,
  { fetchMembers }
)(MembersProfile);
