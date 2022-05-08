import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../images/google.png';
import Loading from '../../Shared/Loading/Loading';

const GoogleLogin = () => {
    // Main hook(Google Login)
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [token] = useToken(googleUser);

    // Important Variable
    const navigate = useNavigate();
    let errorMessage;
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // Loading
    if (googleLoading) {
        return <Loading></Loading>;
    }

    // Error Message
    if (googleError) {
        errorMessage = <p className='text-danger mt-3'>Error: {googleError?.message}</p>
    }

    // Successfully login
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='google-login'>
            <Button onClick={() => signInWithGoogle()} className='btn theme-btn w-100' type="submit">
                <img src={google} alt="" /> Continue With Google
            </Button>
            {errorMessage}
        </div>
    );
};

export default GoogleLogin;