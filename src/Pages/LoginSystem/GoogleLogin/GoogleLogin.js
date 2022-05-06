import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import google from '../../../images/google.png';
import Loading from '../../Shared/Loading/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

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
        errorMessage = <p className='text-danger'>Error: {googleError?.message}</p>
        return errorMessage;
    }

    // Successfully login
    if (googleUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='google-login'>
            <Button onClick={() => signInWithGoogle()} className='btn theme-btn w-100' type="submit">
                <img src={google} alt="" /> Continue With Google
            </Button>
        </div>
    );
};

export default GoogleLogin;