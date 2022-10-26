import React from "react";
import Customer from "../Customer";
import basestyle from "../Base.module.css";
const Profile = ({ setUserState, username }) => {
  return (
    <div className="profile">
      <h1 style={{ color: "white" }}>Welcome {username} !</h1>
      <Customer tsname = {username} />
      <button
        className={basestyle.button_common}
        onClick={() => setUserState({})}
      >
        Logout
      </button>
    </div>
  );
};
export default Profile;
