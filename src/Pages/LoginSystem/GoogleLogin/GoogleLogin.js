import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../images/google.png';

const GoogleLogin = () => {
    return (
        <div className='google-login'>
            <Button className='btn theme-btn w-100' type="submit">
                <img src={google} alt="" /> Continue With Google
            </Button>
        </div>
    );
};

export default GoogleLogin;