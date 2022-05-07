import React from 'react';
import { Button } from 'react-bootstrap';
import './Inventory.css'

const Inventory = ({ book }) => {
    const { _id, name, quantity } = book;
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