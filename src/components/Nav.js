import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { auth } from "../firebase";
import DropdownMenu from "./DropdownMenu";
import "./Nav.css";

function Nav() {
  const [show, handShow] = useState(false);
  const [showdropdown, setShowDropDown] = useState(false);
  let navigate = useNavigate();

  const transtionsNavBar = () => {
    if (window.scrollY > 100) {
      handShow(true);
    } else {
      handShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transtionsNavBar);
    return () => window.removeEventListener("scroll", transtionsNavBar);
  }, []);

  // function logOut() {
  //   auth.signOut();
  //   navigate("/");
  // }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <div className="nav__profile">
          <img
            onClick={() => setShowDropDown(!showdropdown)}
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt=""
          />
          {showdropdown ? (
            <DropdownMenu />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;
