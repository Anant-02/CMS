import { useState, useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from "axios";
import CustomerUi from './CustomerUi';

const Customer = (props) => {
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/profile/${props.tsname}`)
            .then((response) => {
                setCustomer(response.data);
            })
    }, []);
    return (
        <div>
            <Row>
            {
                customer.map((c) => 
                    <Col key = {c.name}><CustomerUi customer = {c}/></Col>
                )
            }
            </Row>        
        </div>
    )
}

export default Customer;