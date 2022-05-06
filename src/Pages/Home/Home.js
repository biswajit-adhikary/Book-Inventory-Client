import React from 'react';
import Banner from './Banner/Banner';
import Books from './Books/Books';
import Contact from './Contact/Contact';
import Report from './Report/Report';

const Home = () => {
    return (
        <>
            <Banner />
            <Books />
            <Report />
            <Contact />
        </>
    );
};

export default Home;