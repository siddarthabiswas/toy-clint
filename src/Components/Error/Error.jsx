import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Page not found</p>
            <Link className='btn btn-primary' to="/home">Home</Link>
        </div>
    );
};

export default Error;