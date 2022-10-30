import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import UserCard from './UserCard';
import AddUser from './AddUser';
import './css/Dashboard.css';

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
      <Row className="main">
        {customer.map((c) => (
          <Col key={c.email} className="col-3">
            <UserCard customer={c} getCustomers={getCustomers} />
          </Col>
        ))}
      </Row>
      <AddUser tsname={props.tsname} />
    </div>
  );
};

export default Customer;
