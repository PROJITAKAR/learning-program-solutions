import React from "react";
import "./App.css";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <div className="container">
      <div className="column">
        <CourseDetails />
      </div>
      <div className="column">
        <BookDetails />
      </div>
      <div className="column">
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
