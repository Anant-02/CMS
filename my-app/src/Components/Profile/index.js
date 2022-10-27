import React from 'react';
import Customer from '../Customer';
import basestyle from '../Base.module.css';
const Profile = ({ setUserState, username }) => {
  return (
    <div>
      <h1>Welcome {username} !</h1>
      <Customer tsname={username} />
    </div>
  );
};
export default Profile;
