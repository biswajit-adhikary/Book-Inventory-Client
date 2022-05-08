import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './MyItems.css'
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import axiosApi from '../../api/axiosApi';

const MyItems = () => {
    const [myitem, setMyitem] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getItem = async () => {
            const email = user?.email;
            const url = `https://pacific-fjord-89697.herokuapp.com/my-items?email=${email}`;
            try {
                const { data } = await axiosApi.get(url);
                setMyitem(data);
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItem();
    }, [user]);

    // Delete Function
    const handelItemDelete = id => {
        const agree = window.confirm('Are you want to delete this item?');
        if (agree) {
            const url = `https://pacific-fjord-89697.herokuapp.com/book/${id}`;
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
                    <h2 className='text-center'>Name: {user.displayName}</h2>
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