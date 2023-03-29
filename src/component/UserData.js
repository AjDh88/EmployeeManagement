import React, { useState, useEffect } from "react";
import UserItems from "./UserItems";
import userData  from "./userData.json"
const UserData = ({isAdmin,username}) => {
  const [users, setUsers] = useState([]);
  

  const getAllUsers = async () => {
    if(isAdmin){
      setUsers(userData);
    }
    else{
      const singleData = userData.filter((element)=>element.userName === username )[0]
      const user_data = [singleData]
      // console.log(demo)
      setUsers(user_data)
    }
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
