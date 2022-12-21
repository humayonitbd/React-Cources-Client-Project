import React from 'react';
import { Link } from 'react-router-dom';

const HomeSec2Details = ({secdata}) => {
    const {id, name, img, link, details} = secdata;
    return (
        <div>
            <div className='text-center'>
                <div className='flex justify-center mb-5'>
                <img className='h-40 w-40 ' src={img} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p>{details}</p>
                <Link to={link}><button className='btn mt-3 btn-primary'>Details</button></Link>
            </div>
        </div>
    );
};

export default HomeSec2Details;