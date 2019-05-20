import React, { useEffect, useState } from "react";
//LOADING SPINNER
import { RingLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchMembers } from "../actions/index";

const MembersProfile = ({ loading, members, fetchMembers, swornMembers }) => {
  useEffect(() => {
    fetchMembers(members);
  }, []);
  console.log("REEEEEE", swornMembers);
  return <div>Hi</div>;
};

const mapStateToProps = state => ({
  loading: state.houses.loading,
  members: state.houses.houseData.members,
  swornMembers: state.houses.houseData.swornMembers
});
export default connect(
  mapStateToProps,
  { fetchMembers }
)(MembersProfile);
