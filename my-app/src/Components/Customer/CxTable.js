import React from 'react';
import './customer.css';
import { useNavigate } from 'react-router-dom';

const CustomerUi = ({ customer, deleteCustomer }) => {
  const navigate = useNavigate();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Subscription</th>
            <th>
              <button onClick={() => deleteCustomer(customer.rfid)}>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png"
                  alt="Delete"
                />
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
                onClick={() =>
                  navigate('/edit', {
                    state: { rfid: customer.rfid, subs: customer.subscription },
                  })
                }
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png"
                  alt="Edit"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerUi;
