import React from "react";
import book1 from "../assets/images/book1.jpg";
import { Link } from "react-router-dom";
const Book = ({ data }) => {
  return (
    <div className="book">
      <Link to={"/books/" + data.name}>
        <img src={book1} title="book1" />
      </Link>
      <div className="detail-box">
        <div style={{ textAlign: "center", fontSize: 18, fontWeight: 700 }}>
          {data.released.split("-")[0]}
        </div>
        <div style={{ textAlign: "center", fontSize: 18, fontWeight: 700 }}>
          {data.name}
        </div>
      </div>
    </div>
  );
};

export default Book;
