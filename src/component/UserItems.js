import React from "react";

const UserItems = ({ user }) => {
  return (
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Name : {user.firstName} {user.lastName}</h5>
            <p className="card-text">
              ID : {user.id}<br/>
              Email : {user.email}<br/>
              Address : {user.address}<br/>
              DOB : {user.dob}<br/>
              Contact Number : {user.contactNumber}<br/>
            </p>
          </div>
        </div>
  );
};

export default UserItems;
