import React from 'react';
import { Link } from 'react-router-dom';
import './CorsesData.css'

const CorsesData = ({category}) => {
    // console.log(category)
    const {name, images, parsent, price, id} = category;
    return (
        <div className='bg-blue-100'>
           <img src={images} alt="" />
           <div className='flex justify-between items-center px-1'>
           <div className='py-5 text-start'>
           <h3 className='text-2xl font-semibold'>{name} courses</h3>
           <p>{parsent}</p>
           <p>Course price: $ {price}</p>
           </div>
           <div>
          <Link to={`/CorsesData/${id}`}><button className="btn btn-warning">Courses details</button></Link>
           </div>
           </div>
        </div>
    );
};

export default CorsesData;