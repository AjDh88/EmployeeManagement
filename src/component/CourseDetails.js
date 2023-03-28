import React from 'react'
import { Link } from 'react-router-dom'
const CourseDetails = () => {
  return (
    <div className="container my-2">
        <h1>Course Details</h1>
        <div className="card">
          <div className="card-header">JavaScript</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to="/" className="btn btn-primary">
              Enroll now
            </Link>
          </div>
        </div>
      </div>
  )
}

export default CourseDetails