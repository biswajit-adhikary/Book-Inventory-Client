import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Book.css';

const Book = ({ book }) => {
    const { _id, name, image, description, price, quantity, supplier } = book;
    const navigate = useNavigate();
    const navigateToBookDetail = id => {
        navigate(`/book/${id}`);
    }
    return (
        <Col lg={4}>
            <div className='single-book'>
                <div className="book-image">
                    <img src={image} alt="" />
                    <span className='d-inline-block'>Supplier: {supplier}</span>
                </div>
                <div className="book-text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="book-mata d-flex justify-content-between">
                        <p>Price: ${price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <button onClick={() => navigateToBookDetail(_id)} className='btn theme-btn'>Stock Update</button>
                </div>
            </div>
        </Col>
    );
};

export default Book;