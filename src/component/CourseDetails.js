import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";

const CourseDetails = () => {
  const [courses, setCourses] = useState([])
  const getCourse = async () => {
    const url = "https://hub.dummyapis.com/vj/mmqG4S6";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setCourses(json);
  };

  useEffect(() => {
    getCourse()
  }, [])

  useEffect(() => {
    console.log(courses)
  }, [courses])
  
  
  return (
    <div className="container">
      <h1>Course Details</h1>
      <ul>
          {courses.map((course) => (
            <CourseItem key={course.id} course={course}/>
          ))}
        </ul>
    </div>
  );
};

export default CourseDetails;
