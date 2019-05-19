import React from "react";
import book1 from "../assets/images/book1.jpg";

const Book = ({ data }) => {
  return (
    <div className="book">
      <img src={book1} title="book1" />
      <div style={{ textAlign: "center" }}>{data.released.split("-")[0]}</div>
    </div>
  );
};

export default Book;
