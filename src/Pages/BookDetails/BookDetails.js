import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    return (
        <div className='book-details-area'>
            <Container>
                <h2>This is book details: {bookId}</h2>
            </Container>
        </div>
    );
};

export default BookDetails;