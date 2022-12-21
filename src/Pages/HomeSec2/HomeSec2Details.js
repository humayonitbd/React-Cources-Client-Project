import React from 'react';

const HomeSec2Details = ({secdata}) => {
    const {id, name, img, details} = secdata;
    return (
        <div>
            <div className='text-center'>
                <div className='flex justify-center mb-5'>
                <img className='h-40 w-40 ' src={img} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default HomeSec2Details;