import React from "react";
import { Link } from "react-router-dom";


const Sidebar = ({ children }) => {

  return (
    <div className="main-container">
      <div className="sidebar d-flex flex-column  p-3">
      <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/userDetails" className="nav-link text-white">
                User Details
              </Link>
            </li>
            <li>
              <Link to="/courseDetails" className="nav-link text-white">
                Course Details
              </Link>
            </li>
          </ul>
          <hr />
          <button type="button" className="btn btn-secondary">
            Log Out
          </button>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
