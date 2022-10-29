import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const EditUser = ({ customer, getCustomers, subDialog, setSubDialog }) => {
  const [subs, setSubs] = useState(customer.subscription);
  const toast = useRef(null);

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
        toast.current.show({
          severity: 'success',
          summary: 'Alert',
          detail: 'User Updated Successfully!',
          life: 3000,
        });
      })
      .catch((err) => console.error(err));
  };

  const hideDialog = () => {
    setSubDialog(false);
  };

  const handleCancel = () => {
    hideDialog();
    toast.current.show({
      severity: 'info',
      summary: 'Alert',
      detail: 'User Not Updated!',
      life: 3000,
    });
  };

  const subDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={handleCancel}
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
      <Toast ref={toast} />

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
