import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import courseData from "./courseData.json"
const CourseDetails = () => {
  const [courses, setCourses] = useState([])
  const getCourse = async () => {
    setCourses(courseData);
  };

  useEffect(() => {
    getCourse()
  }, [])

  useEffect(() => {
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
