import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  let navigate = useNavigate();

  function logOut() {
    auth.signOut();
    navigate("/");
  }

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt=""
          />

          <div className="profile__details">
            <h2>{user.email}</h2>
            <h2>{user.password}</h2>
            <div className="profile__content">
              <h3>Plans</h3>
              <button onClick={() => logOut()} className="profile__signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
