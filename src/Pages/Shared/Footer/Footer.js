import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='footer bg-light py-3 text-center'>
            <Container>
                <p className='text-black text-center mb-0'>
                    &copy; 2022 Book Inventory, All Rights Reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;