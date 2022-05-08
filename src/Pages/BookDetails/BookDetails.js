import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import banner from "../../images/banner.jpg";
import './BookDetails.css';

const BookDetails = () => {
    const { bookId } = useParams();

    const [book, setBook] = useState({});
    useEffect(() => {
        const url = `https://pacific-fjord-89697.herokuapp.com/book/${bookId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [book])

    const handelAddedQuantity = event => {
        event.preventDefault();
        const number = parseInt(event.target.number.value);
        const oldNumber = parseInt(book.quantity);
        const newNumber = oldNumber + number;
        const updatedQuantity = { newNumber };

        const url = `https://pacific-fjord-89697.herokuapp.com/book/${bookId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                toast("Added Successfully!!")
            })
    }

    const handelDelivered = () => {
        const oldNumber = parseInt(book.quantity);
        const newNumber = oldNumber - 1;
        const updatedQuantity = { newNumber };

        const url = `https://pacific-fjord-89697.herokuapp.com/book/${bookId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                toast("Delivered Successfully!!")
            })
    }

    return (
        <div className='book-details-area'>
            <div className='banner-area text-center d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})` }}>
                <Container>
                    <div className="banner-text">
                        <h3 className='theme-text-primary text-white'>{book.name}</h3>

                    </div>
                </Container>
            </div >
            <div className="book-details-text">
                <Container>
                    <div className="details-book p-4 text-center">
                        <img src={book.image} alt="" />
                        <h2>Book Name: {book.name}</h2>
                        <p><span>Supplier:</span> {book.supplier}</p>
                        <p><span>Id:</span> {book._id}</p>
                        <p><span>Short description:</span> {book.description}</p>
                        <h4>Price: {book.price}</h4>
                        <h4>Quantity: {book.quantity}</h4>
                        <Button onClick={handelDelivered} className='btn theme-btn-two mt-3'>Delivered</Button>
                        <Link className='btn theme-btn mt-3' to="/manage-inventories">Manage Inventories</Link>
                    </div>
                </Container>
            </div>
            <div className="add-book-form">
                <Container>
                    <form onSubmit={handelAddedQuantity}>
                        <input className='form-control mb-2' type="number" name="number" placeholder='Restock the items' />
                        <input className='form-control btn theme-btn' type="submit" value="Restock" />
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default BookDetails;