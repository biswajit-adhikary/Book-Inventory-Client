import React from 'react';
import './Banner.css';
import banner from "../../../images/banner.jpg";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-area d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})` }}>
            <Container>
                <div className="banner-text">
                    <h3 className='theme-text-primary text-white'>Book inventory</h3>
                    <h4 className='theme-sub-text text-white my-4'>Welcome to the most comprehensive React <br /> Inventory Management system.</h4>
                    <Link className='btn theme-btn' to="/manage-inventories">Manage Inventories</Link>
                </div>
            </Container>
        </div >
    );
};

export default Banner;