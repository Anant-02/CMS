import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import UserCard from './UserCard';
import AddUser from './AddUser';

const Customer = (props) => {
  const [customer, setCustomer] = useState([]);

  const getCustomers = () => {
    axios
      .get(`http://localhost:8000/customer/${props.tsname}`)
      .then((response) => {
        setCustomer(response.data);
      });
  };

  useEffect(getCustomers, [props.tsname]);

  return (
    <div>
      <Row>
        {customer.map((c) => (
          <Col key={c.email}>
            <UserCard customer={c} getCustomers={getCustomers} />
          </Col>
        ))}
      </Row>
      <AddUser tsname={props.tsname} />
    </div>
  );
};

export default Customer;
