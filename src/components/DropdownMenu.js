import React from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

import "./DropdownMenu.css"

function DropdownMenu() {
  let navigate = useNavigate();
  
  function logOut() {
    auth.signOut();
    navigate("/");
  }
  return (
    <div>
      <ul className="nav__dropdown">
        <li onClick={() => navigate("/profile")}>Account</li>
        <li onClick={() => logOut()}>Sign out of Netflix</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
