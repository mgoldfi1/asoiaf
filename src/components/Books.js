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
import arrowup from "../assets/images/arrow-up.svg";
import arrowdown from "../assets/images/arrow-down.svg";

const Books = props => {
  const [books, setBooks] = useState(props.books);
  useEffect(() => {
    document.title = "ASOIAF| Books";
    if (!props.books.length) {
      props.setLoading();
    }
  }, []);

  useEffect(() => {
    setBooks(props.books);
  }, [props.books]);

  const renderBooks = () => {
    return books.map(book => {
      return <Book data={book} />;
    });
  };

  const handlePress = (sort, dir) => {
    props.sortBooks(sort, dir);
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
            <Button style={{ marginLeft: "50px" }} variant="contained">
              Release
            </Button>
            <img
              onClick={() => handlePress("release", "up")}
              src={arrowup}
              title="uparrow"
            />
            <img
              src={arrowdown}
              title="downarrow"
              onClick={() => handlePress("release", "down")}
            />
            <Button style={{ marginLeft: "30px" }} variant="contained">
              Page Count
            </Button>
            <img
              onClick={() => handlePress("pagecount", "up")}
              src={arrowup}
              title="uparrow"
            />
            <img
              src={arrowdown}
              title="downarrow"
              onClick={() => handlePress("pagecount", "down")}
            />
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
