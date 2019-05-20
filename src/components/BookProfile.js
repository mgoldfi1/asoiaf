import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const BookProfile = props => {
  const [data, setData] = useState({});

  useEffect(() => {
    const title = props.match.params.name;
    setData(props.books.find(book => book.name === title));
  }, []);
  return (
    <div className="book-details-container">
      <div className="inner-book-container">
        <h1 style={{ textAlign: "center" }}>{data.name}</h1>
        <div className="book-text-holder">
          <p>Release Year: {(data.released + "").split("-")[0]}</p>
          <p>Number of Pages: {data.numberOfPages}</p>
          <p>Characters: {data.characters && data.characters.length}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.books.loading,
  books: state.books.books
});

export default connect(
  mapStateToProps,
  null
)(BookProfile);
