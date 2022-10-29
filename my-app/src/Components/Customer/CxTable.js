import React, { useState, useRef } from 'react';
import axios from 'axios';
import './customer.css';
import { useNavigate } from 'react-router-dom';
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const CustomerUi = ({ customer, deleteCustomer, getCustomer }) => {
  const [visible, setVisible] = useState(false);
  const [subs, setSubs] = useState(null);
  const [subDialog, setSubDialog] = useState(false);
  const toast = useRef(null);

  const accept = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Alert',
      detail: 'User Deleted Successfully!',
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: 'info',
      summary: 'Alert',
      detail: 'User Not Deleted!',
      life: 3000,
    });
  };

  const hideDialog = () => {
    setSubDialog(false);
  };

  const editSubscription = (sub) => {
    setSubs({ ...sub });
    setSubDialog(true);
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    return await axios
      .patch(`http://localhost:8000/profile/${customer.rfid}`, {
        subscription: subs,
      })
      .then(() => {
        getCustomer();
        hideDialog();
      })
      .catch((err) => console.error(err));
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
        onClick={saveProduct}
      />
    </React.Fragment>
  );

  const onInputNumberChange = (e) => {
    e.preventDefault();
    setSubs(e.target.value);
  };

  return (
    <div>
      <Toast ref={toast} />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Subscription</th>
            <th>
              <button onClick={() => setVisible(true)}>
                <i className="pi pi-delete-left"></i>
              </button>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customer.name}</td>
            <td>{customer.contact}</td>
            <td>{customer.subscription}</td>
            <td>
              <button
                label="Show"
                icon="pi pi-external-link"
                onClick={() => editSubscription(subs)}
              >
                <i className="pi pi-user-edit"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to delete this User?"
        header="Delete Confirmation"
        acceptClassName="p-button-danger"
        accept={() => {
          deleteCustomer(customer.rfid);
          accept();
        }}
        reject={() => reject()}
      />

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
              onValueChange={(e) => onInputNumberChange(e)}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CustomerUi;
