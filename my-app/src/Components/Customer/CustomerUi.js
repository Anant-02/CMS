import React from 'react';
import './customer.css';
const CustomerUi = ({ customer }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Subscription</th>
            <th>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png" />
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
              <img src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerUi;
