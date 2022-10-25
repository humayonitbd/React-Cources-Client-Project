import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = ({categorydata}) => {
    const {id, category} = categorydata;
    console.log(category, id)
    return (
        <div>
            <Link to={`/CorsesData/${id}`}><p className='lg:text-start mb-3 font-bold bg-blue-100 py-3 px-2'>{category}</p></Link>
        </div>
    );
};

export default CategoryPage;