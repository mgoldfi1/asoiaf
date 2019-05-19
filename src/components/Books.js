import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/css/Books.css";
import { setLoading } from "../actions/index";
import { sortBooks } from "../actions/index";
//LOADING SPINNER
import { RingLoader } from "react-spinners";
//Book component
import Book from "./Book";
//Button
import Button from "@material-ui/core/Button";

const Books = props => {
  const [books, setBooks] = useState(props.books);
  useEffect(() => {
    if (!props.books) {
      props.setLoading();
    }
  }, []);

  useEffect(() => {
    console.log("PROPS", props.books);
    setBooks(props.books);
  }, [props.books]);

  const renderBooks = () => {
    console.log(props.books);
    return books.map(book => {
      return <Book data={book} />;
    });
  };

  const handlePress = sort => {
    props.sortBooks(sort);
  };
  return (
    <div style={{ overflow: "auto" }}>
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
          >
            Sort By:{" "}
            <Button
              onClick={() => handlePress("release")}
              style={{ marginLeft: "50px" }}
              variant="contained"
            >
              Release
            </Button>
            <Button
              onClick={() => handlePress("pagecount")}
              style={{ marginLeft: "30px" }}
              variant="contained"
            >
              Page Count
            </Button>
          </div>
          <div className="book-container">{renderBooks()}</div>
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
