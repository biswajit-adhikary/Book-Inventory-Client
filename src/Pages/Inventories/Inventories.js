import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    })
    return (
        <div className='inventories-area'>
            <Container>
                <div className="section-heading">
                    <h3 className='theme-text-secondary text-center mb-5'>Manage Inventories:</h3>
                </div>
                <div className="inventories">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Book Name</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inventories.map(inventory => <Inventory
                                    key={inventory._id}
                                    inventory={inventory}
                                ></Inventory>)
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="section-footer text-center">
                    <Link className='btn theme-btn mt-3' to="/add-new-item">Add New Item</Link>
                </div>
            </Container>
        </div>
    );
};

export default Inventories;