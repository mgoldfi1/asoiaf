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
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Name",
    accessor: "name",
    filterMethod: (filter, row) =>
      row[filter.id].toLowerCase().includes(filter.value) && true
  },
  {
    Header: "Culture",
    accessor: "culture",
    filterMethod: (filter, row) => {
      return (
        row[filter.id].toLowerCase().includes(filter.value.toLowerCase()) &&
        true
      );
    }
  },
  {
    Header: "Gender",
    accessor: "gender",
    filterMethod: (filter, row) => {
      if (filter.value.toLowerCase().includes("f")) {
        return row[filter.id] === "Female" && true;
      } else if (filter.value[0].toLowerCase() === "m") {
        return row[filter.id] === "Male" && true;
      }
    }
  },
  {
    Header: "Played By",
    id: "playedBy",
    accessor: "playedBy",
    Cell: ({ row }) => <div>{row.playedBy.join(" , ")}</div>
  },
  {
    Header: "Aliases",
    id: "aliases",
    accessor: "aliases",
    Cell: ({ row }) => <div>{row.aliases.join(" , ")}</div>
  },
  {
    Header: "Born",
    accessor: "born"
  },
  {
    Header: "Books",
    id: "books",
    accessor: el => el.books.map(x => <span>{x.split(/(\d+)/g)[1]}</span>),
    filterMethod: (filter, row) => {
      const arr = row.books.map(el => el.props.children);
      if (filter.value !== "Any") {
        return arr.find(el => el === filter.value) && true;
      } else {
        return true;
      }
    },
    Filter: ({ filter, onChange }) => (
      <select
        onChange={event => onChange(event.target.value)}
        style={{ width: "100%" }}
        value={filter ? filter.value : "Any"}
      >
        {["Any", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => {
          return <option value={num}>{num}</option>;
        })}
      </select>
    )
  }
];

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
    console.log(this.state.data);
    return (
      <div className="member-container">
        <h1 style={{ width: "100%", textAlign: "center" }}>
          Sworn Members Of {this.props.match.params.name}
        </h1>

        <div className="member-table">
          <ReactTable
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value
            }
            defaultPageSize={10}
            data={this.state.data}
            columns={columns}
          />
        </div>
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
