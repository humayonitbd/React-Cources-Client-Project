import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-5xl mt-60'>Page is not found!!</h2>
            <p className='text-3xl'>404</p>
            <Link to='/' className='text-red-700 underline underline-offset-1'><p>Back</p></Link>
        </div>
    );
};

export default ErrorPage;