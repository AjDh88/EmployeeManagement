import React from "react";
import user from "./user.png"


const Navbar = ({username,isAdmin}) => {

  
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{borderBottom: "solid 1px white"}}>
        <div className="container-fluid">
          <h3 className="navbar-brand" >
            E-Management - {isAdmin ? <small>Admin Console</small> : <small>User Console</small>}
          </h3>
            <div className="text-white ">
            <span style={{textAlign : "right"}}>Welcome, {username}</span>
            <img src={user} alt="" className="rounded-circle mx-2" style={{width:"25px"}}/>
            </div>
     
        </div>
      </nav>
    </>
  );
};

export default Navbar;
