import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './MyItems.css'
import auth from '../../Firebase/Firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyItems = () => {
    const [myitem, setMyitem] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getItem = async () => {
            const email = user.email;
            const url = `http://localhost:5000/my-items?email=${email}`;
            const { data } = await axios.get(url);
            setMyitem(data);
        }
        getItem();
    }, [user]);

    // Delete Function
    const handelItemDelete = id => {
        const agree = window.confirm('Are you want to delete this item?');
        if (agree) {
            const url = `http://localhost:5000/book/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingItem = myitem.filter(item => item._id !== id);
                    setMyitem(remainingItem);
                    toast("Item Deleted!");
                })
        }
    }
    return (
        <div className='my-items-area'>
            <Container>
                <div className="section-heading">
                    <h3 className='theme-text-secondary text-center mb-5'>My Items:</h3>
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
                                myitem.map(item => <tr className='single-inventory'
                                    key={item._id}
                                >
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td><Button onClick={() => handelItemDelete(item._id)} className='btn theme-btn-two'>Delete</Button></td>
                                </tr>)
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

export default MyItems;