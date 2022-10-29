import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import CustomerUi from './CxTable';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Customer = (props) => {
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

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

  const addUser = () => {
    navigate('/form', { state: { tsname: props.tsname } });
  };

  return (
    <div>
      <Row>
        {customer.map((c) => (
          <Col key={c.email}>
            <CustomerUi
              customer={c}
              deleteCustomer={deleteCustomer}
              getCustomer={getCustomers}
            />
          </Col>
        ))}
      </Row>
      <Button
        label="Add Customer"
        icon="pi pi-user-plus"
        className="p-button-text"
        onClick={addUser}
      />
    </div>
  );
};

export default Customer;
