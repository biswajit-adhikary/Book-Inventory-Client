import React from 'react';
import { Button } from 'react-bootstrap';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { _id, name, quantity } = inventory;
    return (
        <tr className='single-inventory'>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td><Button className='btn theme-btn-two'>Delete</Button></td>
        </tr>
    );
};

export default Inventory;