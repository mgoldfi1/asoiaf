import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/css/Books.css";
import { setLoading } from "../actions/index";
import { sortBooks } from "../actions/index";
import { Link } from "react-router-dom";
//LOADING SPINNER
import { RingLoader } from "react-spinners";
//Book component
import Book from "./Book";
//Button
import Button from "@material-ui/core/Button";
import arrowup from "../assets/images/arrow-up.svg";
import arrowdown from "../assets/images/arrow-down.svg";
//table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Books = props => {
  const [books, setBooks] = useState(props.books);
  useEffect(() => {
    document.title = "ASOIAF| Books";
    if (!props.books.length) {
      props.setLoading();
    }
  }, []);

  useEffect(() => {
    console.log(props.books);
    setBooks(props.books);
  }, [props.books]);

  // const renderBooks = () => {
  //   return books.map((book, index) => {
  //     return <Book index={index + 1} data={book} />;
  //   });
  // };
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ row }) => <Link to={"/books/" + row.name}>{row.name}</Link>
    },
    {
      Header: "Published",
      id: "released",
      accessor: book => book.released.split("-")[0]
      // String-based value accessors!
    },
    {
      Header: "Pages",
      accessor: "numberOfPages" // String-based value accessors!
    },
    {
      Header: "Characters",
      accessor: "characters.length" // String-based value accessors!
    }
  ];
  // const handlePress = (sort, dir) => {
  //   props.sortBooks(sort, dir);
  // };
  return (
    <div style={{ overflow: "auto", width: "100%" }}>
      {props.loading ? (
        <div className="loader">
          <RingLoader />
        </div>
      ) : (
        <>
          <h1 style={{ width: "100%", textAlign: "center" }}>
            The Works of George R.R. Martin
          </h1>
          <div
            style={{
              margin: "100px",
              height: "25px",
              fontSize: "24px",
              fontWeight: "700"
            }}
          />

          <div className="book-container">
            <ReactTable
              defaultPageSize={10}
              data={props.books}
              columns={columns}
            />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.books.loading,
  books: state.books.books
});
export default connect(
  mapStateToProps,
  { setLoading, sortBooks }
)(Books);
