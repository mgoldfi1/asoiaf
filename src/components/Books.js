import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../assets/css/Books.css";
import { setLoading } from "../actions/index";
//LOADING SPINNER
import { RingLoader } from "react-spinners";
//Book component
import Book from "./Book";

const Books = props => {
  useEffect(() => {
    props.setLoading();
  }, []);

  const renderBooks = () => {
    console.log(props.books);
    return props.books.map(book => {
      return <Book data={book} />;
    });
  };

  return (
    <div className="book-container">
      {props.loading ? (
        <div className="loader">
          <RingLoader />
        </div>
      ) : (
        <>
          <h1 style={{ width: "100%", textAlign: "center" }}>
            The Works of George R.R. Martin
          </h1>
          {renderBooks()}
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
  { setLoading }
)(Books);
