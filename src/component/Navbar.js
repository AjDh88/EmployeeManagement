import React from "react";
import user from "./user.png"
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
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
            <button onClick={() => loginWithRedirect()}>Log In</button>;
            </div>
     
        </div>
      </nav>
    </>
  );
};

export default Navbar;
