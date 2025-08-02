import React from "react";

const courses = [
  { name: "Angular", date: "4/5/2021" },
  { name: "React", date: "6/3/20201" }, // typo in date kept as per your image
];

function CourseDetails() {
  return (
    <>
      <h1>Course Details</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <h2>{course.name}</h2>
          <h3>{course.date}</h3>
        </div>
      ))}
    </>
  );
}

export default CourseDetails;
