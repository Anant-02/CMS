import { useState, useEffect } from 'react'
import axios from "axios";

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
            <ul>
            {
                customer.map((c) => 
                    <li key = {c.name}>{c.name}</li>
                )
            }
            </ul>        
        </div>
    )
}

export default Customer;