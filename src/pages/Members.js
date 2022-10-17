import React, { Component, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Members() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => setUsers(data.results))
    .catch((err) => console.log(err))
  }, []);
  return (
    <div>
      <h1>Members Page</h1>
      {/* <Link to={"john"}> John</Link>
      <Link to={"Ori"}> Ori</Link> */}
        {users && console.log(users)}
      {users && 

        users.map((item, id) => {
            return (
                <div key={id}>

                    <Link to={`${item.name.first} ${item.name.last}`}>{item.name.first} {item.name.last}</Link>     
                 </div>
            )
        })
      }

      <Outlet />
    </div>
  );
}

export default Members;
