import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Sidebar = ({ children }) => {
  const { logout } = useAuth0();

  return (
    <div className="main-container">
      <motion.div animate={{ width: "200px" }} className="sidebar d-flex flex-column  p-3">
      <ul class="nav nav-pills flex-column mb-auto">
            <li>
              <Link to="/" class="nav-link text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/userDetails" class="nav-link text-white">
                User Details
              </Link>
            </li>
            <li>
              <Link to="/courseDetails" class="nav-link text-white">
                Course Details
              </Link>
            </li>
          </ul>
          <hr />
          <button type="button" class="btn btn-secondary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
