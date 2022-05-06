import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    return (
        <div className='form-area login-area text-center d-flex justify-content-center align-items-center'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="form-main">
                            <div className="form-area-text mb-4">
                                <h3 className='theme-text-primary text-center '>Register</h3>
                                <h4 className='theme-sub-text mt-3'>Please Register to continue using our website.</h4>
                            </div>
                            <form action="">
                                <Form.Control name="name" type="text" placeholder="Full Name" className='mb-3' required />
                                <Form.Control name="email" type="email" placeholder="Email Address" className='mb-3' required />
                                <Form.Control name="password" type="password" placeholder="Password" className='mb-3' required />
                                <div className="form-mata d-flex justify-content-between">
                                    <p>Already have an account? <Link to="/login">Login</Link></p>
                                </div>
                                <Button className='btn theme-btn w-100' type="submit">
                                    Register
                                </Button>
                                <div className="separator">
                                    <div></div>
                                    <span>Or</span>
                                    <div></div>
                                </div>
                                <GoogleLogin></GoogleLogin>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;