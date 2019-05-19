import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
const BookProfile = props => {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(props);
    const title = props.match.params.name;
    setData(props.books.find(book => book.name === title));
  }, []);

  return <div>{data.name}</div>;
};

const mapStateToProps = state => ({
  loading: state.books.loading,
  books: state.books.books
});

export default connect(
  mapStateToProps,
  null
)(BookProfile);
