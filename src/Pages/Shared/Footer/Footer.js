import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer py-3 text-white'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <p className='mb-0 copyright-text'>
                            &copy; 2022 Book Inventory, All Rights Reserved.
                        </p>
                    </Col>
                    <Col lg={6}>
                        <p className='mb-0 developer-text'>
                            Developed by: Biswajit Adhikary.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;