import React, { useState } from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const EditUser = ({ customer, getCustomers }) => {
  const [subs, setSubs] = useState(customer.subscription);
  const [subDialog, setSubDialog] = useState(false);

  const onInputSubs = (e) => {
    e.preventDefault();
    setSubs(e.target.value);
  };

  const saveUserSubs = async (e) => {
    e.preventDefault();
    return await axios
      .patch(`http://localhost:8000/customer/${customer.rfid}`, {
        subscription: subs,
      })
      .then(() => {
        getCustomers();
        hideDialog();
      })
      .catch((err) => console.error(err));
  };

  const hideDialog = () => {
    setSubDialog(false);
  };

  const subDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveUserSubs}
      />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <button onClick={() => setSubDialog(true)}>
        <i className="pi pi-user-edit"></i>
      </button>

      <Dialog
        visible={subDialog}
        style={{ width: '450px' }}
        header="Confirmation"
        modal
        className="p-fluid"
        footer={subDialogFooter}
        onHide={hideDialog}
      >
        <div className="formgrid grid">
          <div className="field col">
            <label htmlFor="subscription">Subscription</label>
            <InputNumber
              id="subs"
              value={subs}
              onValueChange={(e) => onInputSubs(e)}
            />
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default EditUser;
