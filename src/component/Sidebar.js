import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Sidebar = ({ children, keycloak }) => {
  const location = useLocation()
  useEffect(() => {
  
  }, [location])
  
  return (
    <div className="main-container">
      <div className="sidebar d-flex flex-column  p-3">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className={` ${location.pathname === "/Home/courseDetails"?"active":""}`}>
            <Link to="/Home/courseDetails" className="nav-link text-white">
              Course Details
            </Link>
          </li>
          <li className={` ${location.pathname === "/Home/userDetails"?"active":""}`}>
            <Link to="/Home/userDetails" className="nav-link text-white">
              User Details
            </Link>
          </li>

        </ul>
        <hr />
        <button type="button" className="btn btn-secondary" onClick={() => keycloak.logout()} >
          Log Out
        </button>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
