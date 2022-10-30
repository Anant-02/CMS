import React from 'react';
import { Button } from 'primereact/button';
import Customer from './Customer';
import './css/Dashboard.css';

const Dashboard = ({ setUserState, username }) => {
  return (
    <div className="center-div">
      <h1 style={{ marginTop: '35vh' }}>{username} Customers</h1>
      <Customer tsname={username} />
      <Button
        label="Logout"
        className="p-button-raised"
        onClick={() => {
          setUserState({});
        }}
      ></Button>
    </div>
  );
};
export default Dashboard;
