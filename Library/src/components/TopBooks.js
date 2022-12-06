import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "../components/general.css";

export const TopBooks = () => {
  const booksReducer = useSelector((state) => state.books.booksArray);
  //  const { id, name, author } = booksReducer;

  //  let arr = [5, 2, 1, -10, 8];

  //  arr.sort((a, b) => b - a);

  //  //  alert(arr);
  //  booksReducer.sort((a, b) => b.avgRating - a.avgRating);
  //  console.log(booksReducer);

  //  let arr = booksReducer;
  //  arr.sort((a, b) => b.avgRating - a.avgRating);
  //  console.log(arr);

  const [filteredBooks, setFilteredBooks] = useState(booksReducer);
  filteredBooks.sort((a, b) => b.avgRating - a.avgRating);

  const [categories, setCategories] = useState([
    "Classic",
    "Detective",
    "History",
    "Story",
    "Fantastic",
  ]);

  const [genre, setGenre] = useState(categories[0]);
  let count = 0;

  let authorsArr = [];

  booksReducer.map((book) => {
    authorsArr.push(book.author);
    book.name.toLowerCase();
    book.author.toLowerCase();
    book.genre.toLowerCase();
    book.text.toLowerCase();
  });

  const [authors, setAuthors] = useState(authorsArr);

  const [author, setAuthor] = useState(authors[0]);

  return (
    <div className="top-books">
      <div className="top-books-container">
        <h2>Top 10 books:</h2>
        <div className="books-container">
          {filteredBooks.map((book, index) => {
            if (index < 10) {
              return (
                <Link to={`${book.id}`}>
                  <div className="book-card">
                    <h6 className="book-title">{book.name}</h6>
                    <h6 style={{ marginTop: "-25px" }}>{book.author}</h6>
                  </div>
                </Link>
              );
            }
          })}
        </div>

        <h2>
          Top 10
          <select className="select" onChange={(e) => setGenre(e.target.value)}>
            {categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
          books:
        </h2>
        <div className="books-container">
          {filteredBooks.map((book, index) => {
            if (book.genre == genre) {
              count++;
              if (count < 11) {
                console.log(count);
                return (
                  <Link to={`${book.id}`}>
                    <div className="book-card">
                      <h6 className="book-title">{book.name}</h6>
                      <h6 style={{ marginTop: "-25px" }}>{book.author}</h6>
                    </div>
                  </Link>
                );
              }
            }
          })}
        </div>
        <h2>
          Top 3
          <select
            className="select"
            onChange={(e) => setAuthor(e.target.value)}
          >
            {authors.map((author) => {
              return <option value={author}>{author}</option>;
            })}
          </select>
          books:
        </h2>
        <div className="books-container">
          {filteredBooks.map((book, index) => {
            if (book.author == author) {
              count++;
              if (count < 11) {
                console.log(count);
                return (
                  <Link to={`${book.id}`}>
                    <div className="book-card">
                      <h6 className="book-title">{book.name}</h6>
                    </div>
                  </Link>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};
