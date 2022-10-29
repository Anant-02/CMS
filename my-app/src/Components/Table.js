import React from 'react';
import './css/Table.css';
import 'primeicons/primeicons.css';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';

const UserTable = ({ customer, getCustomers }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Subscription</th>
            <th>
              <DeleteUser customer={customer} getCustomers={getCustomers} />
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
              <EditUser customer={customer} getCustomers={getCustomers} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
