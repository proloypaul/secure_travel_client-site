import React from 'react';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;