import React from 'react';
import Customer from './Customer';
import baseStyle from './css/Base.module.css';

const Dashboard = ({ setUserState, username }) => {
  return (
    <div>
      <h1>{username} Customers</h1>
      <Customer tsname={username} />
      <button
        className={baseStyle.button_common}
        onClick={() => {
          setUserState({});
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default Dashboard;
