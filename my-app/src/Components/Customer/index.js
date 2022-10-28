import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import CustomerUi from './CxTable';

const Customer = (props) => {
  const [customer, setCustomer] = useState([]);

  const getCustomers = () => {
    axios
      .get(`http://localhost:8000/profile/${props.tsname}`)
      .then((response) => {
        setCustomer(response.data);
      });
  };

  useEffect(getCustomers, [props.tsname]);

  async function deleteCustomer(rfid) {
    return await axios
      .delete(`http://localhost:8000/profile/${rfid}`)
      .then(() => {
        getCustomers();
      })
      .catch((err) => console.error(err));
  }

  // function editCustomer(rfid, subs) {
  //   axios
  //     .patch(`http://localhost:8000/profile/${rfid}`, { subscription: subs })
  //     .then(getCustomers())
  //     .catch((err) => console.error(err));
  // }

  return (
    <div>
      <Row>
        {customer.map((c) => (
          <Col key={c.email}>
            <CustomerUi customer={c} deleteCustomer={deleteCustomer} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Customer;
