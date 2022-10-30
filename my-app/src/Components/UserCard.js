import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';

const UserCard = ({ customer, getCustomers }) => {
  const [subDialog, setSubDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleEdit = () => setSubDialog(true);

  const handleDelete = () => setDeleteDialog(true);

  const footer = (
    <span>
      <Button
        label="Edit Subscription"
        icon="pi pi-pencil"
        onClick={handleEdit}
      />
      {
        <EditUser
          customer={customer}
          getCustomers={getCustomers}
          subDialog={subDialog}
          setSubDialog={setSubDialog}
        />
      }
      <Button
        label="Delete"
        icon="pi pi-times"
        className="p-button-secondary ml-2"
        onClick={handleDelete}
      />
      {
        <DeleteUser
          customer={customer}
          getCustomers={getCustomers}
          deleteDialog={deleteDialog}
          setDeleteDialog={setDeleteDialog}
        />
      }
    </span>
  );

  return (
    <div>
      <Card title={customer.name} subTitle={customer.contact} footer={footer}>
        <p className="m-0" style={{ lineHeight: '1.5' }}>
          Subscription valid for {customer.subscription} days.
        </p>
      </Card>
    </div>
  );
};

export default UserCard;
