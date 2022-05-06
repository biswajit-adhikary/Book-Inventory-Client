import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import banner from "../../images/banner.jpg";

const BookDetails = () => {
    const { bookId } = useParams();
    return (
        <div className='book-details-area'>
            <div className='banner-area text-center d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})` }}>
                <Container>
                    <div className="banner-text">
                        <h3 className='theme-text-primary text-white'>This is book details: {bookId}</h3>
                    </div>
                </Container>
            </div >
        </div>
    );
};

export default BookDetails;