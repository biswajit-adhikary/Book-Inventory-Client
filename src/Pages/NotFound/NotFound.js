import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import face from "../../images/face.png";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound-area text-center d-flex justify-content-center align-items-center'>
            <Container>
                <div className="not-found-text">
                    <img src={face} alt="" />
                    <h3 className='my-2'>404</h3>
                    <h4>Page Not Found!</h4>
                    <Link className='btn theme-btn mt-3' to="/">Back Home</Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;