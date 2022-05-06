import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    })
    return (
        <div className='books-area'>
            <Container>
                <div className="section-heading">
                    <h3 className='theme-text-secondary text-center mb-5'>Inventory items</h3>
                </div>
                <Row>
                    {
                        books.map(book => <Book
                            key={book._id}
                            book={book}
                        ></Book>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Books;