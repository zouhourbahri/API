import React from "react";
import { Link } from "react-router-dom";

import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <div>
      <ul className="fullList">
        {users.map((user) => (
          <li className="List">
            <img
              className="profilpicture"
              src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
              alt=""
            />
            <hr />
            <div className="userdetails">
              <span className="name">{user.name}</span>
              <Link key={user.id} to={`/${user.name}`}>
                <button className="btn"> About me </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
