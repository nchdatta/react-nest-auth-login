import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <br /> <br />
            <Link to='/login'>Login Now</Link>
        </div>
    );
};

export default Home;