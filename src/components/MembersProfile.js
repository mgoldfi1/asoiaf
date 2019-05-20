import React, { Component } from "react";
import "../assets/css/Houses.css";

//LOADING SPINNER
import { RingLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchMembers } from "../actions/index";

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
