import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer py-3 text-center'>
            <Container>
                <p className='text-white text-center mb-0'>
                    &copy; 2022 Book Inventory, All Rights Reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;