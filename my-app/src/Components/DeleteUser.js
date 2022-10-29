import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

const DeleteUser = ({ customer, getCustomers }) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const toast = useRef(null);

  async function deleteCustomer(rfid) {
    return await axios
      .delete(`http://localhost:8000/customer/${rfid}`)
      .then(() => {
        getCustomers();
      })
      .catch((err) => console.error(err));
  }

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

  return (
    <React.Fragment>
      <Toast ref={toast} />

      <button onClick={() => setDeleteDialog(true)}>
        <i className="pi pi-delete-left"></i>
      </button>

      <ConfirmDialog
        visible={deleteDialog}
        onHide={() => setDeleteDialog(false)}
        message="Are you sure you want to delete this User?"
        header="Delete Confirmation"
        acceptClassName="p-button-danger"
        accept={() => {
          deleteCustomer(customer.rfid);
          accept();
        }}
        reject={() => reject()}
      />
    </React.Fragment>
  );
};

export default DeleteUser;
