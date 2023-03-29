import React from 'react'

const CourseItem = ({course}) => {
  return (
    <div className="card my-2">
        <div className="card-header">Courses : {course.name}</div>
        <div className="card-body">
          <p className="card-text">
            Course Level : {course.course_level}<br/>
            Price : {course.productPrice}<br/>
            Created On :{course.createdOn}

          </p>
        </div>
      </div>
  )
}

export default CourseItem