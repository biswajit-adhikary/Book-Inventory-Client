import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();

    const [book, setBook] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/book/${bookId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [])

    return (
        <div className='book-details-area'>
            <div className='banner-area text-center d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${book.image})` }}>
                <Container>
                    <div className="banner-text">
                        <h3 className='theme-text-primary text-white'>Book: {book.name}</h3>
                    </div>
                </Container>
            </div >
        </div>
    );
};

export default BookDetails;