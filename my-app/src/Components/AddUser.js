import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import baseStyle from './css/Base.module.css';

const AddUser = (props) => {
  const navigate = useNavigate();

  const addUser = () => {
    navigate('/add-user-form', { state: { tsname: props.tsname } });
  };

  return (
    <div>
      <Button
        label="Add Customer"
        icon="pi pi-user-plus"
        className="p-button-text"
        onClick={addUser}
      />
    </div>
  );
};

export default AddUser;
