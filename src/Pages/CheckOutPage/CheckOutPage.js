import React from 'react';
import { Link } from 'react-router-dom';

const CheckOutPage = () => {
    return (
        <div className='flex mt-28 lg:h-96 justify-center text-center items-center'>
            <div>
            <h3 className='text-5xl font-bold mb-3'>This is chect out page </h3>
            <p className='text-lg font-bold'>Thank you for visite</p>
            <Link to='/courses'><p className='underline underline-offset-1 text-red-700'>back to courses</p></Link>
        </div>
        </div>
    );
};

export default CheckOutPage;