import React from "react";
import user from "./user.png"


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{borderBottom: "solid 1px white"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            E-Management
          </a>
            <div className="text-white ">
            <span style={{textAlign : "right"}}>Welcome User</span>
            <img src={user} alt="" className="rounded-circle mx-2" style={{width:"25px"}}/>
            </div>
     
        </div>
      </nav>
    </>
  );
};

export default Navbar;
