import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-area'>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div className="contact-text text-center">
                            <h3 className='theme-text-secondary text-center'>Still need help?</h3>
                            <h4 className='theme-sub-text my-4'>
                                Our specialists are always happy to help. Contact us during standard
                                business hours or email us 24/7 and we'll get back to you.
                            </h4>
                            <button className='btn theme-btn-two'>Contact Us</button>
                            <button className='btn theme-btn'>Visit Community</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;