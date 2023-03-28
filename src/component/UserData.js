import React, { useState, useEffect } from "react";
import UserItems from "./UserItems";
const UserData = () => {
  const [users, setUsers] = useState([]);
  

  const getAllUsers = async () => {
    const url =
      "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    setUsers(json);
  };
  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
  }, [users]);

  return (
    <>
      <div className="container">
        <h1>User Details</h1>
        <ul>
          {users.map((user) => (
            <UserItems key={user.id} user={user}/>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserData;
