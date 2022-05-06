import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import './Login.css';

const Login = () => {
    // Main hook(Email Login)
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    // Login function
    const handleEmailLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    // Important Variable
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;
    let from = location.state?.from?.pathname || "/";

    // Successfully login
    if (emailUser) {
        navigate(from, { replace: true });
    }

    // Loading
    if (emailLoading) {
        return <Loading></Loading>
    }

    // Error Message
    if (emailError) {
        errorMessage = <p className='text-danger'>Error: {emailError?.message}</p>
    }

    return (
        <div className='form-area login-area text-center d-flex justify-content-center align-items-center'>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="form-main">
                            <div className="form-area-text mb-4">
                                <h3 className='theme-text-primary text-center '>Log In</h3>
                                <h4 className='theme-sub-text mt-3'>Please login to continue using our website.</h4>
                            </div>
                            <form onSubmit={handleEmailLogin}>
                                <Form.Control name="email" type="email" placeholder="Email Address" className='mb-3' required />
                                <Form.Control name="password" type="password" placeholder="Password" className='mb-3' required />
                                <div className="form-mata d-flex justify-content-between">
                                    <p><Link to="/forgot-password">Forgot Password?</Link></p>
                                    <p>New User? <Link to="/register">Create Account</Link></p>
                                </div>
                                <Button className='btn theme-btn w-100' type="submit">
                                    Login
                                </Button>
                                {errorMessage}
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

export default Login;