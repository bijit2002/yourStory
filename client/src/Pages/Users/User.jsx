import React from "react";
import { Link } from "react-router-dom";

import "./Users.css";

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user._id}`} className="user-profile-link">
      <h3>{user.name.charAt(0).toUpperCase()}</h3>
      <h2>{user.name}</h2>
    </Link>
  );
};

export default User;