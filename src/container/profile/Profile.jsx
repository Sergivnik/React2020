// Profile.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./profileStyle.sass";

export function Profile({ chatId }) {
  console.log("Profile");
  return (
    <div className="profileDiv">
      <span >Чат {chatId}</span>
      <Link to={"/"}>back</Link>
    </div>
  );
}
