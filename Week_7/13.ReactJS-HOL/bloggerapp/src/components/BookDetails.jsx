import React from "react";

const books = [
  { id: 101, bname: "Master React", price: 670 },
  { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
  { id: 103, bname: "Mongo Essentials", price: 450 },
];

function BookDetails() {
  return (
    <>
      <h1>Book Details</h1>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.bname}</h2>
          <h3>{book.price}</h3>
        </div>
      ))}
    </>
  );
}

export default BookDetails;
